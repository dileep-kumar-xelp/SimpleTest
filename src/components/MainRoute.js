import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  DrawerActions
} from "react-navigation";
import Home from "./src/containers/HomeScreenContainer";
import TabOne from "./src/components/TabOne";
import TabTwo from "./src/components/TabTwo";
import TabThree from "./src/components/TabThree";
import DrawerScreen from "./src/components/DrawerScreen";
import Icon from "react-native-vector-icons/Ionicons";
import configureStore from "./configStore";
import { Provider } from "react-redux";
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
        header: ({ navigation, scene }) => (
          <View
            style={{
              height: 56,
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Icon name="ios-menu" size={30} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Icon name="ios-brush" size={25} color="#000" />
            </TouchableOpacity>
          </View>
        )
      };
    }
  }
);
const AppStack = createStackNavigator({ RootStack: { screen: RootStack } });
const AppContainer = createAppContainer(AppStack);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: configureStore(() => this.setState({ isLoading: false }))
    };
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <AppContainer />
      </Provider>
    );
  }
}
