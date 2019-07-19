import * as React from "react";
import { TabBarIconProps, NavigationNavigatorProps } from "react-navigation";
/* Redux Actions */
import { changeGitlabUsername } from "../../../redux/actions/user";
/* Native Base Components */
import { Text, Button, Icon, Header } from "native-base";
/* UI Components */
import LayoutHeader from "../../../components/UI/LayoutHeader";
/* Services */
import NavigationService from "../../../services/NavigationService";
/* Utils */
import { useActions } from "../../../utils/hooks";

const Home = ({  }: NavigationNavigatorProps) => {
  const changeCurrentUsernameAction = useActions(changeGitlabUsername);

  return (
    <LayoutHeader title="Daily report">
      <Text>Screen Home</Text>

      <Button style={{ alignSelf: "center" }} onPress={handleLogout}>
        <Text>Go to Login Screen</Text>
      </Button>
    </LayoutHeader>
  );

  function handleLogout() {
    changeCurrentUsernameAction("");
    NavigationService.navigate("Auth");
  }
};

Home.navigationOptions = {
  title: "Home",
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
