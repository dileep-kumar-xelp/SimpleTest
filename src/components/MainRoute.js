import React from "react";
import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  DrawerActions
} from "react-navigation";
import Home from "../containers/HomeScreenContainer";
//import TabOne from "./src/components/TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";
import DrawerScreen from "./DrawerScreen";
import Icon from "react-native-vector-icons/Ionicons";
import HeaderContainer from "../containers/HeaderContainer";
import LoginScreen from "./LoginScreen";
const TabStack = createBottomTabNavigator(
  {
    Home: Home,
    AddTask: TabTwo,
    Explore: TabThree,
    RedDit: TabThree,
    Messages: TabThree
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === "Home") {
          iconName = "ios-home";
        } else if (routeName === "AddTask") {
          iconName = "ios-calendar";
        } else if (routeName === "Explore") {
          iconName = "ios-compass";
        } else if (routeName === "RedDit") {
          iconName = "ios-happy";
        } else if (routeName === "Messages") {
          iconName = "ios-mail-unread";
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarLabel: "HOME",
    tabBarOptions: {
      activeTintColor: "blue",
      inactiveTintColor: "gray"
    }
  }
);
RootStack = createDrawerNavigator(
  {
    Home: {
      screen: TabStack
    }
  },
  {
    drawerWidth: 260,
    drawerPosition: "left",
    contentComponent: DrawerScreen,
    drawerBackgroundColor: "white",
    navigationOptions: ({ navigation }) => {
      return {
        header: <HeaderContainer />
      };
    }
  }
);
const AppStack = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  RootStack: { screen: RootStack }
});
const AppContainer = createAppContainer(AppStack);
export default AppContainer;
