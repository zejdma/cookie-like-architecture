import issueActivitySchema from "@/contracts/issueActivity/issueActivitySchema";
import { failSchema, okSchema } from "@/schema/responseSchemas";
import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

const issueActivityContract = c.router(
  {
    getIssueActivitiesByIssueId: {
      method: "GET",
      path: `/issues/:issueId/activities`,
      headers: z.object({
        authorization: z.string(),
      }),
      responses: {
        200: okSchema(z.array(issueActivitySchema.IssueActivityDetailsDTO)),
        500: failSchema,
      },
      summary: "Get issue activities by issue Id",
      metadata: {
        isPublic: true,
      } as const,
    },
    getIssueActivitiesByMemberId: {
      method: "GET",
      path: `/members/:memberId/issue-activities`,
      headers: z.object({
        authorization: z.string(),
      }),
      query: z.object({
        page: z.string().optional(),
        limit: z.string().optional(),
      }),
      responses: {
        200: okSchema(z.array(issueActivitySchema.IssueActivityDetailsDTO)),
        500: failSchema,
      },
      summary: "Get issue activities by member Id",
      metadata: {
        isPublic: true,
      } as const,
    },
  },
  {
    pathPrefix: "/api",
  }
);
export default issueActivityContract;
