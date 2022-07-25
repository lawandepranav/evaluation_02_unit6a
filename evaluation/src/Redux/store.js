import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";
  
  import { BlogReducer } from "./Blogs/reducer";
  import { LoginReducer } from "./Login/reducer";
  import thunk from "redux-thunk"
  
  const rootReducer = combineReducers(
    { blogs: BlogReducer, login: LoginReducer}
    );
  
  export const store = createStore(rootReducer, applyMiddleware(thunk))