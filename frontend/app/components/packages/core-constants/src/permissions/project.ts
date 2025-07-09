/**
 * Project permission list
 * all permissions have relation 'any'
 * its public resource so any user can read it
 * details can be read only if the user has permission
 *
 */
export const ProjectPermissionList = {
  CreateProject: "create:project",
  UpdateProjectAny: "update:project:any",
  ManageProjectAsModerator: "manage:project:asModerator",
  DeleteProjectAny: "delete:project:any",

  ReadProjectConfident: "read:project:confident",
  ReadProjectAny: "read:project:any",
} as const;
