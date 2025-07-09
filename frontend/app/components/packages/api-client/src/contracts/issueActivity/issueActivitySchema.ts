import { z } from "zod";
import issueSchema from "../issue/issueSchema";
import memberSchema from "@/contracts/member/memberSchema";
import projectSchema from "@/contracts/project/projectSchema";
import commentSchema from "@/contracts/comment/commentSchema";

const typeSchema = z.enum([
  "CREATE",
  "FIELDS_CHANGE",
  "STATE_CHANGE",
  "ASSIGN",
  "TAGS_UPDATE",
  "COMMENT_REPLY",
  "TITLE_UPDATE",
]);

export const IssueActivityDTO = z.object({
  id: z.string(),
  memberId: z.string(),
  projectId: z.string(),
  issueId: z.string(),
  assignMemberId: z.string().optional(),
  commentId: z.string().optional(),
  parentCommentId: z.string().optional(),
  type: typeSchema,
  context: z.record(z.unknown()), // TODO: refine this to a more specific type
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const IssueActivityDetailsDTO = IssueActivityDTO.extend({
  member: memberSchema.PublicMemberDetailsShortDTO,
  project: projectSchema.PreviewDTO,
  issue: issueSchema.PreviewDTO,
  comment: commentSchema.RegularDTO.optional(),
  parentComment: commentSchema.RegularDTO.optional(),
  type: typeSchema,
  context: z.record(z.unknown()), // TODO: refine this to a more specific type
  createdAt: z.string(),
  updatedAt: z.string(),
});

const issueActivitySchema = {
  IssueActivityDTO,
  IssueActivityDetailsDTO,
};

export default issueActivitySchema;
