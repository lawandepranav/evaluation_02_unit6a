import { PRODUCT_DATA } from "./Actiontype";

const initial = [];
export const reducer = (store=initial,{type,payload})=>{

    switch(type){
        case PRODUCT_DATA:
            return{...store,
            data:payload}
            
        default:
            return store;
    }
}