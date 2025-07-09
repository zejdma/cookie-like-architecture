import { z } from "zod";
import { initContract } from "@ts-rest/core";
import {
  badRequestSchema,
  failSchema,
  forbiddenSchema,
  notFoundSchema,
  okSchema,
} from "@/schema/responseSchemas";
import notificationSchema from "@/contracts/notification/notificationSchema";

const c = initContract();

const notificationContract = c.router(
  {
    getCurrentMemberNotifications: {
      method: "GET",
      path: `/members/me/notifications`,
      headers: z.object({
        authorization: z.string(),
      }),
      responses: {
        200: okSchema(notificationSchema.ConfidentialDTO),
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema,
      },
      summary: "Create issue confidence record by logged member",
      metadata: {
        permissions: {} as const,
      } as const,
    },
    readCurrentMemberNotification: {
      method: "POST",
      path: `/members/me/notifications/:notificationId/read`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({}).nullable().optional(),
      responses: {
        200: okSchema(notificationSchema.ConfidentialDTO),
        400: badRequestSchema,
        500: failSchema,
      },
      summary: "Read current member notification",
      metadata: {
        permissions: {} as const,
      } as const,
    },
    readCurrentMemberAllNotifications: {
      method: "POST",
      path: `/members/me/notifications/read-all`,
      headers: z.object({
        authorization: z.string(),
      }),
      body: z.object({}).nullable().optional(),
      responses: {
        200: okSchema(z.array(notificationSchema.ConfidentialDTO)),
        400: badRequestSchema,
        500: failSchema,
      },
      summary: "Read all current member notifications",
      metadata: {
        permissions: {} as const,
      } as const,
    },
  },
  {
    pathPrefix: "/api",
  }
);
export default notificationContract;
