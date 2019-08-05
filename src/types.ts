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
  id: number;
  title: string;
  state: string;
  labels: IssueLabel[];
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
export type IssueLabel = {
  name: string;
  color: string;
  text_color: string;
  description: string;
};

export type DailyReport = {
  date: string;
  developed?: Issue[];
  tested?: Issue[];
  created?: Issue[];
};

export type Filters = {
  [key: string]: {
    key: string;
    suffix?: string;
    prefix?: string;
    value: string;
  };
};

export type NewReport = {
  developed: Issue[];
  tested: Issue[];
  created: Issue[];
};
