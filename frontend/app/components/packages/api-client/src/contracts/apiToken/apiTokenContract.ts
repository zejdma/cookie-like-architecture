import { initContract } from "@ts-rest/core";
import {
  conflictSchema,
  failSchema,
  forbiddenSchema,
  notFoundSchema,
  okNoContentSchema,
  okSchema,
  unauthorizedSchema,
} from "@/schema/responseSchemas";
import { z } from "zod";
import { PermissionList } from "@bistudio-feedback/core-constants";
import apiTokenSchema from "@/contracts/apiToken/apiTokenSchema";

const c = initContract();
const apiTokenContract = c.router(
  {
    generateNewApiToken: {
      method: "POST",
      path: `/api-tokens`,
      headers: z.object({
        authorization: z.string(),
      }),

      body: z.object({
        /*
         * @type {string} - display name of token
         */
        displayName: z.string(),
        /*
         * @type {Array<{projectId: string; scopes: Array<string>}>} - resource access issue
         */
        issueResourceAccess: z.array(
          z.object({
            projectId: z.string(),
            scopes: z.array(z.string()),
          })
        ),
        /*
         * @type {Date} - expiration date of token
         */
        expiration: z.string().nullable().optional(),
      }),
      responses: {
        200: okSchema(apiTokenSchema.dto),
        409: conflictSchema,
        403: forbiddenSchema,
        500: failSchema,
      },
      summary: "Generate new api token",
      metadata: {
        permissions: PermissionList.CreateApiToken,
      } as const,
    },
    regenerateApiToken: {
      method: "POST",
      path: `/api-tokens/:id/regenerate`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({}).nullable().optional(),
      responses: {
        200: okSchema(apiTokenSchema.dto),
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema,
      },
      summary: "Regenerate api token",
      metadata: {
        permissions: PermissionList.CreateApiToken,
      } as const,
    },
    editApiToken: {
      method: "POST",
      path: `/api-tokens/:id/edit`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({
        /*
         * @type {string} - display name of token
         */
        displayName: z.string(),
      }),
      responses: {
        200: okSchema(apiTokenSchema.dto),
        403: forbiddenSchema,
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema,
      },
      summary: "Edit api token",
      metadata: {
        permissions: PermissionList.UpdateApiToken,
      },
    },
    deleteApiToken: {
      method: "DELETE",
      path: `/api-tokens/:id`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({}).nullable().optional(),
      responses: {
        204: okNoContentSchema,
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema,
      },
      summary: "Delete apiToken by id",
      metadata: {
        permissions: PermissionList.DeleteApiToken,
      },
    },
    getApiTokens: {
      method: "GET",
      path: `/api-tokens`,
      headers: z.object({
        authorization: z.string(),
      }),
      query: z.object({
        /*
         * @type {number} - page number, default is 1
         */
        page: z.string().optional(),
        /*
         * @type {string} - limit of items per page, default is 50
         */
        limit: z.string().optional(),
        /*
         * @type {string} - search string
         */
        search: z.string().optional(),
      }),
      responses: {
        200: okSchema(
          z.object({
            data: z.array(apiTokenSchema.dto),
            count: z.number(),
          })
        ),
        401: unauthorizedSchema,
        500: failSchema,
      },
      summary: "Get all api tokens",
      metadata: {
        permissions: PermissionList.ReadApiToken,
      },
    },
  },
  {
    pathPrefix: "/api",
  }
);

export default apiTokenContract;
