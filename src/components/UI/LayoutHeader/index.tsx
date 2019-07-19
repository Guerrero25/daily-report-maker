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
  Title
} from "native-base";

export interface LayoutProps {
  children?: ReactNode;
  title?: string;
  left?: ReactNode;
  right?: ReactNode;
}

const LayoutHeader = ({ children, title, left, right }: LayoutProps) => {
  return (
    <Container>
      <Header>
        <Left>{left}</Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>{right}</Right>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

LayoutHeader.defaultProps = {};

export default LayoutHeader;

const styles = StyleSheet.create({});
