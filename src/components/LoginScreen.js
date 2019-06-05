import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import PropTypes from "prop-types";
import { AsyncStorage } from "react-native";
import styles from "../styles/LoginScreenStyles";
export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);

    this.state = {
      value: null
    };
  }

  onChange(val) {
    this.setState({ value: val });
    this._storeData(val);
  }
  clearInput = () => {
    this.textInput.clear();
  };
  componentDidMount() {
    this.props.getCategories && this.props.getCategories();
  }
  _storeData = async email => {
    try {
      await AsyncStorage.setItem("Email", email);
    } catch (error) {
      //
    }
  };
  onPress = () => {
    if (this.state.value) {
      if (this.state.value === "user@gmail.com") {
        this.props.navigation.navigate("RootStack", {});
      } else {
      }
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref={input => {
            this.textInput = input;
          }}
          style={styles.input}
          placeholder={"Enter email here"}
          autoCapitalize={"none"}
          placeholderTextColor={"rgba(0,0,0,0.5)"}
          underlineColorAndroid={"transparent"}
          keyboardType={"default"}
          multiline={false}
          onChangeText={val => this.onChange(val)}
        />
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
LoginScreen.propTypes = {};
LoginScreen.defaultProps = {};
