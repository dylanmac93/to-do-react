import {
  ADD_TASK,
  MARK_AS_DONE_TOGGLE,
  EDIT_TASK,
  DELETE_TASK
} from "./reducer";

const appMiddleware = ({ dispatch, getState }) => next => action => {
  switch (action.type) {
    case ADD_TASK: {
      const { text } = action.payload;
      const task = {
        text,
        done: false
      };
      const { tasks } = getState().appState;
      const tasksArr = [...tasks];

      tasksArr.push(task);

      const payload = { tasksArr };
      const updatedAction = { ...action, payload };
      next(updatedAction);
      break;
    }
    case MARK_AS_DONE_TOGGLE: {
      const { index } = action.payload;
      const { tasks } = getState().appState;

      for (let x = 0; x < tasks.length; x++) {
        if (x === index) {
          if (!tasks[x].done) {
            tasks[x].done = true;
          } else {
            tasks[x].done = false;
          }
        }
      }
      next(action);
      break;
    }
    case EDIT_TASK: {
      const { index, text } = action.payload;
      const { tasks } = getState().appState;

      for (let x = 0; x < tasks.length; x++) {
        if (x === index) {
          tasks[x].text = text;
        }
      }
      next(action);
      break;
    }
    case DELETE_TASK: {
      const { index } = action.payload;
      const { tasks } = getState().appState;
      const tasksArr = [...tasks];

      tasksArr.splice(index, 1);

      const payload = { tasksArr };
      const updatedAction = { ...action, payload };
      next(updatedAction);
      break;
    }
    default: {
      next(action);
      break;
    }
  }
};

export default appMiddleware;
