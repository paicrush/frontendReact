import React, { Component } from "react";
import { connect } from "react-redux";
import { productFetch2, productCreate, productUpdate } from "../actions";
import Header from "./header";
import Footer from "./footer";
import ProductForm from "./productForm";

class ProductEdit extends Component {

	componentDidMount(){
		if (this.props.match.params.id) {
			console.log("this.props.match.params.id");
			console.log(this.props.match.params.id);
			this.props.productFetch2(this.props.match.params.id);
		}
	}
	render() {
		const {formValues, match, productCreate, productUpdate, product } = this.props
		console.log(product);
		const style ={
			height:100,
		}
		return (
			<div>
				<Header />
				<div className="container col-md-5">
					{match.path.indexOf("add") > 0 && (
						<div>
							<h1 className="text-success "><img style={style} src ="http://www.digithaigroup.com/wp-engine/wp-content/uploads/2016/10/pizzadaybkk.png" alt="not" />    เพิ่มรายการสินค้า</h1>
							{product.saved && <div className="alert alert-info title " role="alert">
								{product.msg}
							</div>}
							<ProductForm onProductSubmit={() => productCreate(formValues)}/>
						</div>
					)}
					{match.path.indexOf("edit") > 0 &&  (
						<div>
							<h1 className="text-success "><img style={style} src ="http://www.digithaigroup.com/wp-engine/wp-content/uploads/2016/10/pizzadaybkk.png" alt="not" />    แก้ไขรายการสินค้า</h1>
							{product.saved && <div className="alert alert-warning title " role="alert">
								{product.msg}
							</div>}
							<ProductForm onProductSubmit={() => productUpdate(product._id, formValues)} />
						</div>
					)}
				</div>
				<Footer />
			</div>
		);
	}
}
function mapStateToProps({ form, product }) {
	return { formValues: form.productForm ? form.productForm.values : null, product };
}

export default connect(mapStateToProps, { productFetch2, productCreate, productUpdate })(ProductEdit);