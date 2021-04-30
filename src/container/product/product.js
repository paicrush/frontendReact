import React ,{ Component } from "react";
import Header from "../../component/header";
import Footer from "../../component/footer";
import ProductList from "../../component/productList";
import { withRouter} from "react-router-dom"
import {connect} from "react-redux";
import { productFetch,productDelete } from "../../actions";

class Product extends Component {
    
    constructor(props){
        super(props);
        
        this.delProduct = this.delProduct.bind(this);
		this.editProduct = this.editProduct.bind(this);
    }
	componentDidUpdate() {
		this.props.productFetch();
	}
   
	 componentDidMount() {
		this.props.productFetch();
	}
    delProduct(product) {
        this.props.productDelete(product._id);
	}
     
    editProduct(product) {
		this.props.history.push('product/edit/' + product._id);
	}

    render(){
        return(
            <div>
                 <Header/>
                 <div className="container-fluid ">
					<div className="row">
						<div className="col-6">
							<h1>สินค้า</h1>
						</div>
						<div className="col-6">
							<button className="btn btn-success title float-right" onClick={() => this.props.history.push('product/add')}>เพิ่ม</button>
						</div>
					</div>
					{this.props.product && Array.isArray(this.props.product)&&(<ProductList product={this.props.product} 
						onEditProduct={this.editProduct} 
						onDelProduct={this.delProduct}  
					/>)}
					
				</div>
                 <Footer company ="jakkrapong" email ="dcdc07411@gmail.com"/>

            </div>
        )
    }
}
function mapStateToProps({product}) {
	return {product}
  }
export default withRouter(connect(mapStateToProps,{productFetch,productDelete})(Product));