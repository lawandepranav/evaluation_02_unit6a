
import {LOGIN} from "./action";


export const LoginReducer = (state={isAuth:false},action) => {
    switch(action.type)
    {
        case LOGIN: {
            return {
                ...state,
                isAuth:state.isAuth
            }
        }
      
  
        default : {
            return{
                state
            }
        }
}
}