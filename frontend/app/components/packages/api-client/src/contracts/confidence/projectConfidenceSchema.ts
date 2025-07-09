import { z } from "zod";
import memberSchema from "@/contracts/member/memberSchema";

export const BasicDTO = z.object({
  id: z.string(),
  authorId: z.string(),
  memberId: z.string(),
  projectId: z.string(),
});
export const ConfidentialDTO = BasicDTO.extend({
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const RegularDetailsDTO = z.object({
  id: z.string(),
  author: memberSchema.ConfidentialMemberDetailsDTO,
  member: memberSchema.ConfidentialMemberDetailsDTO,
  projectId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const ConfidentialDetailsDTO = RegularDetailsDTO.extend({
  createdAt: z.string(),
  updatedAt: z.string(),
});

const projectConfidenceSchema = {
  BasicDTO,
  ConfidentialDTO,
  RegularDetailsDTO,
  ConfidentialDetailsDTO,
};
export default projectConfidenceSchema;
