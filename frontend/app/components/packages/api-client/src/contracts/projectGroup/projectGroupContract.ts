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
import projectGroupSchema from "./projectGroupSchema";
import projectSchema from "@/contracts/project/projectSchema";

const c = initContract();

export const ProjectGroupRequestDTO = z.object({
  /**
   * bannerId of the file, which the user is authoring
   * allowed: jpeg, png, gif, tiff
   */
  bannerId: z.string().optional(),
  displayName: z.string(),
  description: z.string(),
  slug: z.string(),
});

const projectGroupContract = c.router(
  {
    getProjectGroups: {
      method: "GET",
      path: `/project-groups`,
      headers: z
        .object({
          authorization: z.string(),
        })
        .optional(),
      query: z.object({
        limit: z.string().optional(),
        page: z.string().optional(),
        search: z.string().optional(),
      }),
      responses: {
        200: okSchema(z.array(projectGroupSchema.BasicDTO)),
        500: failSchema,
      },
      summary: "Get all project group list",
      metadata: {
        isPublic: true,
        permissions: {},
      },
    },
    getProjectGroupById: {
      method: "GET",
      headers: z
        .object({
          authorization: z.string(),
        })
        .optional(),
      path: `/project-groups/by/id/:projectGroupId`,
      responses: {
        200: okSchema(
          z.union([
            projectGroupSchema.BasicDetailsDTO,
            projectGroupSchema.ConfidentialDetailsDTO,
          ])
        ),
        403: forbiddenSchema,
        404: notFoundSchema,
        500: failSchema,
      },
      summary: "Get project group by id",
      metadata: {
        isPublic: true,
        permissions: {},
      },
    },
    getProjectGroupBySlug: {
      method: "GET",
      path: `/project-groups/by/slug/:slug`,
      headers: z
        .object({
          authorization: z.string(),
        })
        .optional(),
      responses: {
        200: okSchema(
          z.union([
            projectGroupSchema.BasicDetailsDTO,
            projectGroupSchema.ConfidentialDetailsDTO,
          ])
        ),
        403: forbiddenSchema,
        404: notFoundSchema,
        500: failSchema,
      },
      summary: "Get project group by slug",
      metadata: {
        isPublic: true,
        permissions: {},
      },
    },
    editProjectGroupGeneralSettingsById: {
      method: "POST",
      path: `/project-groups/by/id/:groupId/edit`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({
        /*
         * @type {string} - display name of the project group
         */
        displayName: z.string().optional(),
        /**
         * @type {string} - slug
         */
        slug: z.string().optional(),
        /**
         * @type {string} - file id for the project group banner
         */
        bannerId: z.string().nullable().optional(),
        /**
         * @type {string} - description
         */
        description: z.string().optional(),
      }),
      responses: {
        200: okSchema(projectGroupSchema.ConfidentialDTO),
        409: conflictSchema,
        403: forbiddenSchema,
        500: failSchema,
      },
      summary: "Edit project group",
      metadata: {
        permissions: {
          OR: [PermissionList.UpdateProjectGroup],
        },
      } as const,
    },
    createProjectGroup: {
      method: "POST",
      headers: z.object({
        authorization: z.string(),
      }),
      path: `/project-groups`,
      body: ProjectGroupRequestDTO,
      responses: {
        200: okSchema(projectGroupSchema.BasicDTO),
        409: conflictSchema,
        403: forbiddenSchema,
        500: failSchema,
      },
      summary: "Create project group",
      metadata: {
        permissions: PermissionList.CreateProjectGroup,
      },
    },
  },
  {
    pathPrefix: "/api",
  }
);

export default projectGroupContract;
