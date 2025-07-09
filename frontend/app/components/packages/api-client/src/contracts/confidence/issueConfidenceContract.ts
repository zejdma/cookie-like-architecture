import issueConfidentSchema from "@/contracts/confidence/issueConfidentSchema";
import {
  conflictSchema,
  failSchema,
  forbiddenSchema,
  notFoundSchema,
  okNoContentSchema,
  okSchema,
  unauthorizedSchema,
} from "@/schema/responseSchemas";
import { PermissionList } from "@bistudio-feedback/core-constants";
import { initContract } from "@ts-rest/core";
import { z } from "zod";
import issueConfidenceSchema from "./issueConfidenceSchema";

export const CreateIssueConfidenceRequestDTO = z.object({
  memberIds: z.array(z.string()),
  issueId: z.string(),
});

export const CreateMyIssueConfidenceRequestDTO = z.object({
  issueId: z.string(),
  memberIds: z.array(z.string()),
});

const c = initContract();

const issueConfidenceContract = c.router(
  {
    getIssueConfidences: {
      method: "GET",
      path: `/issue-confidences`,
      headers: z.object({
        authorization: z.string(),
      }),

      query: z.object({
        /**
         * @type {string} - limit of records
         */
        limit: z.string().optional(),
        /**
         * @type {string} - page number
         */
        page: z.string().optional(),
        /**
         * @type {string} - issue id to issue or issue
         */
        issueId: z.string().optional(),
        /**
         * @type {string} - author id
         */
        authorId: z.string().optional(),
        /**
         * @type {string} - member id
         */
        memberId: z.string().optional(),
      }),
      responses: {
        200: okSchema(issueConfidenceSchema.ConfidentialDTO),
        500: z.object({ message: z.string() }),
      },
      summary: "Get issue confidences by query",
      metadata: {
        permissions: {
          AND: [PermissionList.ReadProjectAny, PermissionList.ReadIssueAny],
        },
      },
    },

    getIssueConfidenceById: {
      method: "GET",
      path: `/issue-confidences/:confidenceId`,
      headers: z.object({
        authorization: z.string(),
      }),
      responses: {
        200: okSchema(issueConfidenceSchema.ConfidentialDTO),
        403: forbiddenSchema,
        404: notFoundSchema,
        500: failSchema,
      },
      summary: "Get issue confidence by id",
      metadata: {
        permissions: {},
      },
    },
    deleteIssueConfidence: {
      method: "DELETE",
      path: `/issue-confidence`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({
        issueId: z.string(),
        memberIds: z.array(z.string()),
      }),
      responses: {
        204: okNoContentSchema,
        403: forbiddenSchema,
        401: unauthorizedSchema,
        409: conflictSchema,
        500: failSchema,
      },
      summary: "Delete issue confidence by memberId and issueId",
      metadata: {
        permissions: {
          OR: [
            {
              AND: [
                PermissionList.UpdateIssueAny,
                PermissionList.UpdateProjectAny,
              ],
            },
            { AND: [PermissionList.ManageProjectAsModerator] },
            { AND: [PermissionList.UpdateIssueOwn] },
          ],
        },
      },
    },

    createMyIssueConfidence: {
      method: "POST",
      path: `/members/me/issue-confidences`,
      body: CreateMyIssueConfidenceRequestDTO,
      headers: z.object({
        authorization: z.string(),
      }),
      responses: {
        200: okSchema(z.array(issueConfidenceSchema.ConfidentialDTO)),
        409: conflictSchema,
        500: failSchema,
      },
      summary: "Create issue confidence record by logged member",
      metadata: {
        permissions: PermissionList.UpdateIssueOwn,
      } as const,
    },
    createIssueConfidence: {
      method: "POST",
      path: `/issue-confidences`,
      body: CreateIssueConfidenceRequestDTO,
      headers: z.object({
        authorization: z.string(),
      }),
      responses: {
        200: okSchema(z.array(issueConfidentSchema.ConfidentialDTO)),
        409: conflictSchema,
        500: failSchema,
      },
      summary: "Create project confidence record managed by moderator or admin",
      metadata: {
        permissions: {
          AND: [
            PermissionList.UpdateProjectAny,
            PermissionList.UpdateProjectAny,
          ],
        },
      } as const,
    },
  },
  {
    pathPrefix: "/api",
  }
);

export default issueConfidenceContract;
