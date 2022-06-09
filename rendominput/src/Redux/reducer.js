import {DATA_INPUT} from "./action" ;

// initState
const initstate = {
    data : "" ,
}

// dataReducer as a Pure Funtion 
export const dataReducer = (store=initstate , {type, payload}) => {
    switch(type){
        case DATA_INPUT:
            return{
                ...store ,
                data: payload ,
            }
        default:
            return store ;
    }
}