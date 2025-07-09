import { initContract } from "@ts-rest/core";

import { PermissionList } from "@bistudio-feedback/core-constants";
import { z } from "zod";
import {
  conflictSchema,
  failSchema,
  forbiddenSchema,
  notFoundSchema,
  okSchema,
  redirectSchema,
  unauthorizedSchema,
} from "../../schema/responseSchemas";
import userSchema from "./userSchema";

export const UserLoginSchema = z
  .object({
    email: z.string(),
    password: z.string(),
  })
  .strict();

export const CreateUserDTO = z
  .object({
    username: z.string(),
    password: z.string(),
    email: z.string(),
  })
  .strict();

export const accesshTokenResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  expiresIn: z.number(),
});

const c = initContract();
const userContract = c.router(
  {
    login: {
      method: "POST",
      path: "/users/login",
      body: UserLoginSchema,
      responses: {
        200: okSchema(accesshTokenResponseSchema),
        401: unauthorizedSchema,
        409: conflictSchema,
        403: forbiddenSchema,
        500: failSchema,
      },
      summary: "Login a user",
      metadata: {
        isPublic: true,
        permissions: {},
      },
    },
    // authWithMicrosoft: {
    //   method: "GET",
    //   path: "/users/auth/microsoft",
    //   responses: {
    //     302: redirectSchema,
    //     // 302: c.otherResponse({
    //     //   contentType: "text/plain",
    //     //   body: c.type<undefined>(),
    //     // }),
    //     // 401: unauthorizedSchema,
    //   },
    //   summary: "Authenticate with Microsoft",
    //   metadata: {
    //     isPublic: true,
    //     permissions: {},
    //   },
    // },
    authWithMicrosoftCallback: {
      method: "GET",
      path: "/users/auth/microsoft/callback",
      responses: {
        302: redirectSchema,
        // 302: c.otherResponse({
        //   contentType: "text/plain",
        //   body: c.type<undefined>(),
        // }),
        // contentType: "text/plain",
        // body: c.type<undefined>(),
        // }),
        403: forbiddenSchema,
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema,
      },
      summary: "Authenticate with Microsoft callback",
      metadata: {
        isPublic: true,
        permissions: {},
      },
    },
    logout: {
      method: "POST",
      path: "/users/logout",
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.nullable(z.object({})),
      responses: {
        200: okSchema(z.null()),
        500: failSchema,
      },
      summary: "Logout the current user",
      metadata: {
        permissions: {},
      },
    },
    refreshAccessToken: {
      method: "POST",
      path: "/users/token/refresh",
      body: z.object({
        refreshToken: z.string(),
      }),
      responses: {
        200: okSchema(accesshTokenResponseSchema),
        404: notFoundSchema,
        500: failSchema,
      },
      summary: "Refresh the access token",
      metadata: {
        isPublic: true,
        permissions: {},
      },
    },

    createUser: {
      method: "POST",
      path: "/users",
      responses: {
        200: okSchema(userSchema.ConfidentialDTO),
        409: conflictSchema,
        403: forbiddenSchema,
        500: failSchema,
      },
      body: CreateUserDTO,
      summary: "Create a new user, registration",
      metadata: {
        isPublic: true,
        permissions: {},
      },
    },
    editCurrentUser: {
      method: "POST",
      path: "/users/me/edit",
      headers: z.object({
        authorization: z.string(),
      }),
      responses: {
        200: okSchema(userSchema.ConfidentialDTO),
        404: notFoundSchema,
        403: forbiddenSchema,
        409: conflictSchema,
        500: failSchema,
      },
      body: z.object({
        username: z.string().optional(),
        newEmail: z.string().email().optional(),
      }),
      summary: "Edit a current user",
      metadata: {
        permissions: PermissionList.UpdateUserOwn,
      },
    },
    editUserById: {
      method: "POST",
      path: "/users/by/id/:userId/edit",
      headers: z.object({
        authorization: z.string(),
      }),
      responses: {
        200: okSchema(userSchema.ConfidentialDTO),
        403: forbiddenSchema,
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema,
      },
      body: z.object({
        /**
         * @type {string} - user username
         */
        username: z.string().optional(),
        /**
         * @type {string} - user email
         */
        email: z.string().email().optional(),
        /**
         * @type {string} - user role id
         */
        roleId: z.string().optional(),
      }),
      summary: "Edit any user",
      metadata: {
        permissions: PermissionList.UpdateUserAny,
      },
    },

    // changeUserPasswordById: {
    //   method: "POST",
    //   path: "/users/:userId/password/change",
    //   headers: z.object({
    //     authorization: z.string(),
    //   }),
    //   responses: {
    //     200: okSchema(userSchema.ConfidentialDTO),
    //     404: notFoundSchema,
    //     409: conflictSchema,
    //     403: forbiddenSchema,
    //     500: failSchema,
    //   },
    //   body: z.object({
    //     password: z.string(),
    //   }),
    //   summary: "Change a user's password",
    //   metadata: {
    //     permissions: {
    //       middleware: [
    //         [PermissionList.UpdateUserAny],
    //         [PermissionList.UpdateUserOwn],
    //       ],
    //     },
    //   },
    // },

    getCurrentUser: {
      method: "GET",
      path: `/users/me`,
      headers: z.object({
        authorization: z.string(),
      }),
      responses: {
        200: okSchema(userSchema.ConfidentialDTO),
        500: failSchema,
      },
      summary: "Get the current user",
      metadata: {
        permissions: PermissionList.ReadUserOwn,
      },
    },
    getUserByUsername: {
      method: "GET",
      path: `/users/by/username/:username`,
      headers: z.object({
        authorization: z.string(),
      }),
      responses: {
        200: okSchema(
          z.union([
            userSchema.ConfidentialDTO,
            userSchema.PublicDTO,
            userSchema.BasicDTO,
          ])
        ),
        404: notFoundSchema,
        500: failSchema,
      },
      summary: "Get a user by username",
      metadata: {
        permissions: {},
      },
    },
    getUserById: {
      method: "GET",
      path: `/users/by/id/:userId`,
      headers: z.object({
        authorization: z.string(),
      }),
      responses: {
        200: okSchema(
          z.union([
            userSchema.ConfidentialDTO,
            userSchema.PublicDTO,
            userSchema.BasicDTO,
          ])
        ),
        404: notFoundSchema,
        500: failSchema,
      },
      summary: "Get a post by id",
      metadata: {
        permissions: {},
      },
    },
    verifyNewEmail: {
      method: "PATCH",
      path: "/users/verify-email/:token",
      body: z.object({}).nullable(),
      responses: {
        204: okSchema(z.null()),
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema,
      },
      summary: "Verify a new email",
      metadata: {
        permissions: {},
      },
    },
  },
  {
    pathPrefix: "/api",
  }
);

export default userContract;
