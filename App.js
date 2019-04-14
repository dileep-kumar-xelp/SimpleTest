import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  DrawerActions
} from "react-navigation";
import Home from "./src/containers/HomeScreenContainer";
import HomeScreen from "./src/components/HomeScreen";
import TabOne from "./src/TabOne";
import TabTwo from "./src/TabTwo";
import TabThree from "./src/TabThree";
import DrawerScreen from "./src/DrawerScreen";
import Grid from "./src/Grid";
import Icon from "react-native-vector-icons/Ionicons";
import configureStore from "./configStore";
import { Provider } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
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
        let IconComponent = Ionicons;
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
    },
    Grid: {
      screen: Grid
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
              backgroundColor: "blue",
              flexDirection: "row",
              alignItems: "center"
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
              <Icon name="ios-menu" size={30} color="#FFF" />
            </TouchableOpacity>
          </View>
        )
      };
    }
  }
);
const AppStack = createStackNavigator({ RootStack: { screen: RootStack } });
const AppContainer = createAppContainer(AppStack);

// class MyHomeScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: "Home"
//     // drawerIcon: ({ tintColor }) => (
//     //   <Image
//     //     source={require("./chats-icon.png")}
//     //     style={[styles.icon, { tintColor: tintColor }]}
//     //   />
//     // )
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.navigate("Notifications")}
//         title="Go to notifications"
//       />
//     );
//   }
// }

// class MyNotificationsScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: "Notifications"
//     // drawerIcon: ({ tintColor }) => (
//     //   <Image
//     //     source={require("./notif-icon.png")}
//     //     style={[styles.icon, { tintColor: tintColor }]}
//     //   />
//     // )
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.goBack()}
//         title="Go back home"
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   icon: {
//     width: 24,
//     height: 24
//   }
// });

// const MyDrawerNavigator = createDrawerNavigator(
//   {
//     Home: {
//       screen: MyHomeScreen
//     },
//     Notifications: {
//       screen: MyNotificationsScreen
//     }
//   },
//   {
//     drawerWidth: 250,
//     drawerPosition: "left",
//     contentComponent: DrawerScreen,
//     drawerBackgroundColor: "white",
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: "#f4511e"
//       },
//       gesturesEnabled: true,
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         color: "white"
//       }
//     }
//   }
// );

// const MyApp = createAppContainer(MyDrawerNavigator);
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
