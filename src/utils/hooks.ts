import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState, useEffect } from "react";
/* Types */
import { ReduxActions, Filters, Issue, NewReport } from "../types";
import IssuesService from "../services/IssuesService";
import { IssueReportType } from "../redux/actions/dailies";

export function useActions(actions: ReduxActions, deps?: any[]): any {
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

export type useIssuesProps = {
  filters?: Filters;
};
export function useIssues({ filters }: useIssuesProps = {}) {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loadingIssues, setLoadingIssues] = useState<boolean>(false);
  const projectsIDs = useSelector<string[], any>(
    (state: any) => state.user.currentProjects
  );

  useEffect(() => {
    setLoadingIssues(true);

    IssuesService.getIssues(projectsIDs, { filters })
      .then(issues => {
        setLoadingIssues(false);
        setIssues(issues);
      })
      .catch(err => {
        setLoadingIssues(false);
      });
  }, [filters]);

  return { issues, loading: loadingIssues };
}

export function useIsSelected(issue?: Issue) {
  const newReport: number[] = useSelector((state: any) =>
    [
      ...state.dailies.newReport.tested,
      ...state.dailies.newReport.developed,
      ...state.dailies.newReport.created
    ].map((issue: Issue) => issue.id)
  );

  return {
    selected: issue ? newReport.includes(issue.id) : false,
    totals: newReport.length
  };
}
