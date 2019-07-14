import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
/* Native Base */
import { Form, Item, Picker, Icon, Label, Button, Text } from "native-base";
/* Constants */
import { colors } from "../../../../constants";
/* Services */
import NavigationService from "../../../../services/NavigationService";
/* Redux Actions */
import { changeGitlabUsername } from "../../../../redux/actions/user";
/* Utils */
import { useActions } from "../../../../utils/hooks";

type AuthLoginFormProps = {};

function AuthLoginForm({  }: AuthLoginFormProps) {
  const [selectedGitlabUsername, setSelectedGitlabUsername] = useState(
    "@guerrero7"
  );
  const changeGitlabUsernameAction = useActions(changeGitlabUsername);

  return (
    <Form>
      <Item style={styles.item} picker>
        <Label>Gitlab username:</Label>
        <Picker
          mode="dropdown"
          note={false}
          iosIcon={<Icon name="arrow-down" />}
          style={{ width: "100%" }}
          placeholder="Select your username"
          placeholderStyle={{ color: colors.primaryColor }}
          placeholderIconColor={colors.primaryColor}
          selectedValue={selectedGitlabUsername}
          onValueChange={value => setSelectedGitlabUsername(value)}
        >
          <Picker.Item label="Omar Guerrero" value="@guerrero7" />
          <Picker.Item label="Carlos Castillo" value="@cmaxhm" />
          <Picker.Item label="Charly Cerdeño" value="@ccardenoc" />
          <Picker.Item label="Ever  Cabarcas" value="@EverCabarcasM" />
          <Picker.Item label="Jhonathan Cantillo" value="@jcantillog" />
          <Picker.Item label="Leonardo Mira" value="@leonardozn" />
          <Picker.Item label="Luis Morales" value="@luismoralesp" />
          <Picker.Item label="Ivan Ospino" value="@Ivan_Ospino" />
        </Picker>
      </Item>
      <Button
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
    width: "100%",
    justifyContent: "center"
  }
});
