import * as React from "react";
import { TabBarIconProps, NavigationNavigatorProps } from "react-navigation";
/* Native Base Components */
import { Icon } from "native-base";
/* UI Components */
import LayoutHeader from "../../../components/UI/LayoutHeader";
import AppReportResumeStatus from "../../../components/App/Report/ResumeStatus";

const Home = ({  }: NavigationNavigatorProps) => {
  return (
    <LayoutHeader title="Daily report">
      <AppReportResumeStatus />
    </LayoutHeader>
  );
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
