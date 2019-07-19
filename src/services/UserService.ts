import GitlabServiceBase from "./GitlabServiceBase";
import { removeDuplicated } from "../utils/helpers";

class UserService extends GitlabServiceBase {
  getUsers(projectIDs: number[]) {
    return Promise.all(
      projectIDs.map(projectID =>
        this.http.get(`/projects/${projectID}/members`)
      )
    ).then(responses => {
      return removeDuplicated(
        [].concat(...responses.map(response => response.data))
      );
    });
  }
}

export default new UserService();
