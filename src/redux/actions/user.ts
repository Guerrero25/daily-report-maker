import { Dispatch } from "redux";
/* Services */
import NavigationService from "../../services/NavigationService";
/* Types */
import { CHANGE_GITLAB_USERNAME, LOGOUT, INIT_CONFIG } from "../types";
import { ReduxActionPayload, ReduxActionThunk } from "../../types";

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
    type: INIT_CONFIG,
    data: { username, projects }
  };
}

export function logout(): ReduxActionThunk {
  return (dispatch: Dispatch) => {
    NavigationService.navigate("Auth");

    dispatch({
      type: LOGOUT
    });
  };
}
