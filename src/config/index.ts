import env from "react-native-config";

export const GITLAB_API_TOKEN: string = env.GITLAB_API_TOKEN || "";
export const IS_PRODUCTION: boolean = env.IS_PRODUCTION || false;
export const GITLAB_API_URL: string = env.GITLAB_API_URL || "";
export const GITLAB_GROUPS: string[] = env.GITLAB_GROUPS_IDS
  ? env.GITLAB_GROUPS_IDS.split(",")
  : [];
