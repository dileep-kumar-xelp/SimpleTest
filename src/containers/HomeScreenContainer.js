import { connect } from "react-redux";
import HomeScreen from "../components/HomeScreen";
import { getCategories } from "../actions/categories.actions";

const mapStateToProps = state => {
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
const HomeScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
export default HomeScreenContainer;
