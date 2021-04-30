import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./container/Home";
import About from "./container/About";
// import NotFound from "./containers/error/NotFound";
import Product from "./container/product/product";
import Order from "./container/orders/order";
import ProductEdit from "./component/productEdit";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import reduxThunk from "redux-thunk";
// import reducers from "./reducers";

class App extends Component {
	renderRouter() {
		// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
		return (
			// <Provider store={store}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/order" component={Order} />
				<Route exact path="/product" component={Product} />
				<Route exact path="/product/add" component={ProductEdit} />
				<Route exact path="/product/edit/:id" component={ProductEdit} />
				{/* <Route component={ NotFound } />  */}
			</Switch>
			// </Provider>
		);
	}

	render() {
		return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
	}

}

export default App;