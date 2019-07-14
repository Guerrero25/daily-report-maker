import * as React from "react";
import { StyleSheet } from "react-native";
import { ReactNode } from "react";
/* Native Base Components */
import { View } from "native-base";
import { colors, shadows } from "../../../constants";

export interface LayoutProps {
  children?: ReactNode;
  bgHeader?: string;
  showContent?: Boolean;
  headerContent?: ReactNode | null;
}

const Layout = ({
  children,
  bgHeader,
  headerContent,
  showContent
}: LayoutProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: !showContent ? bgHeader : "white",
          flex: showContent ? 0 : 1
        }
      ]}
    >
      <View
        style={[
          styles.header,
          { backgroundColor: bgHeader },
          showContent ? styles.headerWithContent : null
        ]}
      >
        {headerContent}
      </View>
      {!showContent && children}
      {showContent && <View style={styles.content}>{children}</View>}
    </View>
  );
};

Layout.defaultProps = {
  bgHeader: colors.primaryColor,
  headerContent: null,
  showContent: true
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  headerWithContent: {
    height: 290,
    paddingTop: 60,
    justifyContent: "flex-start"
  },
  content: {
    marginHorizontal: 20,
    marginBottom: 30,
    marginTop: -115,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 40,
    ...shadows.primary,
    width: "90%"
  }
});
