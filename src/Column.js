import React from "react";
import { FlatList, ScrollView, View, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";

const Item = props => {
  return (
    <View style={{ flex: 1 }} onLayout={props.onLayout}>
      {props.renderItem(props.item)}
    </View>
  );
};
export default class Column extends React.Component {
  static propTypes = {
    keyExtractor: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      data: []
    };
  }

  clear() {
    this.setState({ data: [], height: 0 });
  }

  render() {
    return (
      <View style={{ flex: 1, overflow: "hidden" }}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          keyExtractor={this.props.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }

  getHeight() {
    return this.state.height;
  }

  addItems(items) {
    this.setState({ data: [...this.state.data, ...items] });
  }

  renderItem = ({ item }) => {
    return (
      <Item
        renderItem={this.props.renderItem}
        item={item}
        onLayout={event => {
          const { height } = event.nativeEvent.layout;
          this.state.height = this.state.height + height;
          this.setState({ height: this.state.height });
          item.onLayout && item.onLayout();
        }}
      />
    );
  };
}
