import React, { Component } from "react";
import Formfield from "../common/FormField";
import { reduxForm, Field } from "redux-form";
import {productFormField} from "./formFields";
import { connect } from "react-redux";
class ProductForm extends Component {
	
	renderField(formfield){
			
		return formfield.map(({name,type,label,required})=>{
			return(
				<Field key={name} label={label} name={name} type={type} required={required} component={Formfield} />
			)
		})
		}
		render() {
			const { onProductSubmit } =this.props;
			console.log(onProductSubmit);
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(onProductSubmit)}>
					{this.renderField(productFormField)}
					<button className="btn btn-block btn-info title" type="submit"  name="action">
					บันทึก
				</button>
				</form>
				
			</div>
		);
	}
}
function validate(values) {
	
	const errors={};
	productFormField.forEach(({name,required}) => {
		if (!values[name]&&required) {
			errors[name]="กรุณากรอกข้อมูล";
		}
	});
	return errors;
}
function mapStateToProps({ product }) {
	if (product && product._id) {
		return { initialValues: product };
	} else {
		return {};
	}
}

ProductForm = reduxForm({validate, form: "productForm" })(ProductForm);
export default connect(mapStateToProps)(ProductForm);