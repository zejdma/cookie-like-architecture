export const FilePermissionList = {
  ReadFileAny: "read:file:any",
  ReadFileOwn: "read:file:own",

  CreateFileOwn: "create:file:own",
  CreateFileAny: "create:file:any",

  UpdateFileOwn: "update:file:own",
  UpdateFileAny: "update:file:any",

  DeleteFileOwn: "delete:file:own",
  DeleteFileAny: "delete:file:any",
} as const;
