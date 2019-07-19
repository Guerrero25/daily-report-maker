import * as React from "react";
import { TabBarIconProps, NavigationNavigatorProps } from "react-navigation";
/* Native Base Components */
import { Icon, Button, Text } from "native-base";
/* UI Components */
import LayoutHeader from "../../../components/UI/LayoutHeader";
/* Actions */
import { changeGitlabUsername } from "../../../redux/actions/user";
/* Services */
import NavigationService from "../../../services/NavigationService";
/* Utils */
import { colors } from "../../../constants";
import { useActions } from "../../../utils/hooks";

const Home = ({  }: NavigationNavigatorProps) => {
  const logoutAction = useActions(changeGitlabUsername);

  return (
    <LayoutHeader title="Settings">
      <Button
        block
        transparent
        color={colors.dangerColor}
        icon
        iconLeft
        danger
        onPress={() => {
          logoutAction("");
          NavigationService.navigate("Auth");
        }}
      >
        <Icon type="FontAwesome5" name="sign-out-alt" />
        <Text>Log out</Text>
      </Button>
    </LayoutHeader>
  );
};

Home.navigationOptions = {
  title: "Settings",
  tabBarIcon: ({ focused, tintColor }: TabBarIconProps) => (
    <Icon
      type="FontAwesome5"
      name="sliders-h"
      active={focused}
      style={{ color: tintColor }}
    />
  )
};

export default Home;
