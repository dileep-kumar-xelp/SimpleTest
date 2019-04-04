import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Button } from "xelp-core";

export default class Demo extends Component {
  onPress = () => {
    showSnackBar({
      message: "Hello World",
      position: "top",
      confirmText: "OK",
      backgroundColor: "#323232",
      duration: 6000,
      onConfirm: () => {
        alert("hi");
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
