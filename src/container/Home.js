import React,{Component} from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import Monitor from "../component/monitor";
import { connect } from "react-redux";
import {productFetch} from "../actions"
import {productSearchFetch} from "../actions"
import { Helmet } from 'react-helmet'

const TITLE = 'Pizza Day'

class Home extends Component{

  constructor(props){
      super(props);
      this.state ={search_item:""}
      this.handleChange = this.handleChange.bind(this);
      this.handleButton = this.handleButton.bind(this);
  }
  
  componentDidMount(){
    this.props.productFetch();
  }

  handleChange(event) {
    this.setState({search_item: event.target.value});
    console.log(this.state.search_item);
  }
  
  handleButton() {
    this.props.productSearchFetch(this.state.search_item);
  }

  render(){
      return (
      <div>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <Header/>
        <Monitor setSearchValue={this.handleChange} confirmSearch={this.handleButton} product={this.props.product}/>
        <Footer company ="Pizza Day" email ="dcdc07411@gmail.com"/>
      </div>
      );
  }
}
function mapStateToProps({product}) {
  return {product};
}
export default connect(mapStateToProps,{productFetch,productSearchFetch})(Home);
