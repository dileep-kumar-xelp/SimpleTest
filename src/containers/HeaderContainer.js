import { connect } from "react-redux";
import Header from "../corecomponents/Header";
import { changeBaseTheme } from "../actions/categories.actions";
const mapStateToProps = state => {
  return {
    theme: state.themeReducer.theme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeBaseTheme: theme => {
      dispatch(changeBaseTheme(theme));
    }
  };
};
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
export default HeaderContainer;
