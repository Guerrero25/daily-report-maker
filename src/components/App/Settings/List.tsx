import * as React from "react";
import { StyleSheet } from "react-native";
/* Native Base Components */
import { Text, Body, Icon, List, ListItem, Button } from "native-base";
/* Actions Redux */
import { logout } from "../../../redux/actions/user";
/* Utils */
import { useActions } from "../../../utils/hooks";

export interface SettingListProps {}

const SettingList = ({  }: SettingListProps) => {
  const logoutAction = useActions(logout);

  return (
    <List>
      <ListItem>
        <Body>
          <Button
            block
            icon
            iconLeft
            danger
            onPress={() => {
              logoutAction();
            }}
          >
            <Icon type="FontAwesome5" name="sign-out-alt" />
            <Text>Log out</Text>
          </Button>
        </Body>
      </ListItem>
    </List>
  );
};

SettingList.defaultProps = {};

export default SettingList;

const styles = StyleSheet.create({});
