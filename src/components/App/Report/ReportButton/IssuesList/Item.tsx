import * as React from "react";
import { GestureResponderEvent, StyleSheet } from "react-native";
/* Native Base */
import { ListItem, Text, View, Badge } from "native-base";
/* Types */
import { Issue, IssueLabel } from "../../../../../types";
import { shadows } from "../../../../../constants";
import { useIsSelected } from "../../../../../utils/hooks";

interface ItemProps {
  issue: Issue;
  onPress?: (event: GestureResponderEvent, selected: boolean) => void;
}

function Item({ issue, onPress }: ItemProps) {
  const { selected } = useIsSelected(issue);

  return (
    <ListItem
      style={[styles.container, selected ? styles.selected : styles.unselected]}
      button
      onPress={e => onPress && onPress(e, selected)}
    >
      <View style={styles.title}>
        <Text>{issue.title}</Text>
      </View>
      <View style={styles.labels}>
        {issue.labels.map((label: IssueLabel) => (
          <Badge
            key={label.name}
            style={{ backgroundColor: label.color, marginRight: 5 }}
          >
            <Text>{label.name}</Text>
          </Badge>
        ))}
      </View>
    </ListItem>
  );
}

export default Item;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 20,
    borderRadius: 5,
    flexDirection: "column",
    alignItems: "flex-start"
  },
  selected: {
    ...shadows.primary,
    opacity: 1
  },
  unselected: {
    opacity: 0.5
  },
  title: {
    marginBottom: 10
  },
  labels: {
    flexDirection: "row"
  }
});
