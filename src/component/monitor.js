import React, {Component} from "react";
import ProductList from "./productList"
import Calculator from "./calculator";
import axios from "axios";

class Monitor extends Component{
    constructor(props){
        super(props);
        this.state = {
            totalPrice:0,
            orders: [],
            confirm: false
        }
        this.addOrder = this.addOrder.bind(this);
        this.delOrder = this.delOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
    }

    addOrder(product){
        let findOrder =this.state.orders.find(order => order.product.productName == product.productName);
        if (findOrder) {
            findOrder.quantity++;
        }else{
            this.state.orders.push({product: product,quantity: 1});
            console.log(this.state.orders);
        }
        const totalPrice =this.state.totalPrice + parseInt(product.unitPrice);
        this.setState({totalPrice: totalPrice ,orders : this.state.orders, confirm : false});
    }

    delOrder(product){
        let findOrder = this.state.orders.find(order => order.product._id == product._id);
        let resultOrder = this.state.orders.filter(order => order.product._id != product._id);
        const totalPrice =this.state.totalPrice - (findOrder.quantity *parseInt(findOrder.product.unitPrice));
        this.setState({totalPrice: totalPrice ,orders : resultOrder, confirm : false});

    }
    cancelOrder() {
        this.setState({totalPrice: 0, orders: [], confirm : false});
    }

    confirmOrder() {
        const {totalPrice, orders} = this.state;
        if(orders && orders.length > 0) {
            axios.post("http://localhost:3001/orders", {orderedDate: new Date(), totalPrice, orders})
                .then(res => {
                    this.setState({totalPrice: 0, orders: [], confirm : true, msg: 'บันทึกรายการสั่งซื้อเรียบร้อยค่ะ'});
                });
        } else {
            this.setState({totalPrice: 0, orders: [], confirm : true, msg: 'เลือกสินค้าก่อนค่ะ'});
        }
    }

    render(){
        return (
            <div className="container-fluid ">
                {this.state.confirm && 
                <div className="alert alert-secondary title text-right" role="alert">
                    {this.state.msg}
                </div>}
                <div className="row">
                    <div className="col-md-9">
                        <div className="row" style={{marginBottom:10 +'px'}}>
                        <div className="col-3">
                            <h3>ค้นหารายการอาหาร :</h3>
                            </div>
                            <div className="col-4">
                                <input className="form-control" type="text" name="search_item" placeholder="ป้อนชื่ออาหารที่ต้องการรับประทาน" onChange={this.props.setSearchValue}></input>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-outline-success my-2 my-sm-0 form-control" onClick={()=>this.props.confirmSearch()}>ค้นหา</button>
                            </div>
                        </div>
                        
                        <hr/>
                        <ProductList product={this.props.product} onAddOrder={this.addOrder} />
                    </div>
                    <div className="col-md-3">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders}  delOrder={this.delOrder}  onConfirmOrder={this.confirmOrder}  onCancelOrder={this.cancelOrder}/>
                    </div>
                </div>
            </div>
        )
    }
} 
export default Monitor;