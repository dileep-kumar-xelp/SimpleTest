import { themes } from "../styles/theme-context";
import * as categoriesAction from "../actions/categories.actions";
// blue
const initialState = {
  theme: themes.light
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_BASE_THEME": {
      console.log("Reducer", action.baseTheme);
      let theme = action.baseTheme === "light" ? themes.light : themes.dark;
      return Object.assign({}, state, {
        theme: theme
      });
    }
    // let newState = {
    //   ...state,
    //   theme: { ...state.theme, ...action.baseTheme }
    // };
    // return newState;
    default:
      return state;
  }
};

export default themeReducer;
