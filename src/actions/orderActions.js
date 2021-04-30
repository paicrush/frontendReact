import axios from "axios";
import {ORDERS_FETCH} from "./type";

export const orderFetch =() =>{
    return dispatch => {
        axios.get("http://localhost:3001/orders").then(response => {
        dispatch({type: ORDERS_FETCH,payload:response.data});
	    });
    }  
}
export const orderDelete = id =>{
    return dispatch => {
        axios.delete("http://localhost:3001/orders/" + id).then(response => {
        dispatch({type: ORDERS_FETCH,payload:response.data});
	    });
    }  
}