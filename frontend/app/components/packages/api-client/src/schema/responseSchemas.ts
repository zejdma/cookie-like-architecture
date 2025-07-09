import type { ZodSchema } from "zod";
import { z } from "zod";

export type ErrorObject = {
  field: string;
  message: string;
  errors?: ErrorObject[];
};

const ErrorObjectSchema: z.ZodSchema<ErrorObject> = z.lazy(() =>
  z.object({
    field: z.string(),
    message: z.string(),
    errors: z.array(ErrorObjectSchema).optional(),
  })
);

/*
 * Conflict schema - 409
 */
export const conflictSchema = z.object({
  title: z.string(),
  status: z.number(),
  detail: z.string().optional(),
});

/**
 * Forbidden schema - 403
 */
export const forbiddenSchema = z.object({
  title: z.string(),
  status: z.number(),
  detail: z.string().optional(),
  errors: z.array(ErrorObjectSchema).optional(),
});

/**
 * Fail schema - 500
 */
export const failSchema = z.object({
  title: z.string(),
  status: z.number(),
  detail: z.string().optional(),
});

/**
 * Not found schema - 404
 */
export const notFoundSchema = z.object({
  title: z.string(),
  status: z.number(),
  detail: z.string().optional(),
});

export const badRequestSchema = z.object({
  title: z.string(),
  status: z.number(),
  detail: z.string().optional(),
  errors: z.array(ErrorObjectSchema).optional(),
});

/**
 * Redirect schema - 301
 */
export const redirectSchema = z.undefined();

/**
 * Unauthorized - 401
 */
export const unauthorizedSchema = z.object({
  title: z.string(),
  status: z.number(),
  detail: z.string().optional(),
});

export const okSchema = <T>(dto?: ZodSchema<T>) =>
  z.object({
    data: dto ?? z.object({}),
  });

/**
 * Ok no content schema - 204
 */
export const okNoContentSchema = z.object({}).nullable();
