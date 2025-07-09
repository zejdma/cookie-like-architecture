import { z } from "zod";

const RegularDTO = z.object({
  id: z.string(),
  name: z.string(),
  displayName: z.string(),
});
const ConfidentialDTO = RegularDTO.extend({
  permissions: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const roleSchema = {
  RegularDTO,
  ConfidentialDTO,
};

export default roleSchema;
