import {
  conflictSchema,
  failSchema,
  forbiddenSchema,
  notFoundSchema,
  okSchema,
} from "@/schema/responseSchemas";
import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { requestBodySchema } from "./formRequestBody";
import formSchema from "./formSchema";

const c = initContract();
const formContract = c.router(
  {
    createForm: {
      method: "POST",
      path: `/forms`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: requestBodySchema,
      responses: {
        200: okSchema(formSchema.RegularDTO),
        403: forbiddenSchema,
        409: conflictSchema,
        500: z.object({ message: z.string() }),
      },
      summary: "Create form",
      metadata: {
        permissions: {},
      } as const,
    },
    getFormById: {
      method: "GET",
      path: `/forms/by/id/:formId`,
      headers: z
        .object({
          authorization: z.string(),
        })
        .optional(),
      responses: {
        200: okSchema(
          z.union([
            formSchema.ConfidentialDTO,
            formSchema.RegularDTO,
            formSchema.PublicDTO,
          ])
        ),
        404: notFoundSchema,
        500: failSchema,
      },
      summary: "Get a form by id",
      metadata: {
        isPublic: true,
        permissions: {},
      },
    },
    getForms: {
      method: "GET",
      path: "/forms",
      headers: z.object({
        authorization: z.string(),
      }),
      query: z.object({
        /**
         * @type {string} - page number
         */
        page: z.string().optional(),
        /**
         * @type {string} - limit of records
         */
        limit: z.string().optional(),
        /**
         * @type {string} - project ids to filter
         */
        projectIds: z.string().optional(),
        /**
         * @type {string} - search string - name. displayName
         */
        search: z.string().optional(),
      }),
      responses: {
        200: okSchema(
          z.union([
            formSchema.ConfidentialDTO,
            formSchema.RegularDTO,
            formSchema.PublicDTO,
          ])
        ),
        500: z.object({ message: z.string() }),
      },
      summary: "Get forms list",
      metadata: {
        permissions: {},
      },
    },
  },

  {
    pathPrefix: "/api",
  }
);

export default formContract;
