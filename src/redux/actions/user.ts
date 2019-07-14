import { LOGIN } from "../types";
import { ReduxActionPayload } from "../../types";

export function login(username: string): ReduxActionPayload {
  return {
    type: LOGIN,
    data: username
  };
}
