const initialState = {
  tasks: undefined
};

export const REDUX_STORAGE_LOAD = "REDUX_STORAGE_LOAD";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REDUX_STORAGE_LOAD: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export default reducer;
