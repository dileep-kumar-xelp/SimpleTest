import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const ThemeContext = React.createContext();

class ThemeProvider extends React.Component {
  state = { theme: "light" };
  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === "light" ? "dark" : "light"
    }));
  };
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <TouchableOpacity onClick={this.toggleTheme}>
          <Text>toggle theme</Text>
        </TouchableOpacity>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
// only doing this to shield end-users from the
// implementation detail of "context"
const ThemeConsumer = ThemeContext.Consumer;

class Test extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <ThemeConsumer>
          {theme => (
            <View style={styles[theme]}>
              <Text>{theme}</Text>
            </View>
          )}
        </ThemeConsumer>
        {/* <ThemeConsumer>
          {theme => <View style={styles[theme]}>{theme}</View>}
        </ThemeConsumer> */}
      </ThemeProvider>
    );
  }
}

const styles = {
  dark: {
    backgroundColor: "black",
    color: "white"
  },
  light: {
    backgroundColor: "white",
    color: "black"
  }
};
export default Test;
