import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
/* Types */
import { ReduxActions } from "../types";

export function useActions(actions: ReduxActions, deps?: []) {
  const dispatch = useDispatch();

  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch));
      }

      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : [dispatch]
  );
}
