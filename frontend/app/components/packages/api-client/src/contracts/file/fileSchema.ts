import * as z from "zod";

const PublicDTO = z.object({
  id: z.string(),
  name: z.string(),
  mimeType: z.enum([
    "video/mp4', 'image/png",
    "image/jpeg",
    "image/gif",
    "image/tiff",
    "video/ogg",
    "video/webm",
  ]),
  size: z.number(),
  slug: z.string(),
  url: z.string().optional(),
  key: z.string(),
  isConfirmed: z.boolean(),
  alt: z.string(),
  tags: z.array(z.string()),
  expiresAt: z.date().nullable(),
  expiresSignature: z.string().nullable(),
});
const RegularDTO = PublicDTO;
const ConfidentialDTO = RegularDTO.extend({
  isDeleted: z.boolean(),
  authorId: z.string(),
  unassociatedAt: z.date().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const PubliclDetailsDTO = PublicDTO.extend({
  url: z.string(),
});
const RegularDetailsDTO = RegularDTO.extend({
  url: z.string(),
});
const ConfidentialDetailsDTO = ConfidentialDTO.extend({
  url: z.string(),
});

const fileSchema = {
  PublicDTO,
  PubliclDetailsDTO,
  RegularDTO,
  RegularDetailsDTO,
  ConfidentialDTO,
  ConfidentialDetailsDTO,
};

export default fileSchema;
