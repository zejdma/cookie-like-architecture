import { z } from "zod";

const BasicDTO = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  // state: z.enum(["ACTIVE", "DRAFT"]),
  displayName: z.string(),
  bannerId: z.string().nullable(),
  description: z.string(),
});

const BasicDetailsDTO = BasicDTO.extend({
  banner: z.string().nullable(),
});

const ConfidentialDTO = BasicDTO.extend({
  storageId: z.string(),
  authorId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
const ConfidentialDetailsDTO = ConfidentialDTO.extend({
  banner: z.string().nullable(),
  author: z.string().nullable(),
});

const projectGroupSchema = {
  BasicDTO,
  BasicDetailsDTO,
  ConfidentialDTO,
  ConfidentialDetailsDTO,
};
export default projectGroupSchema;
