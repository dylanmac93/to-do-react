import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import * as storage from "redux-storage";
import filter from "redux-storage-decorator-filter";
import migrate from "redux-storage-decorator-migrate";
import createEngine from "redux-storage-engine-localstorage";
import reducer from "./reducer";
import { stateFilters, eventFilters } from "./filters";
import { createLogger } from "redux-logger";

const engine = filter(migrate(createEngine("engine-key"), 0), stateFilters);

const logger = createLogger();

const filterMiddleware = storage.createMiddleware(engine, [], eventFilters);

const enhancer = compose(applyMiddleware(logger, filterMiddleware));

const rootReducer = combineReducers({
  appState: reducer
});

const store = createStore(
  storage.reducer(rootReducer),
  { appState: undefined },
  enhancer
);

const loader = storage.createLoader(engine);
loader(store)
  .then(newState => {
    console.log("Loaded state:", newState);
  })
  .catch(error => {
    console.log("Failed to load state:", error);
  });
export default store;
