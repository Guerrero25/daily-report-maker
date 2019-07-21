import * as React from "react";
import { TabBarIconProps, NavigationNavigatorProps } from "react-navigation";
/* Native Base Components */
import { Icon } from "native-base";
/* UI Components */
import LayoutHeader from "../../../components/UI/LayoutHeader";
import SettingList from "../../../components/App/Settings/List";

const Home = ({  }: NavigationNavigatorProps) => {
  return (
    <LayoutHeader title="Settings">
      <SettingList />
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
