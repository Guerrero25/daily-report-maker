import * as React from "react";
import { StyleSheet } from "react-native";
import { ReactNode } from "react";
/* Native Base Components */
import {
  Container,
  Header,
  Content,
  Left,
  Body,
  Right,
  Title,
  Footer
} from "native-base";

export interface LayoutProps {
  children?: ReactNode;
  title?: string;
  left?: ReactNode;
  right?: ReactNode;
  footer?: ReactNode;
}

const LayoutHeader = ({
  children,
  title,
  left,
  right,
  footer
}: LayoutProps) => {
  return (
    <Container>
      <Header>
        <Left>{left}</Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>{right}</Right>
      </Header>
      <Content style={{ backgroundColor: "#fff" }}>{children}</Content>
      {footer && <Footer style={{ backgroundColor: "white" }}>{footer}</Footer>}
    </Container>
  );
};

LayoutHeader.defaultProps = {};

export default LayoutHeader;

const styles = StyleSheet.create({});
