import React,{ Component } from "react";
import ProductItem from "./productItem";

class ProductList extends Component{
    
    showProducts() {
        return (
          this.props.product &&
          this.props.product.map(product => (
            
            <ProductItem key={product._id} product={product} onAddOrder={this.props.onAddOrder} onEditProduct={this.props.onEditProduct} onDelProduct={this.props.onDelProduct} />
          ))
        );
      }
    
      render() {
        return <div className="row">{this.showProducts()}</div>;
      }
    }
export default ProductList;