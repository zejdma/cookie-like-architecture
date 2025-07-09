import { z } from "zod";

const CreateIssueRequestDTO = z.object({
  /**
   * @type {string} - title of issue
   */
  title: z.string(),
  /**
   * @type {Object} - array of fields, they compose issue
   */
  fields: z.array(
    z.object({
      name: z.string(),
      value: z.any(),
    })
  ),
  tagIds: z.array(z.string()),
  /**
   * @type {boolean} - is issue private
   */
  isPrivate: z.boolean(),
  /**
   * @type {string} - id of project
   */
  projectId: z.string(),
});

export const requestBodySchema = CreateIssueRequestDTO;
