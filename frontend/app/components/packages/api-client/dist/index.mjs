// src/contracts/apiContract.ts
import { initContract as initContract17 } from "@ts-rest/core";

// src/contracts/confidence/issueConfidenceContract.ts
import { PermissionList } from "@bistudio-feedback/core-constants";
import { initContract } from "@ts-rest/core";
import { z as z7 } from "zod";

// src/contracts/confidence/issueConfidenceSchema.ts
import { z } from "zod";
var BasicDTO = z.object({
  id: z.string(),
  authorId: z.string(),
  memberId: z.string(),
  issueId: z.string()
});
var ConfidentialDTO = BasicDTO.extend({
  createdAt: z.string(),
  updatedAt: z.string()
});
var issueConfidenceSchema = {
  BasicDTO,
  ConfidentialDTO
};
var issueConfidenceSchema_default = issueConfidenceSchema;

// src/schema/responseSchemas.ts
import { z as z2 } from "zod";
var ErrorObjectSchema = z2.lazy(
  () => z2.object({
    field: z2.string(),
    message: z2.string(),
    errors: z2.array(ErrorObjectSchema).optional()
  })
);
var conflictSchema = z2.object({
  title: z2.string(),
  status: z2.number(),
  detail: z2.string().optional()
});
var forbiddenSchema = z2.object({
  title: z2.string(),
  status: z2.number(),
  detail: z2.string().optional(),
  errors: z2.array(ErrorObjectSchema).optional()
});
var failSchema = z2.object({
  title: z2.string(),
  status: z2.number(),
  detail: z2.string().optional()
});
var notFoundSchema = z2.object({
  title: z2.string(),
  status: z2.number(),
  detail: z2.string().optional()
});
var badRequestSchema = z2.object({
  title: z2.string(),
  status: z2.number(),
  detail: z2.string().optional(),
  errors: z2.array(ErrorObjectSchema).optional()
});
var unauthorizedSchema = z2.object({
  title: z2.string(),
  status: z2.number(),
  detail: z2.string().optional()
});
var okSchema = (dto2) => z2.object({
  data: dto2 ?? z2.object({})
});
var okNoContentSchema = z2.object({}).nullable();

// src/contracts/confidence/issueConfidentSchema.ts
import { z as z6 } from "zod";

// src/contracts/member/memberSchema.ts
import { z as z5 } from "zod";

// src/contracts/user/userSchema.ts
import { z as z3 } from "zod";
var PublicDTO = z3.object({
  username: z3.string(),
  avatarId: z3.string().optional(),
  roleId: z3.string(),
  isVerified: z3.boolean(),
  isDeleted: z3.boolean(),
  isSuspended: z3.boolean(),
  createdAt: z3.date().optional()
});
var BasicDTO2 = PublicDTO;
var ConfidentialDTO2 = PublicDTO.extend({
  userId: z3.string(),
  email: z3.string(),
  newEmail: z3.string().optional(),
  passwordChangedAt: z3.date().optional(),
  storageId: z3.string(),
  updatedAt: z3.date().optional()
});
var userSchema = {
  ConfidentialDTO: ConfidentialDTO2,
  PublicDTO,
  BasicDTO: BasicDTO2
};
var userSchema_default = userSchema;

// src/contracts/file/fileSchema.ts
import * as z4 from "zod";
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
var PublicDTO3 = z5.object({
  id: z5.string(),
  reputation: z5.number(),
  issuesCount: z5.number(),
  repliesCount: z5.number(),
  likesGiven: z5.number(),
  solvedCount: z5.number(),
  createdAt: z5.date()
});
var BasicDTO3 = PublicDTO3;
var ConfidentialDTO4 = BasicDTO3.extend({
  userId: z5.string(),
  reportsCount: z5.number(),
  reportedOwnIssuesCount: z5.number(),
  reportedOwnRepliesCount: z5.number(),
  updatedAt: z5.date()
});
var PublicMemberDetailsDTO = z5.object({
  id: z5.string(),
  avatar: fileSchema_default.PublicDTO,
  user: userSchema_default.PublicDTO,
  role: userSchema_default.BasicDTO,
  reputation: z5.number(),
  issuesCount: z5.number(),
  repliesCount: z5.number(),
  likesGiven: z5.number(),
  solvedCount: z5.number(),
  isVerified: z5.boolean(),
  isDeleted: z5.boolean(),
  isSuspended: z5.boolean(),
  createdAt: z5.date()
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
  reportsCount: z5.number(),
  reportedOwnIssuesCount: z5.number(),
  reportedOwnRepliesCount: z5.number(),
  userId: z5.string()
});
var PublicMemberDetailsShortDTO = z5.object({
  id: z5.string(),
  avatar: z5.string().nullable(),
  username: z5.string(),
  roleDisplayName: z5.string(),
  reputation: z5.number()
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
var BasicDTO4 = z6.object({
  id: z6.string(),
  author: memberSchema_default.BasicDTO,
  memberId: memberSchema_default.BasicDTO,
  issueId: z6.string()
});
var ConfidentialDTO5 = z6.object({
  id: z6.string(),
  author: memberSchema_default.ConfidentialDTO,
  memberId: memberSchema_default.ConfidentialDTO,
  issueId: z6.string(),
  createdAt: z6.string(),
  updatedAt: z6.string()
});
var issueConfidentSchema = {
  BasicDTO: BasicDTO4,
  ConfidentialDTO: ConfidentialDTO5
};
var issueConfidentSchema_default = issueConfidentSchema;

// src/contracts/confidence/issueConfidenceContract.ts
var CreateIssueConfidenceRequestDTO = z7.object({
  authorId: z7.string(),
  memberId: z7.string(),
  issueId: z7.string()
});
var CreateMyIssueConfidenceRequestDTO = z7.object({
  issueId: z7.string(),
  memberId: z7.string()
});
var c = initContract();
var issueConfidenceContract = c.router(
  {
    getIssueConfidences: {
      method: "GET",
      path: `/issue-confidences`,
      headers: z7.object({
        authorization: z7.string()
      }),
      query: z7.object({
        /**
         * @type {string} - limit of records
         */
        limit: z7.string().optional(),
        /**
         * @type {string} - page number
         */
        page: z7.string().optional(),
        /**
         * @type {string} - issue id to issue or issue
         */
        issueId: z7.string().optional(),
        /**
         * @type {string} - author id
         */
        authorId: z7.string().optional(),
        /**
         * @type {string} - member id
         */
        memberId: z7.string().optional()
      }),
      responses: {
        200: okSchema(issueConfidenceSchema_default.ConfidentialDTO),
        500: z7.object({ message: z7.string() })
      },
      summary: "Get issue confidences by query",
      metadata: {
        permissions: {
          OR: [
            PermissionList.ReadConfidenceAny,
            PermissionList.ReadConfidenceOwn
          ]
        }
      }
    },
    getIssueConfidenceById: {
      method: "GET",
      path: `/issue-confidences/:confidenceId`,
      headers: z7.object({
        authorization: z7.string()
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
            PermissionList.ReadConfidenceAny,
            PermissionList.ReadConfidenceOwn
          ]
        }
      }
    },
    deleteIssueConfidence: {
      method: "DELETE",
      path: `/issue-confidences`,
      headers: z7.object({
        authorization: z7.string()
      }),
      body: z7.object({
        issueId: z7.string(),
        memberId: z7.string()
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
            PermissionList.DeleteConfidenceAny,
            PermissionList.DeleteConfidenceOwn,
            PermissionList.ManageProjectAsModerator
          ]
        }
      }
    },
    createMyIssueConfidence: {
      method: "POST",
      path: `/members/me/issue-confidences`,
      body: CreateMyIssueConfidenceRequestDTO,
      headers: z7.object({
        authorization: z7.string()
      }),
      responses: {
        200: okSchema(issueConfidenceSchema_default.ConfidentialDTO),
        409: conflictSchema,
        500: failSchema
      },
      summary: "Create issue confidence record by logged member",
      metadata: {
        permissions: PermissionList.CreateConfidenceOwn
      }
    },
    createIssueConfidence: {
      method: "POST",
      path: `/issue-confidences`,
      body: CreateIssueConfidenceRequestDTO,
      headers: z7.object({
        authorization: z7.string()
      }),
      responses: {
        200: okSchema(z7.array(issueConfidentSchema_default.BasicDTO)),
        409: conflictSchema,
        500: failSchema
      },
      summary: "Create project confidence record managed by moderator or admin",
      metadata: {
        permissions: PermissionList.CreateConfidenceAny
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var issueConfidenceContract_default = issueConfidenceContract;

// src/contracts/issueSubscribe/issueSubscribeContract.ts
import { z as z12 } from "zod";
import { initContract as initContract2 } from "@ts-rest/core";
import { PermissionList as PermissionList2 } from "@bistudio-feedback/core-constants";

// src/contracts/issueSubscribe/issueSubscribeSchema.ts
import { z as z11 } from "zod";

// src/contracts/form/formRequestBody.ts
import { z as z8 } from "zod";
var PersistBaseInputFormField = z8.object({
  name: z8.string(),
  label: z8.string(),
  placeholder: z8.string().optional(),
  helperText: z8.string().optional(),
  visibility: z8.string(),
  required: z8.boolean().optional()
});
var PersistBaseUIFormField = z8.object({
  name: z8.string(),
  type: z8.string()
});
var RegularNumberFieldDTO = PersistBaseInputFormField.extend({
  type: z8.literal("NUMBER"),
  options: z8.object({
    min: z8.number().optional(),
    max: z8.number().optional(),
    noDecimal: z8.boolean().optional()
  })
});
var RegularTextFieldDTO = PersistBaseInputFormField.extend({
  type: z8.literal("TEXT"),
  options: z8.object({
    minLength: z8.number().optional(),
    maxLength: z8.number().optional(),
    pattern: z8.string().optional()
  })
});
var RegularSelectFieldDTO = PersistBaseInputFormField.extend({
  type: z8.literal("SELECT"),
  options: z8.object({
    isMulti: z8.boolean(),
    optionList: z8.array(z8.string()),
    maxSelect: z8.number().nullable(),
    minSelect: z8.number().nullable()
  })
});
var RegularDateTimeFieldDTO = PersistBaseInputFormField.extend({
  type: z8.literal("DATETIME"),
  options: z8.object({
    min: z8.string().optional(),
    max: z8.string().optional()
  })
});
var RegularRichtextFieldDTO = PersistBaseInputFormField.extend({
  type: z8.literal("RICHTEXT"),
  options: z8.object({
    minLength: z8.number().optional(),
    maxLength: z8.number().optional(),
    disableImages: z8.boolean().optional()
  })
});
var RegularSeparatorFieldDTO = PersistBaseUIFormField.extend({
  type: z8.literal("SEPARATOR")
});
var FieldSchemaDTO = z8.discriminatedUnion("type", [
  RegularNumberFieldDTO,
  RegularTextFieldDTO,
  RegularSelectFieldDTO,
  RegularDateTimeFieldDTO,
  RegularRichtextFieldDTO,
  RegularSeparatorFieldDTO
]);
var CreateFormRequestDTO = z8.object({
  /**
   * @type {string} - name of form
   */
  name: z8.string(),
  /**
   * @type {string} - display name of form
   */
  displayName: z8.string(),
  /**
   * @type {string} - project id
   */
  projectId: z8.string(),
  /**
   * @type {number} - limit number of fields the form can have
   */
  schema: z8.array(FieldSchemaDTO)
});
var requestBodySchema = CreateFormRequestDTO;

// src/contracts/issueTag/issueTagSchema.ts
import { z as z9 } from "zod";
var IssueTagDTO = z9.object({
  id: z9.string(),
  displayName: z9.string(),
  name: z9.string(),
  color: z9.string(),
  description: z9.string()
});
var IssueTagDetailsDTO = IssueTagDTO.extend({
  count: z9.number(),
  createdAt: z9.string(),
  updatedAt: z9.string()
});
var issueTagSchema = {
  IssueTagDTO,
  IssueTagDetailsDTO
};
var issueTagSchema_default = issueTagSchema;

// src/contracts/issue/issueSchema.ts
import * as z10 from "zod";
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
var ConfidentialDTO7 = z11.object({
  id: z11.string(),
  memberId: z11.string(),
  issueId: z11.string(),
  createdAt: z11.string(),
  updatedAt: z11.string()
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
var SubscribeIssueRequestDTO = z12.object({
  issueId: z12.string()
});
var c2 = initContract2();
var issueSubscribeSchema = c2.router(
  {
    subscribe: {
      method: "POST",
      path: `/issues/:issueId/subscribe`,
      body: SubscribeIssueRequestDTO,
      headers: z12.object({
        authorization: z12.string()
      }),
      responses: {
        201: okSchema(issueSubscribeSchema_default.ConfidentialDTO),
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema
      },
      summary: "Susbcribe notification to the issue",
      metadata: {
        permissions: PermissionList2.SubscribeIssue
      }
    },
    unsubscribe: {
      method: "POST",
      path: `/issues/:issueId/unsubscribe`,
      body: SubscribeIssueRequestDTO,
      headers: z12.object({
        authorization: z12.string()
      }),
      responses: {
        204: okNoContentSchema,
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Unusubscribe issue notification to the issue",
      metadata: {
        permissions: PermissionList2.SubscribeIssue
      }
    },
    getMySubscribedIssues: {
      method: "GET",
      path: `/issues/subscribed`,
      headers: z12.object({
        authorization: z12.string()
      }),
      query: z12.object({
        page: z12.string().optional(),
        limit: z12.string().optional()
      }),
      responses: {
        200: okSchema(z12.array(issueConfidenceSchema_default.ConfidentialDTO)),
        500: failSchema
      },
      summary: "Get my subscribed issues",
      metadata: {
        permissions: PermissionList2.SubscribeIssue
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var issueSubscribeContract_default = issueSubscribeSchema;

// src/contracts/notification/notificationContract.ts
import { z as z14 } from "zod";
import { initContract as initContract3 } from "@ts-rest/core";

// src/contracts/notification/notificationSchema.ts
import { z as z13 } from "zod";
var ConfidentialDTO8 = z13.object({
  id: z13.string(),
  template: z13.string(),
  memberId: z13.string(),
  type: z13.string(),
  isRead: z13.boolean(),
  createdAt: z13.string(),
  updatedAt: z13.string()
});
var notificationSchema = {
  ConfidentialDTO: ConfidentialDTO8
};
var notificationSchema_default = notificationSchema;

// src/contracts/notification/notificationContract.ts
var c3 = initContract3();
var notificationContract = c3.router(
  {
    getCurrentMemberNotifications: {
      method: "GET",
      path: `/members/me/notifications`,
      headers: z14.object({
        authorization: z14.string()
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
      headers: z14.object({
        authorization: z14.string()
      }),
      body: z14.object({}).nullable().optional(),
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
      headers: z14.object({
        authorization: z14.string()
      }),
      body: z14.object({}).nullable().optional(),
      responses: {
        200: okSchema(z14.array(notificationSchema_default.ConfidentialDTO)),
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
import { initContract as initContract4 } from "@ts-rest/core";
import { z as z16 } from "zod";
import { PermissionList as PermissionList3 } from "@bistudio-feedback/core-constants";

// src/contracts/apiToken/apiTokenSchema.ts
import { z as z15 } from "zod";
var dto = z15.object({
  id: z15.string(),
  displayName: z15.string(),
  hash: z15.string().optional(),
  token: z15.string().optional(),
  expiration: z15.date().nullable(),
  resourceAccess: z15.object({
    issue: z15.array(
      z15.object({
        projectId: z15.string(),
        scopes: z15.array(z15.string())
      })
    )
  }),
  createdAt: z15.date(),
  updatedAt: z15.date()
});
var apiTokenSchema = {
  dto
};
var apiTokenSchema_default = apiTokenSchema;

// src/contracts/apiToken/apiTokenContract.ts
var c4 = initContract4();
var apiTokenContract = c4.router(
  {
    generateNewApiToken: {
      method: "POST",
      path: `/api-tokens`,
      headers: z16.object({
        authorization: z16.string()
      }),
      body: z16.object({
        /*
         * @type {string} - display name of token
         */
        displayName: z16.string(),
        /*
         * @type {Array<{projectId: string; scopes: Array<string>}>} - resource access issue
         */
        issueResourceAccess: z16.array(
          z16.object({
            projectId: z16.string(),
            scopes: z16.array(z16.string())
          })
        ),
        /*
         * @type {Date} - expiration date of token
         */
        expiration: z16.string().nullable().optional()
      }),
      responses: {
        200: okSchema(apiTokenSchema_default.dto),
        409: conflictSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Generate new api token",
      metadata: {
        permissions: PermissionList3.CreateApiToken
      }
    },
    regenerateApiToken: {
      method: "POST",
      path: `/api-tokens/:id/regenerate`,
      headers: z16.object({
        authorization: z16.string()
      }),
      body: z16.object({}).nullable().optional(),
      responses: {
        200: okSchema(apiTokenSchema_default.dto),
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Regenerate api token",
      metadata: {
        permissions: PermissionList3.CreateApiToken
      }
    },
    editApiToken: {
      method: "POST",
      path: `/api-tokens/:id/edit`,
      headers: z16.object({
        authorization: z16.string()
      }),
      body: z16.object({
        /*
         * @type {string} - display name of token
         */
        displayName: z16.string()
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
        permissions: PermissionList3.UpdateApiToken
      }
    },
    deleteApiToken: {
      method: "DELETE",
      path: `/api-tokens/:id`,
      headers: z16.object({
        authorization: z16.string()
      }),
      body: z16.object({}).nullable().optional(),
      responses: {
        204: okNoContentSchema,
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      summary: "Delete apiToken by id",
      metadata: {
        permissions: PermissionList3.DeleteApiToken
      }
    },
    getApiTokens: {
      method: "GET",
      path: `/api-tokens`,
      headers: z16.object({
        authorization: z16.string()
      }),
      query: z16.object({
        /*
         * @type {number} - page number, default is 1
         */
        page: z16.string().optional(),
        /*
         * @type {string} - limit of items per page, default is 50
         */
        limit: z16.string().optional(),
        /*
         * @type {string} - search string
         */
        search: z16.string().optional()
      }),
      responses: {
        200: okSchema(
          z16.object({
            data: z16.array(apiTokenSchema_default.dto),
            count: z16.number()
          })
        ),
        401: unauthorizedSchema,
        500: failSchema
      },
      summary: "Get all api tokens",
      metadata: {
        permissions: PermissionList3.ReadApiToken
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var apiTokenContract_default = apiTokenContract;

// src/contracts/comment/commentContract.ts
import { initContract as initContract5 } from "@ts-rest/core";
import { z as z18 } from "zod";

// src/contracts/comment/commentSchema.ts
import { z as z17 } from "zod";
var RegularDTO3 = z17.object({
  id: z17.string(),
  content: z17.string(),
  authorId: z17.string(),
  issueId: z17.string(),
  parentCommentId: z17.string().optional(),
  createdAt: z17.date().optional(),
  updatedAt: z17.date().optional()
});
var SuspendDTO = RegularDTO3.omit({ content: true }).extend({
  suspend: z17.object({
    reason: z17.string(),
    date: z17.date(),
    suspendedBy: z17.string()
  })
});
var ConfidentialDTO9 = RegularDTO3.extend({
  suspend: z17.object({
    reason: z17.string(),
    date: z17.date(),
    suspendedBy: z17.string()
  }).optional(),
  reports: z17.array(z17.string()).optional()
});
var RegularDetailsDTO3 = z17.object({
  id: z17.string(),
  author: memberSchema_default.PublicMemberDetailsShortDTO,
  moderator: z17.object({
    id: z17.string(),
    displayRole: z17.string(),
    displayRoleColor: z17.string()
  }).optional(),
  content: z17.string(),
  issueId: z17.string(),
  parentCommentId: z17.string().optional(),
  createdAt: z17.date().optional(),
  updatedAt: z17.date().optional()
});
var SuspendDetailsDTO = RegularDetailsDTO3.omit({ content: true }).extend({
  suspend: z17.object({
    reason: z17.string(),
    type: z17.string(),
    by: z17.string(),
    suspendedAt: z17.date()
  })
});
var ConfidentialDetailsDTO4 = RegularDetailsDTO3.extend({
  suspend: z17.object({
    reason: z17.string(),
    type: z17.string(),
    by: z17.string(),
    suspendedAt: z17.date()
  }).optional(),
  reports: z17.array(z17.string()).optional()
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
import { PermissionList as PermissionList4 } from "@bistudio-feedback/core-constants";
var c5 = initContract5();
var commentContract = c5.router(
  {
    replyToComment: {
      method: "POST",
      path: `/comments/:commentId/reply`,
      headers: z18.object({
        authorization: z18.string()
      }),
      body: z18.object({
        /*
         * @type {string} - content of comment
         */
        content: z18.string()
      }),
      responses: {
        200: okSchema(commentSchema_default.RegularDTO),
        403: forbiddenSchema,
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Reply to comment",
      metadata: {
        permissions: PermissionList4.CreateComment
      }
    },
    replyToIssue: {
      method: "POST",
      path: `/issues/:issueId/reply`,
      headers: z18.object({
        authorization: z18.string()
      }),
      body: z18.object({
        /*
         * @type {string} - content of comment
         */
        content: z18.string()
      }),
      responses: {
        200: okSchema(commentSchema_default.RegularDTO),
        403: forbiddenSchema,
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Reply to issue",
      metadata: {
        permissions: PermissionList4.CreateComment
      }
    },
    getIssueComments: {
      method: "GET",
      path: `/issues/:issueId/comments`,
      headers: z18.object({
        authorization: z18.string().optional()
      }),
      // query: z.object({
      //   page: z.string().optional(),
      //   limit: z.string().optional(),
      // }),
      responses: {
        200: okSchema(
          z18.array(
            z18.union([
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
import { PermissionList as PermissionList5 } from "@bistudio-feedback/core-constants";
import { initContract as initContract6 } from "@ts-rest/core";
import { z as z20 } from "zod";

// src/contracts/confidence/projectConfidenceSchema.ts
import { z as z19 } from "zod";
var BasicDTO5 = z19.object({
  id: z19.string(),
  authorId: z19.string(),
  memberId: z19.string(),
  projectId: z19.string()
});
var ConfidentialDTO10 = BasicDTO5.extend({
  createdAt: z19.string(),
  updatedAt: z19.string()
});
var projectConfidenceSchema = {
  BasicDTO: BasicDTO5,
  ConfidentialDTO: ConfidentialDTO10
};
var projectConfidenceSchema_default = projectConfidenceSchema;

// src/contracts/confidence/projectConfidenceContract.ts
var CreateProjectConfidenceRequestDTO = z20.object({
  authorId: z20.string(),
  memberId: z20.string(),
  projectId: z20.string()
});
var CreateMyProjectConfidenceRequestDTO = z20.object({
  projectId: z20.string(),
  memberId: z20.string()
});
var c6 = initContract6();
var projectConfidenceContract = c6.router(
  {
    getProjectConfidences: {
      method: "GET",
      path: `/project-confidences`,
      headers: z20.object({
        authorization: z20.string()
      }),
      query: z20.object({
        /**
         * @type {string} - limit of records
         */
        limit: z20.string().optional(),
        /**
         * @type {string} - page number
         */
        page: z20.string().optional(),
        /**
         * @type {string} - type of confidence
         */
        projectId: z20.string().optional(),
        /**
         * @type {string} - author id
         */
        authorId: z20.string().optional(),
        /**
         * @type {string} - member id
         */
        memberId: z20.string().optional()
      }),
      responses: {
        200: okSchema(projectConfidenceSchema_default.ConfidentialDTO),
        500: z20.object({ message: z20.string() })
      },
      summary: "Get project confidences by query",
      metadata: {
        permissions: {
          OR: [
            PermissionList5.ReadConfidenceAny,
            PermissionList5.ReadConfidenceOwn
          ]
        }
      }
    },
    getProjectConfidenceById: {
      method: "GET",
      path: `/project-confidences/:confidenceId`,
      headers: z20.object({
        authorization: z20.string()
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
            PermissionList5.ReadConfidenceAny,
            PermissionList5.ReadConfidenceOwn
          ]
        }
      }
    },
    deleteProjectConfidence: {
      method: "DELETE",
      path: `/project-confidences`,
      headers: z20.object({
        authorization: z20.string()
      }),
      body: z20.object({
        projectId: z20.string(),
        memberId: z20.string()
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
            PermissionList5.DeleteConfidenceAny,
            PermissionList5.DeleteConfidenceOwn,
            PermissionList5.ManageProjectAsModerator
          ]
        }
      }
    },
    createMyProjectConfidence: {
      method: "POST",
      path: `/members/me/project-confidences`,
      body: CreateMyProjectConfidenceRequestDTO,
      headers: z20.object({
        authorization: z20.string()
      }),
      responses: {
        200: okSchema(projectConfidenceSchema_default.ConfidentialDTO),
        409: conflictSchema,
        500: failSchema
      },
      summary: "Create project confidence record by logged member",
      metadata: {
        permissions: PermissionList5.CreateConfidenceOwn
      }
    },
    createProjectConfidence: {
      method: "POST",
      path: `/project-confidences`,
      body: CreateProjectConfidenceRequestDTO,
      headers: z20.object({
        authorization: z20.string()
      }),
      responses: {
        200: okSchema(projectConfidenceSchema_default.ConfidentialDTO),
        409: conflictSchema,
        500: failSchema
      },
      summary: "Create project confidence record managed by moderator or admin",
      metadata: {
        permissions: PermissionList5.CreateConfidenceAny
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var projectConfidenceContract_default = projectConfidenceContract;

// src/contracts/file/fileContract.ts
import { PermissionList as PermissionList6 } from "@bistudio-feedback/core-constants";
import { initContract as initContract7 } from "@ts-rest/core";
import { z as z21 } from "zod";
var c7 = initContract7();
var fileContract = c7.router(
  {
    getMyFileById: {
      method: "GET",
      path: `/files/:fileId`,
      headers: z21.object({
        authorization: z21.string()
      }).optional(),
      responses: {
        200: okSchema(fileSchema_default.ConfidentialDetailsDTO),
        404: notFoundSchema,
        500: z21.object({ message: z21.string() })
      },
      summary: "Get file by id",
      metadata: {
        isPublic: true,
        permissions: PermissionList6.ReadFileOwn
      }
    },
    uploadMyFiles: {
      method: "POST",
      path: `/members/me/files`,
      headers: z21.object({
        authorization: z21.string()
      }),
      contentType: "multipart/form-data",
      body: c7.type(),
      responses: {
        200: okSchema(z21.array(fileSchema_default.ConfidentialDTO)),
        403: forbiddenSchema,
        500: z21.object({ message: z21.string() })
      },
      summary: "Upload my files to the storage",
      metadata: {
        permissions: PermissionList6.CreateFileOwn
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var fileContract_default = fileContract;

// src/contracts/form/formContract.ts
import { initContract as initContract8 } from "@ts-rest/core";
import { z as z23 } from "zod";

// src/contracts/form/formSchema.ts
import * as z22 from "zod";
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
var c8 = initContract8();
var formContract = c8.router(
  {
    createForm: {
      method: "POST",
      path: `/forms`,
      headers: z23.object({
        authorization: z23.string()
      }),
      body: requestBodySchema,
      responses: {
        200: okSchema(formSchema_default.RegularDTO),
        403: forbiddenSchema,
        409: conflictSchema,
        500: z23.object({ message: z23.string() })
      },
      summary: "Create form",
      metadata: {
        permissions: {}
      }
    },
    getFormById: {
      method: "GET",
      path: `/forms/by/id/:formId`,
      headers: z23.object({
        authorization: z23.string()
      }).optional(),
      responses: {
        200: okSchema(
          z23.union([
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
      headers: z23.object({
        authorization: z23.string()
      }),
      query: z23.object({
        /**
         * @type {string} - page number
         */
        page: z23.string().optional(),
        /**
         * @type {string} - limit of records
         */
        limit: z23.string().optional(),
        /**
         * @type {string} - project ids to filter
         */
        projectIds: z23.string().optional(),
        /**
         * @type {string} - search string - name. displayName
         */
        search: z23.string().optional()
      }),
      responses: {
        200: okSchema(
          z23.union([
            formSchema_default.ConfidentialDTO,
            formSchema_default.RegularDTO,
            formSchema_default.PublicDTO
          ])
        ),
        500: z23.object({ message: z23.string() })
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
import { z as z24 } from "zod";
var CreateIssueRequestDTO = z24.object({
  /**
   * @type {string} - title of issue
   */
  title: z24.string(),
  /**
   * @type {Object} - array of fields, they compose issue
   */
  fields: z24.array(
    z24.object({
      name: z24.string(),
      value: z24.any()
    })
  ),
  tagIds: z24.array(z24.string()),
  /**
   * @type {boolean} - is issue private
   */
  isPrivate: z24.boolean(),
  /**
   * @type {string} - id of project
   */
  projectId: z24.string()
});
var requestBodySchema2 = CreateIssueRequestDTO;

// src/contracts/issue/issueContract.ts
import { PermissionList as PermissionList7 } from "@bistudio-feedback/core-constants";
import { initContract as initContract9 } from "@ts-rest/core";
import { z as z25 } from "zod";
var c9 = initContract9();
var issueContract = c9.router(
  {
    createIssue: {
      method: "POST",
      path: `/issues`,
      headers: z25.object({
        authorization: z25.string()
      }),
      body: requestBodySchema2,
      responses: {
        200: okSchema(issueSchema_default.ConfidentialDetailsDTO),
        403: forbiddenSchema,
        409: conflictSchema,
        500: z25.object({ message: z25.string() })
      },
      summary: "Create issue",
      metadata: {
        permissions: {
          AND: [
            {
              OR: [
                PermissionList7.ReadProjectOwn,
                PermissionList7.ReadProjectConfident,
                PermissionList7.ReadProjectAny
              ]
            },
            PermissionList7.CreateIssue
          ]
        }
      }
    },
    editIssueById: {
      method: "POST",
      path: `/issues/by/id/:issueId/edit`,
      headers: z25.object({
        authorization: z25.string()
      }),
      body: z25.object({
        title: z25.string().optional(),
        fields: z25.array(
          z25.object({
            name: z25.string(),
            value: z25.any()
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
                PermissionList7.ReadProjectOwn,
                PermissionList7.ReadProjectConfident,
                PermissionList7.ReadProjectAny
              ]
            },
            {
              OR: [
                PermissionList7.UpdateIssueOwn,
                PermissionList7.ManageProjectAsModerator,
                PermissionList7.UpdateIssueAny
              ]
            }
          ]
        }
      }
    },
    upvoteIssue: {
      method: "POST",
      path: `/issues/by/id/:issueId/upvote`,
      headers: z25.object({
        authorization: z25.string()
      }),
      body: z25.object({}).nullable(),
      responses: {
        201: okSchema(),
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema
      },
      summary: "Upvote issue",
      metadata: {
        permissions: PermissionList7.VoteIssue
      }
    },
    downvoteIssue: {
      method: "POST",
      path: `/issues/by/id/:issueId/downvote`,
      headers: z25.object({
        authorization: z25.string()
      }),
      body: z25.object({}).nullable(),
      responses: {
        201: okSchema(),
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema
      },
      summary: "Downvote issue",
      metadata: {
        permissions: PermissionList7.VoteIssue
      }
    },
    unvoteIssue: {
      method: "POST",
      path: `/issues/by/id/:issueId/unvote`,
      headers: z25.object({
        authorization: z25.string()
      }),
      body: z25.object({}).nullable(),
      responses: {
        201: okSchema(),
        404: notFoundSchema,
        500: failSchema
      },
      summary: "Unvote issue",
      metadata: {
        permissions: PermissionList7.VoteIssue
      }
    },
    manageIssueTags: {
      method: "POST",
      path: `/issues/by/id/:issueId/tags`,
      headers: z25.object({
        authorization: z25.string()
      }),
      body: z25.object({
        tags: z25.array(z25.string())
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
            PermissionList7.UpdateIssueOwn,
            PermissionList7.ManageProjectAsModerator,
            PermissionList7.UpdateIssueAny
          ]
        }
      }
    },
    changeIssueState: {
      method: "POST",
      path: `/issues/by/id/:issueId/state`,
      headers: z25.object({
        authorization: z25.string()
      }),
      body: z25.object({
        state: z25.enum([
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
            PermissionList7.ManageProjectAsModerator,
            PermissionList7.UpdateIssueAny
          ]
        }
      }
    },
    changeIssueVisibility: {
      method: "POST",
      path: `/issues/by/id/:issueId/visibility`,
      headers: z25.object({
        authorization: z25.string()
      }),
      body: z25.object({
        visibility: z25.enum(["PUBLIC", "PRIVATE"])
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
            PermissionList7.ManageProjectAsModerator,
            PermissionList7.UpdateIssueAny
          ]
        }
      }
    },
    getIssueById: {
      method: "GET",
      path: `/issues/by/id/:issueId`,
      headers: z25.object({
        authorization: z25.string()
      }).optional(),
      responses: {
        200: okSchema(
          z25.union([
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
      headers: z25.object({
        authorization: z25.string()
      }).optional(),
      responses: {
        200: okSchema(
          z25.union([
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
      headers: z25.object({
        authorization: z25.string()
      }).optional(),
      query: z25.object({
        page: z25.string().optional(),
        limit: z25.string().optional(),
        /*
         * @type {string} - search query
         */
        search: z25.string().optional(),
        /*
         * @type {string[]} - project names array
         */
        projects: z25.string().optional(),
        /*
         * @type {string[]} - issue states array
         */
        states: z25.string().optional(),
        /*
         * @type {string[]} - authors username array
         */
        authors: z25.string().optional(),
        /*
         * @type {string} - sort type
         */
        sort: z25.enum(["recent", "newest", "votes"]).optional()
      }),
      responses: {
        200: okSchema(
          z25.object({
            count: z25.number(),
            data: z25.array(
              z25.union([
                issueSchema_default.PublicInListDetailsDTO,
                issueSchema_default.RegularInListDetailsDTO,
                issueSchema_default.ConfidentialInListDetailsDTO
              ])
            )
          })
        ),
        404: notFoundSchema,
        403: forbiddenSchema,
        500: z25.object({ message: z25.string() })
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
      headers: z25.object({
        authorization: z25.string()
      }),
      query: z25.object({
        /**
         * @type {string} - limit of records
         */
        limit: z25.string().optional(),
        /**
         * @type {string} - page number
         */
        page: z25.string().optional()
      }),
      responses: {
        200: okSchema(issueConfidenceSchema_default.ConfidentialDTO),
        500: failSchema
      },
      summary: "Get issue confidents by issue id",
      metadata: {
        permissions: {
          OR: [
            PermissionList7.ReadConfidenceAny,
            PermissionList7.ReadConfidenceOwn
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
import { PermissionList as PermissionList8 } from "@bistudio-feedback/core-constants";
import { initContract as initContract10 } from "@ts-rest/core";
import { z as z26 } from "zod";
var c10 = initContract10();
var issueTagRouterSchema = c10.router(
  {
    getIssueTags: {
      method: "GET",
      path: "/issue-tags",
      headers: z26.object({
        authorization: z26.string()
      }),
      query: z26.object({
        page: z26.string().optional(),
        limit: z26.string().optional(),
        search: z26.string().optional()
      }),
      responses: {
        200: okSchema(z26.array(issueTagSchema_default.IssueTagDetailsDTO)),
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
      headers: z26.object({
        authorization: z26.string()
      }),
      query: z26.object({}).nullable().optional(),
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
      headers: z26.object({
        authorization: z26.string()
      }),
      body: z26.object({
        displayName: z26.string(),
        color: z26.string(),
        description: z26.string().optional().nullable()
      }),
      responses: {
        200: okSchema(issueTagSchema_default.IssueTagDTO),
        403: forbiddenSchema,
        409: conflictSchema,
        500: failSchema
      },
      metadata: {
        permissions: PermissionList8.CreateIssueTag
      }
    },
    editIssueTag: {
      method: "POST",
      path: `/issue-tags/:id/edit`,
      headers: z26.object({
        authorization: z26.string()
      }),
      body: z26.object({
        displayName: z26.string(),
        color: z26.string(),
        description: z26.string().nullable()
      }),
      responses: {
        200: okSchema(issueTagSchema_default.IssueTagDTO),
        403: forbiddenSchema,
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema
      },
      metadata: {
        permissions: PermissionList8.UpdateIssueTag
      }
    },
    deleteIssueTag: {
      method: "DELETE",
      path: "/issue-tags/:id",
      headers: z26.object({
        authorization: z26.string()
      }),
      body: z26.object({}).nullable().optional(),
      responses: {
        204: okNoContentSchema,
        404: notFoundSchema,
        403: forbiddenSchema,
        500: failSchema
      },
      metadata: {
        permissions: PermissionList8.DeleteIssueTag
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var issueTagContract_default = issueTagRouterSchema;

// src/contracts/member/memberContract.ts
import { PermissionList as PermissionList9 } from "@bistudio-feedback/core-constants";
import { initContract as initContract11 } from "@ts-rest/core";
import { z as z27 } from "zod";
var c11 = initContract11();
var memberContract = c11.router(
  {
    getCurrentMember: {
      method: "GET",
      path: `/members/me`,
      headers: z27.object({
        authorization: z27.string()
      }),
      responses: {
        200: okSchema(memberSchema_default.ConfidentialDTO),
        500: failSchema
      },
      summary: "Get the current member",
      metadata: {
        permissions: PermissionList9.ReadMemberConfidentialOwn
      }
    },
    geMemberByUsername: {
      method: "GET",
      path: `/members/by/username/:username`,
      headers: z27.object({
        authorization: z27.string()
      }).optional(),
      responses: {
        200: okSchema(
          z27.union([
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
      headers: z27.object({
        authorization: z27.string()
      }).optional(),
      responses: {
        200: okSchema(
          z27.union([
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
      headers: z27.object({
        authorization: z27.string()
      }).optional(),
      query: z27.object({
        /**
         * @type {string} - page number, default is 1
         */
        page: z27.string().optional(),
        /**
         * @type {string} - limit of items per page, default and max is 50
         */
        limit: z27.string().optional(),
        /**
         * @type {string} - search string, includes username, email, roleName, roleDisplayName
         */
        search: z27.string().optional()
      }),
      responses: {
        200: okSchema(z27.array(memberSchema_default.BasicDTO)),
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
import { z as z28 } from "zod";
var Dto = z28.object({
  id: z28.string(),
  projectId: z28.string(),
  memberIds: z28.array(z28.string()),
  actions: z28.object({
    comments: z28.object({
      block: z28.boolean(),
      delete: z28.boolean()
    }),
    issues: z28.object({
      block: z28.boolean(),
      delete: z28.boolean(),
      updateState: z28.boolean(),
      updateFields: z28.boolean(),
      updateVisibility: z28.boolean(),
      updateTags: z28.boolean()
    }),
    issueConfidents: z28.object({
      add: z28.boolean(),
      delete: z28.boolean()
    }),
    projectConfidents: z28.object({
      add: z28.boolean(),
      delete: z28.boolean()
    })
  }),
  displayRole: z28.string(),
  displayRoleColor: z28.string(),
  createdAt: z28.string(),
  updatedAt: z28.string()
});
var projectModeratorSchema = {
  Dto
};
var projectModeratorSchema_default = projectModeratorSchema;

// src/contracts/project/projectContract.ts
import { PermissionList as PermissionList10 } from "@bistudio-feedback/core-constants";
import { initContract as initContract12 } from "@ts-rest/core";
import { z as z31 } from "zod";

// src/contracts/project/projectSchema.ts
import { z as z30 } from "zod";

// src/contracts/projectGroup/projectGroupSchema.ts
import { z as z29 } from "zod";
var BasicDTO6 = z29.object({
  id: z29.string(),
  slug: z29.string(),
  name: z29.string(),
  // state: z.enum(["ACTIVE", "DRAFT"]),
  displayName: z29.string(),
  bannerId: z29.string().nullable(),
  description: z29.string()
});
var BasicDetailsDTO = BasicDTO6.extend({
  banner: z29.string().nullable()
});
var ConfidentialDTO12 = BasicDTO6.extend({
  storageId: z29.string(),
  authorId: z29.string(),
  createdAt: z29.date(),
  updatedAt: z29.date()
});
var ConfidentialDetailsDTO5 = ConfidentialDTO12.extend({
  banner: z29.string().nullable(),
  author: z29.string().nullable()
});
var projectGroupSchema = {
  BasicDTO: BasicDTO6,
  BasicDetailsDTO,
  ConfidentialDTO: ConfidentialDTO12,
  ConfidentialDetailsDTO: ConfidentialDetailsDTO5
};
var projectGroupSchema_default = projectGroupSchema;

// src/contracts/project/projectSchema.ts
var PreviewDTO2 = z30.object({
  id: z30.string(),
  name: z30.string(),
  key: z30.string(),
  displayName: z30.string(),
  slug: z30.string()
});
var RegularDTO5 = z30.object({
  id: z30.string(),
  groupId: z30.string(),
  formId: z30.string().nullable(),
  state: z30.enum(["ACTIVE", "DRAFT", "ARCHIVED"]),
  key: z30.string(),
  visibility: z30.enum(["PUBLIC", "PRIVATE"]),
  name: z30.string(),
  displayName: z30.string(),
  slug: z30.string(),
  banner: fileSchema_default.RegularDetailsDTO,
  description: z30.string(),
  issuesCount: z30.number()
});
var RegularDetailsDTO4 = RegularDTO5.extend({
  group: projectGroupSchema_default.BasicDTO
}).omit({ groupId: true });
var PublicDetailsDTO2 = RegularDetailsDTO4;
var ConfidentialDTO13 = RegularDTO5.extend({
  authorId: z30.string(),
  storageId: z30.string(),
  bannerId: z30.string().nullable(),
  keyArtId: z30.string().nullable(),
  createdAt: z30.date(),
  updatedAt: z30.date()
});
var ConfidentialDetailsDTO6 = ConfidentialDTO13.extend({
  group: projectGroupSchema_default.BasicDTO,
  author: memberSchema_default.BasicDTO,
  banner: fileSchema_default.ConfidentialDetailsDTO,
  keyArt: fileSchema_default.ConfidentialDetailsDTO,
  moderatorsList: z30.array(memberSchema_default.RegularMemberDetailsShortDTO)
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
var c12 = initContract12();
var projectContract = c12.router(
  {
    getProjects: {
      method: "GET",
      path: `/projects`,
      headers: z31.object({
        authorization: z31.string()
      }).optional(),
      query: z31.object({
        /**
         * @type {string} - page number, default is 1
         */
        page: z31.string().optional(),
        /**
         * @type {string} - limit of items per page, default is 50
         */
        limit: z31.string().optional(),
        /**
         * @type {Array} - array of project group ids
         * @items {string}
         */
        groupIds: z31.string().optional(),
        /**
         * @type {string} - search string
         */
        search: z31.string().optional(),
        /**
         * @type {string} - author id
         */
        authorId: z31.string().optional()
      }),
      responses: {
        200: okSchema(
          z31.object({
            data: z31.array(
              z31.union([
                projectSchema_default.PublicDetailsDTO,
                projectSchema_default.RegularDetailsDTO,
                projectSchema_default.ConfidentialDetailsDTO
              ])
            ),
            count: z31.number()
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
      headers: z31.object({
        authorization: z31.string()
      }).optional(),
      responses: {
        200: okSchema(
          z31.union([
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
      headers: z31.object({
        authorization: z31.string()
      }).optional(),
      responses: {
        200: okSchema(
          z31.union([
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
      headers: z31.object({
        authorization: z31.string()
      }),
      body: z31.object({
        /**
         * @type {string} - id of the project group
         */
        groupId: z31.string(),
        /**
         * @type {string} - display name of the project
         */
        displayName: z31.string(),
        /**
         * @type {string} - slug
         */
        slug: z31.string(),
        /**
         * @type {string} - file id for the project banner
         * bannerId of the file, which the user is authoring
         * allowed: jpeg, png, gif, tiff
         *
         */
        bannerId: z31.string().nullable(),
        /**
         * @type {string} - file id for the project key art
         * keyArtId of the file, which the user is authoring
         * allowed: jpeg, png, gif, tiff
         *
         */
        keyArtId: z31.string().nullable(),
        /**
         * @type {string} - key that is prefix for all project issues
         */
        key: z31.string(),
        /**
         * @type {string} - description
         */
        description: z31.string(),
        /**
         * @type {string} -  visibility, whether project is public or private
         */
        visibility: z31.enum(["PUBLIC", "PRIVATE"])
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
        permissions: PermissionList10.CreateProject
      }
    },
    editProjectGeneralSettingsById: {
      method: "POST",
      path: `/projects/by/id/:projectId/edit`,
      headers: z31.object({
        authorization: z31.string()
      }),
      body: z31.object({
        // /**
        //  * @type {string} - id of the project group
        //  */
        // groupId: z.string().optional(),
        /**
         * @type {string} - display name of the project
         */
        displayName: z31.string().optional(),
        /**
         * @type {string} - slug
         */
        slug: z31.string().optional(),
        /**
         * @type {string} - key identifier for project issues
         */
        key: z31.string().optional(),
        /**
         * @type {string} - file id for the project banner
         */
        bannerId: z31.string().nullable().optional(),
        /**
         * @type {string} - file id for the project key art
         */
        keyArtId: z31.string().nullable().optional(),
        /**
         * @type {string} - description
         */
        description: z31.string().optional(),
        /**
         * @type {string} -  visibility, whether project is public or private
         */
        visibility: z31.enum(["PUBLIC", "PRIVATE"]).optional()
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
            PermissionList10.UpdateProjectAny,
            PermissionList10.UpdateProjectOwn
          ]
        }
      }
    },
    changeProjectStateById: {
      method: "POST",
      path: `/projects/by/id/:projectId/state`,
      headers: z31.object({
        authorization: z31.string()
      }),
      body: z31.object({
        state: z31.enum(["ACTIVE", "DRAFT", "ARCHIVED"])
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
            PermissionList10.ManageProjectAsModerator,
            PermissionList10.UpdateProjectAny,
            PermissionList10.UpdateProjectOwn
          ]
        }
      }
    },
    manageProjectModerators: {
      method: "POST",
      path: "/projects/by/id/:projectId/moderators/manage",
      headers: z31.object({
        authorization: z31.string()
      }),
      body: z31.object({
        rules: z31.array(
          z31.object({
            /**
             * @type {string} - id of the project moderator
             */
            id: z31.string().nullable().optional(),
            /**
             * @type {Array} - array of member ids
             * @items {string}
             */
            memberIds: z31.array(z31.string()).optional(),
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
            actions: z31.object({
              comments: z31.object({
                block: z31.boolean(),
                delete: z31.boolean()
              }),
              issues: z31.object({
                block: z31.boolean(),
                delete: z31.boolean(),
                updateState: z31.boolean(),
                updateFields: z31.boolean(),
                updateHiddenFields: z31.boolean(),
                updateInternalFields: z31.boolean(),
                updateVisibility: z31.boolean(),
                updateTags: z31.boolean(),
                updateConfidents: z31.boolean()
              }),
              project: z31.object({
                updateGeneralSettings: z31.boolean(),
                updateState: z31.boolean(),
                updateForm: z31.boolean(),
                updateModerators: z31.boolean(),
                updateConfidents: z31.boolean()
              })
            }).optional(),
            /**
             * @type {string} - display role name
             */
            displayRole: z31.string(),
            /**
             * @type {string} - display role color
             */
            displayRoleColor: z31.string()
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
            PermissionList10.ManageProjectAsModerator,
            PermissionList10.UpdateProjectAny,
            PermissionList10.UpdateProjectOwn
          ]
        }
      }
    },
    deleteProjectModeratorById: {
      method: "DELETE",
      path: `/projects/by/id/:projectId/moderators/:moderatorId`,
      headers: z31.object({
        authorization: z31.string()
      }),
      body: z31.object({}).nullable().optional(),
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
            PermissionList10.ManageProjectAsModerator,
            PermissionList10.UpdateProjectAny,
            PermissionList10.UpdateProjectOwn
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
import { PermissionList as PermissionList11 } from "@bistudio-feedback/core-constants";
import { initContract as initContract13 } from "@ts-rest/core";
import { z as z32 } from "zod";
var c13 = initContract13();
var ProjectGroupRequestDTO = z32.object({
  /**
   * bannerId of the file, which the user is authoring
   * allowed: jpeg, png, gif, tiff
   */
  bannerId: z32.string().optional(),
  displayName: z32.string(),
  description: z32.string(),
  slug: z32.string()
});
var projectGroupContract = c13.router(
  {
    getProjectGroups: {
      method: "GET",
      path: `/project-groups`,
      headers: z32.object({
        authorization: z32.string()
      }).optional(),
      query: z32.object({
        limit: z32.string().optional(),
        page: z32.string().optional(),
        search: z32.string().optional()
      }),
      responses: {
        200: okSchema(z32.array(projectGroupSchema_default.BasicDTO)),
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
      headers: z32.object({
        authorization: z32.string()
      }).optional(),
      path: `/project-groups/by/id/:projectGroupId`,
      responses: {
        200: okSchema(
          z32.union([
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
      headers: z32.object({
        authorization: z32.string()
      }).optional(),
      responses: {
        200: okSchema(
          z32.union([
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
      headers: z32.object({
        authorization: z32.string()
      }),
      body: z32.object({
        /*
         * @type {string} - display name of the project group
         */
        displayName: z32.string().optional(),
        /**
         * @type {string} - slug
         */
        slug: z32.string().optional(),
        /**
         * @type {string} - file id for the project group banner
         */
        bannerId: z32.string().nullable().optional(),
        /**
         * @type {string} - description
         */
        description: z32.string().optional()
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
          OR: [PermissionList11.UpdateProjectGroup]
        }
      }
    },
    createProjectGroup: {
      method: "POST",
      headers: z32.object({
        authorization: z32.string()
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
        permissions: PermissionList11.CreateProjectGroup
      }
    }
  },
  {
    pathPrefix: "/api"
  }
);
var projectGroupContract_default = projectGroupContract;

// src/contracts/role/roleContract.ts
import { PermissionList as PermissionList12 } from "@bistudio-feedback/core-constants";
import { initContract as initContract14 } from "@ts-rest/core";
import { z as z34 } from "zod";

// src/contracts/role/roleSchema.ts
import { z as z33 } from "zod";
var RegularDTO6 = z33.object({
  id: z33.string(),
  name: z33.string(),
  displayName: z33.string()
});
var ConfidentialDTO14 = RegularDTO6.extend({
  permissions: z33.array(z33.string()),
  createdAt: z33.string(),
  updatedAt: z33.string()
});
var roleSchema = {
  RegularDTO: RegularDTO6,
  ConfidentialDTO: ConfidentialDTO14
};
var roleSchema_default = roleSchema;

// src/contracts/role/roleContract.ts
var c14 = initContract14();
var RoleRequestDTO = z34.object({
  name: z34.string(),
  displayName: z34.string(),
  permissions: z34.array(z34.string())
  // TODO: add enums constants of permissionList
});
var roleContract = c14.router(
  {
    createRole: {
      method: "POST",
      headers: z34.object({
        authorization: z34.string()
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
          middleware: [PermissionList12.CreateRole]
        }
      }
    },
    getRoleById: {
      method: "GET",
      path: `/roles/by/id/:roleId`,
      headers: z34.object({
        authorization: z34.string()
      }).optional(),
      responses: {
        200: okSchema(
          z34.union([roleSchema_default.RegularDTO, roleSchema_default.ConfidentialDTO])
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
      headers: z34.object({
        authorization: z34.string()
      }).optional(),
      responses: {
        200: okSchema(
          z34.union([roleSchema_default.RegularDTO, roleSchema_default.ConfidentialDTO])
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
      headers: z34.object({
        authorization: z34.string()
      }),
      body: z34.object({
        replaceWithRoleId: z34.string().optional()
      }),
      responses: {
        204: z34.object({}),
        400: badRequestSchema,
        403: forbiddenSchema,
        409: conflictSchema,
        500: failSchema
      },
      summary: "Delete role by id",
      metadata: {
        permissions: PermissionList12.DeleteRole
      }
    },
    editRoleById: {
      method: "POST",
      path: `/roles/by/id/:roleId/edit`,
      headers: z34.object({
        authorization: z34.string()
      }),
      body: z34.object({
        name: z34.string().optional(),
        displayName: z34.string().optional(),
        permissions: z34.array(z34.string()).optional()
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
        permissions: PermissionList12.UpdateRole
      }
    },
    getRoles: {
      method: "GET",
      path: `/roles`,
      headers: z34.object({
        authorization: z34.string()
      }),
      query: z34.object({
        page: z34.string().optional(),
        limit: z34.string().optional(),
        search: z34.string().optional()
      }),
      responses: {
        200: okSchema(z34.array(roleSchema_default.RegularDTO)),
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
import { initContract as initContract15 } from "@ts-rest/core";
import { PermissionList as PermissionList13 } from "@bistudio-feedback/core-constants";
import { z as z35 } from "zod";
var UserLoginSchema = z35.object({
  email: z35.string(),
  password: z35.string()
}).strict();
var CreateUserDTO = z35.object({
  username: z35.string(),
  password: z35.string(),
  email: z35.string()
}).strict();
var accesshTokenResponseSchema = z35.object({
  accessToken: z35.string(),
  refreshToken: z35.string(),
  expiresIn: z35.number()
});
var c15 = initContract15();
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
      headers: z35.object({
        authorization: z35.string()
      }),
      body: z35.nullable(z35.object({})),
      responses: {
        200: okSchema(z35.null()),
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
      body: z35.object({
        refreshToken: z35.string()
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
      headers: z35.object({
        authorization: z35.string()
      }),
      responses: {
        200: okSchema(userSchema_default.ConfidentialDTO),
        404: notFoundSchema,
        403: forbiddenSchema,
        409: conflictSchema,
        500: failSchema
      },
      body: z35.object({
        username: z35.string().optional(),
        newEmail: z35.string().email().optional()
      }),
      summary: "Edit a current user",
      metadata: {
        permissions: PermissionList13.UpdateUserOwn
      }
    },
    editUserById: {
      method: "POST",
      path: "/users/by/id/:userId/edit",
      headers: z35.object({
        authorization: z35.string()
      }),
      responses: {
        200: okSchema(userSchema_default.ConfidentialDTO),
        403: forbiddenSchema,
        404: notFoundSchema,
        409: conflictSchema,
        500: failSchema
      },
      body: z35.object({
        /**
         * @type {string} - user username
         */
        username: z35.string().optional(),
        /**
         * @type {string} - user email
         */
        email: z35.string().email().optional(),
        /**
         * @type {string} - user role id
         */
        roleId: z35.string().optional()
      }),
      summary: "Edit any user",
      metadata: {
        permissions: PermissionList13.UpdateUserAny
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
      headers: z35.object({
        authorization: z35.string()
      }),
      responses: {
        200: okSchema(userSchema_default.ConfidentialDTO),
        500: failSchema
      },
      summary: "Get the current user",
      metadata: {
        permissions: PermissionList13.ReadUserOwn
      }
    },
    getUserByUsername: {
      method: "GET",
      path: `/users/by/username/:username`,
      headers: z35.object({
        authorization: z35.string()
      }),
      responses: {
        200: okSchema(
          z35.union([
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
      headers: z35.object({
        authorization: z35.string()
      }),
      responses: {
        200: okSchema(
          z35.union([
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
      body: z35.object({}).nullable(),
      responses: {
        204: okSchema(z35.null()),
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
import { z as z37 } from "zod";
import { initContract as initContract16 } from "@ts-rest/core";

// src/contracts/issueActivity/issueActivitySchema.ts
import { z as z36 } from "zod";
var typeSchema = z36.enum([
  "ISSUE_CREATE",
  "ISSUE_FIELDS_CHANGE",
  "ISSUE_STATE_CHANGE",
  "ISSUE_ASSIGN",
  "ISSUE_TAGS_UPDATE",
  "ISSUE_COMMENT_REPLY",
  "ISSUE_TITLE_UPDATE"
]);
var IssueActivityDTO = z36.object({
  id: z36.string(),
  memberId: z36.string(),
  projectId: z36.string(),
  issueId: z36.string(),
  assignMemberId: z36.string().optional(),
  commentId: z36.string().optional(),
  type: typeSchema,
  context: z36.record(z36.unknown()),
  createdAt: z36.string(),
  updatedAt: z36.string()
});
var IssueActivityDetailsDTO = IssueActivityDTO.extend({
  member: memberSchema_default.PublicMemberDetailsShortDTO,
  project: projectSchema_default.PreviewDTO,
  issue: issueSchema_default.PreviewDTO,
  comment: commentSchema_default.RegularDTO.optional(),
  type: typeSchema,
  context: z36.record(z36.unknown()),
  createdAt: z36.string(),
  updatedAt: z36.string()
});
var issueActivitySchema = {
  IssueActivityDTO,
  IssueActivityDetailsDTO
};
var issueActivitySchema_default = issueActivitySchema;

// src/contracts/issueActivity/issueActivityContract.ts
var c16 = initContract16();
var issueActivityContract = c16.router(
  {
    getIssueActivitiesByIssueId: {
      method: "GET",
      path: `/issues/:issueId/activities`,
      headers: z37.object({
        authorization: z37.string()
      }),
      query: z37.object({
        page: z37.string().optional(),
        limit: z37.string().optional()
      }),
      responses: {
        200: okSchema(z37.array(issueActivitySchema_default.IssueActivityDetailsDTO)),
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
var c17 = initContract17();
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
export {
  apiContract_default as apiContract,
  apiTokenContract_default as apiTokenContract,
  apiTokenSchema_default as apiTokenSchema,
  commentContract_default as commentContract,
  commentSchema_default as commentSchema,
  fileContract_default as fileContract,
  fileSchema_default as fileSchema,
  formContract_default as formContract,
  formSchema_default as formSchema,
  issueActivityContract_default as issueActivityContract,
  issueActivitySchema_default as issueActivitySchema,
  issueConfidenceContract_default as issueConfidenceContract,
  issueConfidenceSchema_default as issueConfidenceSchema,
  issueContract_default as issueContract,
  issueSchema_default as issueSchema,
  issueSubscribeContract_default as issueSubscribeContract,
  issueSubscribeSchema_default as issueSubscribeSchema,
  issueTagContract_default as issueTagRouterSchema,
  issueTagSchema_default as issueTagSchema,
  memberContract_default as memberContract,
  memberSchema_default as memberSchema,
  notificationContract_default as notificationContract,
  notificationSchema_default as notificationSchema,
  projectConfidenceContract_default as projectConfidenceContract,
  projectConfidenceSchema_default as projectConfidenceSchema,
  projectContract_default as projectContract,
  projectGroupContract_default as projectGroupContract,
  projectGroupSchema_default as projectGroupSchema,
  projectSchema_default as projectSchema,
  roleContract_default as roleContract,
  roleSchema_default as roleSchema,
  userContract_default as userContract,
  userSchema_default as userSchema
};
