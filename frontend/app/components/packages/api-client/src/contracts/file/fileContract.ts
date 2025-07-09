import {
  forbiddenSchema,
  notFoundSchema,
  okSchema,
} from "@/schema/responseSchemas";
import { PermissionList } from "@bistudio-feedback/core-constants";
import { initContract } from "@ts-rest/core";
import { z } from "zod";
import fileSchema from "./fileSchema";
import fs from "fs";

const c = initContract();

const fileContract = c.router(
  {
    getThumbByKey: {
      method: "GET",
      path: `/files/thumb/:key`,
      query: z.object({
        resize: z.string().optional(),
        sigExpiresAt: z.string(),
        signature: z.string(),
      }),
      responses: {
        200: c.otherResponse({
          contentType: "image/jpeg",
          body: c.type<Buffer>(),
        }),
        403: forbiddenSchema,
        404: notFoundSchema,
        500: z.object({ message: z.string() }),
      },
      summary: "Get file thumbnail by key",
      metadata: {
        isPublic: true,
      } as const,
    },
    getMyFileById: {
      method: "GET",
      path: `/files/:fileId`,
      headers: z
        .object({
          authorization: z.string(),
        })
        .optional(),
      responses: {
        200: okSchema(fileSchema.ConfidentialDetailsDTO),
        404: notFoundSchema,
        500: z.object({ message: z.string() }),
      },
      summary: "Get file by id",
      metadata: {
        permissions: PermissionList.ReadFileOwn,
      } as const,
    },

    uploadMyFiles: {
      method: "POST",
      path: `/members/me/files`,
      headers: z.object({
        authorization: z.string(),
      }),
      contentType: "multipart/form-data",
      body: z.object({
        files: z.array(z.custom<Buffer>()).or(z.custom<Buffer>()).optional(),
        alt: z.string().optional(),
        tags: z.array(z.string()).optional(),
      }),
      responses: {
        200: okSchema(z.array(fileSchema.ConfidentialDTO)),
        403: forbiddenSchema,
        500: z.object({ message: z.string() }),
      },
      summary: "Upload my files to the storage",
      metadata: {
        permissions: PermissionList.CreateFileOwn,
      } as const,
    },
  },
  {
    pathPrefix: "/api",
  }
);

export default fileContract;
