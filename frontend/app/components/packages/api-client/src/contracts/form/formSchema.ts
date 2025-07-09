import * as z from "zod";

const PublicDTO = z.object({
  id: z.string(),
  name: z.string(),
  displayName: z.string(),
  authorId: z.string(),
  project: z
    .object({
      id: z.string(),
      name: z.string(),
      displayName: z.string(),
      slug: z.string(),
      associatedAt: z.date(),
    })
    .nullable(),
  fieldsLimit: z.number(),
  fields: z.array(
    z.object({
      name: z.string(),
      displayName: z.string(),
      label: z.string(),
      type: z.string(),
      required: z.boolean(),
      // TODO: replace any with zod union type
      options: z.any(),
    })
  ),
});
const RegularDTO = PublicDTO;
const ConfidentialDTO = RegularDTO.extend({
  createdAt: z.date(),
  updatedAt: z.date(),
});

const formSchema = {
  PublicDTO,
  RegularDTO,
  ConfidentialDTO,
};
export default formSchema;
