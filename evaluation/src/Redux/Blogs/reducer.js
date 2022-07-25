import {
  GET_ALL_BLOGS_LOADING,
    GET_ALL_BLOGS_FAILURE,
    GET_ALL_BLOGS_SUCCESS,
  } from "./action";
  

  export const BlogReducer = (store = {blogs:[],isLoading:false,isError:false},{type,payload}) => {
      switch (type) {
          case GET_ALL_BLOGS_LOADING:
        return {
          ...store,
         isLoading:true,
         isError:false,
         blogs: [],
        };
  
      case GET_ALL_BLOGS_SUCCESS:
        return {
          ...store,
          isLoading:false,
          isError:false,
          blogs:[...payload]
        };
  
      case GET_ALL_BLOGS_FAILURE:
        return {
          ...store,
           isLoading:false,
           isError:true,
           blogs:[]
        };
      default:
        return store;
    }
   }
  
