import { PermissionList } from "@bistudio-feedback/core-constants";
import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { failSchema, notFoundSchema, okSchema } from "@/schema/responseSchemas";
import memberSchema from "./memberSchema";

// import {
//   conflictSchema,
//   failSchema,
//   forbiddenSchema,
//   notFoundSchema,
// } from "../responseSchemas";

const c = initContract();

const memberContract = c.router(
  {
    getCurrentMember: {
      method: "GET",
      path: `/members/me`,
      headers: z.object({
        authorization: z.string(),
      }),
      responses: {
        200: okSchema(memberSchema.ConfidentialDTO),
        500: failSchema,
      },
      summary: "Get the current member",
      metadata: {
        permissions: PermissionList.ReadMemberConfidentialOwn,
      },
    },
    geMemberByUsername: {
      method: "GET",
      path: `/members/by/username/:username`,
      headers: z
        .object({
          authorization: z.string(),
        })
        .optional(),
      responses: {
        200: okSchema(
          z.union([
            memberSchema.ConfidentialDTO,
            memberSchema.PublicDTO,
            memberSchema.BasicDTO,
          ])
        ),
        404: notFoundSchema,
        500: failSchema,
      },
      summary: "Get a member by username",
      metadata: {
        isPublic: true,
        permissions: {},
      },
    },
    // editMemberCredentialsById: {},
    // editCurrentMemberCredentials: {},
    // editMemberPassword: {
    //
    // },
    getMemberById: {
      method: "GET",
      path: `/members/by/id/:memberId`,
      headers: z
        .object({
          authorization: z.string(),
        })
        .optional(),
      responses: {
        200: okSchema(
          z.union([
            memberSchema.ConfidentialDTO,
            memberSchema.PublicDTO,
            memberSchema.BasicDTO,
          ])
        ),
        404: notFoundSchema,
        500: failSchema,
      },
      summary: "Get a member by id",
      metadata: {
        isPublic: true,
        permissions: {},
      },
    },
    getMembers: {
      method: "GET",
      path: `/members`,
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
         * @type {string} - limit of items per page, default and max is 50
         */
        limit: z.string().optional(),
        /**
         * @type {string} - search string, includes username, email, roleName, roleDisplayName
         */
        search: z.string().optional(),
      }),
      responses: {
        200: okSchema(z.array(memberSchema.BasicDTO)),
        500: failSchema,
      },
      summary: "Get all members",
      metadata: {
        isPublic: true,
      },
    },
  },
  {
    pathPrefix: "/api",
  }
);

export default memberContract;
