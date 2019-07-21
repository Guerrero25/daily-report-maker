import React, { Component } from "react";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

/* Screens */
import ScreenAuthLoading from "./Auth/Loading";
import ScreenAuthLogIn from "./Auth/LogIn";
import ScreenApp from "./App";

/* Navigation Services to Navigation Actions */
import NavigationService from "../services/NavigationService";

/* Utils */
import { getPersistenceFunctions } from "../utils/helpers";

const AppStack = createStackNavigator({ Home: ScreenApp });
const AuthStack = createStackNavigator({ SignIn: ScreenAuthLogIn });

const NavigationContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: ScreenAuthLoading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

class ScreenRoot extends Component {
  render() {
    return (
      <NavigationContainer
        ref={ref => NavigationService.setTopLevelNavigator(ref)}
        {...getPersistenceFunctions()}
      />
    );
  }
}

export default ScreenRoot;
