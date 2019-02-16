import { connect } from "react-redux";
import AppView from "./AppView";

export default connect(
  state => ({
    tasks: state.appState.tasks
  }),
  dispatch => ({})
)(AppView);
