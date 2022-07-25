import { LOGIN} from "./action";

export const LoginReducer = (state={login:{}},{type,payload}) => {
    switch(type)
    {
        case LOGIN: {
            return {
                ...state,login:payload
            }
        }
      
  
        default : {
            return{
                state
            }
        }
}
}