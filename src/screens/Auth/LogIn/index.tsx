import * as React from "react";
/* Native Base Components */
import { Text, Button } from "native-base";
/* UI Components */
import Layout from "../../../components/UI/Layout";
/* Service */
import NavigationService from "../../../services/NavigationService";
/* Assets */
import E43Logo from "../../../assets/images/e43-logo.svg";

export interface ScreenLoginProps {}

const ScreenLogin = () => {
  return (
    <Layout headerContent={<E43Logo width={200} height={60} />}>
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
