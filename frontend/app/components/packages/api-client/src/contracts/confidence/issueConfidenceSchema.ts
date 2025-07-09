import { z } from "zod";

export const BasicDTO = z.object({
  id: z.string(),
  authorId: z.string(),
  memberId: z.string(),
  issueId: z.string(),
});
export const ConfidentialDTO = BasicDTO.extend({
  createdAt: z.string(),
  updatedAt: z.string(),
});

const issueConfidenceSchema = {
  BasicDTO,
  ConfidentialDTO,
};
export default issueConfidenceSchema;
