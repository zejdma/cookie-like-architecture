import issueConfidenceSchema from "@/contracts/confidence/issueConfidenceSchema";
import { requestBodySchema } from "@/contracts/issue/issueRequestBody";
import issueSchema from "@/contracts/issue/issueSchema";
import issueTagSchema from "@/contracts/issueTag/issueTagSchema";
import {
  conflictSchema,
  failSchema,
  forbiddenSchema,
  notFoundSchema,
  okSchema,
  unauthorizedSchema,
} from "@/schema/responseSchemas";
import { PermissionList } from "@bistudio-feedback/core-constants";
import { initContract } from "@ts-rest/core";
import { z } from "zod";
import issueConfidentSchema from "@/contracts/confidence/issueConfidentSchema";

const c = initContract();

const issueContract = c.router(
  {
    createIssue: {
      method: "POST",
      path: `/issues`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: requestBodySchema,
      responses: {
        200: okSchema(issueSchema.ConfidentialDetailsDTO),
        403: forbiddenSchema,
        409: conflictSchema,
        500: z.object({ message: z.string() }),
      },
      summary: "Create issue",
      metadata: {
        permissions: {
          AND: [
            {
              OR: [
                PermissionList.ReadProjectConfident,
                PermissionList.UpdateProjectAny,
                PermissionList.ManageProjectAsModerator,
              ],
            },
            PermissionList.CreateIssue,
          ],
        },
      } as const,
    },
    editIssueById: {
      method: "POST",
      path: `/issues/by/id/:issueId/edit`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({
        title: z.string().optional(),
        fields: z
          .array(
            z.object({
              name: z.string(),
              value: z.any(),
            })
          )
          .optional(),
      }),
      responses: {
        200: okSchema(issueSchema.ConfidentialDTO),
        404: notFoundSchema,
        401: unauthorizedSchema,
        403: forbiddenSchema,
        500: failSchema,
      },
      summary: "Edit issue by id",
      metadata: {
        permissions: {
          OR: [
            PermissionList.UpdateIssueOwn,
            PermissionList.ManageProjectAsModerator,
            {
              AND: [
                PermissionList.UpdateIssueAny,
                PermissionList.UpdateProjectAny,
              ],
            },
          ],
        },
      },
    },
    upvoteIssue: {
      method: "POST",
      path: `/issues/by/id/:issueId/upvote`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({}).nullable(),
      responses: {
        201: okSchema(),
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema,
      },
      summary: "Upvote issue",
      metadata: {
        permissions: PermissionList.VoteIssue,
      },
    },
    downvoteIssue: {
      method: "POST",
      path: `/issues/by/id/:issueId/downvote`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({}).nullable(),
      responses: {
        201: okSchema(),
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema,
      },
      summary: "Downvote issue",
      metadata: {
        permissions: PermissionList.VoteIssue,
      },
    },
    unvoteIssue: {
      method: "POST",
      path: `/issues/by/id/:issueId/unvote`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({}).nullable(),
      responses: {
        201: okSchema(),
        404: notFoundSchema,
        500: failSchema,
      },
      summary: "Unvote issue",
      metadata: {
        permissions: PermissionList.VoteIssue,
      },
    },
    manageIssueTags: {
      method: "POST",
      path: `/issues/by/id/:issueId/tags`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({
        tags: z.array(z.string()),
      }),
      responses: {
        200: okSchema(issueTagSchema.IssueTagDetailsDTO),
        401: unauthorizedSchema,
        404: notFoundSchema,
        403: forbiddenSchema,
        409: conflictSchema,
        500: failSchema,
      },
      summary: "Manage issue tags",
      metadata: {
        permissions: {
          OR: [
            PermissionList.UpdateIssueOwn,
            PermissionList.ManageProjectAsModerator,
            PermissionList.UpdateIssueAny,
          ],
        },
      } as const,
    },
    changeIssueState: {
      method: "POST",
      path: `/issues/by/id/:issueId/state`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({
        state: z.enum([
          "OPEN",
          "NEED_MORE_INFO",
          "CONFIRMED_INTERNALLY",
          "REVIEWED",
          "AWAITED_INTERNAL_TESTING",
          "ASSIGNED",
          "FEEDBACK",
          "DUPLICATE",
          "RESOLVED",
          "EXPIRED",
        ]),
      }),
      responses: {
        200: okSchema(issueSchema.ConfidentialDTO),
        401: unauthorizedSchema,
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema,
      },
      summary: "Change issue state",
      metadata: {
        permissions: {
          OR: [
            PermissionList.ManageProjectAsModerator,
            PermissionList.UpdateIssueAny,
          ],
        },
      } as const,
    },
    changeIssueVisibility: {
      method: "POST",
      path: `/issues/by/id/:issueId/visibility`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({
        visibility: z.enum(["PUBLIC", "PRIVATE"]),
      }),
      responses: {
        200: okSchema(issueSchema.ConfidentialDTO),
        401: unauthorizedSchema,
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema,
      },
      summary: "Change issue visibility",
      metadata: {
        permissions: {
          OR: [
            PermissionList.ManageProjectAsModerator,
            PermissionList.UpdateIssueAny,
          ],
        },
      } as const,
    },
    getIssueById: {
      method: "GET",
      path: `/issues/by/id/:issueId`,
      headers: z
        .object({
          authorization: z.string(),
        })
        .optional(),
      responses: {
        200: okSchema(
          z.union([
            issueSchema.PublicDetailsDTO,
            issueSchema.RegularDetailsDTO,
            issueSchema.ConfidentialDetailsDTO,
          ])
        ),
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema,
      },
      summary: "Get a issue by id",
      metadata: {
        isPublic: true,
        permissions: {},
      },
    },
    getIssueByKey: {
      method: "GET",
      path: `/issues/by/key/:key`,
      headers: z
        .object({
          authorization: z.string(),
        })
        .optional(),
      responses: {
        200: okSchema(
          z.union([
            issueSchema.PublicDetailsDTO,
            issueSchema.RegularDetailsDTO,
            issueSchema.ConfidentialDetailsDTO,
          ])
        ),
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema,
      },
      summary: "Get a issue by key",
      metadata: {
        isPublic: true,
        permissions: {},
      },
    },
    getIssues: {
      method: "GET",
      path: `/issues`,
      headers: z
        .object({
          authorization: z.string(),
        })
        .optional(),
      query: z.object({
        page: z.string().optional(),
        limit: z.string().optional(),
        /*
         * @type {string} - search query
         */
        search: z.string().optional(),
        /*
         * @type {string[]} - project names array
         */
        projects: z.string().optional(),
        /*
         * @type {string[]} - issue states array
         */
        states: z.string().optional(),
        /*
         * @type {string[]} - authors username array
         */
        authors: z.string().optional(),
        /*
         * @type {string[]} - tags array
         */
        tags: z.string().optional(),
        /*
         * @type {string} - sort type
         */
        sort: z.enum(["recent", "newest", "votes"]).optional(),
        /*
         * @type {string} - show spam stringified boolean
         */
        showSpam: z.string().optional(),
      }),
      responses: {
        200: okSchema(
          z.object({
            count: z.number(),
            data: z.array(
              z.union([
                issueSchema.PublicInListDetailsDTO,
                issueSchema.RegularInListDetailsDTO,
                issueSchema.ConfidentialInListDetailsDTO,
              ])
            ),
          })
        ),
        404: notFoundSchema,
        403: forbiddenSchema,
        500: z.object({ message: z.string() }),
      },
      summary: "Get issues",
      metadata: {
        isPublic: true,
        permissions: {},
      } as const,
    },
    getIssueConfidents: {
      method: "GET",
      path: `/issues/:issueId/confidents`,
      headers: z.object({
        authorization: z.string(),
      }),
      query: z.object({
        /**
         * @type {string} - search member by name
         */
        search: z.string().optional(),
        /**
         * @type {string} - limit of records
         */
        limit: z.string().optional(),
        /**
         * @type {string} - page number
         */
        page: z.string().optional(),
      }),

      responses: {
        200: okSchema(z.array(issueConfidentSchema.ConfidentialDetailsDTO)),
        404: notFoundSchema,
        401: unauthorizedSchema,
        403: forbiddenSchema,
        500: failSchema,
      },
      summary: "Get issue confidents by issue id",
      metadata: {
        permissions: {},
      },
    },
  },
  {
    pathPrefix: "/api",
  }
);

export default issueContract;
