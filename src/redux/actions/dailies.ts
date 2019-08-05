import { Issue, ReduxActionPayload } from "../../types";
import {
  ADD_CREATED_ISSUE,
  ADD_DEVELOPED_ISSUE,
  ADD_TESTED,
  CLOSE_NEW_REPORT,
  REMOVE_CREATED_ISSUE,
  REMOVE_DEVELOPED_ISSUE,
  REMOVE_TESTED
} from "../types";

export type IssueReportType = "created" | "developed" | "tested";

export function addNewReportedIssue(
  type: IssueReportType,
  issue: Issue
): ReduxActionPayload {
  if (type === "created") {
    return {
      type: ADD_CREATED_ISSUE,
      data: issue
    };
  } else if (type === "developed") {
    return {
      type: ADD_DEVELOPED_ISSUE,
      data: issue
    };
  } else {
    return {
      type: ADD_TESTED,
      data: issue
    };
  }
}

export function removeNewReportedIssue(
  type: IssueReportType,
  issue: Issue
): ReduxActionPayload {
  if (type === "created") {
    return {
      type: REMOVE_CREATED_ISSUE,
      data: issue
    };
  } else if (type === "developed") {
    return {
      type: REMOVE_DEVELOPED_ISSUE,
      data: issue
    };
  } else {
    return {
      type: REMOVE_TESTED,
      data: issue
    };
  }
}

export function resetNewReport() {
  return {
    type: CLOSE_NEW_REPORT
  };
}
