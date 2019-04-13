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

export function getCategories() {}