import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
/* Native Base */
import { Form, Item, Label, Button, Text } from "native-base";
/* UI Components */
import MultiSelect, { SelectItem } from "../../../UI/MultiSelect";
/* Services */
import NavigationService from "../../../../services/NavigationService";
/* Redux Actions */
import { changeGitlabUsername } from "../../../../redux/actions/user";
/* Utils */
import { useActions } from "../../../../utils/hooks";
/* Services */
import ProjectService from "../../../../services/ProjectService";
import UserService from "../../../../services/UserService";

type AuthLoginFormProps = {};

function AuthLoginForm({  }: AuthLoginFormProps) {
  const [selectedGitlabUsername, setSelectedGitlabUsername] = useState<
    SelectItem
  >();
  const [projects, setProjects] = useState<SelectItem[]>([]);
  const [usernames, setUsernames] = useState<SelectItem[]>([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const changeGitlabUsernameAction = useActions(changeGitlabUsername);

  useEffect(() => {
    ProjectService.getProjects().then(gitlabProjects => {
      setProjects(
        gitlabProjects.map(
          (gp: { id: number; name_with_namespace: string }) => ({
            id: gp.id,
            name: gp.name_with_namespace
          })
        )
      );
    });
  }, []);

  useEffect(() => {
    UserService.getUsers(selectedProjects).then(gitlabUsernames => {
      setUsernames(
        gitlabUsernames.map((username: { username: string; id: number }) => ({
          id: username.id,
          name: username.username
        }))
      );
    });
  }, [selectedProjects]);

  return (
    <Form>
      <Item style={styles.item} picker>
        <Label>Projects:</Label>

        <MultiSelect
          items={projects}
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
          items={usernames}
          placeholder="Select your username"
          searchPlaceholder="Search..."
          value={selectedGitlabUsername ? [selectedGitlabUsername] : []}
          onChange={newValues => setSelectedGitlabUsername(newValues[0])}
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
