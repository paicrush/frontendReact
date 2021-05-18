import React, { Component } from "react";
import Header from "../../component/header";
import Footer from "../../component/footer";
import { connect } from "react-redux";
import { orderFetch, orderDelete } from "../../actions";
import { Helmet } from 'react-helmet'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const TITLE = 'Order';


class Order extends Component {
	constructor(props) {
		super(props);
        this.state={
            total:0,
            switch:false,
            today:0,
            yeserday:100,
            startdate: new Date(),
            check : new Date()

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
    
    handleChange = date => {
        this.setState({startdate : date });
        
      };
      
      selecthand=date=>{
        this.setState({check : date });
      }
     
    showOrders() {
        return this.props.orders && this.props.orders.map(order => {
            const date = new Date(order.orderedDate);
            const style ={
                height:50,
            }
            const ddd = new Date();
            if (this.state.check.toLocaleDateString() == ddd.toLocaleDateString()) {
                return (
                    <div key={order._id} className="col-md-3">
                        <div className="col-md-12 rounded" style={{backgroundColor:'#D5F5E3',margin:10 +'px',border:3+'px'+' solid #58D68D'}}>
                            <div className="row">
                                <div className="col">
                                <h1 className="text-success title" style={{margin:10 +'px'}}><img style={style} src ="http://www.digithaigroup.com/wp-engine/wp-content/uploads/2016/10/pizzadaybkk.png" alt="not" />    pizzaday</h1>
                                </div>
                                <div className="col">
                                <p className="text-right">
                                    <button className="btn btn-danger btn-sm title" style={{marginTop:10 +'px'}} onClick={() => this.delOrder(order)}>X</button>
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
                        
                        <b className="title" style={{color:'green'}}>ยอดรวม {order.totalPrice} THB</b>
                        </div>  
                    </div>
                )
            }else if (this.state.check.toLocaleDateString() == date.toLocaleDateString()) {
                return (
                    <div key={order._id} className="col-md-3">
                        <div className="col-md-12 rounded" style={{backgroundColor:'#D5F5E3',margin:10 +'px',border:3+'px'+' solid #58D68D'}}>
                            <div className="row">
                                <div className="col">
                                <h1 className="text-success title" style={{margin:10 +'px'}}><img style={style} src ="http://www.digithaigroup.com/wp-engine/wp-content/uploads/2016/10/pizzadaybkk.png" alt="not" />    pizzaday</h1>
                                </div>
                                <div className="col">
                                <p className="text-right">
                                    <button className="btn btn-danger btn-sm title" style={{marginTop:10 +'px'}} onClick={() => this.delOrder(order)}>X</button>
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
                        
                        <b className="title" style={{color:'green'}}>ยอดรวม {order.totalPrice} THB</b>
                        </div>  
                    </div>
                )
            }
        
        })
    }
    

	render() {
        let {total,today,yeserday} = this.state;
        const style ={
            height:100,
        }
        const {startdate} = this.state;
		return (
			<div>
                <Helmet>
                    <title>{ TITLE }</title>
                </Helmet>
				<Header />
                <div className="container-fluid">
                <div className="row">
                <div className="col"><h1>รายการสั่งซื้อ</h1></div>
                    <div className="col">
                    <h2 className="title text-right"> ค้นหาด้วยวันที่ : <DatePicker selected={startdate} onSelect={this.selecthand} dateFormat="M/d/yyyy" onChange={this.handleChange}/></h2>               
                        </div>
                </div>
                    <div className="row" style={{margin: 1 + 'em'}}>
                    {this.props.orders && Array.isArray(this.props.orders)&&(
					this.showOrders()
                    )}
                    </div>
                    
                        <br/>
                        <br/>
                    <hr/>
                    <div className="row">

                        <div className="col">
                        <br/>
                        <br/>
                        <h2 className="text-secondary">ยอดขายรวมทั้งหมด : {total} THB</h2>
                        </div>
                        <div className="col">
                        <h1 className="text-success text-center "><img style={style} src ="http://www.digithaigroup.com/wp-engine/wp-content/uploads/2016/10/pizzadaybkk.png" alt="not" />   ยอดขายวันนี้ : {today} THB</h1>
                        
                        </div>
                        <div className="col">
                        <br/>
                        <br/>
                        <h3 className="text-right text-secondary">ยอดขายเมื่อวาน : {yeserday} THB</h3>
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