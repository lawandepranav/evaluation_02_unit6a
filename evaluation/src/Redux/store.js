import {
    legacy_createStore as createStore,
  } from "redux";
  

  import { LoginReducer } from "./Login/reducer";
 
  
  
  export const store = createStore(LoginReducer,window.__REDUX_DEVTOOL_EXTENSION__ && window.__REDUX_DEVTOOL_EXTENSION__)