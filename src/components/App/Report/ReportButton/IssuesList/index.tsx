import * as React from "react";
import { FlatList, ListRenderItemInfo, ScrollView } from "react-native";
/* Native Base */
import { Spinner } from "native-base";
/* Utils */
import { useIssues, useActions } from "../../../../../utils/hooks";
import { colors } from "../../../../../constants";
/* Components */
import AppReportButtonIssuesListItem from "./Item";
/* Types */
import { Filters, Issue } from "../../../../../types";
import {
  IssueReportType,
  addNewReportedIssue,
  removeNewReportedIssue
} from "../../../../../redux/actions/dailies";

interface IssuesListProps {
  filters?: Filters;
  type: IssueReportType;
  title: string;
}

function IssuesList({ filters, type }: IssuesListProps): React.ReactElement {
  const { issues, loading } = useIssues({ filters });
  const [addNewReportedIssueAction, removeNewReportedIssueAction] = useActions([
    addNewReportedIssue,
    removeNewReportedIssue
  ]);

  return loading ? (
    <Spinner color={colors.primaryColor} size={20} />
  ) : (
    <ScrollView style={{ maxHeight: 300 }}>
      <FlatList
        scrollEnabled
        windowSize={10}
        keyExtractor={item => item.id.toString()}
        data={issues}
        renderItem={renderItem}
      />
    </ScrollView>
  );

  function renderItem({
    item,
    index,
    separators
  }: ListRenderItemInfo<Issue>): React.ReactElement {
    return (
      <AppReportButtonIssuesListItem
        issue={item}
        onPress={(_, selected) =>
          selected
            ? removeNewReportedIssueAction(type, item)
            : addNewReportedIssueAction(type, item)
        }
      />
    );
  }
}

export default IssuesList;
