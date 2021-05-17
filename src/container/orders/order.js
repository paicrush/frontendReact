import React, { Component } from "react";
import Header from "../../component/header";
import Footer from "../../component/footer";
import { connect } from "react-redux";
import { orderFetch, orderDelete } from "../../actions";
import { Helmet } from 'react-helmet'

const TITLE = 'Order';

class Order extends Component {
	constructor(props) {
		super(props);
        this.state={
            total:0,
            switch:false,
            today:0,
            yeserday:100
        }
	}

	componentDidMount() {
        console.log("componentDidMount");
		this.props.orderFetch();
        let totalall = 0;
        let totalday = 0;
        let totalyeserday = 0;
        const day = new Date();
        let yes= ( d => new Date(d.setDate(d.getDate()-1)) )(new Date);
        for (let index = 0; index < this.props.orders.length; index++) {
            totalall += this.props.orders[index].totalPrice;
            const date = new Date(this.props.orders[index].orderedDate);
            console.log(date.toLocaleDateString());
            if (date.toLocaleDateString() == day.toLocaleDateString()) {
                totalday += this.props.orders[index].totalPrice;
            }
            if (date.toLocaleDateString() == yes.toLocaleDateString()) {
                totalyeserday += this.props.orders[index].totalPrice;
            }
        }
        this.setState({total: totalall });
        this.setState({today: totalday });
        this.setState({yeserday: totalyeserday });
    }
        componentDidUpdate(){
            this.props.orderFetch();
        }
        
    
    
    componentWillReceiveProps(nextProps){
        if (this.props.orders != nextProps.orders) {
            let totalall = 0;
            let totalday = 0;
            let totalyeserday = 0;
            const day = new Date();
            let yes= ( d => new Date(d.setDate(d.getDate()-1)) )(new Date);
            for (let index = 0; index < this.props.orders.length; index++) {
                totalall += this.props.orders[index].totalPrice;
                const date = new Date(this.props.orders[index].orderedDate);
                if (date.toLocaleDateString() == day.toLocaleDateString()) {
                    totalday += this.props.orders[index].totalPrice;
                }
                if (date.toLocaleDateString() == yes.toLocaleDateString()) {
                    totalyeserday += this.props.orders[index].totalPrice;
                }
            }
            this.setState({total: totalall });
            this.setState({today: totalday });
            this.setState({yeserday: totalyeserday });
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
        let {total,today,yeserday} = this.state;
        const style ={
            height:100,
        }
		return (
			<div>
                <Helmet>
                    <title>{ TITLE }</title>
                </Helmet>
				<Header />
                <div className="container-fluid">
                    <h1>รายการสั่งซื้อ</h1>
                    <div className="row">
                    {this.props.orders && Array.isArray(this.props.orders)&&(
					this.showOrders()
                    )}
                    </div>
                    
                        <br/>
                        <br/>
                    <hr/>
                    <div className="row ">

                        <div className="col">
                        <br/>
                        <br/>
                        <h2 className="text-secondary">ยอดขายรวมทั้งหมด : {total}</h2>
                        </div>
                        <div className="col">
                        <h1 className="text-success text-center "><img style={style} src ="http://www.digithaigroup.com/wp-engine/wp-content/uploads/2016/10/pizzadaybkk.png" alt="not" />   ยอดขายวันนี้ : {today}</h1>
                        
                        </div>
                        <div className="col">
                        <br/>
                        <br/>
                        <h3 className="text-right text-secondary">ยอดขายเมื่อวาน : {yeserday}</h3>
                        </div>
                    </div>
                    <hr/>
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