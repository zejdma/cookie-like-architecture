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
import projectConfidenceSchema from "./projectConfidenceSchema";

export const CreateProjectConfidenceRequestDTO = z.object({
  memberIds: z.array(z.string()),
  projectId: z.string(),
});

const c = initContract();

const projectConfidenceContract = c.router(
  {
    getProjectConfidences: {
      method: "GET",
      path: `/project-confidences`,
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
         * @type {string} - type of confidence
         */
        projectId: z.string().optional(),
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
        200: okSchema(z.array(projectConfidenceSchema.ConfidentialDTO)),
        500: z.object({ message: z.string() }),
      },
      summary: "Get project confidences by query",
      metadata: {
        permissions: PermissionList.ReadProjectAny,
      },
    },

    getProjectConfidenceById: {
      method: "GET",
      path: `/project-confidences/:confidenceId`,
      headers: z.object({
        authorization: z.string(),
      }),
      responses: {
        200: okSchema(projectConfidenceSchema.ConfidentialDTO),
        403: forbiddenSchema,
        404: notFoundSchema,
        500: failSchema,
      },
      summary: "Get project confidence by id",
      metadata: {
        permissions: {},
      },
    },
    deleteProjectConfidence: {
      method: "DELETE",
      path: `/project-confidence`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({
        projectId: z.string(),
        memberIds: z.array(z.string()),
      }),
      responses: {
        204: okNoContentSchema,
        403: forbiddenSchema,
        409: conflictSchema,
        500: failSchema,
      },
      summary: "Delete project confidence by memberId and projectId",
      metadata: {
        permissions: {
          OR: [
            PermissionList.UpdateProjectAny,
            PermissionList.ManageProjectAsModerator,
          ],
        },
      },
    },

    createProjectConfidence: {
      method: "POST",
      path: `/project-confidences`,
      body: CreateProjectConfidenceRequestDTO,
      headers: z.object({
        authorization: z.string(),
      }),
      responses: {
        200: okSchema(projectConfidenceSchema.ConfidentialDTO),
        409: conflictSchema,
        500: failSchema,
      },
      summary: "Create project confidence record managed by moderator or admin",
      metadata: {
        permissions: {
          OR: [
            PermissionList.UpdateProjectAny,
            PermissionList.ManageProjectAsModerator,
          ],
        },
      } as const,
    },
  },
  {
    pathPrefix: "/api",
  }
);

export default projectConfidenceContract;
