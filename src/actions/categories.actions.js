import { SUCCESS, REQUEST, ERROR } from "../utils/constants";
export const GET_CATEGORIESLIST_REQUEST = "GET_CATEGORIESLIST_REQUEST";
export const GET_CATEGORIESLIST_SUCCESS = "GET_CATEGORIESLIST_SUCCESS";
export const GET_CATEGORIESLIST_FAILURE = "GET_CATEGORIESLIST_FAILURE";

export const CHANGE_THEME_REQUEST = "CHANGE_THEME_REQUEST";
export const CHANGE_THEME_SUCCESS = "CHANGE_THEME_SUCCESS";
export const CHANGE_THEME_FAILURE = "CHANGE_THEME_FAILURE";
export function getCategoriesListRequest() {
  return {
    type: GET_CATEGORIESLIST_REQUEST,
    status: REQUEST
  };
}
export function getCategoriesListSuccess(categoriesList) {
  return {
    type: GET_CATEGORIESLIST_SUCCESS,
    status: SUCCESS,
    categoriesList
  };
}
export function getCategoriesListFailure(error) {
  return {
    type: GET_CATEGORIESLIST_FAILURE,
    status: ERROR,
    error
  };
}

export function getCategories() {
  return async (dispatch, getState, api) => {
    dispatch(getCategoriesListRequest());
    try {
      const result = await api.get();
      const resultJson = await result.json();
      dispatch(getCategoriesListSuccess(resultJson.data));
    } catch (e) {
      dispatch(getCategoriesListFailure(e.message));
    }
  };
}

export function changeBaseTheme(BaseTheme) {
  //dispatch an action to change light or dark theme
  return dispatch => {
    dispatch({
      type: "CHANGE_BASE_THEME",
      baseTheme: BaseTheme
    });
  };
}
