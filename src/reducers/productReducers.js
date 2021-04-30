import {PRODUCT_FETCH,PRODUCTS_FETCH,PRODUCT_CREATE,PRODUCT_UPDATE} from "../actions/type";
export default function (state=[], action) {
    switch(action.type){
        case PRODUCT_FETCH :
        case PRODUCTS_FETCH :
            return action.payload;
        case PRODUCT_CREATE :
            return {seaved:true,msg:"บันทึกสินค้าเรียบร้อย"}
        case PRODUCT_UPDATE :
            return {...state,seaved:true,msg:"บันทึกสินค้าเรียบร้อย"}
        default:
            return state;
    }
}