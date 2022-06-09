import {useDispatch , useSelector} from "react-redux" ;
import { data_input } from "../Redux/action";
import "../App.css" ;

// Component_A as a Parent Component of B & C.
export const Component_A = () => {
    return(
        <>
        <Component_B/>
        <Component_C/>
        </>
    )
}

// Component_B dispatch input data to reducx
export const Component_B = () => {
    const dispatch = useDispatch() ;
    const handleChange = (e) => {
      const str = e.target.value ;
      dispatch(data_input(str))}
    return(<div className="inputBox">Input Box:- <input onChange={(e) => handleChange(e)}/></div>)
}

// Component_C get the data form redux & print on screen
export const Component_C = () => {
    const {data} = useSelector((state) => state.mainData) ;
    return(<div className="outputBox"><h4>{data}</h4></div>)
}