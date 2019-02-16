const initialState = {
  tasks: []
};

export const REDUX_STORAGE_LOAD = "REDUX_STORAGE_LOAD";

export const ADD_TASK = "ADD_TASK";

export function addTask(text) {
  return {
    type: ADD_TASK,
    payload: {
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
      const { text } = action.payload;

      return {
        ...state,
        tasks: [...state.tasks, text]
      };
    }
    default:
      return state;
  }
};

export default reducer;
