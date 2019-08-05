import { Filters } from "../../../../../types";
import { IssueReportType } from "../../../../../redux/actions/dailies";

export type issueAccordion = {
  title: string;
  filters?: Filters;
  type: IssueReportType;
};

export function getAccordionItems(currentUsername: string): issueAccordion[] {
  return [
    {
      title: "Issues Developed in Doing",
      filters: {
        assignee: {
          key: "assignee_username",
          value: currentUsername
        },
        labels: {
          key: "labels",
          value: "Doing"
        }
      },
      type: "developed"
    },
    {
      title: "Issues Developed in QA review",
      filters: {
        assignee: {
          key: "assignee_id",
          value: currentUsername
        },
        labels: {
          key: "labels",
          value: "QA review"
        }
      },
      type: "developed"
    },
    {
      title: "Issues Developed in Reviewed",
      filters: {
        assignee: {
          key: "assignee_username",
          value: currentUsername
        },
        labels: {
          key: "labels",
          value: "Reviewed"
        }
      },
      type: "developed"
    },
    {
      title: "Issues Developed in Pending",
      filters: {
        assignee: {
          key: "assignee_username",
          value: currentUsername
        },
        labels: {
          key: "labels",
          value: "Pending"
        }
      },
      type: "developed"
    },
    { title: "Issues Created", filters: {}, type: "created" },
    { title: "Issues Tested", filters: {}, type: "tested" }
  ];
}
