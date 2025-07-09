import { z } from "zod";

export const IssueTagDTO = z.object({
  id: z.string(),
  displayName: z.string(),
  name: z.string(),
  color: z.string(),
  description: z.string(),
});

export const IssueTagDetailsDTO = IssueTagDTO.extend({
  count: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
const issueTagSchema = {
  IssueTagDTO,
  IssueTagDetailsDTO,
};
export default issueTagSchema;
