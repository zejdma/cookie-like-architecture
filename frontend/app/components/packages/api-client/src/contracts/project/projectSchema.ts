import { z } from "zod";
import fileSchema from "../file/fileSchema";
import memberSchema from "../member/memberSchema";
import projectGroupSchema from "../projectGroup/projectGroupSchema";
import { IssueTagDTO } from "@/contracts/issueTag/issueTagSchema";

const PreviewDTO = z.object({
  id: z.string(),
  name: z.string(),
  key: z.string(),
  displayName: z.string(),
  slug: z.string(),
});

const RegularDTO = z.object({
  id: z.string(),
  groupId: z.string(),
  formId: z.string().nullable(),

  state: z.enum(["ACTIVE", "DRAFT", "ARCHIVED"]),
  key: z.string(),
  visibility: z.enum(["PUBLIC", "PRIVATE"]),
  name: z.string(),
  displayName: z.string(),
  slug: z.string(),
  banner: fileSchema.RegularDetailsDTO,
  description: z.string(),
  issuesCount: z.number(),
});

const RegularDetailsDTO = RegularDTO.extend({
  group: projectGroupSchema.BasicDTO,
  hasScopedTags: z.boolean(),
  scopedTags: z.array(IssueTagDTO).optional(),
}).omit({ groupId: true });

const PublicDetailsDTO = RegularDetailsDTO;

const ConfidentialDTO = RegularDTO.extend({
  authorId: z.string(),
  storageId: z.string(),
  bannerId: z.string().nullable(),
  keyArtId: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const ConfidentialDetailsDTO = ConfidentialDTO.extend({
  group: projectGroupSchema.BasicDTO,
  author: memberSchema.BasicDTO,
  banner: fileSchema.ConfidentialDetailsDTO,
  keyArt: fileSchema.ConfidentialDetailsDTO,
  moderatorsList: z.array(memberSchema.RegularMemberDetailsShortDTO),
  hasScopedTags: z.boolean(),
  scopedTags: z.array(IssueTagDTO).optional(),
}).omit({ groupId: true, authorId: true, bannerId: true, keyArtId: true });

const projectSchema = {
  PreviewDTO,
  RegularDTO,
  RegularDetailsDTO,
  ConfidentialDTO,
  ConfidentialDetailsDTO,
  PublicDetailsDTO,
};
export default projectSchema;
