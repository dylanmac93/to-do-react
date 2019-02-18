import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  MARK_AS_DONE_TOGGLE,
  CLEAR_ALL_TASKS
} from "./reducer";

export const stateFilters = [["appState", "tasks"]];
export const eventFilters = [
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  MARK_AS_DONE_TOGGLE,
  CLEAR_ALL_TASKS
];
