const initialState = {
  tasks: []
};

export const REDUX_STORAGE_LOAD = "REDUX_STORAGE_LOAD";

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const MARK_AS_DONE_TOGGLE = "MARK_AS_DONE_TOGGLE";
export const EDIT_TASK = "EDIT_TASK";

export function addTask(text) {
  return {
    type: ADD_TASK,
    payload: {
      text
    }
  };
}

export function deleteTask(index) {
  return {
    type: DELETE_TASK,
    payload: {
      index
    }
  };
}

export function markAsDone(index) {
  return {
    type: MARK_AS_DONE_TOGGLE,
    payload: {
      index
    }
  };
}

export function editTask(index, text) {
  return {
    type: EDIT_TASK,
    payload: {
      index,
      text
    }
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REDUX_STORAGE_LOAD: {
      return {
        ...state
      };
    }
    case ADD_TASK: {
      const { tasksArr } = action.payload;
      return {
        ...state,
        tasks: tasksArr
      };
    }
    case DELETE_TASK: {
      const { tasksArr } = action.payload;
      return {
        ...state,
        tasks: tasksArr
      };
    }
    case MARK_AS_DONE_TOGGLE: {
      return {
        ...state
      };
    }
    case EDIT_TASK: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export default reducer;
