import { SUCCESS, REQUEST, ERROR } from "../utils/constants";
export const GET_CATEGORIESLIST_REQUEST = "GET_CATEGORIESLIST_REQUEST";
export const GET_CATEGORIESLIST_SUCCESS = "GET_CATEGORIESLIST_SUCCESS";
export const GET_CATEGORIESLIST_FAILURE = "GET_CATEGORIESLIST_FAILURE";

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
  console.log("api called");
  return async (dispatch, getState, api) => {
    dispatch(getCategoriesListRequest());
    try {
      const result = await api.get();
      const resultJson = await result.json();
      console.log("ResULT", resultJson);
      let errorDetails = getError(resultJson);

      if (errorDetails.hasError) {
        throw new Error(errorDetails.message);
      } else {
        dispatch(getCategoriesListSuccess(resultJson.data));
      }
    } catch (e) {
      console.log("error", e.message);
      dispatch(getCategoriesListFailure(e.message));
    }
  };
}
