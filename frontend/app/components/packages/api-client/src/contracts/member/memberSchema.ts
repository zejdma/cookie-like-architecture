import { z } from "zod";
import userSchema from "../user/userSchema";
import fileSchema from "@/contracts/file/fileSchema";

const PublicDTO = z.object({
  id: z.string(),
  reputation: z.number(),
  issuesCount: z.number(),
  repliesCount: z.number(),
  likesGiven: z.number(),
  solvedCount: z.number(),
  createdAt: z.date(),
});

const BasicDTO = PublicDTO;

const ConfidentialDTO = BasicDTO.extend({
  userId: z.string(),

  reportsCount: z.number(),
  reportedOwnIssuesCount: z.number(),
  reportedOwnRepliesCount: z.number(),

  updatedAt: z.date(),
});

const PublicMemberDetailsDTO = z.object({
  id: z.string(),
  avatar: fileSchema.PublicDTO,
  user: userSchema.PublicDTO,
  role: userSchema.BasicDTO,

  reputation: z.number(),
  issuesCount: z.number(),
  repliesCount: z.number(),
  likesGiven: z.number(),
  solvedCount: z.number(),

  isVerified: z.boolean(),
  isDeleted: z.boolean(),
  isSuspended: z.boolean(),
  createdAt: z.date(),
});

const RegularMemberDetailsDTO = PublicMemberDetailsDTO.omit({
  avatar: true,
  role: true,
  user: true,
}).extend({
  avatar: userSchema.BasicDTO,
  role: userSchema.BasicDTO,
  user: userSchema.BasicDTO,
});

const ConfidentialMemberDetailsDTO = RegularMemberDetailsDTO.omit({
  role: true,
  avatar: true,
  user: true,
}).extend({
  role: userSchema.ConfidentialDTO,
  avatar: userSchema.ConfidentialDTO,
  user: userSchema.ConfidentialDTO,
  reportsCount: z.number(),
  reportedOwnIssuesCount: z.number(),
  reportedOwnRepliesCount: z.number(),

  userId: z.string(),
});

const PublicMemberDetailsShortDTO = z.object({
  id: z.string(),
  avatar: z.string().nullable(),
  username: z.string(),
  roleDisplayName: z.string(),
  reputation: z.number(),
});

const RegularMemberDetailsShortDTO = PublicMemberDetailsShortDTO;
const ConfidentialMemberDetailsShortDTO = PublicMemberDetailsShortDTO;

const memberSchema = {
  PublicDTO,
  BasicDTO,
  ConfidentialDTO,
  PublicMemberDetailsDTO,
  RegularMemberDetailsDTO,
  ConfidentialMemberDetailsDTO,
  PublicMemberDetailsShortDTO,
  RegularMemberDetailsShortDTO,
  ConfidentialMemberDetailsShortDTO,
};
export default memberSchema;
