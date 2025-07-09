import { z } from "zod";

const PersistBaseInputFormField = z.object({
  name: z.string(),
  label: z.string(),
  placeholder: z.string().optional(),
  helperText: z.string().optional(),
  visibility: z.string(),
  required: z.boolean().optional(),
});

const PersistBaseUIFormField = z.object({
  name: z.string(),
  type: z.string(),
});

const RegularNumberFieldDTO = PersistBaseInputFormField.extend({
  type: z.literal("NUMBER"),
  options: z.object({
    min: z.number().optional(),
    max: z.number().optional(),
    noDecimal: z.boolean().optional(),
  }),
});

const RegularTextFieldDTO = PersistBaseInputFormField.extend({
  type: z.literal("TEXT"),
  options: z.object({
    minLength: z.number().optional(),
    maxLength: z.number().optional(),
    pattern: z.string().optional(),
  }),
});

const RegularSelectFieldDTO = PersistBaseInputFormField.extend({
  type: z.literal("SELECT"),
  options: z.object({
    isMulti: z.boolean(),
    optionList: z.array(z.string()),
    maxSelect: z.string().nullable(),
    minSelect: z.string().nullable(),
  }),
});

const RegularDateTimeFieldDTO = PersistBaseInputFormField.extend({
  type: z.literal("DATETIME"),
  options: z.object({
    min: z.string().optional(),
    max: z.string().optional(),
  }),
});

const RegularRichtextFieldDTO = PersistBaseInputFormField.extend({
  type: z.literal("RICHTEXT"),
  options: z.object({
    minLength: z.number().optional(),
    maxLength: z.number().optional(),
    disableImages: z.boolean().optional(),
  }),
});

const RegularSeparatorFieldDTO = PersistBaseUIFormField.extend({
  type: z.literal("SEPARATOR"),
});

const RegularCheckboxFieldDTO = PersistBaseInputFormField.extend({
  type: z.literal("CHECKBOX"),
});

const RegularAttachmentFieldDTO = PersistBaseInputFormField.extend({
  type: z.literal("ATTACHMENT"),
  options: z.object({
    maxSize: z.number().nullable(),
    minSize: z.number().nullable(),
    mimeTypes: z.array(z.string()).nullable(),
    multiple: z.boolean().nullable(),
  }),
});

export const FieldSchemaDTO = z.discriminatedUnion("type", [
  RegularNumberFieldDTO,
  RegularTextFieldDTO,
  RegularSelectFieldDTO,
  RegularDateTimeFieldDTO,
  RegularRichtextFieldDTO,
  RegularSeparatorFieldDTO,
  RegularCheckboxFieldDTO,
  RegularAttachmentFieldDTO,
]);

const CreateFormRequestDTO = z.object({
  /**
   * @type {string} - name of form
   */
  name: z.string(),
  /**
   * @type {string} - display name of form
   */
  displayName: z.string(),
  /**
   * @type {string} - project id
   */
  projectId: z.string(),
  /**
   * @type {number} - limit number of fields the form can have
   */

  schema: z.array(FieldSchemaDTO),
});

export const requestBodySchema = CreateFormRequestDTO;
