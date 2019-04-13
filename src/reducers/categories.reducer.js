import * as categoriesAction from "../actions/categories.actions";

const categories = (
  state = {
    loading: false,
    categoriesList: null,
    status: "",
    error: ""
  },
  action
) => {
  switch (action.type) {
    case categoriesAction.GET_CATEGORIESLIST_REQUEST: {
      return Object.assign({}, state, {
        loading: true,
        status: action.status
      });
    }
    case categoriesAction.GET_CATEGORIESLIST_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        status: action.status,
        categoriesList: action.categoriesList
      });
    }
    case categoriesAction.GET_CATEGORIESLIST_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        status: action.status,
        error: action.error
      });
    }
    default:
      return state;
  }
};
export default categories;
