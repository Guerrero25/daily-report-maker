import * as React from "react";
import { useEffect } from "react";
/* Native Base Components */
import { Spinner } from "native-base";
/* UI Components */
import Layout from "../../../components/UI/Layout";
/* Services */
import NavigationService from "../../../services/NavigationService";
/* Assets */
import E43Logo from "../../../assets/images/e43-logo.svg";

const ScreenLoading = () => {
  useEffect(() => {
    setTimeout(() => {
      NavigationService.navigate("Auth");
    }, 1500);
  }, []);

  return (
    <Layout showContent={false} headerContent={<E43Logo width={200} height={70} />}>
      <Spinner color="white" />
    </Layout>
  );
};

export default ScreenLoading;
