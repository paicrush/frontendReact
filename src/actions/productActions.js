import axios from "axios";
import {PRODUCTS_FETCH,PRODUCT_CREATE,PRODUCT_FETCH,PRODUCT_UPDATE,PRODUCTS_SEARCH_FETCH } from "./type";

export const productFetch =() =>{
    return dispatch => {
        axios.get("http://localhost:3001/product").then(response => {
        dispatch({type: PRODUCTS_FETCH,payload:response.data});
	    })
    }  
}

export const productSearchFetch = (search_item) =>{
    return dispatch => {
        axios.get("http://localhost:3001/product/"+search_item).then(response => {
        dispatch({type: PRODUCTS_SEARCH_FETCH,payload:response.data});
	    })
    }  
}

export const productDelete = id =>{
    return dispatch => {
        axios.delete("http://localhost:3001/product/" + id).then(response => {
        dispatch({type: PRODUCTS_FETCH,payload:response.data});
	    })
    }  
}

export const productFetch2 = id =>{
    return dispatch => {
        axios.get("http://localhost:3001/product/" + id).then(response => {
        dispatch({type: PRODUCT_FETCH,payload:response.data});
	    })
    }  
}
export const productCreate = values =>{
    console.log("values");
    console.log(values);
    return dispatch => {
        axios.post("http://localhost:3001/product/" ,values).then(response => {
            dispatch({type: PRODUCT_CREATE,payload:response.data});
    } ) 
    }
}

export const productUpdate = (id,values) =>{
    return dispatch => {
        axios.put("http://localhost:3001/product/" + id,values).then(response => {
            dispatch({type: PRODUCT_UPDATE,payload:response.data});
    } ) 
    }
}