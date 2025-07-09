import { initContract } from "@ts-rest/core";
import {
  conflictSchema,
  failSchema,
  forbiddenSchema,
  notFoundSchema,
  okSchema,
} from "@/schema/responseSchemas";
import { z } from "zod";
import commentSchema from "@/contracts/comment/commentSchema";
import { PermissionList } from "@bistudio-feedback/core-constants";

const c = initContract();
const commentContract = c.router(
  {
    replyToComment: {
      method: "POST",
      path: `/comments/:commentId/reply`,
      headers: z.object({
        authorization: z.string(),
      }),

      body: z.object({
        /*
         * @type {string} - content of comment
         */
        content: z.string(),
      }),
      responses: {
        200: okSchema(commentSchema.RegularDTO),
        403: forbiddenSchema,
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema,
      },
      summary: "Reply to comment",
      metadata: {
        permissions: PermissionList.CreateComment,
      } as const,
    },
    replyToIssue: {
      method: "POST",
      path: `/issues/:issueId/reply`,
      headers: z.object({
        authorization: z.string(),
      }),

      body: z.object({
        /*
         * @type {string} - content of comment
         */
        content: z.string(),
      }),
      responses: {
        200: okSchema(commentSchema.RegularDTO),
        403: forbiddenSchema,
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema,
      },
      summary: "Reply to issue",
      metadata: {
        permissions: PermissionList.CreateComment,
      } as const,
    },
    getIssueComments: {
      method: "GET",
      path: `/issues/:issueId/comments`,
      headers: z.object({
        authorization: z.string().optional(),
      }),
      // query: z.object({
      //   page: z.string().optional(),
      //   limit: z.string().optional(),
      // }),
      responses: {
        200: okSchema(
          z.array(
            z.union([
              commentSchema.RegularDetailsDTO,
              commentSchema.SuspendDetailsDTO,
              commentSchema.ConfidentialDetailsDTO,
            ])
          )
        ),
        404: notFoundSchema,
        500: failSchema,
      },
      summary: "Get all issue comments",
      metadata: {
        isPublic: true,
        permissions: {},
      } as const,
    },
    // getCommentById: {
    //   method: "GET",
    //   path: `/comments/by/id/:commentId`,
    //   headers: z
    //     .object({
    //       authorization: z.string(),
    //     })
    //     .optional(),
    //   responses: {
    //     200: okSchema(
    //       z.union([
    //         commentSchema.ConfidentialDTO,
    //         commentSchema.RegularDTO,
    //         commentSchema.SuspendDTO,
    //       ])
    //     ),
    //     404: notFoundSchema,
    //     500: failSchema,
    //   },
    //   summary: "Get a comment by id",
    //   metadata: {
    //     isPublic: true,
    //     permissions: {},
    //   },
    // },
    // getComments: {
    //   method: "GET",
    //   path: `/comments`,
    //   headers: z
    //     .object({
    //       authorization: z.string(),
    //     })
    //     .optional(),
    //   query: z.object({
    //     issueId: z.string(),
    //   }),
    //   responses: {
    //     200: okSchema(
    //       z.array(
    //         z.union([
    //           commentSchema.ConfidentialDTO,
    //           commentSchema.RegularDTO,
    //           commentSchema.SuspendDTO,
    //         ])
    //       )
    //     ),
    //     500: failSchema,
    //   },
    //   summary: "Get comments",
    //   metadata: {
    //     isPublic: true,
    //     permissions: {},
    //   },
    // },
  },
  {
    pathPrefix: "/api",
  }
);

export default commentContract;
