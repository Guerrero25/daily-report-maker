import * as React from "react";
import { StyleSheet } from "react-native";
/* Native Base Components */
import { Text, Button } from "native-base";
/* UI Components */
import Layout from "../../../components/UI/Layout";
import AuthLoginForm from "../../../components/Auth/Login/Form";
/* Assets */
import E43Logo from "../../../assets/images/e43-logo.svg";
import { colors } from "../../../constants";

export interface ScreenLoginProps {}

const ScreenLogin = () => {
  return (
    <Layout headerContent={<E43Logo width={200} height={60} />}>
      <Text style={styles.title}>Login</Text>

      <AuthLoginForm />
    </Layout>
  );
};

ScreenLogin.navigationOptions = {
  header: null
};

export default ScreenLogin;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    color: colors.primaryColor,
    marginBottom: 20,
    fontWeight: "bold"
  }
});
