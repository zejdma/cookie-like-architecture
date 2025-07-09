"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  apiContract: () => apiContract_default,
  apiTokenContract: () => apiTokenContract_default,
  apiTokenSchema: () => apiTokenSchema_default,
  commentContract: () => commentContract_default,
  commentSchema: () => commentSchema_default,
  fileContract: () => fileContract_default,
  fileSchema: () => fileSchema_default,
  formContract: () => formContract_default,
  formSchema: () => formSchema_default,
  issueActivityContract: () => issueActivityContract_default,
  issueActivitySchema: () => issueActivitySchema_default,
  issueConfidenceContract: () => issueConfidenceContract_default,
  issueConfidenceSchema: () => issueConfidenceSchema_default,
  issueContract: () => issueContract_default,
  issueSchema: () => issueSchema_default,
  issueSubscribeContract: () => issueSubscribeContract_default,
  issueSubscribeSchema: () => issueSubscribeSchema_default,
  issueTagRouterSchema: () => issueTagContract_default,
  issueTagSchema: () => issueTagSchema_default,
  memberContract: () => memberContract_default,
  memberSchema: () => memberSchema_default,
  notificationContract: () => notificationContract_default,
  notificationSchema: () => notificationSchema_default,
  projectConfidenceContract: () => projectConfidenceContract_default,
  projectConfidenceSchema: () => projectConfidenceSchema_default,
  projectContract: () => projectContract_default,
  projectGroupContract: () => projectGroupContract_default,
  projectGroupSchema: () => projectGroupSchema_default,
  projectSchema: () => projectSchema_default,
  roleContract: () => roleContract_default,
  roleSchema: () => roleSchema_default,
  userContract: () => userContract_default,
  userSchema: () => userSchema_default
});
module.exports = __toCommonJS(src_exports);

// src/contracts/apiContract.ts
var import_core17 = require("@ts-rest/core");

// src/contracts/confidence/issueConfidenceContract.ts
var import_core_constants = require("@bistudio-feedback/core-constants");
var import_core = require("@ts-rest/core");
var import_zod6 = require("zod");

// src/contracts/confidence/issueConfidenceSchema.ts
var import_zod = require("zod");
var BasicDTO = import_zod.z.object({
  id: import_zod.z.string(),
  authorId: import_zod.z.string(),
  memberId: import_zod.z.string(),
  issueId: import_zod.z.string()
});
var ConfidentialDTO = BasicDTO.extend({
  createdAt: import_zod.z.string(),
  updatedAt: import_zod.z.string()
});
var issueConfidenceSchema = {
  BasicDTO,
  ConfidentialDTO
};
var issueConfidenceSchema_default = issueConfidenceSchema;

// src/schema/responseSchemas.ts
var import_zod2 = require("zod");
var ErrorObjectSchema = import_zod2.z.lazy(
  () => import_zod2.z.object({
    field: import_zod2.z.string(),
    message: import_zod2.z.string(),
    errors: import_zod2.z.array(ErrorObjectSchema).optional()
  })
);
var conflictSchema = import_zod2.z.object({
  title: import_zod2.z.string(),
  status: import_zod2.z.number(),
  detail: import_zod2.z.string().optional()
});
var forbiddenSchema = import_zod2.z.object({
  title: import_zod2.z.string(),
  status: import_zod2.z.number(),
  detail: import_zod2.z.string().optional(),
  errors: import_zod2.z.array(ErrorObjectSchema).optional()
});
var failSchema = import_zod2.z.object({
  title: import_zod2.z.string(),
  status: import_zod2.z.number(),
  detail: import_zod2.z.string().optional()
});
var notFoundSchema = import_zod2.z.object({
  title: import_zod2.z.string(),
  status: import_zod2.z.number(),
  detail: import_zod2.z.string().optional()
});
var badRequestSchema = import_zod2.z.object({
  title: import_zod2.z.string(),
  status: import_zod2.z.number(),
  detail: import_zod2.z.string().optional(),
  errors: import_zod2.z.array(ErrorObjectSchema).optional()
});
var unauthorizedSchema = import_zod2.z.object({
  title: import_zod2.z.string(),
  status: import_zod2.z.number(),
  detail: import_zod2.z.string().optional()
});
var okSchema = (dto2) => import_zod2.z.object({
  data: dto2 ?? import_zod2.z.object({})
});
var okNoContentSchema = import_zod2.z.object({}).nullable();

// src/contracts/confidence/issueConfidentSchema.ts
var import_zod5 = require("zod");

// src/contracts/member/memberSchema.ts
var import_zod4 = require("zod");

// src/contracts/user/userSchema.ts
var import_zod3 = require("zod");
var PublicDTO = import_zod3.z.object({
  username: import_zod3.z.string(),
  avatarId: import_zod3.z.string().optional(),
  roleId: import_zod3.z.string(),
  isVerified: import_zod3.z.boolean(),
  isDeleted: import_zod3.z.boolean(),
  isSuspended: import_zod3.z.boolean(),
  createdAt: import_zod3.z.date().optional()
});
var BasicDTO2 = PublicDTO;
var ConfidentialDTO2 = PublicDTO.extend({
  userId: import_zod3.z.string(),
  email: import_zod3.z.string(),
  newEmail: import_zod3.z.string().optional(),
  passwordChangedAt: import_zod3.z.date().optional(),
  storageId: import_zod3.z.string(),
  updatedAt: import_zod3.z.date().optional()
});
var userSchema = {
  ConfidentialDTO: ConfidentialDTO2,
  PublicDTO,
  BasicDTO: BasicDTO2
};
var userSchema_default = userSchema;

// src/contracts/file/fileSchema.ts
var z4 = __toESM(require("zod"));
var PublicDTO2 = z4.object({
  id: z4.string(),
  name: z4.string(),
  mimeType: z4.enum([
    "video/mp4', 'image/png",
    "image/jpeg",
    "image/gif",
    "image/tiff",
    "video/ogg",
    "video/webm"
  ]),
  size: z4.number(),
  slug: z4.string(),
  url: z4.string().optional(),
  key: z4.string(),
  isConfirmed: z4.boolean(),
  alt: z4.string(),
  tags: z4.array(z4.string())
});
var RegularDTO = PublicDTO2;
var ConfidentialDTO3 = RegularDTO.extend({
  isDeleted: z4.boolean(),
  authorId: z4.string(),
  unassociatedAt: z4.date().nullable().optional(),
  createdAt: z4.date(),
  updatedAt: z4.date()
});
var PubliclDetailsDTO = PublicDTO2.extend({
  url: z4.string()
});
var RegularDetailsDTO = RegularDTO.extend({
  url: z4.string()
});
var ConfidentialDetailsDTO = ConfidentialDTO3.extend({
  url: z4.string()
});
var fileSchema = {
  PublicDTO: PublicDTO2,
  PubliclDetailsDTO,
  RegularDTO,
  RegularDetailsDTO,
  ConfidentialDTO: ConfidentialDTO3,
  ConfidentialDetailsDTO
};
var fileSchema_default = fileSchema;

// src/contracts/member/memberSchema.ts
var PublicDTO3 = import_zod4.z.object({
  id: import_zod4.z.string(),
  reputation: import_zod4.z.number(),
  issuesCount: import_zod4.z.number(),
  repliesCount: import_zod4.z.number(),
  likesGiven: import_zod4.z.number(),
  solvedCount: import_zod4.z.number(),
  createdAt: import_zod4.z.date()
});
var BasicDTO3 = PublicDTO3;
var ConfidentialDTO4 = BasicDTO3.extend({
  userId: import_zod4.z.string(),
  reportsCount: import_zod4.z.number(),
  reportedOwnIssuesCount: import_zod4.z.number(),
  reportedOwnRepliesCount: import_zod4.z.number(),
  updatedAt: import_zod4.z.date()
});
var PublicMemberDetailsDTO = import_zod4.z.object({
  id: import_zod4.z.string(),
  avatar: fileSchema_default.PublicDTO,
  user: userSchema_default.PublicDTO,
  role: userSchema_default.BasicDTO,
  reputation: import_zod4.z.number(),
  issuesCount: import_zod4.z.number(),
  repliesCount: import_zod4.z.number(),
  likesGiven: import_zod4.z.number(),
  solvedCount: import_zod4.z.number(),
  isVerified: import_zod4.z.boolean(),
  isDeleted: import_zod4.z.boolean(),
  isSuspended: import_zod4.z.boolean(),
  createdAt: import_zod4.z.date()
});
var RegularMemberDetailsDTO = PublicMemberDetailsDTO.omit({
  avatar: true,
  role: true,
  user: true
}).extend({
  avatar: userSchema_default.BasicDTO,
  role: userSchema_default.BasicDTO,
  user: userSchema_default.BasicDTO
});
var ConfidentialMemberDetailsDTO = RegularMemberDetailsDTO.omit({
  role: true,
  avatar: true,
  user: true
}).extend({
  role: userSchema_default.ConfidentialDTO,
  avatar: userSchema_default.ConfidentialDTO,
  user: userSchema_default.ConfidentialDTO,
  reportsCount: import_zod4.z.number(),
  reportedOwnIssuesCount: import_zod4.z.number(),
  reportedOwnRepliesCount: import_zod4.z.number(),
  userId: import_zod4.z.string()
});
var PublicMemberDetailsShortDTO = import_zod4.z.object({
  id: import_zod4.z.string(),
  avatar: import_zod4.z.string().nullable(),
  username: import_zod4.z.string(),
  roleDisplayName: import_zod4.z.string(),
  reputation: import_zod4.z.number()
});
var RegularMemberDetailsShortDTO = PublicMemberDetailsShortDTO;
var ConfidentialMemberDetailsShortDTO = PublicMemberDetailsShortDTO;
var memberSchema = {
  PublicDTO: PublicDTO3,
  BasicDTO: BasicDTO3,
  ConfidentialDTO: ConfidentialDTO4,
  PublicMemberDetailsDTO,
  RegularMemberDetailsDTO,
  ConfidentialMemberDetailsDTO,
  PublicMemberDetailsShortDTO,
  RegularMemberDetailsShortDTO,
  ConfidentialMemberDetailsShortDTO
};
var memberSchema_default = memberSchema;

// src/contracts/confidence/issueConfidentSchema.ts
var BasicDTO4 = import_zod5.z.object({
  id: import_zod5.z.string(),
  author: memberSchema_default.BasicDTO,
  memberId: memberSchema_default.BasicDTO,
  issueId: import_zod5.z.string()
});
var ConfidentialDTO5 = import_zod5.z.object({
  id: import_zod5.z.string(),
  author: memberSchema_default.ConfidentialDTO,
  memberId: memberSchema_default.ConfidentialDTO,
  issueId: import_zod5.z.string(),
  createdAt: import_zod5.z.string(),
  updatedAt: import_zod5.z.string()
});
var issueConfidentSchema = {
  BasicDTO: BasicDTO4,
  ConfidentialDTO: ConfidentialDTO5
};
var issueConfidentSchema_default = issueConfidentSchema;

// src/contracts/confidence/issueConfidenceContract.ts
var CreateIssueConfidenceRequestDTO = import_zod6.z.object({
  authorId: import_zod6.z.string(),
  memberId: import_zod6.z.string(),
  issueId: import_zod6.z.string()
});
var CreateMyIssueConfidenceRequestDTO = import_zod6.z.object({
  issueId: import_zod6.z.string(),
  memberId: import_zod6.z.string()
});
var c = (0, import_core.initContract)();
var issueConfidenceContract = c.router(
  {
    getIssueConfidences: {
      method: "GET",
      path: `/issue-confidences`,
      headers: import_zod6.z.object({
        authorization: import_zod6.z.string()
      }),
      query: import_zod6.z.object({
        /**
         * @type {string} - limit of records
         */
        limit: import_zod6.z.string().optional(),
        /**
         * @type {string} - page number
         */
        page: import_zod6.z.string().optional(),
        /**
         * @type {string} - issue id to issue or issue
         */
        issueId: import_zod6.z.string().optional(),
        /**
         * @type {string} - author id
         */
        authorId: import_zod6.z.string().optional(),
        /**
         * @type {string} - member id
         */
        memberId: import_zod6.z.string().optional()
      }),
      responses: {
        200: okSchema(issueConfidenceSchema_default.ConfidentialDTO),
        500: import_zod6.z.object({ message: import_zod6.z.string() })
      },
      summary: "Get issue confidences by query",
      metadata: {
        permissions: {
          OR: [
            import_core_constants.PermissionList.ReadConfidenceAny,
            import_core_constants.PermissionList.ReadConfidenceOwn
          ]
        }
      }
    },
    getIssueConfidenceById: {
      method: "GET",
      path: `/issue-confidences/:confidenceId`,
      headers: import_zod6.z.object({
        authorization: import_zod6.z.string()
      }),
      responses: {
        200: okSchema(issueConfidenceSchema_default.ConfidentialDTO),
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Get issue confidence by id",
      metadata: {
        permissions: {
          OR: [
            import_core_constants.PermissionList.ReadConfidenceAny,
            import_core_constants.PermissionList.ReadConfidenceOwn
          ]
        }
      }
    },
    deleteIssueConfidence: {
      method: "DELETE",
      path: `/issue-confidences`,
      headers: import_zod6.z.object({
        authorization: import_zod6.z.string()
      }),
      body: import_zod6.z.object({
        issueId: import_zod6.z.string(),
        memberId: import_zod6.z.string()
      }),
      responses: {
        204: okNoContentSchema,
        403: forbiddenSchema,
        409: conflictSchema,
        500: failSchema
      },
      summary: "Delete issue confidence by memberId and issueId",
      metadata: {
        permissions: {
          OR: [
            import_core_constants.PermissionList.DeleteConfidenceAny,
            import_core_constants.PermissionList.DeleteConfidenceOwn,
            import_core_constants.PermissionList.ManageProjectAsModerator
          ]
        }
      }
    },
    createMyIssueConfidence: {
      method: "POST",
      path: `/members/me/issue-confidences`,
      body: CreateMyIssueConfidenceRequestDTO,
      headers: import_zod6.z.object({
        authorization: import_zod6.z.string()
      }),
      responses: {
        200: okSchema(issueConfidenceSchema_default.ConfidentialDTO),
        409: conflictSchema,
        500: failSchema
      },
      summary: "Create issue confidence record by logged member",
      metadata: {
        permissions: import_core_constants.PermissionList.CreateConfidenceOwn
      }
    },
    createIssueConfidence: {
      method: "POST",
      path: `/issue-confidences`,
      body: CreateIssueConfidenceRequestDTO,
      headers: import_zod6.z.object({
        authorization: import_zod6.z.string()
      }),
      responses: {
        200: okSchema(import_zod6.z.array(issueConfidentSchema_default.BasicDTO)),
        409: conflictSchema,
        500: failSchema
      },
      summary: "Create project confidence record managed by moderator or admin",
      metadata: {
        permissions: import_core_constants.PermissionList.CreateConfidenceAny
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var issueConfidenceContract_default = issueConfidenceContract;

// src/contracts/issueSubscribe/issueSubscribeContract.ts
var import_zod10 = require("zod");
var import_core2 = require("@ts-rest/core");
var import_core_constants2 = require("@bistudio-feedback/core-constants");

// src/contracts/issueSubscribe/issueSubscribeSchema.ts
var import_zod9 = require("zod");

// src/contracts/form/formRequestBody.ts
var import_zod7 = require("zod");
var PersistBaseInputFormField = import_zod7.z.object({
  name: import_zod7.z.string(),
  label: import_zod7.z.string(),
  placeholder: import_zod7.z.string().optional(),
  helperText: import_zod7.z.string().optional(),
  visibility: import_zod7.z.string(),
  required: import_zod7.z.boolean().optional()
});
var PersistBaseUIFormField = import_zod7.z.object({
  name: import_zod7.z.string(),
  type: import_zod7.z.string()
});
var RegularNumberFieldDTO = PersistBaseInputFormField.extend({
  type: import_zod7.z.literal("NUMBER"),
  options: import_zod7.z.object({
    min: import_zod7.z.number().optional(),
    max: import_zod7.z.number().optional(),
    noDecimal: import_zod7.z.boolean().optional()
  })
});
var RegularTextFieldDTO = PersistBaseInputFormField.extend({
  type: import_zod7.z.literal("TEXT"),
  options: import_zod7.z.object({
    minLength: import_zod7.z.number().optional(),
    maxLength: import_zod7.z.number().optional(),
    pattern: import_zod7.z.string().optional()
  })
});
var RegularSelectFieldDTO = PersistBaseInputFormField.extend({
  type: import_zod7.z.literal("SELECT"),
  options: import_zod7.z.object({
    isMulti: import_zod7.z.boolean(),
    optionList: import_zod7.z.array(import_zod7.z.string()),
    maxSelect: import_zod7.z.number().nullable(),
    minSelect: import_zod7.z.number().nullable()
  })
});
var RegularDateTimeFieldDTO = PersistBaseInputFormField.extend({
  type: import_zod7.z.literal("DATETIME"),
  options: import_zod7.z.object({
    min: import_zod7.z.string().optional(),
    max: import_zod7.z.string().optional()
  })
});
var RegularRichtextFieldDTO = PersistBaseInputFormField.extend({
  type: import_zod7.z.literal("RICHTEXT"),
  options: import_zod7.z.object({
    minLength: import_zod7.z.number().optional(),
    maxLength: import_zod7.z.number().optional(),
    disableImages: import_zod7.z.boolean().optional()
  })
});
var RegularSeparatorFieldDTO = PersistBaseUIFormField.extend({
  type: import_zod7.z.literal("SEPARATOR")
});
var FieldSchemaDTO = import_zod7.z.discriminatedUnion("type", [
  RegularNumberFieldDTO,
  RegularTextFieldDTO,
  RegularSelectFieldDTO,
  RegularDateTimeFieldDTO,
  RegularRichtextFieldDTO,
  RegularSeparatorFieldDTO
]);
var CreateFormRequestDTO = import_zod7.z.object({
  /**
   * @type {string} - name of form
   */
  name: import_zod7.z.string(),
  /**
   * @type {string} - display name of form
   */
  displayName: import_zod7.z.string(),
  /**
   * @type {string} - project id
   */
  projectId: import_zod7.z.string(),
  /**
   * @type {number} - limit number of fields the form can have
   */
  schema: import_zod7.z.array(FieldSchemaDTO)
});
var requestBodySchema = CreateFormRequestDTO;

// src/contracts/issueTag/issueTagSchema.ts
var import_zod8 = require("zod");
var IssueTagDTO = import_zod8.z.object({
  id: import_zod8.z.string(),
  displayName: import_zod8.z.string(),
  name: import_zod8.z.string(),
  color: import_zod8.z.string(),
  description: import_zod8.z.string()
});
var IssueTagDetailsDTO = IssueTagDTO.extend({
  count: import_zod8.z.number(),
  createdAt: import_zod8.z.string(),
  updatedAt: import_zod8.z.string()
});
var issueTagSchema = {
  IssueTagDTO,
  IssueTagDetailsDTO
};
var issueTagSchema_default = issueTagSchema;

// src/contracts/issue/issueSchema.ts
var z10 = __toESM(require("zod"));
var PreviewDTO = z10.object({
  id: z10.string(),
  title: z10.string(),
  tags: z10.array(z10.string()),
  state: z10.string(),
  key: z10.string(),
  points: z10.number(),
  commentsCount: z10.number(),
  attachmentsCount: z10.number()
});
var PublicDTO4 = z10.object({
  id: z10.string(),
  title: z10.string(),
  tags: z10.array(z10.string()),
  state: z10.string(),
  key: z10.string(),
  schema: z10.array(FieldSchemaDTO),
  fields: z10.array(
    z10.object({
      name: z10.string(),
      type: z10.string(),
      value: z10.any()
    })
  ),
  points: z10.number(),
  commentsCount: z10.number(),
  authorId: z10.string(),
  projectId: z10.string(),
  isSuspend: z10.boolean().optional(),
  visibility: z10.string(),
  lastChangeAt: z10.date(),
  createdAt: z10.date()
});
var RegularDTO2 = PublicDTO4.extend({});
var PublicDetailsDTO = PublicDTO4.extend({
  id: z10.string(),
  title: z10.string(),
  tags: z10.array(issueTagSchema_default.IssueTagDTO),
  state: z10.string(),
  key: z10.string(),
  points: z10.number(),
  commentsCount: z10.number(),
  fields: z10.array(
    z10.object({
      name: z10.string(),
      type: z10.string(),
      value: z10.any()
    })
  ),
  author: z10.object({
    id: z10.string(),
    username: z10.string(),
    email: z10.string(),
    roleName: z10.string(),
    roleDisplayName: z10.string()
  }),
  project: z10.object({
    id: z10.string(),
    slug: z10.string(),
    name: z10.string(),
    displayName: z10.string()
  }),
  group: z10.object({
    id: z10.string(),
    slug: z10.string(),
    name: z10.string(),
    displayName: z10.string()
  }),
  isSuspend: z10.boolean().optional(),
  visibility: z10.string(),
  lastChangeAt: z10.date(),
  createdAt: z10.date()
});
var RegularDetailsDTO2 = PublicDetailsDTO.extend({
  operations: z10.object({
    canBlock: z10.boolean(),
    canDelete: z10.boolean(),
    canUpdateState: z10.boolean(),
    canEditFields: z10.boolean(),
    canEditInternalFields: z10.boolean(),
    canEditHiddenFields: z10.boolean(),
    canUpdateConfidents: z10.boolean(),
    canBlockComments: z10.boolean(),
    canDeleteComments: z10.boolean(),
    canUpdateTags: z10.boolean(),
    canUpdateVisibility: z10.boolean()
  }),
  isUpvotedByMe: z10.boolean(),
  isDownvotedByMe: z10.boolean()
});
var ConfidentialDTO6 = RegularDTO2.extend({
  updatedAt: z10.date()
  // suspend: z.object({
  //   reason: z.string(),
  //   date: z.date(),
  //   suspendedBy: z.string(),
  // }),
});
var ConfidentialDetailsDTO2 = RegularDetailsDTO2.extend({
  updatedAt: z10.date()
});
var PublicInListDetailsDTO = PublicDetailsDTO.omit({
  fields: true
});
var RegularInListDetailsDTO = PublicInListDetailsDTO;
var ConfidentialInListDetailsDTO = RegularInListDetailsDTO.extend({
  updatedAt: z10.date()
});
var issueSchema = {
  PreviewDTO,
  PublicDTO: PublicDTO4,
  PublicDetailsDTO,
  RegularDTO: RegularDTO2,
  RegularDetailsDTO: RegularDetailsDTO2,
  ConfidentialDTO: ConfidentialDTO6,
  ConfidentialDetailsDTO: ConfidentialDetailsDTO2,
  PublicInListDetailsDTO,
  RegularInListDetailsDTO,
  ConfidentialInListDetailsDTO
};
var issueSchema_default = issueSchema;

// src/contracts/issueSubscribe/issueSubscribeSchema.ts
var ConfidentialDTO7 = import_zod9.z.object({
  id: import_zod9.z.string(),
  memberId: import_zod9.z.string(),
  issueId: import_zod9.z.string(),
  createdAt: import_zod9.z.string(),
  updatedAt: import_zod9.z.string()
});
var ConfidentialDetailsDTO3 = ConfidentialDTO7.omit({
  issueId: true
}).extend({
  issue: issueSchema_default.ConfidentialInListDetailsDTO
});
var issueConfidenceSchema2 = {
  ConfidentialDTO: ConfidentialDTO7,
  ConfidentialDetailsDTO: ConfidentialDetailsDTO3
};
var issueSubscribeSchema_default = issueConfidenceSchema2;

// src/contracts/issueSubscribe/issueSubscribeContract.ts
var SubscribeIssueRequestDTO = import_zod10.z.object({
  issueId: import_zod10.z.string()
});
var c2 = (0, import_core2.initContract)();
var issueSubscribeSchema = c2.router(
  {
    subscribe: {
      method: "POST",
      path: `/issues/:issueId/subscribe`,
      body: SubscribeIssueRequestDTO,
      headers: import_zod10.z.object({
        authorization: import_zod10.z.string()
      }),
      responses: {
        201: okSchema(issueSubscribeSchema_default.ConfidentialDTO),
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema
      },
      summary: "Susbcribe notification to the issue",
      metadata: {
        permissions: import_core_constants2.PermissionList.SubscribeIssue
      }
    },
    unsubscribe: {
      method: "POST",
      path: `/issues/:issueId/unsubscribe`,
      body: SubscribeIssueRequestDTO,
      headers: import_zod10.z.object({
        authorization: import_zod10.z.string()
      }),
      responses: {
        204: okNoContentSchema,
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Unusubscribe issue notification to the issue",
      metadata: {
        permissions: import_core_constants2.PermissionList.SubscribeIssue
      }
    },
    getMySubscribedIssues: {
      method: "GET",
      path: `/issues/subscribed`,
      headers: import_zod10.z.object({
        authorization: import_zod10.z.string()
      }),
      query: import_zod10.z.object({
        page: import_zod10.z.string().optional(),
        limit: import_zod10.z.string().optional()
      }),
      responses: {
        200: okSchema(import_zod10.z.array(issueConfidenceSchema_default.ConfidentialDTO)),
        500: failSchema
      },
      summary: "Get my subscribed issues",
      metadata: {
        permissions: import_core_constants2.PermissionList.SubscribeIssue
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var issueSubscribeContract_default = issueSubscribeSchema;

// src/contracts/notification/notificationContract.ts
var import_zod12 = require("zod");
var import_core3 = require("@ts-rest/core");

// src/contracts/notification/notificationSchema.ts
var import_zod11 = require("zod");
var ConfidentialDTO8 = import_zod11.z.object({
  id: import_zod11.z.string(),
  template: import_zod11.z.string(),
  memberId: import_zod11.z.string(),
  type: import_zod11.z.string(),
  isRead: import_zod11.z.boolean(),
  createdAt: import_zod11.z.string(),
  updatedAt: import_zod11.z.string()
});
var notificationSchema = {
  ConfidentialDTO: ConfidentialDTO8
};
var notificationSchema_default = notificationSchema;

// src/contracts/notification/notificationContract.ts
var c3 = (0, import_core3.initContract)();
var notificationContract = c3.router(
  {
    getCurrentMemberNotifications: {
      method: "GET",
      path: `/members/me/notifications`,
      headers: import_zod12.z.object({
        authorization: import_zod12.z.string()
      }),
      responses: {
        200: okSchema(notificationSchema_default.ConfidentialDTO),
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Create issue confidence record by logged member",
      metadata: {
        permissions: {}
      }
    },
    readCurrentMemberNotification: {
      method: "POST",
      path: `/members/me/notifications/:notificationId/read`,
      headers: import_zod12.z.object({
        authorization: import_zod12.z.string()
      }),
      body: import_zod12.z.object({}).nullable().optional(),
      responses: {
        200: okSchema(notificationSchema_default.ConfidentialDTO),
        400: badRequestSchema,
        500: failSchema
      },
      summary: "Read current member notification",
      metadata: {
        permissions: {}
      }
    },
    readCurrentMemberAllNotifications: {
      method: "POST",
      path: `/members/me/notifications/read-all`,
      headers: import_zod12.z.object({
        authorization: import_zod12.z.string()
      }),
      body: import_zod12.z.object({}).nullable().optional(),
      responses: {
        200: okSchema(import_zod12.z.array(notificationSchema_default.ConfidentialDTO)),
        400: badRequestSchema,
        500: failSchema
      },
      summary: "Read all current member notifications",
      metadata: {
        permissions: {}
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var notificationContract_default = notificationContract;

// src/contracts/apiToken/apiTokenContract.ts
var import_core4 = require("@ts-rest/core");
var import_zod14 = require("zod");
var import_core_constants3 = require("@bistudio-feedback/core-constants");

// src/contracts/apiToken/apiTokenSchema.ts
var import_zod13 = require("zod");
var dto = import_zod13.z.object({
  id: import_zod13.z.string(),
  displayName: import_zod13.z.string(),
  hash: import_zod13.z.string().optional(),
  token: import_zod13.z.string().optional(),
  expiration: import_zod13.z.date().nullable(),
  resourceAccess: import_zod13.z.object({
    issue: import_zod13.z.array(
      import_zod13.z.object({
        projectId: import_zod13.z.string(),
        scopes: import_zod13.z.array(import_zod13.z.string())
      })
    )
  }),
  createdAt: import_zod13.z.date(),
  updatedAt: import_zod13.z.date()
});
var apiTokenSchema = {
  dto
};
var apiTokenSchema_default = apiTokenSchema;

// src/contracts/apiToken/apiTokenContract.ts
var c4 = (0, import_core4.initContract)();
var apiTokenContract = c4.router(
  {
    generateNewApiToken: {
      method: "POST",
      path: `/api-tokens`,
      headers: import_zod14.z.object({
        authorization: import_zod14.z.string()
      }),
      body: import_zod14.z.object({
        /*
         * @type {string} - display name of token
         */
        displayName: import_zod14.z.string(),
        /*
         * @type {Array<{projectId: string; scopes: Array<string>}>} - resource access issue
         */
        issueResourceAccess: import_zod14.z.array(
          import_zod14.z.object({
            projectId: import_zod14.z.string(),
            scopes: import_zod14.z.array(import_zod14.z.string())
          })
        ),
        /*
         * @type {Date} - expiration date of token
         */
        expiration: import_zod14.z.string().nullable().optional()
      }),
      responses: {
        200: okSchema(apiTokenSchema_default.dto),
        409: conflictSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Generate new api token",
      metadata: {
        permissions: import_core_constants3.PermissionList.CreateApiToken
      }
    },
    regenerateApiToken: {
      method: "POST",
      path: `/api-tokens/:id/regenerate`,
      headers: import_zod14.z.object({
        authorization: import_zod14.z.string()
      }),
      body: import_zod14.z.object({}).nullable().optional(),
      responses: {
        200: okSchema(apiTokenSchema_default.dto),
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Regenerate api token",
      metadata: {
        permissions: import_core_constants3.PermissionList.CreateApiToken
      }
    },
    editApiToken: {
      method: "POST",
      path: `/api-tokens/:id/edit`,
      headers: import_zod14.z.object({
        authorization: import_zod14.z.string()
      }),
      body: import_zod14.z.object({
        /*
         * @type {string} - display name of token
         */
        displayName: import_zod14.z.string()
      }),
      responses: {
        200: okSchema(apiTokenSchema_default.dto),
        403: forbiddenSchema,
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema
      },
      summary: "Edit api token",
      metadata: {
        permissions: import_core_constants3.PermissionList.UpdateApiToken
      }
    },
    deleteApiToken: {
      method: "DELETE",
      path: `/api-tokens/:id`,
      headers: import_zod14.z.object({
        authorization: import_zod14.z.string()
      }),
      body: import_zod14.z.object({}).nullable().optional(),
      responses: {
        204: okNoContentSchema,
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Delete apiToken by id",
      metadata: {
        permissions: import_core_constants3.PermissionList.DeleteApiToken
      }
    },
    getApiTokens: {
      method: "GET",
      path: `/api-tokens`,
      headers: import_zod14.z.object({
        authorization: import_zod14.z.string()
      }),
      query: import_zod14.z.object({
        /*
         * @type {number} - page number, default is 1
         */
        page: import_zod14.z.string().optional(),
        /*
         * @type {string} - limit of items per page, default is 50
         */
        limit: import_zod14.z.string().optional(),
        /*
         * @type {string} - search string
         */
        search: import_zod14.z.string().optional()
      }),
      responses: {
        200: okSchema(
          import_zod14.z.object({
            data: import_zod14.z.array(apiTokenSchema_default.dto),
            count: import_zod14.z.number()
          })
        ),
        401: unauthorizedSchema,
        500: failSchema
      },
      summary: "Get all api tokens",
      metadata: {
        permissions: import_core_constants3.PermissionList.ReadApiToken
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var apiTokenContract_default = apiTokenContract;

// src/contracts/comment/commentContract.ts
var import_core5 = require("@ts-rest/core");
var import_zod16 = require("zod");

// src/contracts/comment/commentSchema.ts
var import_zod15 = require("zod");
var RegularDTO3 = import_zod15.z.object({
  id: import_zod15.z.string(),
  content: import_zod15.z.string(),
  authorId: import_zod15.z.string(),
  issueId: import_zod15.z.string(),
  parentCommentId: import_zod15.z.string().optional(),
  createdAt: import_zod15.z.date().optional(),
  updatedAt: import_zod15.z.date().optional()
});
var SuspendDTO = RegularDTO3.omit({ content: true }).extend({
  suspend: import_zod15.z.object({
    reason: import_zod15.z.string(),
    date: import_zod15.z.date(),
    suspendedBy: import_zod15.z.string()
  })
});
var ConfidentialDTO9 = RegularDTO3.extend({
  suspend: import_zod15.z.object({
    reason: import_zod15.z.string(),
    date: import_zod15.z.date(),
    suspendedBy: import_zod15.z.string()
  }).optional(),
  reports: import_zod15.z.array(import_zod15.z.string()).optional()
});
var RegularDetailsDTO3 = import_zod15.z.object({
  id: import_zod15.z.string(),
  author: memberSchema_default.PublicMemberDetailsShortDTO,
  moderator: import_zod15.z.object({
    id: import_zod15.z.string(),
    displayRole: import_zod15.z.string(),
    displayRoleColor: import_zod15.z.string()
  }).optional(),
  content: import_zod15.z.string(),
  issueId: import_zod15.z.string(),
  parentCommentId: import_zod15.z.string().optional(),
  createdAt: import_zod15.z.date().optional(),
  updatedAt: import_zod15.z.date().optional()
});
var SuspendDetailsDTO = RegularDetailsDTO3.omit({ content: true }).extend({
  suspend: import_zod15.z.object({
    reason: import_zod15.z.string(),
    type: import_zod15.z.string(),
    by: import_zod15.z.string(),
    suspendedAt: import_zod15.z.date()
  })
});
var ConfidentialDetailsDTO4 = RegularDetailsDTO3.extend({
  suspend: import_zod15.z.object({
    reason: import_zod15.z.string(),
    type: import_zod15.z.string(),
    by: import_zod15.z.string(),
    suspendedAt: import_zod15.z.date()
  }).optional(),
  reports: import_zod15.z.array(import_zod15.z.string()).optional()
});
var commentSchema = {
  RegularDTO: RegularDTO3,
  SuspendDTO,
  ConfidentialDTO: ConfidentialDTO9,
  RegularDetailsDTO: RegularDetailsDTO3,
  SuspendDetailsDTO,
  ConfidentialDetailsDTO: ConfidentialDetailsDTO4
};
var commentSchema_default = commentSchema;

// src/contracts/comment/commentContract.ts
var import_core_constants4 = require("@bistudio-feedback/core-constants");
var c5 = (0, import_core5.initContract)();
var commentContract = c5.router(
  {
    replyToComment: {
      method: "POST",
      path: `/comments/:commentId/reply`,
      headers: import_zod16.z.object({
        authorization: import_zod16.z.string()
      }),
      body: import_zod16.z.object({
        /*
         * @type {string} - content of comment
         */
        content: import_zod16.z.string()
      }),
      responses: {
        200: okSchema(commentSchema_default.RegularDTO),
        403: forbiddenSchema,
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Reply to comment",
      metadata: {
        permissions: import_core_constants4.PermissionList.CreateComment
      }
    },
    replyToIssue: {
      method: "POST",
      path: `/issues/:issueId/reply`,
      headers: import_zod16.z.object({
        authorization: import_zod16.z.string()
      }),
      body: import_zod16.z.object({
        /*
         * @type {string} - content of comment
         */
        content: import_zod16.z.string()
      }),
      responses: {
        200: okSchema(commentSchema_default.RegularDTO),
        403: forbiddenSchema,
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Reply to issue",
      metadata: {
        permissions: import_core_constants4.PermissionList.CreateComment
      }
    },
    getIssueComments: {
      method: "GET",
      path: `/issues/:issueId/comments`,
      headers: import_zod16.z.object({
        authorization: import_zod16.z.string().optional()
      }),
      // query: z.object({
      //   page: z.string().optional(),
      //   limit: z.string().optional(),
      // }),
      responses: {
        200: okSchema(
          import_zod16.z.array(
            import_zod16.z.union([
              commentSchema_default.RegularDetailsDTO,
              commentSchema_default.SuspendDetailsDTO,
              commentSchema_default.ConfidentialDetailsDTO
            ])
          )
        ),
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Get all issue comments",
      metadata: {
        isPublic: true,
        permissions: {}
      }
    }
    // getCommentById: {
    //   method: "GET",
    //   path: `/comments/by/id/:commentId`,
    //   headers: z
    //     .object({
    //       authorization: z.string(),
    //     })
    //     .optional(),
    //   responses: {
    //     200: okSchema(
    //       z.union([
    //         commentSchema.ConfidentialDTO,
    //         commentSchema.RegularDTO,
    //         commentSchema.SuspendDTO,
    //       ])
    //     ),
    //     404: notFoundSchema,
    //     500: failSchema,
    //   },
    //   summary: "Get a comment by id",
    //   metadata: {
    //     isPublic: true,
    //     permissions: {},
    //   },
    // },
    // getComments: {
    //   method: "GET",
    //   path: `/comments`,
    //   headers: z
    //     .object({
    //       authorization: z.string(),
    //     })
    //     .optional(),
    //   query: z.object({
    //     issueId: z.string(),
    //   }),
    //   responses: {
    //     200: okSchema(
    //       z.array(
    //         z.union([
    //           commentSchema.ConfidentialDTO,
    //           commentSchema.RegularDTO,
    //           commentSchema.SuspendDTO,
    //         ])
    //       )
    //     ),
    //     500: failSchema,
    //   },
    //   summary: "Get comments",
    //   metadata: {
    //     isPublic: true,
    //     permissions: {},
    //   },
    // },
  },
  {
    pathPrefix: "/api"
  }
);
var commentContract_default = commentContract;

// src/contracts/confidence/projectConfidenceContract.ts
var import_core_constants5 = require("@bistudio-feedback/core-constants");
var import_core6 = require("@ts-rest/core");
var import_zod18 = require("zod");

// src/contracts/confidence/projectConfidenceSchema.ts
var import_zod17 = require("zod");
var BasicDTO5 = import_zod17.z.object({
  id: import_zod17.z.string(),
  authorId: import_zod17.z.string(),
  memberId: import_zod17.z.string(),
  projectId: import_zod17.z.string()
});
var ConfidentialDTO10 = BasicDTO5.extend({
  createdAt: import_zod17.z.string(),
  updatedAt: import_zod17.z.string()
});
var projectConfidenceSchema = {
  BasicDTO: BasicDTO5,
  ConfidentialDTO: ConfidentialDTO10
};
var projectConfidenceSchema_default = projectConfidenceSchema;

// src/contracts/confidence/projectConfidenceContract.ts
var CreateProjectConfidenceRequestDTO = import_zod18.z.object({
  authorId: import_zod18.z.string(),
  memberId: import_zod18.z.string(),
  projectId: import_zod18.z.string()
});
var CreateMyProjectConfidenceRequestDTO = import_zod18.z.object({
  projectId: import_zod18.z.string(),
  memberId: import_zod18.z.string()
});
var c6 = (0, import_core6.initContract)();
var projectConfidenceContract = c6.router(
  {
    getProjectConfidences: {
      method: "GET",
      path: `/project-confidences`,
      headers: import_zod18.z.object({
        authorization: import_zod18.z.string()
      }),
      query: import_zod18.z.object({
        /**
         * @type {string} - limit of records
         */
        limit: import_zod18.z.string().optional(),
        /**
         * @type {string} - page number
         */
        page: import_zod18.z.string().optional(),
        /**
         * @type {string} - type of confidence
         */
        projectId: import_zod18.z.string().optional(),
        /**
         * @type {string} - author id
         */
        authorId: import_zod18.z.string().optional(),
        /**
         * @type {string} - member id
         */
        memberId: import_zod18.z.string().optional()
      }),
      responses: {
        200: okSchema(projectConfidenceSchema_default.ConfidentialDTO),
        500: import_zod18.z.object({ message: import_zod18.z.string() })
      },
      summary: "Get project confidences by query",
      metadata: {
        permissions: {
          OR: [
            import_core_constants5.PermissionList.ReadConfidenceAny,
            import_core_constants5.PermissionList.ReadConfidenceOwn
          ]
        }
      }
    },
    getProjectConfidenceById: {
      method: "GET",
      path: `/project-confidences/:confidenceId`,
      headers: import_zod18.z.object({
        authorization: import_zod18.z.string()
      }),
      responses: {
        200: okSchema(projectConfidenceSchema_default.ConfidentialDTO),
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Get project confidence by id",
      metadata: {
        permissions: {
          OR: [
            import_core_constants5.PermissionList.ReadConfidenceAny,
            import_core_constants5.PermissionList.ReadConfidenceOwn
          ]
        }
      }
    },
    deleteProjectConfidence: {
      method: "DELETE",
      path: `/project-confidences`,
      headers: import_zod18.z.object({
        authorization: import_zod18.z.string()
      }),
      body: import_zod18.z.object({
        projectId: import_zod18.z.string(),
        memberId: import_zod18.z.string()
      }),
      responses: {
        204: okNoContentSchema,
        403: forbiddenSchema,
        409: conflictSchema,
        500: failSchema
      },
      summary: "Delete project confidence by memberId and projectId",
      metadata: {
        permissions: {
          OR: [
            import_core_constants5.PermissionList.DeleteConfidenceAny,
            import_core_constants5.PermissionList.DeleteConfidenceOwn,
            import_core_constants5.PermissionList.ManageProjectAsModerator
          ]
        }
      }
    },
    createMyProjectConfidence: {
      method: "POST",
      path: `/members/me/project-confidences`,
      body: CreateMyProjectConfidenceRequestDTO,
      headers: import_zod18.z.object({
        authorization: import_zod18.z.string()
      }),
      responses: {
        200: okSchema(projectConfidenceSchema_default.ConfidentialDTO),
        409: conflictSchema,
        500: failSchema
      },
      summary: "Create project confidence record by logged member",
      metadata: {
        permissions: import_core_constants5.PermissionList.CreateConfidenceOwn
      }
    },
    createProjectConfidence: {
      method: "POST",
      path: `/project-confidences`,
      body: CreateProjectConfidenceRequestDTO,
      headers: import_zod18.z.object({
        authorization: import_zod18.z.string()
      }),
      responses: {
        200: okSchema(projectConfidenceSchema_default.ConfidentialDTO),
        409: conflictSchema,
        500: failSchema
      },
      summary: "Create project confidence record managed by moderator or admin",
      metadata: {
        permissions: import_core_constants5.PermissionList.CreateConfidenceAny
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var projectConfidenceContract_default = projectConfidenceContract;

// src/contracts/file/fileContract.ts
var import_core_constants6 = require("@bistudio-feedback/core-constants");
var import_core7 = require("@ts-rest/core");
var import_zod19 = require("zod");
var c7 = (0, import_core7.initContract)();
var fileContract = c7.router(
  {
    getMyFileById: {
      method: "GET",
      path: `/files/:fileId`,
      headers: import_zod19.z.object({
        authorization: import_zod19.z.string()
      }).optional(),
      responses: {
        200: okSchema(fileSchema_default.ConfidentialDetailsDTO),
        404: notFoundSchema,
        500: import_zod19.z.object({ message: import_zod19.z.string() })
      },
      summary: "Get file by id",
      metadata: {
        isPublic: true,
        permissions: import_core_constants6.PermissionList.ReadFileOwn
      }
    },
    uploadMyFiles: {
      method: "POST",
      path: `/members/me/files`,
      headers: import_zod19.z.object({
        authorization: import_zod19.z.string()
      }),
      contentType: "multipart/form-data",
      body: c7.type(),
      responses: {
        200: okSchema(import_zod19.z.array(fileSchema_default.ConfidentialDTO)),
        403: forbiddenSchema,
        500: import_zod19.z.object({ message: import_zod19.z.string() })
      },
      summary: "Upload my files to the storage",
      metadata: {
        permissions: import_core_constants6.PermissionList.CreateFileOwn
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var fileContract_default = fileContract;

// src/contracts/form/formContract.ts
var import_core8 = require("@ts-rest/core");
var import_zod20 = require("zod");

// src/contracts/form/formSchema.ts
var z22 = __toESM(require("zod"));
var PublicDTO5 = z22.object({
  id: z22.string(),
  name: z22.string(),
  displayName: z22.string(),
  authorId: z22.string(),
  project: z22.object({
    id: z22.string(),
    name: z22.string(),
    displayName: z22.string(),
    slug: z22.string(),
    associatedAt: z22.date()
  }).nullable(),
  fieldsLimit: z22.number(),
  fields: z22.array(
    z22.object({
      name: z22.string(),
      displayName: z22.string(),
      label: z22.string(),
      type: z22.string(),
      required: z22.boolean(),
      // TODO: replace any with zod union type
      options: z22.any()
    })
  )
});
var RegularDTO4 = PublicDTO5;
var ConfidentialDTO11 = RegularDTO4.extend({
  createdAt: z22.date(),
  updatedAt: z22.date()
});
var formSchema = {
  PublicDTO: PublicDTO5,
  RegularDTO: RegularDTO4,
  ConfidentialDTO: ConfidentialDTO11
};
var formSchema_default = formSchema;

// src/contracts/form/formContract.ts
var c8 = (0, import_core8.initContract)();
var formContract = c8.router(
  {
    createForm: {
      method: "POST",
      path: `/forms`,
      headers: import_zod20.z.object({
        authorization: import_zod20.z.string()
      }),
      body: requestBodySchema,
      responses: {
        200: okSchema(formSchema_default.RegularDTO),
        403: forbiddenSchema,
        409: conflictSchema,
        500: import_zod20.z.object({ message: import_zod20.z.string() })
      },
      summary: "Create form",
      metadata: {
        permissions: {}
      }
    },
    getFormById: {
      method: "GET",
      path: `/forms/by/id/:formId`,
      headers: import_zod20.z.object({
        authorization: import_zod20.z.string()
      }).optional(),
      responses: {
        200: okSchema(
          import_zod20.z.union([
            formSchema_default.ConfidentialDTO,
            formSchema_default.RegularDTO,
            formSchema_default.PublicDTO
          ])
        ),
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Get a form by id",
      metadata: {
        isPublic: true,
        permissions: {}
      }
    },
    getForms: {
      method: "GET",
      path: "/forms",
      headers: import_zod20.z.object({
        authorization: import_zod20.z.string()
      }),
      query: import_zod20.z.object({
        /**
         * @type {string} - page number
         */
        page: import_zod20.z.string().optional(),
        /**
         * @type {string} - limit of records
         */
        limit: import_zod20.z.string().optional(),
        /**
         * @type {string} - project ids to filter
         */
        projectIds: import_zod20.z.string().optional(),
        /**
         * @type {string} - search string - name. displayName
         */
        search: import_zod20.z.string().optional()
      }),
      responses: {
        200: okSchema(
          import_zod20.z.union([
            formSchema_default.ConfidentialDTO,
            formSchema_default.RegularDTO,
            formSchema_default.PublicDTO
          ])
        ),
        500: import_zod20.z.object({ message: import_zod20.z.string() })
      },
      summary: "Get forms list",
      metadata: {
        permissions: {}
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var formContract_default = formContract;

// src/contracts/issue/issueRequestBody.ts
var import_zod21 = require("zod");
var CreateIssueRequestDTO = import_zod21.z.object({
  /**
   * @type {string} - title of issue
   */
  title: import_zod21.z.string(),
  /**
   * @type {Object} - array of fields, they compose issue
   */
  fields: import_zod21.z.array(
    import_zod21.z.object({
      name: import_zod21.z.string(),
      value: import_zod21.z.any()
    })
  ),
  tagIds: import_zod21.z.array(import_zod21.z.string()),
  /**
   * @type {boolean} - is issue private
   */
  isPrivate: import_zod21.z.boolean(),
  /**
   * @type {string} - id of project
   */
  projectId: import_zod21.z.string()
});
var requestBodySchema2 = CreateIssueRequestDTO;

// src/contracts/issue/issueContract.ts
var import_core_constants7 = require("@bistudio-feedback/core-constants");
var import_core9 = require("@ts-rest/core");
var import_zod22 = require("zod");
var c9 = (0, import_core9.initContract)();
var issueContract = c9.router(
  {
    createIssue: {
      method: "POST",
      path: `/issues`,
      headers: import_zod22.z.object({
        authorization: import_zod22.z.string()
      }),
      body: requestBodySchema2,
      responses: {
        200: okSchema(issueSchema_default.ConfidentialDetailsDTO),
        403: forbiddenSchema,
        409: conflictSchema,
        500: import_zod22.z.object({ message: import_zod22.z.string() })
      },
      summary: "Create issue",
      metadata: {
        permissions: {
          AND: [
            {
              OR: [
                import_core_constants7.PermissionList.ReadProjectOwn,
                import_core_constants7.PermissionList.ReadProjectConfident,
                import_core_constants7.PermissionList.ReadProjectAny
              ]
            },
            import_core_constants7.PermissionList.CreateIssue
          ]
        }
      }
    },
    editIssueById: {
      method: "POST",
      path: `/issues/by/id/:issueId/edit`,
      headers: import_zod22.z.object({
        authorization: import_zod22.z.string()
      }),
      body: import_zod22.z.object({
        title: import_zod22.z.string().optional(),
        fields: import_zod22.z.array(
          import_zod22.z.object({
            name: import_zod22.z.string(),
            value: import_zod22.z.any()
          })
        ).optional()
      }),
      responses: {
        200: okSchema(issueSchema_default.ConfidentialDTO),
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Edit issue by id",
      metadata: {
        permissions: {
          AND: [
            {
              OR: [
                import_core_constants7.PermissionList.ReadProjectOwn,
                import_core_constants7.PermissionList.ReadProjectConfident,
                import_core_constants7.PermissionList.ReadProjectAny
              ]
            },
            {
              OR: [
                import_core_constants7.PermissionList.UpdateIssueOwn,
                import_core_constants7.PermissionList.ManageProjectAsModerator,
                import_core_constants7.PermissionList.UpdateIssueAny
              ]
            }
          ]
        }
      }
    },
    upvoteIssue: {
      method: "POST",
      path: `/issues/by/id/:issueId/upvote`,
      headers: import_zod22.z.object({
        authorization: import_zod22.z.string()
      }),
      body: import_zod22.z.object({}).nullable(),
      responses: {
        201: okSchema(),
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema
      },
      summary: "Upvote issue",
      metadata: {
        permissions: import_core_constants7.PermissionList.VoteIssue
      }
    },
    downvoteIssue: {
      method: "POST",
      path: `/issues/by/id/:issueId/downvote`,
      headers: import_zod22.z.object({
        authorization: import_zod22.z.string()
      }),
      body: import_zod22.z.object({}).nullable(),
      responses: {
        201: okSchema(),
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema
      },
      summary: "Downvote issue",
      metadata: {
        permissions: import_core_constants7.PermissionList.VoteIssue
      }
    },
    unvoteIssue: {
      method: "POST",
      path: `/issues/by/id/:issueId/unvote`,
      headers: import_zod22.z.object({
        authorization: import_zod22.z.string()
      }),
      body: import_zod22.z.object({}).nullable(),
      responses: {
        201: okSchema(),
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Unvote issue",
      metadata: {
        permissions: import_core_constants7.PermissionList.VoteIssue
      }
    },
    manageIssueTags: {
      method: "POST",
      path: `/issues/by/id/:issueId/tags`,
      headers: import_zod22.z.object({
        authorization: import_zod22.z.string()
      }),
      body: import_zod22.z.object({
        tags: import_zod22.z.array(import_zod22.z.string())
      }),
      responses: {
        200: okSchema(issueTagSchema_default.IssueTagDetailsDTO),
        401: unauthorizedSchema,
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Manage issue tags",
      metadata: {
        permissions: {
          OR: [
            import_core_constants7.PermissionList.UpdateIssueOwn,
            import_core_constants7.PermissionList.ManageProjectAsModerator,
            import_core_constants7.PermissionList.UpdateIssueAny
          ]
        }
      }
    },
    changeIssueState: {
      method: "POST",
      path: `/issues/by/id/:issueId/state`,
      headers: import_zod22.z.object({
        authorization: import_zod22.z.string()
      }),
      body: import_zod22.z.object({
        state: import_zod22.z.enum([
          "OPEN",
          "NEED_MORE_INFO",
          "CONFIRMED_INTERNALLY",
          "REVIEWED",
          "AWAITED_INTERNAL_TESTING",
          "ASSIGNED",
          "FEEDBACK",
          "DUPLICATE",
          "RESOLVED",
          "EXPIRED"
        ])
      }),
      responses: {
        200: okSchema(issueSchema_default.ConfidentialDTO),
        401: unauthorizedSchema,
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Change issue state",
      metadata: {
        permissions: {
          OR: [
            import_core_constants7.PermissionList.ManageProjectAsModerator,
            import_core_constants7.PermissionList.UpdateIssueAny
          ]
        }
      }
    },
    changeIssueVisibility: {
      method: "POST",
      path: `/issues/by/id/:issueId/visibility`,
      headers: import_zod22.z.object({
        authorization: import_zod22.z.string()
      }),
      body: import_zod22.z.object({
        visibility: import_zod22.z.enum(["PUBLIC", "PRIVATE"])
      }),
      responses: {
        200: okSchema(issueSchema_default.ConfidentialDTO),
        401: unauthorizedSchema,
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Change issue visibility",
      metadata: {
        permissions: {
          OR: [
            import_core_constants7.PermissionList.ManageProjectAsModerator,
            import_core_constants7.PermissionList.UpdateIssueAny
          ]
        }
      }
    },
    getIssueById: {
      method: "GET",
      path: `/issues/by/id/:issueId`,
      headers: import_zod22.z.object({
        authorization: import_zod22.z.string()
      }).optional(),
      responses: {
        200: okSchema(
          import_zod22.z.union([
            issueSchema_default.PublicDetailsDTO,
            issueSchema_default.RegularDetailsDTO,
            issueSchema_default.ConfidentialDetailsDTO
          ])
        ),
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema
      },
      summary: "Get a issue by id",
      metadata: {
        isPublic: true,
        permissions: {}
      }
    },
    getIssueByKey: {
      method: "GET",
      path: `/issues/by/key/:key`,
      headers: import_zod22.z.object({
        authorization: import_zod22.z.string()
      }).optional(),
      responses: {
        200: okSchema(
          import_zod22.z.union([
            issueSchema_default.PublicDetailsDTO,
            issueSchema_default.RegularDetailsDTO,
            issueSchema_default.ConfidentialDetailsDTO
          ])
        ),
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema
      },
      summary: "Get a issue by key",
      metadata: {
        isPublic: true,
        permissions: {}
      }
    },
    getIssues: {
      method: "GET",
      path: `/issues`,
      headers: import_zod22.z.object({
        authorization: import_zod22.z.string()
      }).optional(),
      query: import_zod22.z.object({
        page: import_zod22.z.string().optional(),
        limit: import_zod22.z.string().optional(),
        /*
         * @type {string} - search query
         */
        search: import_zod22.z.string().optional(),
        /*
         * @type {string[]} - project names array
         */
        projects: import_zod22.z.string().optional(),
        /*
         * @type {string[]} - issue states array
         */
        states: import_zod22.z.string().optional(),
        /*
         * @type {string[]} - authors username array
         */
        authors: import_zod22.z.string().optional(),
        /*
         * @type {string} - sort type
         */
        sort: import_zod22.z.enum(["recent", "newest", "votes"]).optional()
      }),
      responses: {
        200: okSchema(
          import_zod22.z.object({
            count: import_zod22.z.number(),
            data: import_zod22.z.array(
              import_zod22.z.union([
                issueSchema_default.PublicInListDetailsDTO,
                issueSchema_default.RegularInListDetailsDTO,
                issueSchema_default.ConfidentialInListDetailsDTO
              ])
            )
          })
        ),
        404: notFoundSchema,
        403: forbiddenSchema,
        500: import_zod22.z.object({ message: import_zod22.z.string() })
      },
      summary: "Get issues",
      metadata: {
        isPublic: true,
        permissions: {}
      }
    },
    getIssueConfidents: {
      method: "GET",
      path: `/issues/:issueId/confidents`,
      headers: import_zod22.z.object({
        authorization: import_zod22.z.string()
      }),
      query: import_zod22.z.object({
        /**
         * @type {string} - limit of records
         */
        limit: import_zod22.z.string().optional(),
        /**
         * @type {string} - page number
         */
        page: import_zod22.z.string().optional()
      }),
      responses: {
        200: okSchema(issueConfidenceSchema_default.ConfidentialDTO),
        500: failSchema
      },
      summary: "Get issue confidents by issue id",
      metadata: {
        permissions: {
          OR: [
            import_core_constants7.PermissionList.ReadConfidenceAny,
            import_core_constants7.PermissionList.ReadConfidenceOwn
          ]
        }
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var issueContract_default = issueContract;

// src/contracts/issueTag/issueTagContract.ts
var import_core_constants8 = require("@bistudio-feedback/core-constants");
var import_core10 = require("@ts-rest/core");
var import_zod23 = require("zod");
var c10 = (0, import_core10.initContract)();
var issueTagRouterSchema = c10.router(
  {
    getIssueTags: {
      method: "GET",
      path: "/issue-tags",
      headers: import_zod23.z.object({
        authorization: import_zod23.z.string()
      }),
      query: import_zod23.z.object({
        page: import_zod23.z.string().optional(),
        limit: import_zod23.z.string().optional(),
        search: import_zod23.z.string().optional()
      }),
      responses: {
        200: okSchema(import_zod23.z.array(issueTagSchema_default.IssueTagDetailsDTO)),
        500: failSchema
      },
      summary: "Get issue tags",
      metadata: {
        permissions: {}
      }
    },
    getIssueTagByName: {
      method: "GET",
      path: "/issue-tags/by/name/:name",
      headers: import_zod23.z.object({
        authorization: import_zod23.z.string()
      }),
      query: import_zod23.z.object({}).nullable().optional(),
      responses: {
        200: okSchema(issueTagSchema_default.IssueTagDetailsDTO),
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Get issue tag by name",
      metadata: {
        permissions: {}
      }
    },
    createIssueTag: {
      method: "POST",
      path: "/issue-tags",
      headers: import_zod23.z.object({
        authorization: import_zod23.z.string()
      }),
      body: import_zod23.z.object({
        displayName: import_zod23.z.string(),
        color: import_zod23.z.string(),
        description: import_zod23.z.string().optional().nullable()
      }),
      responses: {
        200: okSchema(issueTagSchema_default.IssueTagDTO),
        403: forbiddenSchema,
        409: conflictSchema,
        500: failSchema
      },
      metadata: {
        permissions: import_core_constants8.PermissionList.CreateIssueTag
      }
    },
    editIssueTag: {
      method: "POST",
      path: `/issue-tags/:id/edit`,
      headers: import_zod23.z.object({
        authorization: import_zod23.z.string()
      }),
      body: import_zod23.z.object({
        displayName: import_zod23.z.string(),
        color: import_zod23.z.string(),
        description: import_zod23.z.string().nullable()
      }),
      responses: {
        200: okSchema(issueTagSchema_default.IssueTagDTO),
        403: forbiddenSchema,
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema
      },
      metadata: {
        permissions: import_core_constants8.PermissionList.UpdateIssueTag
      }
    },
    deleteIssueTag: {
      method: "DELETE",
      path: "/issue-tags/:id",
      headers: import_zod23.z.object({
        authorization: import_zod23.z.string()
      }),
      body: import_zod23.z.object({}).nullable().optional(),
      responses: {
        204: okNoContentSchema,
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      metadata: {
        permissions: import_core_constants8.PermissionList.DeleteIssueTag
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var issueTagContract_default = issueTagRouterSchema;

// src/contracts/member/memberContract.ts
var import_core_constants9 = require("@bistudio-feedback/core-constants");
var import_core11 = require("@ts-rest/core");
var import_zod24 = require("zod");
var c11 = (0, import_core11.initContract)();
var memberContract = c11.router(
  {
    getCurrentMember: {
      method: "GET",
      path: `/members/me`,
      headers: import_zod24.z.object({
        authorization: import_zod24.z.string()
      }),
      responses: {
        200: okSchema(memberSchema_default.ConfidentialDTO),
        500: failSchema
      },
      summary: "Get the current member",
      metadata: {
        permissions: import_core_constants9.PermissionList.ReadMemberConfidentialOwn
      }
    },
    geMemberByUsername: {
      method: "GET",
      path: `/members/by/username/:username`,
      headers: import_zod24.z.object({
        authorization: import_zod24.z.string()
      }).optional(),
      responses: {
        200: okSchema(
          import_zod24.z.union([
            memberSchema_default.ConfidentialDTO,
            memberSchema_default.PublicDTO,
            memberSchema_default.BasicDTO
          ])
        ),
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Get a member by username",
      metadata: {
        isPublic: true,
        permissions: {}
      }
    },
    // editMemberCredentialsById: {},
    // editCurrentMemberCredentials: {},
    // editMemberPassword: {
    //
    // },
    getMemberById: {
      method: "GET",
      path: `/members/by/id/:memberId`,
      headers: import_zod24.z.object({
        authorization: import_zod24.z.string()
      }).optional(),
      responses: {
        200: okSchema(
          import_zod24.z.union([
            memberSchema_default.ConfidentialDTO,
            memberSchema_default.PublicDTO,
            memberSchema_default.BasicDTO
          ])
        ),
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Get a member by id",
      metadata: {
        isPublic: true,
        permissions: {}
      }
    },
    getMembers: {
      method: "GET",
      path: `/members`,
      headers: import_zod24.z.object({
        authorization: import_zod24.z.string()
      }).optional(),
      query: import_zod24.z.object({
        /**
         * @type {string} - page number, default is 1
         */
        page: import_zod24.z.string().optional(),
        /**
         * @type {string} - limit of items per page, default and max is 50
         */
        limit: import_zod24.z.string().optional(),
        /**
         * @type {string} - search string, includes username, email, roleName, roleDisplayName
         */
        search: import_zod24.z.string().optional()
      }),
      responses: {
        200: okSchema(import_zod24.z.array(memberSchema_default.BasicDTO)),
        500: failSchema
      },
      summary: "Get all members",
      metadata: {
        isPublic: true
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var memberContract_default = memberContract;

// src/contracts/project/projectModeratorSchema.ts
var import_zod25 = require("zod");
var Dto = import_zod25.z.object({
  id: import_zod25.z.string(),
  projectId: import_zod25.z.string(),
  memberIds: import_zod25.z.array(import_zod25.z.string()),
  actions: import_zod25.z.object({
    comments: import_zod25.z.object({
      block: import_zod25.z.boolean(),
      delete: import_zod25.z.boolean()
    }),
    issues: import_zod25.z.object({
      block: import_zod25.z.boolean(),
      delete: import_zod25.z.boolean(),
      updateState: import_zod25.z.boolean(),
      updateFields: import_zod25.z.boolean(),
      updateVisibility: import_zod25.z.boolean(),
      updateTags: import_zod25.z.boolean()
    }),
    issueConfidents: import_zod25.z.object({
      add: import_zod25.z.boolean(),
      delete: import_zod25.z.boolean()
    }),
    projectConfidents: import_zod25.z.object({
      add: import_zod25.z.boolean(),
      delete: import_zod25.z.boolean()
    })
  }),
  displayRole: import_zod25.z.string(),
  displayRoleColor: import_zod25.z.string(),
  createdAt: import_zod25.z.string(),
  updatedAt: import_zod25.z.string()
});
var projectModeratorSchema = {
  Dto
};
var projectModeratorSchema_default = projectModeratorSchema;

// src/contracts/project/projectContract.ts
var import_core_constants10 = require("@bistudio-feedback/core-constants");
var import_core12 = require("@ts-rest/core");
var import_zod28 = require("zod");

// src/contracts/project/projectSchema.ts
var import_zod27 = require("zod");

// src/contracts/projectGroup/projectGroupSchema.ts
var import_zod26 = require("zod");
var BasicDTO6 = import_zod26.z.object({
  id: import_zod26.z.string(),
  slug: import_zod26.z.string(),
  name: import_zod26.z.string(),
  // state: z.enum(["ACTIVE", "DRAFT"]),
  displayName: import_zod26.z.string(),
  bannerId: import_zod26.z.string().nullable(),
  description: import_zod26.z.string()
});
var BasicDetailsDTO = BasicDTO6.extend({
  banner: import_zod26.z.string().nullable()
});
var ConfidentialDTO12 = BasicDTO6.extend({
  storageId: import_zod26.z.string(),
  authorId: import_zod26.z.string(),
  createdAt: import_zod26.z.date(),
  updatedAt: import_zod26.z.date()
});
var ConfidentialDetailsDTO5 = ConfidentialDTO12.extend({
  banner: import_zod26.z.string().nullable(),
  author: import_zod26.z.string().nullable()
});
var projectGroupSchema = {
  BasicDTO: BasicDTO6,
  BasicDetailsDTO,
  ConfidentialDTO: ConfidentialDTO12,
  ConfidentialDetailsDTO: ConfidentialDetailsDTO5
};
var projectGroupSchema_default = projectGroupSchema;

// src/contracts/project/projectSchema.ts
var PreviewDTO2 = import_zod27.z.object({
  id: import_zod27.z.string(),
  name: import_zod27.z.string(),
  key: import_zod27.z.string(),
  displayName: import_zod27.z.string(),
  slug: import_zod27.z.string()
});
var RegularDTO5 = import_zod27.z.object({
  id: import_zod27.z.string(),
  groupId: import_zod27.z.string(),
  formId: import_zod27.z.string().nullable(),
  state: import_zod27.z.enum(["ACTIVE", "DRAFT", "ARCHIVED"]),
  key: import_zod27.z.string(),
  visibility: import_zod27.z.enum(["PUBLIC", "PRIVATE"]),
  name: import_zod27.z.string(),
  displayName: import_zod27.z.string(),
  slug: import_zod27.z.string(),
  banner: fileSchema_default.RegularDetailsDTO,
  description: import_zod27.z.string(),
  issuesCount: import_zod27.z.number()
});
var RegularDetailsDTO4 = RegularDTO5.extend({
  group: projectGroupSchema_default.BasicDTO
}).omit({ groupId: true });
var PublicDetailsDTO2 = RegularDetailsDTO4;
var ConfidentialDTO13 = RegularDTO5.extend({
  authorId: import_zod27.z.string(),
  storageId: import_zod27.z.string(),
  bannerId: import_zod27.z.string().nullable(),
  keyArtId: import_zod27.z.string().nullable(),
  createdAt: import_zod27.z.date(),
  updatedAt: import_zod27.z.date()
});
var ConfidentialDetailsDTO6 = ConfidentialDTO13.extend({
  group: projectGroupSchema_default.BasicDTO,
  author: memberSchema_default.BasicDTO,
  banner: fileSchema_default.ConfidentialDetailsDTO,
  keyArt: fileSchema_default.ConfidentialDetailsDTO,
  moderatorsList: import_zod27.z.array(memberSchema_default.RegularMemberDetailsShortDTO)
}).omit({ groupId: true, authorId: true, bannerId: true, keyArtId: true });
var projectSchema = {
  PreviewDTO: PreviewDTO2,
  RegularDTO: RegularDTO5,
  RegularDetailsDTO: RegularDetailsDTO4,
  ConfidentialDTO: ConfidentialDTO13,
  ConfidentialDetailsDTO: ConfidentialDetailsDTO6,
  PublicDetailsDTO: PublicDetailsDTO2
};
var projectSchema_default = projectSchema;

// src/contracts/project/projectContract.ts
var c12 = (0, import_core12.initContract)();
var projectContract = c12.router(
  {
    getProjects: {
      method: "GET",
      path: `/projects`,
      headers: import_zod28.z.object({
        authorization: import_zod28.z.string()
      }).optional(),
      query: import_zod28.z.object({
        /**
         * @type {string} - page number, default is 1
         */
        page: import_zod28.z.string().optional(),
        /**
         * @type {string} - limit of items per page, default is 50
         */
        limit: import_zod28.z.string().optional(),
        /**
         * @type {Array} - array of project group ids
         * @items {string}
         */
        groupIds: import_zod28.z.string().optional(),
        /**
         * @type {string} - search string
         */
        search: import_zod28.z.string().optional(),
        /**
         * @type {string} - author id
         */
        authorId: import_zod28.z.string().optional()
      }),
      responses: {
        200: okSchema(
          import_zod28.z.object({
            data: import_zod28.z.array(
              import_zod28.z.union([
                projectSchema_default.PublicDetailsDTO,
                projectSchema_default.RegularDetailsDTO,
                projectSchema_default.ConfidentialDetailsDTO
              ])
            ),
            count: import_zod28.z.number()
          })
        )
      },
      summary: "Get all projects",
      metadata: {
        isPublic: true,
        permissions: {}
      }
    },
    getProjectById: {
      method: "GET",
      path: `/projects/by/id/:projectId`,
      headers: import_zod28.z.object({
        authorization: import_zod28.z.string()
      }).optional(),
      responses: {
        200: okSchema(
          import_zod28.z.union([
            projectSchema_default.ConfidentialDetailsDTO,
            projectSchema_default.RegularDetailsDTO
          ])
        ),
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Get project by id",
      metadata: {
        isPublic: true,
        permissions: {}
      }
    },
    getProjectBySlug: {
      method: "GET",
      path: `/projects/by/slug/:slug`,
      headers: import_zod28.z.object({
        authorization: import_zod28.z.string()
      }).optional(),
      responses: {
        200: okSchema(
          import_zod28.z.union([
            projectSchema_default.ConfidentialDetailsDTO,
            projectSchema_default.RegularDetailsDTO
          ])
        ),
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Get project by slug",
      metadata: {
        isPublic: true,
        permissions: {}
      }
    },
    createProject: {
      method: "POST",
      path: `/projects`,
      headers: import_zod28.z.object({
        authorization: import_zod28.z.string()
      }),
      body: import_zod28.z.object({
        /**
         * @type {string} - id of the project group
         */
        groupId: import_zod28.z.string(),
        /**
         * @type {string} - display name of the project
         */
        displayName: import_zod28.z.string(),
        /**
         * @type {string} - slug
         */
        slug: import_zod28.z.string(),
        /**
         * @type {string} - file id for the project banner
         * bannerId of the file, which the user is authoring
         * allowed: jpeg, png, gif, tiff
         *
         */
        bannerId: import_zod28.z.string().nullable(),
        /**
         * @type {string} - file id for the project key art
         * keyArtId of the file, which the user is authoring
         * allowed: jpeg, png, gif, tiff
         *
         */
        keyArtId: import_zod28.z.string().nullable(),
        /**
         * @type {string} - key that is prefix for all project issues
         */
        key: import_zod28.z.string(),
        /**
         * @type {string} - description
         */
        description: import_zod28.z.string(),
        /**
         * @type {string} -  visibility, whether project is public or private
         */
        visibility: import_zod28.z.enum(["PUBLIC", "PRIVATE"])
      }),
      responses: {
        200: okSchema(projectSchema_default.ConfidentialDTO),
        404: notFoundSchema,
        409: conflictSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Get project by id",
      metadata: {
        permissions: import_core_constants10.PermissionList.CreateProject
      }
    },
    editProjectGeneralSettingsById: {
      method: "POST",
      path: `/projects/by/id/:projectId/edit`,
      headers: import_zod28.z.object({
        authorization: import_zod28.z.string()
      }),
      body: import_zod28.z.object({
        // /**
        //  * @type {string} - id of the project group
        //  */
        // groupId: z.string().optional(),
        /**
         * @type {string} - display name of the project
         */
        displayName: import_zod28.z.string().optional(),
        /**
         * @type {string} - slug
         */
        slug: import_zod28.z.string().optional(),
        /**
         * @type {string} - key identifier for project issues
         */
        key: import_zod28.z.string().optional(),
        /**
         * @type {string} - file id for the project banner
         */
        bannerId: import_zod28.z.string().nullable().optional(),
        /**
         * @type {string} - file id for the project key art
         */
        keyArtId: import_zod28.z.string().nullable().optional(),
        /**
         * @type {string} - description
         */
        description: import_zod28.z.string().optional(),
        /**
         * @type {string} -  visibility, whether project is public or private
         */
        visibility: import_zod28.z.enum(["PUBLIC", "PRIVATE"]).optional()
      }),
      responses: {
        200: okSchema(projectSchema_default.ConfidentialDTO),
        409: conflictSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Edit project",
      metadata: {
        permissions: {
          OR: [
            import_core_constants10.PermissionList.UpdateProjectAny,
            import_core_constants10.PermissionList.UpdateProjectOwn
          ]
        }
      }
    },
    changeProjectStateById: {
      method: "POST",
      path: `/projects/by/id/:projectId/state`,
      headers: import_zod28.z.object({
        authorization: import_zod28.z.string()
      }),
      body: import_zod28.z.object({
        state: import_zod28.z.enum(["ACTIVE", "DRAFT", "ARCHIVED"])
      }),
      responses: {
        200: okSchema(projectSchema_default.ConfidentialDTO),
        401: unauthorizedSchema,
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      metadata: {
        permissions: {
          OR: [
            import_core_constants10.PermissionList.ManageProjectAsModerator,
            import_core_constants10.PermissionList.UpdateProjectAny,
            import_core_constants10.PermissionList.UpdateProjectOwn
          ]
        }
      }
    },
    manageProjectModerators: {
      method: "POST",
      path: "/projects/by/id/:projectId/moderators/manage",
      headers: import_zod28.z.object({
        authorization: import_zod28.z.string()
      }),
      body: import_zod28.z.object({
        rules: import_zod28.z.array(
          import_zod28.z.object({
            /**
             * @type {string} - id of the project moderator
             */
            id: import_zod28.z.string().nullable().optional(),
            /**
             * @type {Array} - array of member ids
             * @items {string}
             */
            memberIds: import_zod28.z.array(import_zod28.z.string()).optional(),
            /**
             * @type {Object} - actions
             * @property {Object} comments - permissions over comments
             * @property {boolean} comments.block - moderator can block comment
             * @property {boolean} comments.delete - moderator can delete comment
             * @property {Object} issues - permissions over issues
             * @property {boolean} issues.block - moderator can block issue
             * @property {boolean} issues.delete - moderator can delete issue
             * @property {boolean} issues.updateState - moderator can update issue state
             * @property {boolean} issues.updateVisibility - moderator can update visibility
             * @property {boolean} issues.updateFields - moderator can update fields
             * @property {boolean} issues.updateTags - moderator can update tags
             * @property {boolean} issues.updateConfidents - moderator can update issue confidents
             *
             * @property {Object} project - permissions over project
             * @property {boolean} project.updateGeneralSettings - moderator can update project general settings
             * @property {boolean} project.changeState - moderator can change project state
             * @property {boolean} project.updateForm -  moderator can update project form
             * @property {boolean} project.updateModerators - moderator can update project moderators
             * @property {boolean} project.updateConfidents - moderator can update project confidents
             */
            actions: import_zod28.z.object({
              comments: import_zod28.z.object({
                block: import_zod28.z.boolean(),
                delete: import_zod28.z.boolean()
              }),
              issues: import_zod28.z.object({
                block: import_zod28.z.boolean(),
                delete: import_zod28.z.boolean(),
                updateState: import_zod28.z.boolean(),
                updateFields: import_zod28.z.boolean(),
                updateHiddenFields: import_zod28.z.boolean(),
                updateInternalFields: import_zod28.z.boolean(),
                updateVisibility: import_zod28.z.boolean(),
                updateTags: import_zod28.z.boolean(),
                updateConfidents: import_zod28.z.boolean()
              }),
              project: import_zod28.z.object({
                updateGeneralSettings: import_zod28.z.boolean(),
                updateState: import_zod28.z.boolean(),
                updateForm: import_zod28.z.boolean(),
                updateModerators: import_zod28.z.boolean(),
                updateConfidents: import_zod28.z.boolean()
              })
            }).optional(),
            /**
             * @type {string} - display role name
             */
            displayRole: import_zod28.z.string(),
            /**
             * @type {string} - display role color
             */
            displayRoleColor: import_zod28.z.string()
          })
        )
      }),
      responses: {
        200: okSchema(projectModeratorSchema_default.Dto),
        403: forbiddenSchema,
        404: notFoundSchema,
        401: unauthorizedSchema,
        500: failSchema
      },
      metadata: {
        permissions: {
          OR: [
            import_core_constants10.PermissionList.ManageProjectAsModerator,
            import_core_constants10.PermissionList.UpdateProjectAny,
            import_core_constants10.PermissionList.UpdateProjectOwn
          ]
        }
      }
    },
    deleteProjectModeratorById: {
      method: "DELETE",
      path: `/projects/by/id/:projectId/moderators/:moderatorId`,
      headers: import_zod28.z.object({
        authorization: import_zod28.z.string()
      }),
      body: import_zod28.z.object({}).nullable().optional(),
      responses: {
        204: okNoContentSchema,
        401: unauthorizedSchema,
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Delete project moderator by id",
      metadata: {
        permissions: {
          OR: [
            import_core_constants10.PermissionList.ManageProjectAsModerator,
            import_core_constants10.PermissionList.UpdateProjectAny,
            import_core_constants10.PermissionList.UpdateProjectOwn
          ]
        }
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var projectContract_default = projectContract;

// src/contracts/projectGroup/projectGroupContract.ts
var import_core_constants11 = require("@bistudio-feedback/core-constants");
var import_core13 = require("@ts-rest/core");
var import_zod29 = require("zod");
var c13 = (0, import_core13.initContract)();
var ProjectGroupRequestDTO = import_zod29.z.object({
  /**
   * bannerId of the file, which the user is authoring
   * allowed: jpeg, png, gif, tiff
   */
  bannerId: import_zod29.z.string().optional(),
  displayName: import_zod29.z.string(),
  description: import_zod29.z.string(),
  slug: import_zod29.z.string()
});
var projectGroupContract = c13.router(
  {
    getProjectGroups: {
      method: "GET",
      path: `/project-groups`,
      headers: import_zod29.z.object({
        authorization: import_zod29.z.string()
      }).optional(),
      query: import_zod29.z.object({
        limit: import_zod29.z.string().optional(),
        page: import_zod29.z.string().optional(),
        search: import_zod29.z.string().optional()
      }),
      responses: {
        200: okSchema(import_zod29.z.array(projectGroupSchema_default.BasicDTO)),
        500: failSchema
      },
      summary: "Get all project group list",
      metadata: {
        isPublic: true,
        permissions: {}
      }
    },
    getProjectGroupById: {
      method: "GET",
      headers: import_zod29.z.object({
        authorization: import_zod29.z.string()
      }).optional(),
      path: `/project-groups/by/id/:projectGroupId`,
      responses: {
        200: okSchema(
          import_zod29.z.union([
            projectGroupSchema_default.BasicDetailsDTO,
            projectGroupSchema_default.ConfidentialDetailsDTO
          ])
        ),
        403: forbiddenSchema,
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Get project group by id",
      metadata: {
        isPublic: true,
        permissions: {}
      }
    },
    getProjectGroupBySlug: {
      method: "GET",
      path: `/project-groups/by/slug/:slug`,
      headers: import_zod29.z.object({
        authorization: import_zod29.z.string()
      }).optional(),
      responses: {
        200: okSchema(
          import_zod29.z.union([
            projectGroupSchema_default.BasicDetailsDTO,
            projectGroupSchema_default.ConfidentialDetailsDTO
          ])
        ),
        403: forbiddenSchema,
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Get project group by slug",
      metadata: {
        isPublic: true,
        permissions: {}
      }
    },
    editProjectGroupGeneralSettingsById: {
      method: "POST",
      path: `/project-groups/by/id/:groupId/edit`,
      headers: import_zod29.z.object({
        authorization: import_zod29.z.string()
      }),
      body: import_zod29.z.object({
        /*
         * @type {string} - display name of the project group
         */
        displayName: import_zod29.z.string().optional(),
        /**
         * @type {string} - slug
         */
        slug: import_zod29.z.string().optional(),
        /**
         * @type {string} - file id for the project group banner
         */
        bannerId: import_zod29.z.string().nullable().optional(),
        /**
         * @type {string} - description
         */
        description: import_zod29.z.string().optional()
      }),
      responses: {
        200: okSchema(projectGroupSchema_default.ConfidentialDTO),
        409: conflictSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Edit project group",
      metadata: {
        permissions: {
          OR: [import_core_constants11.PermissionList.UpdateProjectGroup]
        }
      }
    },
    createProjectGroup: {
      method: "POST",
      headers: import_zod29.z.object({
        authorization: import_zod29.z.string()
      }),
      path: `/project-groups`,
      body: ProjectGroupRequestDTO,
      responses: {
        200: okSchema(projectGroupSchema_default.BasicDTO),
        409: conflictSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Create project group",
      metadata: {
        permissions: import_core_constants11.PermissionList.CreateProjectGroup
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var projectGroupContract_default = projectGroupContract;

// src/contracts/role/roleContract.ts
var import_core_constants12 = require("@bistudio-feedback/core-constants");
var import_core14 = require("@ts-rest/core");
var import_zod31 = require("zod");

// src/contracts/role/roleSchema.ts
var import_zod30 = require("zod");
var RegularDTO6 = import_zod30.z.object({
  id: import_zod30.z.string(),
  name: import_zod30.z.string(),
  displayName: import_zod30.z.string()
});
var ConfidentialDTO14 = RegularDTO6.extend({
  permissions: import_zod30.z.array(import_zod30.z.string()),
  createdAt: import_zod30.z.string(),
  updatedAt: import_zod30.z.string()
});
var roleSchema = {
  RegularDTO: RegularDTO6,
  ConfidentialDTO: ConfidentialDTO14
};
var roleSchema_default = roleSchema;

// src/contracts/role/roleContract.ts
var c14 = (0, import_core14.initContract)();
var RoleRequestDTO = import_zod31.z.object({
  name: import_zod31.z.string(),
  displayName: import_zod31.z.string(),
  permissions: import_zod31.z.array(import_zod31.z.string())
  // TODO: add enums constants of permissionList
});
var roleContract = c14.router(
  {
    createRole: {
      method: "POST",
      headers: import_zod31.z.object({
        authorization: import_zod31.z.string()
      }),
      path: `/roles`,
      body: RoleRequestDTO,
      responses: {
        200: okSchema(roleSchema_default.RegularDTO),
        409: conflictSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Create role",
      metadata: {
        permissions: {
          middleware: [import_core_constants12.PermissionList.CreateRole]
        }
      }
    },
    getRoleById: {
      method: "GET",
      path: `/roles/by/id/:roleId`,
      headers: import_zod31.z.object({
        authorization: import_zod31.z.string()
      }).optional(),
      responses: {
        200: okSchema(
          import_zod31.z.union([roleSchema_default.RegularDTO, roleSchema_default.ConfidentialDTO])
        ),
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Get a role by id",
      metadata: {
        permissions: {}
      }
    },
    getRoleByName: {
      method: "GET",
      path: `/roles/by/name/:name`,
      headers: import_zod31.z.object({
        authorization: import_zod31.z.string()
      }).optional(),
      responses: {
        200: okSchema(
          import_zod31.z.union([roleSchema_default.RegularDTO, roleSchema_default.ConfidentialDTO])
        ),
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Get a role by name",
      metadata: {
        permissions: {}
      }
    },
    deleteRoleById: {
      method: "DELETE",
      path: `/roles/by/id/:roleId`,
      headers: import_zod31.z.object({
        authorization: import_zod31.z.string()
      }),
      body: import_zod31.z.object({
        replaceWithRoleId: import_zod31.z.string().optional()
      }),
      responses: {
        204: import_zod31.z.object({}),
        400: badRequestSchema,
        403: forbiddenSchema,
        409: conflictSchema,
        500: failSchema
      },
      summary: "Delete role by id",
      metadata: {
        permissions: import_core_constants12.PermissionList.DeleteRole
      }
    },
    editRoleById: {
      method: "POST",
      path: `/roles/by/id/:roleId/edit`,
      headers: import_zod31.z.object({
        authorization: import_zod31.z.string()
      }),
      body: import_zod31.z.object({
        name: import_zod31.z.string().optional(),
        displayName: import_zod31.z.string().optional(),
        permissions: import_zod31.z.array(import_zod31.z.string()).optional()
      }),
      responses: {
        200: okSchema(roleSchema_default.RegularDTO),
        404: notFoundSchema,
        409: conflictSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Edit role by id",
      metadata: {
        permissions: import_core_constants12.PermissionList.UpdateRole
      }
    },
    getRoles: {
      method: "GET",
      path: `/roles`,
      headers: import_zod31.z.object({
        authorization: import_zod31.z.string()
      }),
      query: import_zod31.z.object({
        page: import_zod31.z.string().optional(),
        limit: import_zod31.z.string().optional(),
        search: import_zod31.z.string().optional()
      }),
      responses: {
        200: okSchema(import_zod31.z.array(roleSchema_default.RegularDTO)),
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Get roles",
      metadata: {
        permissions: {}
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var roleContract_default = roleContract;

// src/contracts/user/userContract.ts
var import_core15 = require("@ts-rest/core");
var import_core_constants13 = require("@bistudio-feedback/core-constants");
var import_zod32 = require("zod");
var UserLoginSchema = import_zod32.z.object({
  email: import_zod32.z.string(),
  password: import_zod32.z.string()
}).strict();
var CreateUserDTO = import_zod32.z.object({
  username: import_zod32.z.string(),
  password: import_zod32.z.string(),
  email: import_zod32.z.string()
}).strict();
var accesshTokenResponseSchema = import_zod32.z.object({
  accessToken: import_zod32.z.string(),
  refreshToken: import_zod32.z.string(),
  expiresIn: import_zod32.z.number()
});
var c15 = (0, import_core15.initContract)();
var userContract = c15.router(
  {
    login: {
      method: "POST",
      path: "/users/login",
      body: UserLoginSchema,
      responses: {
        200: okSchema(accesshTokenResponseSchema),
        401: unauthorizedSchema,
        409: conflictSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Login a user",
      metadata: {
        isPublic: true,
        permissions: {}
      }
    },
    logout: {
      method: "POST",
      path: "/users/logout",
      headers: import_zod32.z.object({
        authorization: import_zod32.z.string()
      }),
      body: import_zod32.z.nullable(import_zod32.z.object({})),
      responses: {
        200: okSchema(import_zod32.z.null()),
        500: failSchema
      },
      summary: "Logout the current user",
      metadata: {
        permissions: {}
      }
    },
    refreshAccessToken: {
      method: "POST",
      path: "/users/token/refresh",
      body: import_zod32.z.object({
        refreshToken: import_zod32.z.string()
      }),
      responses: {
        200: okSchema(accesshTokenResponseSchema),
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Refresh the access token",
      metadata: {
        isPublic: true,
        permissions: {}
      }
    },
    createUser: {
      method: "POST",
      path: "/users",
      responses: {
        200: okSchema(userSchema_default.ConfidentialDTO),
        409: conflictSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      body: CreateUserDTO,
      summary: "Create a new user, registration",
      metadata: {
        isPublic: true,
        permissions: {}
      }
    },
    editCurrentUser: {
      method: "POST",
      path: "/users/me/edit",
      headers: import_zod32.z.object({
        authorization: import_zod32.z.string()
      }),
      responses: {
        200: okSchema(userSchema_default.ConfidentialDTO),
        404: notFoundSchema,
        403: forbiddenSchema,
        409: conflictSchema,
        500: failSchema
      },
      body: import_zod32.z.object({
        username: import_zod32.z.string().optional(),
        newEmail: import_zod32.z.string().email().optional()
      }),
      summary: "Edit a current user",
      metadata: {
        permissions: import_core_constants13.PermissionList.UpdateUserOwn
      }
    },
    editUserById: {
      method: "POST",
      path: "/users/by/id/:userId/edit",
      headers: import_zod32.z.object({
        authorization: import_zod32.z.string()
      }),
      responses: {
        200: okSchema(userSchema_default.ConfidentialDTO),
        403: forbiddenSchema,
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema
      },
      body: import_zod32.z.object({
        /**
         * @type {string} - user username
         */
        username: import_zod32.z.string().optional(),
        /**
         * @type {string} - user email
         */
        email: import_zod32.z.string().email().optional(),
        /**
         * @type {string} - user role id
         */
        roleId: import_zod32.z.string().optional()
      }),
      summary: "Edit any user",
      metadata: {
        permissions: import_core_constants13.PermissionList.UpdateUserAny
      }
    },
    // changeUserPasswordById: {
    //   method: "POST",
    //   path: "/users/:userId/password/change",
    //   headers: z.object({
    //     authorization: z.string(),
    //   }),
    //   responses: {
    //     200: okSchema(userSchema.ConfidentialDTO),
    //     404: notFoundSchema,
    //     409: conflictSchema,
    //     403: forbiddenSchema,
    //     500: failSchema,
    //   },
    //   body: z.object({
    //     password: z.string(),
    //   }),
    //   summary: "Change a user's password",
    //   metadata: {
    //     permissions: {
    //       middleware: [
    //         [PermissionList.UpdateUserAny],
    //         [PermissionList.UpdateUserOwn],
    //       ],
    //     },
    //   },
    // },
    getCurrentUser: {
      method: "GET",
      path: `/users/me`,
      headers: import_zod32.z.object({
        authorization: import_zod32.z.string()
      }),
      responses: {
        200: okSchema(userSchema_default.ConfidentialDTO),
        500: failSchema
      },
      summary: "Get the current user",
      metadata: {
        permissions: import_core_constants13.PermissionList.ReadUserOwn
      }
    },
    getUserByUsername: {
      method: "GET",
      path: `/users/by/username/:username`,
      headers: import_zod32.z.object({
        authorization: import_zod32.z.string()
      }),
      responses: {
        200: okSchema(
          import_zod32.z.union([
            userSchema_default.ConfidentialDTO,
            userSchema_default.PublicDTO,
            userSchema_default.BasicDTO
          ])
        ),
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Get a user by username",
      metadata: {
        permissions: {}
      }
    },
    getUserById: {
      method: "GET",
      path: `/users/by/id/:userId`,
      headers: import_zod32.z.object({
        authorization: import_zod32.z.string()
      }),
      responses: {
        200: okSchema(
          import_zod32.z.union([
            userSchema_default.ConfidentialDTO,
            userSchema_default.PublicDTO,
            userSchema_default.BasicDTO
          ])
        ),
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Get a post by id",
      metadata: {
        permissions: {}
      }
    },
    verifyNewEmail: {
      method: "PATCH",
      path: "/users/verify-email/:token",
      body: import_zod32.z.object({}).nullable(),
      responses: {
        204: okSchema(import_zod32.z.null()),
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema
      },
      summary: "Verify a new email",
      metadata: {
        permissions: {}
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var userContract_default = userContract;

// src/contracts/issueActivity/issueActivityContract.ts
var import_zod34 = require("zod");
var import_core16 = require("@ts-rest/core");

// src/contracts/issueActivity/issueActivitySchema.ts
var import_zod33 = require("zod");
var typeSchema = import_zod33.z.enum([
  "ISSUE_CREATE",
  "ISSUE_FIELDS_CHANGE",
  "ISSUE_STATE_CHANGE",
  "ISSUE_ASSIGN",
  "ISSUE_TAGS_UPDATE",
  "ISSUE_COMMENT_REPLY",
  "ISSUE_TITLE_UPDATE"
]);
var IssueActivityDTO = import_zod33.z.object({
  id: import_zod33.z.string(),
  memberId: import_zod33.z.string(),
  projectId: import_zod33.z.string(),
  issueId: import_zod33.z.string(),
  assignMemberId: import_zod33.z.string().optional(),
  commentId: import_zod33.z.string().optional(),
  type: typeSchema,
  context: import_zod33.z.record(import_zod33.z.unknown()),
  createdAt: import_zod33.z.string(),
  updatedAt: import_zod33.z.string()
});
var IssueActivityDetailsDTO = IssueActivityDTO.extend({
  member: memberSchema_default.PublicMemberDetailsShortDTO,
  project: projectSchema_default.PreviewDTO,
  issue: issueSchema_default.PreviewDTO,
  comment: commentSchema_default.RegularDTO.optional(),
  type: typeSchema,
  context: import_zod33.z.record(import_zod33.z.unknown()),
  createdAt: import_zod33.z.string(),
  updatedAt: import_zod33.z.string()
});
var issueActivitySchema = {
  IssueActivityDTO,
  IssueActivityDetailsDTO
};
var issueActivitySchema_default = issueActivitySchema;

// src/contracts/issueActivity/issueActivityContract.ts
var c16 = (0, import_core16.initContract)();
var issueActivityContract = c16.router(
  {
    getIssueActivitiesByIssueId: {
      method: "GET",
      path: `/issues/:issueId/activities`,
      headers: import_zod34.z.object({
        authorization: import_zod34.z.string()
      }),
      query: import_zod34.z.object({
        page: import_zod34.z.string().optional(),
        limit: import_zod34.z.string().optional()
      }),
      responses: {
        200: okSchema(import_zod34.z.array(issueActivitySchema_default.IssueActivityDetailsDTO)),
        500: failSchema
      },
      summary: "Get issue activities by issue Id",
      metadata: {
        isPublic: true
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var issueActivityContract_default = issueActivityContract;

// src/contracts/apiContract.ts
var c17 = (0, import_core17.initContract)();
var apiContract = c17.router({
  roles: roleContract_default,
  users: userContract_default,
  members: memberContract_default,
  projectGroups: projectGroupContract_default,
  projects: projectContract_default,
  projectConfidences: projectConfidenceContract_default,
  issueConfidences: issueConfidenceContract_default,
  files: fileContract_default,
  forms: formContract_default,
  issues: issueContract_default,
  comments: commentContract_default,
  issueSubscribes: issueSubscribeContract_default,
  notifications: notificationContract_default,
  apiToken: apiTokenContract_default,
  issueTags: issueTagContract_default,
  issueActivity: issueActivityContract_default
});
var apiContract_default = apiContract;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  apiContract,
  apiTokenContract,
  apiTokenSchema,
  commentContract,
  commentSchema,
  fileContract,
  fileSchema,
  formContract,
  formSchema,
  issueActivityContract,
  issueActivitySchema,
  issueConfidenceContract,
  issueConfidenceSchema,
  issueContract,
  issueSchema,
  issueSubscribeContract,
  issueSubscribeSchema,
  issueTagRouterSchema,
  issueTagSchema,
  memberContract,
  memberSchema,
  notificationContract,
  notificationSchema,
  projectConfidenceContract,
  projectConfidenceSchema,
  projectContract,
  projectGroupContract,
  projectGroupSchema,
  projectSchema,
  roleContract,
  roleSchema,
  userContract,
  userSchema
});
