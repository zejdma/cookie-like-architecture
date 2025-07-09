import { z } from "zod";

export const ConfidentialDTO = z.object({
  id: z.string(),
  template: z.string(),
  memberId: z.string(),
  type: z.string(),
  isRead: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const notificationSchema = {
  ConfidentialDTO,
};
export default notificationSchema;
