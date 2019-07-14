import * as React from "react";
import { TabBarIconProps } from "react-navigation";
/* Redux Actions */
import { changeGitlabUsername } from "../../../redux/actions/user";
/* Native Base Components */
import { Text, Button, Icon } from "native-base";
/* UI Components */
import Layout from "../../../components/UI/Layout";
/* Services */
import NavigationService from "../../../services/NavigationService";
/* Utils */
import { useActions } from "../../../utils/hooks";

const Home = () => {
  const changeCurrentUsernameAction = useActions(changeGitlabUsername);

  return (
    <Layout>
      <Text>Screen Home</Text>

      <Button style={{ alignSelf: "center" }} onPress={handleLogout}>
        <Text>Go to Login Screen</Text>
      </Button>
    </Layout>
  );

  function handleLogout() {
    changeCurrentUsernameAction("");
    NavigationService.navigate("Auth");
  }
};

Home.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }: TabBarIconProps) => (
    <Icon
      type="FontAwesome5"
      name="home"
      active={focused}
      style={{ color: tintColor }}
    />
  )
};

export default Home;
