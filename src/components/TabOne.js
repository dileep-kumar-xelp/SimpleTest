import React, { Component } from "react";
import { View, Text } from "react-native";
export default class TabOne extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>TabOne</Text>
      </View>
    );
  }
}
