import { combineReducers } from "redux";
import { reducer as reduxForm } from 'redux-form'
import ProductReducer from "./productReducers";
import OrderReducer from "./orderReducers";

const rootReducer = combineReducers({
	orders: OrderReducer,
	product: ProductReducer,
	form: reduxForm
});

export default rootReducer;