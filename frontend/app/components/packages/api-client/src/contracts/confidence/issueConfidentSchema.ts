import { z } from "zod";
import memberSchema from "@/contracts/member/memberSchema";

export const BasicDTO = z.object({
  id: z.string(),
  author: memberSchema.BasicDTO,
  memberId: memberSchema.BasicDTO,
  issueId: z.string(),
});
export const ConfidentialDTO = z.object({
  id: z.string(),
  author: memberSchema.ConfidentialDTO,
  memberId: memberSchema.ConfidentialDTO,
  issueId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const RegularDetailsDTO = z.object({
  id: z.string(),
  author: memberSchema.ConfidentialMemberDetailsDTO,
  member: memberSchema.ConfidentialMemberDetailsDTO,
  issueId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const ConfidentialDetailsDTO = RegularDetailsDTO.extend({
  createdAt: z.string(),
  updatedAt: z.string(),
});

const issueConfidentSchema = {
  BasicDTO,
  ConfidentialDTO,
  RegularDetailsDTO,
  ConfidentialDetailsDTO,
};
export default issueConfidentSchema;
