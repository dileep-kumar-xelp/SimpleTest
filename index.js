/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
import App from "./App";
import AppContainer from "./src/containers/MainContainer";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
