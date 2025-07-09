import { z } from "zod";
import memberSchema from "@/contracts/member/memberSchema";

const RegularDTO = z.object({
  id: z.string(),
  content: z.string(),
  authorId: z.string(),
  issueId: z.string(),
  parentCommentId: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

const SuspendDTO = RegularDTO.omit({ content: true }).extend({
  suspend: z.object({
    reason: z.string(),
    date: z.date(),
    suspendedBy: z.string(),
  }),
});

const ConfidentialDTO = RegularDTO.extend({
  suspend: z
    .object({
      reason: z.string(),
      date: z.date(),
      suspendedBy: z.string(),
    })
    .optional(),
  reports: z.array(z.string()).optional(),
});

const RegularDetailsDTO = z.object({
  id: z.string(),
  author: memberSchema.PublicMemberDetailsShortDTO,
  moderator: z
    .object({
      id: z.string(),
      displayRole: z.string(),
      displayRoleColor: z.string(),
    })
    .optional(),
  content: z.string(),
  issueId: z.string(),
  parentCommentId: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

const SuspendDetailsDTO = RegularDetailsDTO.omit({ content: true }).extend({
  suspend: z.object({
    reason: z.string(),
    type: z.string(),
    by: z.string(),
    suspendedAt: z.date(),
  }),
});

const ConfidentialDetailsDTO = RegularDetailsDTO.extend({
  suspend: z
    .object({
      reason: z.string(),
      type: z.string(),
      by: z.string(),
      suspendedAt: z.date(),
    })
    .optional(),
  reports: z.array(z.string()).optional(),
});

const commentSchema = {
  RegularDTO,
  SuspendDTO,
  ConfidentialDTO,
  RegularDetailsDTO,
  SuspendDetailsDTO,
  ConfidentialDetailsDTO,
};
export default commentSchema;
