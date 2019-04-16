import { combineReducers } from "redux";
import categories from "../reducers/categories.reducer";
import themeReducer from "../reducers/theme.reducer";
export default combineReducers({ categories, themeReducer });
