import React, { Component } from "react";
import configureStore from "./configStore";
import { Provider } from "react-redux";
import MainContainer from "./src/components/MainRoute";
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
        <MainContainer />
      </Provider>
    );
  }
}
