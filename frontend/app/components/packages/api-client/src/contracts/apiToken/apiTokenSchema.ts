import { z } from "zod";

const dto = z.object({
  id: z.string(),
  displayName: z.string(),
  hash: z.string().optional(),
  token: z.string().optional(),
  expiration: z.date().nullable(),
  resourceAccess: z.object({
    issue: z.array(
      z.object({
        projectId: z.string(),
        scopes: z.array(z.string()),
      })
    ),
  }),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const apiTokenSchema = {
  dto,
};

export default apiTokenSchema;
