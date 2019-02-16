import { connect } from "react-redux";
import { addTask } from "./redux/reducer";
import AppView from "./AppView";

export default connect(
  state => ({
    tasks: state.appState.tasks
  }),
  dispatch => ({
    addTask: text => dispatch(addTask(text))
  })
)(AppView);
