import GitlabServiceBase from "./GitlabServiceBase";
import { GITLAB_GROUPS } from "../config";

class ProjectService extends GitlabServiceBase {
  getProjects() {
    return Promise.all(
      GITLAB_GROUPS.map(groupID =>
        this.http.get(`/groups/${groupID}/projects?include_subgroups=true`)
      )
    ).then(responses => {
      return [].concat(...responses.map(response => response.data));
    });
  }
}

export default new ProjectService();
