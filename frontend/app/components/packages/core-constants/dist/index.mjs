// src/permissions/apiToken.ts
var ApiTokenPermissionList = {
  ReadApiToken: "read:apiToken",
  CreateApiToken: "create:apiToken",
  UpdateApiToken: "update:apiToken",
  DeleteApiToken: "delete:apiToken"
};

// src/permissions/comment.ts
var CommentPermissionList = {
  UpdateCommentAny: "update:comment:any",
  UpdateCommentOwn: "update:comment:own",
  DeleteCommentAny: "delete:comment:any",
  DeleteCommentOwn: "delete:comment:own",
  BlockCommentAny: "block:comment",
  CreateComment: "create:comment"
};

// src/permissions/confidenceRecord.ts
var ConfidenceRecordPermissionList = {
  CreateConfidenceAny: "create:confidence:any",
  CreateConfidenceOwn: "create:confidence:own",
  ReadConfidenceAny: "read:confidence:any",
  ReadConfidenceOwn: "read:confidence:own",
  UpdateConfidenceAny: "update:confidence:any",
  UpdateConfidenceOwn: "update:confidence:own",
  DeleteConfidenceAny: "delete:confidence:any",
  DeleteConfidenceOwn: "delete:confidence:own"
};

// src/permissions/file.ts
var FilePermissionList = {
  ReadFileAny: "read:file:any",
  ReadFileOwn: "read:file:own",
  CreateFileOwn: "create:file:own",
  CreateFileAny: "create:file:any",
  UpdateFileOwn: "update:file:own",
  UpdateFileAny: "update:file:any",
  DeleteFileOwn: "delete:file:own",
  DeleteFileAny: "delete:file:any"
};

// src/permissions/form.ts
var FormPermissionList = {
  ReadFormAny: "read:form:any",
  ReadFormOwn: "read:form:own",
  UpdateForm: "update:form",
  DeleteForm: "delete:form",
  CreateForm: "create:form"
};

// src/permissions/issue.ts
var IssuePermissionList = {
  CreateIssue: "create:issue",
  ReadIssueAny: "read:issue:any",
  ReadIssueConfident: "read:issue:confident",
  ReadIssueOwn: "read:issue:own",
  UpdateIssueAny: "update:issue:any",
  UpdateIssueOwn: "update:issue:own",
  DeleteIssueAny: "delete:issue:any",
  DeleteIssueOwn: "delete:issue:own",
  VoteIssue: "vote:issue",
  SubscribeIssue: "subscribe:issue"
};

// src/permissions/issueTag.ts
var IssueTagPermissionList = {
  CreateIssueTag: "create:issueTag",
  DeleteIssueTag: "delete:issueTag",
  UpdateIssueTag: "update:issueTag"
};

// src/permissions/member.ts
var MemberPermissionList = {
  ReadMemberConfidentialAny: "read:memberConfidential:any",
  ReadMemberConfidentialOwn: "read:memberConfidential:own",
  UpdateMemberAny: "update:member:any",
  UpdateMemberOwn: "update:member:own",
  DeleteMemberAny: "delete:member:any",
  DeleteMemberOwn: "delete:member:own"
};

// src/permissions/project.ts
var ProjectPermissionList = {
  CreateProject: "create:project",
  UpdateProjectAny: "update:project:any",
  UpdateProjectOwn: "update:project:own",
  ManageProjectAsModerator: "manage:project:asModerator",
  DeleteProjectAny: "delete:project:any",
  DeleteProjectOwn: "delete:project:own",
  ReadProjectConfident: "read:project:confident",
  ReadProjectOwn: "read:project:own",
  ReadProjectAny: "read:project:any"
};

// src/permissions/projectGroup.ts
var ProjectGroupPermissionList = {
  CreateProjectGroup: "create:projectGroup",
  // ReadProjectGroup: "read:projectGroup",  // Public resource, read permission not required
  ReadProjectGroupDetails: "read:projectGroup:details",
  // confidential
  UpdateProjectGroup: "update:projectGroup",
  DeleteProjectGroup: "delete:projectGroup"
};

// src/permissions/role.ts
var RolePermissionList = {
  ReadRoleOwn: "read:role:own",
  ReadRoleAny: "read:role:any",
  UpdateRole: "update:role",
  DeleteRole: "delete:role",
  CreateRole: "create:role"
};

// src/permissions/user.ts
var UserPermissionList = {
  ReadUserAny: "read:user:any",
  ReadUserOwn: "read:user:own",
  UpdateUserAny: "update:user:any",
  UpdateUserOwn: "update:user:own",
  DeleteUserAny: "delete:user:any",
  DeleteUserOwn: "delete:user:own"
};

// src/permissions/index.ts
var PermissionList = {
  ...ProjectPermissionList,
  ...IssuePermissionList,
  ...ProjectGroupPermissionList,
  ...MemberPermissionList,
  ...UserPermissionList,
  ...ConfidenceRecordPermissionList,
  ...FilePermissionList,
  ...RolePermissionList,
  ...FormPermissionList,
  ...CommentPermissionList,
  ...ApiTokenPermissionList,
  ...IssueTagPermissionList
  // Add more scopes as needed
};
export {
  PermissionList
};
