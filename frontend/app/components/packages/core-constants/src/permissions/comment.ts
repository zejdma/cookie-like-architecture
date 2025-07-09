export const CommentPermissionList = {
  UpdateCommentAny: "update:comment:any",
  UpdateCommentOwn: "update:comment:own",

  DeleteCommentAny: "delete:comment:any",
  DeleteCommentOwn: "delete:comment:own",

  BlockCommentAny: "block:comment",
  CreateComment: "create:comment",
} as const;
