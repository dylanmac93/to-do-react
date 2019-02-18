import { connect } from "react-redux";
import {
  addTask,
  deleteTask,
  markAsDone,
  editTask,
  clearAllTasks,
  swapTasks
} from "./redux/reducer";
import AppView from "./AppView";

export default connect(
  state => ({
    tasks: state.appState.tasks
  }),
  dispatch => ({
    addTask: text => dispatch(addTask(text)),
    deleteTask: index => dispatch(deleteTask(index)),
    markAsDone: index => dispatch(markAsDone(index)),
    editTask: (index, text) => dispatch(editTask(index, text)),
    clearAllTasks: () => dispatch(clearAllTasks()),
    swapTasks: tasksToSwap => dispatch(swapTasks(tasksToSwap))
  })
)(AppView);
