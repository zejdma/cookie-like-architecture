import issueConfidenceSchema from "@/contracts/confidence/issueConfidenceSchema";
import IssueSubscribeSchema from "@/contracts/issueSubscribe/issueSubscribeSchema";
import {
  conflictSchema,
  failSchema,
  notFoundSchema,
  okNoContentSchema,
  okSchema,
} from "@/schema/responseSchemas";
import { PermissionList } from "@bistudio-feedback/core-constants";
import { initContract } from "@ts-rest/core";
import { z } from "zod";

export const SubscribeIssueRequestDTO = z.object({
  issueId: z.string(),
});

const c = initContract();

const issueSubscribeSchema = c.router(
  {
    subscribe: {
      method: "POST",
      path: `/issues/:issueId/subscribe`,
      body: SubscribeIssueRequestDTO,
      headers: z.object({
        authorization: z.string(),
      }),
      responses: {
        201: okSchema(IssueSubscribeSchema.ConfidentialDTO),
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema,
      },
      summary: "Susbcribe notification to the issue",
      metadata: {
        permissions: PermissionList.SubscribeIssue,
      } as const,
    },
    unsubscribe: {
      method: "POST",
      path: `/issues/:issueId/unsubscribe`,
      body: SubscribeIssueRequestDTO,
      headers: z.object({
        authorization: z.string(),
      }),
      responses: {
        204: okNoContentSchema,
        404: notFoundSchema,
        500: failSchema,
      },
      summary: "Unusubscribe issue notification to the issue",
      metadata: {
        permissions: PermissionList.SubscribeIssue,
      } as const,
    },
    getMySubscribedIssues: {
      method: "GET",
      path: `/issues/subscribed`,
      headers: z.object({
        authorization: z.string(),
      }),
      query: z.object({
        page: z.string().optional(),
        limit: z.string().optional(),
      }),
      responses: {
        200: okSchema(z.array(issueConfidenceSchema.ConfidentialDTO)),
        500: failSchema,
      },
      summary: "Get my subscribed issues",
      metadata: {
        permissions: PermissionList.SubscribeIssue,
      } as const,
    },
  },
  {
    pathPrefix: "/api",
  }
);
export default issueSubscribeSchema;
