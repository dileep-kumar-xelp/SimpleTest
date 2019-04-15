import { connect } from "react-redux";
import App from "../../App";

const mapStateToProps = state => {
  console.log("categoriesList", state.categories.categoriesList);
  return {
    loading: state.categories.loading,
    error: state.categories.error,
    status: state.categories.status,
    categoriesList: state.categories.categoriesList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => {
      dispatch(getCategories());
    }
  };
};
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default AppContainer;
