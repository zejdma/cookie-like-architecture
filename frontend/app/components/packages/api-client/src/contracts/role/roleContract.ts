import {
  badRequestSchema,
  conflictSchema,
  failSchema,
  forbiddenSchema,
  notFoundSchema,
  okSchema,
} from "@/schema/responseSchemas";
import { PermissionList } from "@bistudio-feedback/core-constants";
import { initContract } from "@ts-rest/core";
import { z } from "zod";
import roleSchema from "./roleSchema";

const c = initContract();

export const RoleRequestDTO = z.object({
  name: z.string(),
  displayName: z.string(),
  permissions: z.array(z.string()), // TODO: add enums constants of permissionList
});

const roleContract = c.router(
  {
    createRole: {
      method: "POST",
      headers: z.object({
        authorization: z.string(),
      }),
      path: `/roles`,
      body: RoleRequestDTO,
      responses: {
        200: okSchema(roleSchema.RegularDTO),
        409: conflictSchema,
        403: forbiddenSchema,
        500: failSchema,
      },
      summary: "Create role",
      metadata: {
        permissions: {
          middleware: [PermissionList.CreateRole],
        },
      },
    },
    getRoleById: {
      method: "GET",
      path: `/roles/by/id/:roleId`,
      headers: z
        .object({
          authorization: z.string(),
        })
        .optional(),
      responses: {
        200: okSchema(
          z.union([roleSchema.RegularDTO, roleSchema.ConfidentialDTO])
        ),
        404: notFoundSchema,
        500: failSchema,
      },
      summary: "Get a role by id",
      metadata: {
        permissions: {},
      },
    },
    getRoleByName: {
      method: "GET",
      path: `/roles/by/name/:name`,
      headers: z
        .object({
          authorization: z.string(),
        })
        .optional(),
      responses: {
        200: okSchema(
          z.union([roleSchema.RegularDTO, roleSchema.ConfidentialDTO])
        ),
        404: notFoundSchema,
        500: failSchema,
      },
      summary: "Get a role by name",
      metadata: {
        permissions: {},
      },
    },
    deleteRoleById: {
      method: "DELETE",
      path: `/roles/by/id/:roleId`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({
        replaceWithRoleId: z.string().optional(),
      }),
      responses: {
        204: z.object({}),
        400: badRequestSchema,
        403: forbiddenSchema,
        409: conflictSchema,
        500: failSchema,
      },
      summary: "Delete role by id",
      metadata: {
        permissions: PermissionList.DeleteRole,
      },
    },
    editRoleById: {
      method: "POST",
      path: `/roles/by/id/:roleId/edit`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({
        name: z.string().optional(),
        displayName: z.string().optional(),
        permissions: z.array(z.string()).optional(),
      }),
      responses: {
        200: okSchema(roleSchema.RegularDTO),
        404: notFoundSchema,
        409: conflictSchema,
        403: forbiddenSchema,
        500: failSchema,
      },
      summary: "Edit role by id",
      metadata: {
        permissions: PermissionList.UpdateRole,
      },
    },
    getRoles: {
      method: "GET",
      path: `/roles`,
      headers: z.object({
        authorization: z.string(),
      }),
      query: z.object({
        page: z.string().optional(),
        limit: z.string().optional(),
        search: z.string().optional(),
      }),
      responses: {
        200: okSchema(z.array(roleSchema.RegularDTO)),
        403: forbiddenSchema,
        500: failSchema,
      },
      summary: "Get roles",
      metadata: {
        permissions: {},
      },
    },
  },
  {
    pathPrefix: "/api",
  }
);

export default roleContract;
