import React, { Component } from "react";
import Header from "../../component/header";
import Footer from "../../component/footer";
import { connect } from "react-redux";
import { orderFetch, orderDelete } from "../../actions";

class Order extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
        console.log("componentDidMount");
		this.props.orderFetch();
    }
    componentDidUpdate() {
		this.props.orderFetch();
    }
    delOrder(order) {
        this.props.orderDelete(order._id);
    }
    
    showOrders() {
        return this.props.orders && this.props.orders.map(order => {
            const date = new Date(order.orderedDate);
            return (
                <div key={order._id} className="col-md-3">
                    <hr />
                    <p className="text-right">
                        <button className="btn btn-danger btn-sm title" onClick={() => this.delOrder(order)}>X</button>
                    </p>
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