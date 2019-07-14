import { combineReducers } from "redux";
/* Types */
import { ReduxActionPayload } from "../../../types";
import { CHANGE_GITLAB_USERNAME } from "../../types";

const currentUsername = (state: string = "", action: ReduxActionPayload) => {
  switch (action.type) {
    case CHANGE_GITLAB_USERNAME:
      return action.data;

    default:
      return state;
  }
};

const user = combineReducers({ currentUsername });

export default user;
