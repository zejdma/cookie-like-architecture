import { ApiTokenPermissionList } from "./apiToken";
import { CommentPermissionList } from "./comment";
import { FilePermissionList } from "./file";
import { FormPermissionList } from "./form";
import { IssuePermissionList } from "./issue";
import { IssueTagPermissionList } from "./issueTag";
import { MemberPermissionList } from "./member";
import { ProjectPermissionList } from "./project";
import { ProjectGroupPermissionList } from "./projectGroup";
import { RolePermissionList } from "./role";
import { UserPermissionList } from "./user";

export const PermissionList = {
  ...ProjectPermissionList,
  ...IssuePermissionList,
  ...ProjectGroupPermissionList,
  ...MemberPermissionList,
  ...UserPermissionList,
  ...FilePermissionList,
  ...RolePermissionList,
  ...FormPermissionList,
  ...CommentPermissionList,
  ...ApiTokenPermissionList,
  ...IssueTagPermissionList,
  // Add more scopes as needed
} as const;

export { ProjectPermissionList } from "./project";

export type TPermission = (typeof PermissionList)[keyof typeof PermissionList];

export type TRolePermissions = {
  role: string;
  permissions: TPermission[];
};
