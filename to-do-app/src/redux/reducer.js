const initialState = {
  tasks: []
};

export const REDUX_STORAGE_LOAD = "REDUX_STORAGE_LOAD";

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REDUX_STORAGE_LOAD: {
      return {
        ...state
      };
    }
    case ADD_TASK: {
      const { text } = action.payload;

      return {
        ...state,
        tasks: [...state.tasks, text]
      };
    }
    case DELETE_TASK: {
      const { index } = action.payload;
      const tasksArr = [...state.tasks];
      tasksArr.splice(index, 1);
      return {
        ...state,
        tasks: tasksArr
      };
    }
    default:
      return state;
  }
};

export default reducer;
