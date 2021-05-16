import React, { Component } from "react";
import Header from "../../component/header";
import Footer from "../../component/footer";
import { connect } from "react-redux";
import { orderFetch, orderDelete } from "../../actions";

class Order extends Component {
	constructor(props) {
		super(props);
        this.state={
            total:0,
            switch:false
        }
	}

	componentDidMount() {
        console.log("componentDidMount");
		this.props.orderFetch();
        let totalall = 0;
        for (let index = 0; index < this.props.orders.length; index++) {
            totalall += this.props.orders[index].totalPrice;
            
        }
        this.setState({total: totalall });
    }
    settotal(){
      
        let totalall = 0;
        for (let index = 0; index < this.props.orders.length; index++) {
            totalall += this.props.orders[index].totalPrice;
            
        }
        if (this.state.switch == true) {
            this.setState({total: totalall });
            this.setState({switch: false });
    }
        }
        componentDidUpdate(){
            this.props.orderFetch();
        }
        
    
    
    componentWillReceiveProps(nextProps){
        if (this.props.orders != nextProps.orders) {
            let totalall = 0;
            for (let index = 0; index < this.props.orders.length; index++) {
                totalall += this.props.orders[index].totalPrice;
                
            }
            this.setState({total: totalall });
        }
       
    }
    
    
    delOrder(order) {
        this.props.orderDelete(order._id);
        this.setState({switch: true });
    }
        
    
    
    
    showOrders() {
        return this.props.orders && this.props.orders.map(order => {
            const date = new Date(order.orderedDate);
            const style ={
                height:50,
            }
            
            return (
                <div key={order._id} className="col-md-3">
                    <hr />
                    <div className="row">
                        <div className="col">
                        <h1 className="text-success title"><img style={style} src ="http://www.digithaigroup.com/wp-engine/wp-content/uploads/2016/10/pizzadaybkk.png" alt="not" />    pizzaday</h1>
                        </div>
                        <div className="col">
                        <p className="text-right">
                        <button className="btn btn-danger btn-sm title" onClick={() => this.delOrder(order)}>X</button>
                    </p>
                        </div>
                    </div>                
                    
                    <h5>
                        วันที่ {date.toLocaleDateString() + ' ' + date.toLocaleTimeString()} 
                    </h5>
                    <ul>
                        {order.orders && order.orders.map(record => 
                        <li key={record.product._d}>{record.product.productName} x {record.quantity} = {record.product.unitPrice * record.quantity}
                        </li>
                    )}
                    </ul>
                    
                    <p className="title">ยอดรวม {order.totalPrice}</p>
                </div>
            )
        })
    }

	render() {
        let {total} = this.state;
		return (
			<div>
				<Header />
                <div className="container-fluid">
                    <h1>รายการสั่งซื้อ</h1>
                    <div className="row">
                    {this.props.orders && Array.isArray(this.props.orders)&&(
					this.showOrders()
                    )}
                    </div>
                    <div className="row">
                     <h1>ยอดรวมทั้งหมด : {total}</h1>
                    </div>
                </div>
				<Footer company ="Pizza Day" email ="dcdc07411@gmail.com"/>
			</div>
		);
	}
}

function mapStateToProps({orders}) {
    return { orders }
}

export default connect(mapStateToProps, {orderFetch, orderDelete})(Order);