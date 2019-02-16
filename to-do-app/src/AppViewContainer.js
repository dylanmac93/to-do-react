import { connect } from "react-redux";
import { addTask, deleteTask } from "./redux/reducer";
import AppView from "./AppView";

export default connect(
  state => ({
    tasks: state.appState.tasks
  }),
  dispatch => ({
    addTask: text => dispatch(addTask(text)),
    deleteTask: index => dispatch(deleteTask(index))
  })
)(AppView);
