import { combineReducers } from "redux";
/* Types */
import { ReduxActionPayload } from "../../../types";
import { CHANGE_GITLAB_USERNAME, INIT_CONFIG } from "../../types";

const currentUsername = (state: string = "", action: ReduxActionPayload) => {
  switch (action.type) {
    case CHANGE_GITLAB_USERNAME:
      return action.data;

    case INIT_CONFIG:
      return action.data.username;

    default:
      return state;
  }
};

const currentProjects = (state: string[] = [], action: ReduxActionPayload) => {
  switch (action.type) {
    case INIT_CONFIG:
      return action.data.projects;

    default:
      return state;
  }
};

const user = combineReducers({ currentUsername, currentProjects });

export default user;
