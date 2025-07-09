import { z } from "zod";

const Dto = z.object({
  id: z.string(),
  projectId: z.string(),
  memberIds: z.array(z.string()),
  actions: z.object({
    comments: z.object({
      block: z.boolean(),
      delete: z.boolean(),
    }),
    issues: z.object({
      block: z.boolean(),
      delete: z.boolean(),
      updateState: z.boolean(),
      updateFields: z.boolean(),
      updateVisibility: z.boolean(),
      updateTags: z.boolean(),
    }),
    issueConfidents: z.object({
      add: z.boolean(),
      delete: z.boolean(),
    }),
    projectConfidents: z.object({
      add: z.boolean(),
      delete: z.boolean(),
    }),
  }),
  displayRole: z.string(),
  displayRoleColor: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
const projectModeratorSchema = {
  Dto,
};
export default projectModeratorSchema;
