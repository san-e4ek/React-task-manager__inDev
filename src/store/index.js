import {combineReducers, createStore} from "redux";
import {taskReducer} from "./tasks/reducers";
import {commentsReducer} from "./comments/reducers";

const rootReducer = combineReducers({
    tasks: taskReducer,
    comments: commentsReducer
});

const configurationStore = () => {
  const store = createStore(rootReducer);

  return store;
};

export default configurationStore();