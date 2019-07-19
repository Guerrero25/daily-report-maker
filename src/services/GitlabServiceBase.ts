import { GITLAB_API_TOKEN, GITLAB_API_URL } from "../config";
import Axios, { AxiosInstance } from "axios";

class GitlabServiceBase {
  private readonly BASE_URL: string;
  private readonly token: string;
  readonly http: AxiosInstance;

  constructor() {
    this.BASE_URL = GITLAB_API_URL;
    this.token = GITLAB_API_TOKEN;

    this.http = Axios.create({
      baseURL: this.BASE_URL,
      headers: {
        "Private-Token": this.token
      },
      responseType: "json"
    });
  }
}

export default GitlabServiceBase;
