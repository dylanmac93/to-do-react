import {
  ADD_TASK,
  MARK_AS_DONE_TOGGLE,
  EDIT_TASK,
  DELETE_TASK,
  SWAP_TASKS
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

      const tasksArr = tasks.map((task, i) => {
        if (i === index) {
          if (!task.done) {
            return { ...task, done: true };
          }
          return { ...task, done: false };
        }
        return task;
      });

      const payload = { tasksArr };
      const updatedAction = { ...action, payload };
      next(updatedAction);
      break;
    }
    case EDIT_TASK: {
      const { index, text } = action.payload;
      const { tasks } = getState().appState;

      const tasksArr = tasks.map((task, i) => {
        if (i === index) {
          return { ...task, text: text };
        }
        return task;
      });

      const payload = { tasksArr };
      const updatedAction = { ...action, payload };
      next(updatedAction);
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
    case SWAP_TASKS: {
      const { tasksToSwap } = action.payload;
      const { tasks } = getState().appState;
      const tasksArr = [...tasks];

      var t = tasksArr[tasksToSwap[0]];
      tasksArr[tasksToSwap[0]] = tasksArr[tasksToSwap[1]];
      tasksArr[tasksToSwap[1]] = t;

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
