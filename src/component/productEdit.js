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
		return (
			<div>
				<Header />
				<div className="container col-md-5">
					{match.path.indexOf("add") > 0 && (
						<div>
							<h2>เพิ่มสินค้า</h2>
							{product.saved && <div className="alert alert-secondary title " role="alert">
								{product.msg}
							</div>}
							<ProductForm onProductSubmit={() => productCreate(formValues)}/>
						</div>
					)}
					{match.path.indexOf("edit") > 0 &&  (
						<div>
							<h2>แก้ไขสินค้า</h2>
							{product.saved && <div className="alert alert-secondary title " role="alert">
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