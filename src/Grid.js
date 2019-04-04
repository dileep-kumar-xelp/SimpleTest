import React from "react";
import {
  Image,
  Text,
  View,
  Dimensions,
  RefreshControl,
  TouchableOpacity
} from "react-native";
import Masonry from "./Masonry";
const { width } = Dimensions.get("window");
const columnWidth = (width - 10) / 2 - 10;

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      withHeight: false,
      loading: false
    };
  }

  componentDidMount() {
    this.load();
  }

  load() {
    this.refs.list.addItems([
      { key: 1, text: "text1", height: 200 },
      { key: 2, text: "text2", height: 220 },
      { key: 3, text: "text3", height: 180 },
      { key: 4, text: "text4", height: 160 },
      { key: 5, text: "text5", height: 220 },
      { key: 6, text: "text6", height: 200 },
      { key: 7, text: "text7", height: 160 },
      { key: 8, text: "text8", height: 150 }
    ]);
    // this.setState({ loading: true });
    // fetch("http://huaban.com/boards/17649987/?limit=10", {
    //   headers: {
    //     "X-Requested-With": "XMLHttpRequest"
    //   }
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ loading: false });
    //     data = data.board.pins.map(item => {
    //       return {
    //         image: "http://img.hb.aicdn.com/" + item.file.key,
    //         text: item.raw_text,
    //         key: item.file.key,
    //         height: (columnWidth / item.file.width) * item.file.height
    //       };
    //     });
    //     if (this.state.withHeight) {
    //       this.refs.list.addItemsWithHeight(data);
    //     } else {
    //       this.refs.list.addItems(data);
    //     }
    //   });
  }

  onScrollEnd(event) {
    const scrollHeight = Math.floor(
      event.nativeEvent.contentOffset.y +
        event.nativeEvent.layoutMeasurement.height
    );
    const height = Math.floor(event.nativeEvent.contentSize.height);
    if (scrollHeight >= height) {
      this.load();
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#EEE" }}>
        <Masonry
          //onMomentumScrollEnd={this.onScrollEnd.bind(this)}
          style={{ flex: 1, borderWidth: 1, borderColor: "red" }}
          columns={2}
          ref="list"
          containerStyle={{ padding: 5 }}
          renderItem={item => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => alert("clicked")}
              style={{
                margin: 3,
                height: item.height,
                backgroundColor: "#fff",
                borderRadius: 5,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "#dedede"
              }}
            >
              {/* <Image
                source={{ uri: item.image }}
                style={{ height: item.height }}
              /> */}
              <Text style={{ padding: 5, color: "#444" }}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
