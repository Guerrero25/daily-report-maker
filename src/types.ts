import { Dispatch } from "redux";

export type ReduxActionPayload = {
  type: string;
  data?: any;
};

export type ReduxThunk = (dispatch: Dispatch) => ReduxActionPayload;
export type ReduxAction = () => ReduxActionPayload | ReduxThunk;
export type ReduxActions = ReduxAction[] | ReduxAction;

export type User = {} | null;
