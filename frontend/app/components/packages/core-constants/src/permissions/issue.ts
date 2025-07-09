/**
 * Lit of issue permissions.
 * own - user can only access issues created by them
 * any - user can access any issue
 */
export const IssuePermissionList = {
  CreateIssue: "create:issue",
  ReadIssueAny: "read:issue:any",
  ReadIssueConfident: "read:issue:confident",
  ReadIssueOwn: "read:issue:own",
  UpdateIssueAny: "update:issue:any",
  UpdateIssueOwn: "update:issue:own",
  DeleteIssueAny: "delete:issue:any",
  DeleteIssueOwn: "delete:issue:own",
  VoteIssue: "vote:issue",
  SubscribeIssue: "subscribe:issue",
} as const;
