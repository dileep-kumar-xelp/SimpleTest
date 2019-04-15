import React, { Component } from "react";
import { View, Text } from "react-native";
export default class TabThree extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>TabThree</Text>
      </View>
    );
  }
}
