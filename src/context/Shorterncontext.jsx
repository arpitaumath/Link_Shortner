import { createContext, useReducer } from "react";
import ShorternReducer from "./Shorternreducer";

const Shorterncontext = createContext()

 export const ShorternProvider =({children}) =>{

    const initialState ={
        links : [],

       
    } 
    const [state ,dispatch] = useReducer(ShorternReducer,initialState)
    return(
        <Shorterncontext.Provider value={{ ...state , dispatch}}>{children}</Shorterncontext.Provider>
    )
 }

export default Shorterncontext