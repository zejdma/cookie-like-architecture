import {
  conflictSchema,
  failSchema,
  forbiddenSchema,
  notFoundSchema,
  okNoContentSchema,
  okSchema,
} from "@/schema/responseSchemas";
import { PermissionList } from "@bistudio-feedback/core-constants";
import { initContract } from "@ts-rest/core";
import { z } from "zod";
import issueTagSchema from "./issueTagSchema";
const c = initContract();

const issueTagRouterSchema = c.router(
  {
    getIssueTags: {
      method: "GET",
      path: "/issue-tags",
      headers: z
        .object({
          authorization: z.string(),
        })
        .optional(),
      query: z.object({
        page: z.string().optional(),
        limit: z.string().optional(),
        search: z.string().optional(),
      }),
      responses: {
        200: okSchema(z.array(issueTagSchema.IssueTagDetailsDTO)),
        500: failSchema,
      },
      summary: "Get issue tags",
      metadata: {
        permissions: {},
      } as const,
    },
    getIssueTagByName: {
      method: "GET",
      path: "/issue-tags/by/name/:name",
      headers: z.object({
        authorization: z.string(),
      }),
      query: z.object({}).nullable().optional(),
      responses: {
        200: okSchema(issueTagSchema.IssueTagDetailsDTO),
        404: notFoundSchema,
        500: failSchema,
      },
      summary: "Get issue tag by name",
      metadata: {
        permissions: {},
      } as const,
    },
    createIssueTag: {
      method: "POST",
      path: "/issue-tags",
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({
        displayName: z.string(),
        color: z.string(),
        description: z.string().optional().nullable(),
      }),
      responses: {
        200: okSchema(issueTagSchema.IssueTagDTO),
        403: forbiddenSchema,
        409: conflictSchema,
        500: failSchema,
      },
      metadata: {
        permissions: PermissionList.CreateIssueTag,
      } as const,
    },
    editIssueTag: {
      method: "POST",
      path: `/issue-tags/:id/edit`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({
        displayName: z.string(),
        color: z.string(),
        description: z.string().nullable(),
      }),
      responses: {
        200: okSchema(issueTagSchema.IssueTagDTO),
        403: forbiddenSchema,
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema,
      },
      metadata: {
        permissions: PermissionList.UpdateIssueTag,
      } as const,
    },
    deleteIssueTag: {
      method: "DELETE",
      path: "/issue-tags/:id",
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
      metadata: {
        permissions: PermissionList.DeleteIssueTag,
      } as const,
    },
  },
  {
    pathPrefix: "/api",
  }
);
export default issueTagRouterSchema;
