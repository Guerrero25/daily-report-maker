import { combineReducers } from "redux";
/* Utils */
import { removeDuplicated } from "../../../utils/helpers";
/* Types */
import { ReduxActionPayload, Issue } from "../../../types";
import {
  LOGOUT,
  ADD_CREATED_ISSUE,
  CLOSE_NEW_REPORT,
  ADD_DEVELOPED_ISSUE,
  REMOVE_CREATED_ISSUE,
  REMOVE_DEVELOPED_ISSUE,
  REMOVE_TESTED,
  ADD_TESTED
} from "../../types";

const created = (state: Issue[] = [], action: ReduxActionPayload) => {
  switch (action.type) {
    case ADD_CREATED_ISSUE:
      return removeDuplicated(state.slice().concat([action.data]));

    case REMOVE_CREATED_ISSUE:
      return state.filter((i: Issue) => i.id !== action.data.id);

    case CLOSE_NEW_REPORT:
      return [];

    case LOGOUT:
      return [];

    default:
      return state;
  }
};

const developed = (state: Issue[] = [], action: ReduxActionPayload) => {
  switch (action.type) {
    case ADD_DEVELOPED_ISSUE:
      return removeDuplicated(state.slice().concat([action.data]));

    case REMOVE_DEVELOPED_ISSUE:
      return state.filter((i: Issue) => i.id !== action.data.id);

    case CLOSE_NEW_REPORT:
      return [];

    case LOGOUT:
      return [];

    default:
      return state;
  }
};

const tested = (state: Issue[] = [], action: ReduxActionPayload) => {
  switch (action.type) {
    case ADD_TESTED:
      return removeDuplicated(state.slice().concat([action.data]));

    case REMOVE_TESTED:
      return state.filter((i: Issue) => i.id !== action.data.id);

    case CLOSE_NEW_REPORT:
      return [];

    case LOGOUT:
      return [];

    default:
      return state;
  }
};

const newReport = combineReducers({ created, developed, tested });

export default newReport;
