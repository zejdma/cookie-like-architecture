import projectConfidenceSchema from "@/contracts/confidence/projectConfidenceSchema";
import projectModeratorSchema from "@/contracts/project/projectModeratorSchema";
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
import projectSchema from "./projectSchema";

const c = initContract();
const projectContract = c.router(
  {
    getProjects: {
      method: "GET",
      path: `/projects`,
      headers: z
        .object({
          authorization: z.string(),
        })
        .optional(),
      query: z.object({
        /**
         * @type {string} - page number, default is 1
         */
        page: z.string().optional(),
        /**
         * @type {string} - limit of items per page, default is 50
         */
        limit: z.string().optional(),
        /**
         * @type {Array} - array of project group ids
         * @items {string}
         */
        groupIds: z.string().optional(),
        /**
         * @type {string} - search string
         */
        search: z.string().optional(),
        /**
         * @type {string} - author id
         */
        authorId: z.string().optional(),
      }),
      responses: {
        200: okSchema(
          z.object({
            data: z.array(
              z.union([
                projectSchema.PublicDetailsDTO,
                projectSchema.RegularDetailsDTO,
                projectSchema.ConfidentialDetailsDTO,
              ])
            ),
            count: z.number(),
          })
        ),
      },
      summary: "Get all projects",
      metadata: {
        isPublic: true,
        permissions: {},
      } as const,
    },
    getProjectById: {
      method: "GET",
      path: `/projects/by/id/:projectId`,
      headers: z
        .object({
          authorization: z.string(),
        })
        .optional(),
      responses: {
        200: okSchema(
          z.union([
            projectSchema.ConfidentialDetailsDTO,
            projectSchema.RegularDetailsDTO,
          ])
        ),
        404: notFoundSchema,
        500: failSchema,
      },
      summary: "Get project by id",
      metadata: {
        isPublic: true,
        permissions: {},
      } as const,
    },
    getProjectBySlug: {
      method: "GET",
      path: `/projects/by/slug/:slug`,
      headers: z
        .object({
          authorization: z.string(),
        })
        .optional(),
      responses: {
        200: okSchema(
          z.union([
            projectSchema.ConfidentialDetailsDTO,
            projectSchema.RegularDetailsDTO,
          ])
        ),
        404: notFoundSchema,
        500: failSchema,
      },
      summary: "Get project by slug",
      metadata: {
        isPublic: true,
        permissions: {},
      } as const,
    },
    createProject: {
      method: "POST",
      path: `/projects`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({
        /**
         * @type {string} - id of the project group
         */
        groupId: z.string(),
        /**
         * @type {string} - display name of the project
         */
        displayName: z.string(),
        /**
         * @type {string} - slug
         */
        slug: z.string(),
        /**
         * @type {string} - file id for the project banner
         * bannerId of the file, which the user is authoring
         * allowed: jpeg, png, gif, tiff
         *
         */
        bannerId: z.string().nullable(),
        /**
         * @type {string} - file id for the project key art
         * keyArtId of the file, which the user is authoring
         * allowed: jpeg, png, gif, tiff
         *
         */
        keyArtId: z.string().nullable(),
        /**
         * @type {string} - key that is prefix for all project issues
         */
        key: z.string(),
        /**
         * @type {string} - description
         */
        description: z.string(),
        /**
         * @type {string} -  visibility, whether project is public or private
         */
        visibility: z.enum(["PUBLIC", "PRIVATE"]),
        /**
         * @type {boolean} - whether project has scoped tags
         */
        hasScopedTags: z.boolean(),
      }),
      responses: {
        200: okSchema(projectSchema.ConfidentialDTO),
        404: notFoundSchema,
        409: conflictSchema,
        403: forbiddenSchema,
        500: failSchema,
      },
      summary: "Get project by id",
      metadata: {
        permissions: PermissionList.CreateProject,
      } as const,
    },
    editProjectGeneralSettingsById: {
      method: "POST",
      path: `/projects/by/id/:projectId/edit`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({
        // /**
        //  * @type {string} - id of the project group
        //  */
        // groupId: z.string().optional(),
        /**
         * @type {string} - display name of the project
         */
        displayName: z.string().optional(),
        /**
         * @type {string} - slug
         */
        slug: z.string().optional(),
        /**
         * @type {string} - key identifier for project issues
         */
        key: z.string().optional(),
        /**
         * @type {boolean} - whether project has scoped tags
         */
        hasScopedTags: z.boolean().optional(),
        /**
         * @type {string} - file id for the project banner
         */
        bannerId: z.string().nullable().optional(),
        /**
         * @type {string} - file id for the project key art
         */
        keyArtId: z.string().nullable().optional(),
        /**
         * @type {string} - description
         */
        description: z.string().optional(),
        /**
         * @type {string} -  visibility, whether project is public or private
         */
        visibility: z.enum(["PUBLIC", "PRIVATE"]).optional(),
      }),
      responses: {
        200: okSchema(projectSchema.ConfidentialDTO),
        409: conflictSchema,
        403: forbiddenSchema,
        500: failSchema,
      },
      summary: "Edit project",
      metadata: {
        permissions: {
          OR: [
            PermissionList.UpdateProjectAny,
            PermissionList.ManageProjectAsModerator,
          ],
        },
      } as const,
    },
    changeProjectStateById: {
      method: "POST",
      path: `/projects/by/id/:projectId/state`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({
        state: z.enum(["ACTIVE", "DRAFT", "ARCHIVED"]),
      }),
      responses: {
        200: okSchema(projectSchema.ConfidentialDTO),
        401: unauthorizedSchema,
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema,
      },
      metadata: {
        permissions: {
          OR: [
            PermissionList.UpdateProjectAny,
            PermissionList.ManageProjectAsModerator,
          ],
        } as const,
      },
    },
    manageProjectModerators: {
      method: "POST",
      path: "/projects/by/id/:projectId/moderators/manage",
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({
        rules: z.array(
          z.object({
            /**
             * @type {string} - id of the project moderator
             */
            id: z.string().nullable().optional(),
            /**
             * @type {Array} - array of member ids
             * @items {string}
             */
            memberIds: z.array(z.string()).optional(),
            /**
             * @type {Object} - actions
             * @property {Object} comments - permissions over comments
             * @property {boolean} comments.block - moderator can block comment
             * @property {boolean} comments.delete - moderator can delete comment
             * @property {Object} issues - permissions over issues
             * @property {boolean} issues.block - moderator can block issue
             * @property {boolean} issues.delete - moderator can delete issue
             * @property {boolean} issues.updateState - moderator can update issue state
             * @property {boolean} issues.updateVisibility - moderator can update visibility
             * @property {boolean} issues.updateFields - moderator can update fields
             * @property {boolean} issues.updateTags - moderator can update tags
             * @property {boolean} issues.updateConfidents - moderator can update issue confidents
             *
             * @property {Object} project - permissions over project
             * @property {boolean} project.updateGeneralSettings - moderator can update project general settings
             * @property {boolean} project.changeState - moderator can change project state
             * @property {boolean} project.updateForm -  moderator can update project form
             * @property {boolean} project.updateModerators - moderator can update project moderators
             * @property {boolean} project.updateConfidents - moderator can update project confidents
             * @property {boolean} project.updateScopedTags - moderator can update project scoped tags
             */
            actions: z
              .object({
                comments: z.object({
                  block: z.boolean(),
                  delete: z.boolean(),
                }),
                issues: z.object({
                  block: z.boolean(),
                  delete: z.boolean(),
                  updateState: z.boolean(),
                  updateFields: z.boolean(),
                  updateHiddenFields: z.boolean(),
                  updateInternalFields: z.boolean(),
                  updateVisibility: z.boolean(),
                  updateTags: z.boolean(),
                  updateConfidents: z.boolean(),
                }),
                project: z.object({
                  updateGeneralSettings: z.boolean(),
                  updateState: z.boolean(),
                  updateForm: z.boolean(),
                  updateModerators: z.boolean(),
                  updateConfidents: z.boolean(),
                  updateScopedTags: z.boolean(),
                }),
              })
              .optional(),
            /**
             * @type {string} - display role name
             */
            displayRole: z.string(),
            /**
             * @type {string} - display role color
             */
            displayRoleColor: z.string(),
          })
        ),
      }),
      responses: {
        200: okSchema(projectModeratorSchema.Dto),
        403: forbiddenSchema,
        404: notFoundSchema,
        401: unauthorizedSchema,
        500: failSchema,
      },
      metadata: {
        permissions: {
          OR: [
            PermissionList.ManageProjectAsModerator,
            PermissionList.UpdateProjectAny,
          ],
        } as const,
      },
    },
    updateProjectScopedTags: {
      method: "POST",
      path: `/projects/by/id/:projectId/scoped-tags`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({
        /**
         * @type {Array} - array of scoped tags
         * @items {string}
         */
        tagIds: z.array(z.string()),
      }),
      responses: {
        200: okSchema(projectSchema.ConfidentialDTO),
        401: unauthorizedSchema,
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema,
      },
      summary: "Update project scoped tags",
      metadata: {
        permissions: {
          OR: [
            PermissionList.ManageProjectAsModerator,
            PermissionList.UpdateProjectAny,
          ],
        },
      },
    },
    deleteProjectModeratorById: {
      method: "DELETE",
      path: `/projects/by/id/:projectId/moderators/:moderatorId`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({}).nullable().optional(),
      responses: {
        204: okNoContentSchema,
        401: unauthorizedSchema,
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema,
      },
      summary: "Delete project moderator by id",
      metadata: {
        permissions: {
          OR: [
            PermissionList.ManageProjectAsModerator,
            PermissionList.UpdateProjectAny,
          ],
        },
      },
    },
    getProjectConfidents: {
      method: "GET",
      path: `/projects/by/id/:projectId/confidents`,
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
      }),

      responses: {
        200: okSchema(z.array(projectConfidenceSchema.ConfidentialDetailsDTO)),
        404: notFoundSchema,
        401: unauthorizedSchema,
        403: forbiddenSchema,
        500: failSchema,
      },
      summary: "Get project confidents by project id",
      metadata: {
        permissions: {},
      },
    },
  },
  {
    pathPrefix: "/api",
  }
);

export default projectContract;
