import { initContract } from "@ts-rest/core";

import issueConfidenceContract from "@/contracts/confidence/issueConfidenceContract";
import issueSubscribeContract from "@/contracts/issueSubscribe/issueSubscribeContract";
import notificationContract from "@/contracts/notification/notificationContract";
import apiTokenContract from "./apiToken/apiTokenContract";
import commentContract from "./comment/commentContract";
import projectConfidenceContract from "./confidence/projectConfidenceContract";
import fileContract from "./file/fileContract";
import formContract from "./form/formContract";
import issueContract from "./issue/issueContract";
import issueTagRouterSchema from "./issueTag/issueTagContract";
import memberContract from "./member/memberContract";
import projectContract from "./project/projectContract";
import projectGroupContract from "./projectGroup/projectGroupContract";
import roleContract from "./role/roleContract";
import userContract from "./user/userContract";
import issueActivityContract from "@/contracts/issueActivity/issueActivityContract";

const c = initContract();

const apiContract = c.router({
  roles: roleContract,
  users: userContract,
  members: memberContract,
  projectGroups: projectGroupContract,
  projects: projectContract,
  projectConfidences: projectConfidenceContract,
  issueConfidences: issueConfidenceContract,
  files: fileContract,
  forms: formContract,
  issues: issueContract,
  comments: commentContract,
  issueSubscribes: issueSubscribeContract,
  notifications: notificationContract,
  apiToken: apiTokenContract,
  issueTags: issueTagRouterSchema,
  issueActivity: issueActivityContract,
});

export default apiContract;
