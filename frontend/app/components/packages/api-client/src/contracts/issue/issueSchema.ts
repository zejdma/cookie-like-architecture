import { FieldSchemaDTO } from "@/contracts/form/formRequestBody";
import issueTagSchema from "@/contracts/issueTag/issueTagSchema";
import * as z from "zod";

const PreviewDTO = z.object({
  id: z.string(),
  title: z.string(),
  tags: z.array(z.string()),
  state: z.string(),
  key: z.string(),
  points: z.number(),
  isClosed: z.boolean(),
  commentsCount: z.number(),
  attachmentsCount: z.number(),
});

const PublicDTO = z.object({
  id: z.string(),
  title: z.string(),
  tags: z.array(z.string()),
  state: z.string(),
  key: z.string(),
  schema: z.array(FieldSchemaDTO),
  fields: z.array(
    z.object({
      name: z.string(),
      type: z.string(),
      value: z.any(),
    })
  ),
  points: z.number(),
  commentsCount: z.number(),
  authorId: z.string(),
  projectId: z.string(),
  isSuspend: z.boolean().optional(),
  visibility: z.string(),
  lastChangeAt: z.date(),
  isClosed: z.boolean(),
  createdAt: z.date(),
});
const RegularDTO = PublicDTO.extend({});

const PublicDetailsDTO = PublicDTO.extend({
  id: z.string(),
  title: z.string(),
  tags: z.array(issueTagSchema.IssueTagDTO),
  state: z.string(),
  key: z.string(),
  points: z.number(),
  commentsCount: z.number(),
  fields: z.array(
    z.object({
      name: z.string(),
      type: z.string(),
      value: z.any(),
    })
  ),
  author: z.object({
    id: z.string(),
    username: z.string(),
    email: z.string(),
    roleName: z.string(),
    roleDisplayName: z.string(),
  }),
  project: z.object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    displayName: z.string(),
  }),
  group: z.object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    displayName: z.string(),
  }),
  isSuspend: z.boolean().optional(),
  visibility: z.string(),
  isClosed: z.boolean(),
  lastChangeAt: z.date(),
  createdAt: z.date(),
});

const RegularDetailsDTO = PublicDetailsDTO.extend({
  operations: z.object({
    canBlock: z.boolean(),
    canDelete: z.boolean(),
    canUpdateState: z.boolean(),
    canEditFields: z.boolean(),
    canEditInternalFields: z.boolean(),
    canEditHiddenFields: z.boolean(),
    canUpdateConfidents: z.boolean(),
    canBlockComments: z.boolean(),
    canDeleteComments: z.boolean(),
    canUpdateTags: z.boolean(),
    canUpdateVisibility: z.boolean(),
  }),
  isUpvotedByMe: z.boolean(),
  isDownvotedByMe: z.boolean(),
});
const ConfidentialDTO = RegularDTO.extend({
  updatedAt: z.date(),
  // suspend: z.object({
  //   reason: z.string(),
  //   date: z.date(),
  //   suspendedBy: z.string(),
  // }),
});

const ConfidentialDetailsDTO = RegularDetailsDTO.extend({
  updatedAt: z.date(),
});

const PublicInListDetailsDTO = PublicDetailsDTO.omit({
  fields: true,
});
const RegularInListDetailsDTO = PublicInListDetailsDTO;
const ConfidentialInListDetailsDTO = RegularInListDetailsDTO.extend({
  updatedAt: z.date(),
});

const issueSchema = {
  PreviewDTO,
  PublicDTO,
  PublicDetailsDTO,
  RegularDTO,

  RegularDetailsDTO,
  ConfidentialDTO,
  ConfidentialDetailsDTO,

  PublicInListDetailsDTO,
  RegularInListDetailsDTO,
  ConfidentialInListDetailsDTO,
};

export default issueSchema;
