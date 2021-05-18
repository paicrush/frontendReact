import React ,{ Component } from "react";
import Header from "../../component/header";
import Footer from "../../component/footer";
import ProductList from "../../component/productList";
import { withRouter} from "react-router-dom"
import {connect} from "react-redux";
import { productFetch,productDelete } from "../../actions";
import { Helmet } from 'react-helmet';

const TITLE = 'Product';

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
		const style ={
            height:40,
        }
        return(
            <div>
				<Helmet>
                	<title>{ TITLE }</title>
            	</Helmet>
                 <Header/>
                 <div className="container-fluid ">
					<div className="row">
						<div className="col-6">
							<h1>รายการอาหาร</h1>
						</div>
						<div className="col-6">
							<button className="btn btn-success title float-right" onClick={() => this.props.history.push('product/add')}><img style={style} src ="http://www.digithaigroup.com/wp-engine/wp-content/uploads/2016/10/pizzadaybkk.png" alt="not" />     เพิ่มสินค้าใหม่</button>
						</div>
					</div>
					<hr/>
					
					{this.props.product && Array.isArray(this.props.product)&&(<ProductList product={this.props.product} 
						onEditProduct={this.editProduct} 
						onDelProduct={this.delProduct}  
					/>)}
					
				</div>
                <Footer company ="Pizza Day" email ="dcdc07411@gmail.com"/>

            </div>
        )
    }
}
function mapStateToProps({product}) {
	return {product}
  }
export default withRouter(connect(mapStateToProps,{productFetch,productDelete})(Product));