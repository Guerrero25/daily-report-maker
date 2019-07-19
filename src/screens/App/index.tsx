import { createBottomTabNavigator } from "react-navigation";

/* Screens */
import ScreenAppHome from "./Home";
import ScreenAppDetails from "./Details";
import ScreenAppSettings from "./Settings";
/* Constants */
import { colors } from "../../constants";

const ScreenAppNavigator = createBottomTabNavigator(
  {
    AppHome: ScreenAppHome,
    AppDetails: ScreenAppDetails,
    AppSettings: ScreenAppSettings
  },
  {
    navigationOptions: { header: null },
    tabBarOptions: {
      style: {
        paddingHorizontal: 7,
        paddingVertical: 7,
        height: 60
      },
      activeTintColor: colors.primaryColor
    }
  }
);

export default ScreenAppNavigator;
