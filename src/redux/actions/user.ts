import { CHANGE_GITLAB_USERNAME } from "../types";
import { ReduxActionPayload } from "../../types";

export function changeGitlabUsername(username: string): ReduxActionPayload {
  return {
    type: CHANGE_GITLAB_USERNAME,
    data: username
  };
}

export function initConfig(
  username: string,
  projects: string[]
): ReduxActionPayload {
  return {
    type: CHANGE_GITLAB_USERNAME,
    data: { username, projects }
  };
}
