import { ADD_TASK, MARK_AS_DONE_TOGGLE } from "./reducer";

const appMiddleware = ({ dispatch, getState }) => next => action => {
  switch (action.type) {
    case ADD_TASK: {
      const { text } = action.payload;
      const task = {
        text,
        done: false
      };

      const payload = { task };
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
    default: {
      next(action);
      break;
    }
  }
};

export default appMiddleware;
