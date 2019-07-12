import * as React from "react";
/* Native Base Components */
import { Text, Button } from "native-base";
/* UI Components */
import Layout from "../../../components/UI/Layout";
/* Service */
import NavigationService from "../../../services/NavigationService";

export interface ScreenLoginProps {}

const ScreenLogin = () => {
  return (
    <Layout>
      <Text>Screen Login</Text>

      <Button
        style={{ alignSelf: "center" }}
        onPress={() => NavigationService.navigate("App")}
      >
        <Text>Login</Text>
      </Button>
    </Layout>
  );
};

ScreenLogin.navigationOptions = {
  header: null
};

export default ScreenLogin;
