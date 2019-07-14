import { combineReducers } from "redux";
/* Types */
import { ReduxActionPayload } from "../../../types";
import { LOGIN } from "../../types";

const currentUsername = (state: string = "", action: ReduxActionPayload) => {
  switch (action.type) {
    case LOGIN:
      return action.data;

    default:
      return state;
  }
};

const user = combineReducers({ currentUsername });

export default user;
