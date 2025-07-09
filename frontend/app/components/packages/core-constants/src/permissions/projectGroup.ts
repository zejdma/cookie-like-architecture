/**
 * Project group permission list
 * all permissions have relation 'any'
 */
export const ProjectGroupPermissionList = {
  CreateProjectGroup: "create:projectGroup",
  // ReadProjectGroup: "read:projectGroup",  // Public resource, read permission not required
  ReadProjectGroupDetails: "read:projectGroup:details", // confidential
  UpdateProjectGroup: "update:projectGroup",
  DeleteProjectGroup: "delete:projectGroup",
} as const;
