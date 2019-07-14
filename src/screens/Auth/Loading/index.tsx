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
import { useSelector } from "react-redux";

const ScreenLoading = () => {
  const currentUsername = useSelector(
    (state: any) => state.user.currentUsername
  );

  useEffect(() => {
    setTimeout(() => {
      if (currentUsername === "") {
        NavigationService.navigate("Auth");
      } else {
        NavigationService.navigate("App");
      }
    }, 1500);
  }, []);

  return (
    <Layout
      showContent={false}
      headerContent={<E43Logo width={200} height={70} />}
    >
      <Spinner color="white" />
    </Layout>
  );
};

export default ScreenLoading;
