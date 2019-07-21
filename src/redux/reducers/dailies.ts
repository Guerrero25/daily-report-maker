import { combineReducers } from "redux";
/* Types */
import { ReduxActionPayload, DailyReport } from "../../types";
import { CREATE_DAILY, LOGOUT } from "../types";

const reports = (state: DailyReport[] = [], action: ReduxActionPayload) => {
  switch (action.type) {
    case CREATE_DAILY:
      const newDaily: DailyReport = {
        date: action.data.date,
        developed: action.data.developed,
        tested: action.data.tested
      };

      return [newDaily];

    case LOGOUT:
      return [];

    default:
      return state;
  }
};

const dailies = combineReducers({ reports });

export default dailies;
