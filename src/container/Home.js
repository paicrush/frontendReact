import React,{Component} from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import Monitor from "../component/monitor";
import { connect } from "react-redux";
import {productFetch} from "../actions"
import { Helmet } from 'react-helmet'

const TITLE = 'Pizza Day'

class Home extends Component{

  constructor(props){
      super(props);
      
  }
  
  componentDidMount(){
    this.props.productFetch();
  }


  render(){
      return (
      <div>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <Header/>
        <Monitor product={this.props.product}/>
        <Footer company ="Pizza Day" email ="dcdc07411@gmail.com"/>
      </div>
      );
  }
}
function mapStateToProps({product}) {
  return {product};
}
export default connect(mapStateToProps,{productFetch})(Home);
