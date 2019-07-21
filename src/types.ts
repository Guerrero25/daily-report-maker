import { Dispatch } from "redux";

export type ReduxActionPayload = {
  type: string;
  data?: any;
};

export type ReduxActionThunk = (dispatch: Dispatch<ReduxActionPayload>) => void;
export type ReduxActionFunction = (...args: any[]) => ReduxActionPayload;
export type ReduxAction = ReduxActionFunction | ReduxActionThunk;
export type ReduxActions = ReduxAction[] | ReduxAction;

export type User = {} | null;
export type Issue = {
  state: string;
  labels: string[];
  web_url: string;
  assignee: {
    state: "active" | "";
    id: number;
    name: string;
    web_url: string;
    avatar_url: string | null;
    username: string;
  };
};
export type DailyReport = {
  date: string;
  developed: Issue[];
  tested: Issue[];
};
