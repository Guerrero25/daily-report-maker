import { Dispatch } from "redux";

export type ReduxActionPayload = {
  type: string;
  data?: any;
};

export type ReduxActionThunk = (dispatch: Dispatch) => ReduxActionPayload;
export type ReduxActionFunction = (...args: any[]) => ReduxActionPayload;
export type ReduxAction = ReduxActionFunction | ReduxActionThunk;
export type ReduxActions = ReduxAction[] | ReduxAction;

export type User = {} | null;
