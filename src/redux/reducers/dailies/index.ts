import { combineReducers } from "redux";
/* Reducers */
import newReport from "./newReport";
/* Types */
import { ReduxActionPayload, DailyReport } from "../../../types";
import { CREATE_DAILY, LOGOUT } from "../../types";

const reports = (state: DailyReport[] = [], action: ReduxActionPayload) => {
  switch (action.type) {
    case CREATE_DAILY:
      const newDaily: DailyReport = {
        date: action.data.date,
        developed: action.data.developed,
        tested: action.data.tested,
        created: action.data.created
      };

      return [newDaily];

    case LOGOUT:
      return [];

    default:
      return state;
  }
};

const dailies = combineReducers({ reports, newReport });

export default dailies;
