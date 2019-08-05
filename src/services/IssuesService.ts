import GitlabServiceBase from "./GitlabServiceBase";
import { Issue, Filters } from "../types";
import { getFiltersString } from "../utils/helpers";

export type Options = {
  filters?: Filters;
};

class IssuesService extends GitlabServiceBase {
  getIssues(
    projects: string[],
    { filters = {} }: Options = {}
  ): Promise<Issue[]> {
    return Promise.all(
      projects.map(projectID =>
        this.http.get(
          `/projects/${projectID}/issues?with_labels_details=true${getFiltersString(
            filters
          )}`
        )
      )
    ).then(responses => {
      return [].concat(...responses.map(response => response.data));
    });
  }
}

export default new IssuesService();
