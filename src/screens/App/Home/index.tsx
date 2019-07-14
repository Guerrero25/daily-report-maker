import * as React from "react";
import { TabBarIconProps } from "react-navigation";
/* Native Base Components */
import { Text, Button, Icon } from "native-base";
/* UI Components */
import Layout from "../../../components/UI/Layout";
/* Services */
import NavigationService from "../../../services/NavigationService";

const Home = () => {
  return (
    <Layout>
      <Text>Screen Home</Text>

      <Button
        style={{ alignSelf: "center" }}
        onPress={() => NavigationService.navigate("Auth")}
      >
        <Text>Go to Login Screen</Text>
      </Button>
    </Layout>
  );
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
