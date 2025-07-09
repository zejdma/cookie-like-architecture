import { z } from "zod";
import issueSchema from "../issue/issueSchema";

export const ConfidentialDTO = z.object({
  id: z.string(),
  memberId: z.string(),
  issueId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const ConfidentialDetailsDTO = ConfidentialDTO.omit({
  issueId: true,
}).extend({
  issue: issueSchema.ConfidentialInListDetailsDTO,
});
const issueConfidenceSchema = {
  ConfidentialDTO,
  ConfidentialDetailsDTO,
};
export default issueConfidenceSchema;
