import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
/* Native Base */
import { Form, Item, Label, Button, Text } from "native-base";
/* UI Components */
import MultiSelect from "../../../UI/MultiSelect";
/* Services */
import NavigationService from "../../../../services/NavigationService";
/* Redux Actions */
import { changeGitlabUsername } from "../../../../redux/actions/user";
/* Utils */
import { useActions } from "../../../../utils/hooks";

type AuthLoginFormProps = {};

function AuthLoginForm({  }: AuthLoginFormProps) {
  const [selectedGitlabUsername, setSelectedGitlabUsername] = useState([
    "@guerrero7"
  ]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const changeGitlabUsernameAction = useActions(changeGitlabUsername);

  return (
    <Form>
      <Item style={styles.item} picker>
        <Label>Projects:</Label>

        <MultiSelect
          items={[{ id: 2, name: "Fleks" }]}
          placeholder="Select your projects"
          searchPlaceholder="Search..."
          value={selectedProjects}
          onChange={newValues => setSelectedProjects(newValues)}
        />
      </Item>
      <Item style={styles.item} picker>
        <Label>Gitlab username:</Label>

        <MultiSelect
          single
          items={[{ id: 3, name: "@guerrero7" }]}
          placeholder="Select your username"
          searchPlaceholder="Search..."
          value={selectedGitlabUsername}
          onChange={newValues => setSelectedGitlabUsername(newValues)}
        />
      </Item>
      <Button
        block
        style={styles.action}
        disabled={!selectedGitlabUsername}
        onPress={handleSubmitLogin}
      >
        <Text>Log In</Text>
      </Button>
    </Form>
  );

  function handleSubmitLogin() {
    changeGitlabUsernameAction(selectedGitlabUsername);
    NavigationService.navigate("App");
  }
}

export default AuthLoginForm;

const styles = StyleSheet.create({
  item: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 40
  },
  action: {
    justifyContent: "center"
  }
});
