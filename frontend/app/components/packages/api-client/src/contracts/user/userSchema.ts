import { z } from "zod";

const PublicDTO = z.object({
  username: z.string(),
  avatarId: z.string().optional(),
  roleId: z.string(),
  isVerified: z.boolean(),
  isDeleted: z.boolean(),
  isSuspended: z.boolean(),
  createdAt: z.date().optional(),
});

const BasicDTO = PublicDTO;

const ConfidentialDTO = PublicDTO.extend({
  userId: z.string(),
  email: z.string(),
  newEmail: z.string().optional(),
  passwordChangedAt: z.date().optional(),
  storageId: z.string(),
  updatedAt: z.date().optional(),
});

const userSchema = {
  ConfidentialDTO,
  PublicDTO,
  BasicDTO,
};

export default userSchema;
