import React, {Component} from "react";

class Calculator extends Component{
    constructor(props){
        super(props);
    }
    showOrder(orders){
        if(orders.length==0){
            return( <li className="text-right text-success title">ไม่มีสินค้า</li>)

        }else{
            return orders.map(order =>{
                return (
                    <div className="row text-success title">
                        <div className="col-6">
                        {order.product.productName}
                        </div>
                        <div className="col-1 text-secondary float-center">
                            x
                        </div>
                        <div className="col-1">
                            <p className="float-right">{order.quantity}</p>
                        </div>
                        <div className="col-2 justify-content-right">
                            <p className="float-right">{order.quantity * order.product.unitPrice}</p>
                        </div>
                        <div className="col-2 justify-content-right">
                            <button className="btn btn-danger float-right btn-sm" onClick={() =>this.props.delOrder(order.product)} >x</button>
                        </div>
                    </div>
                    // <li className="text-right text-success title">
                    //     {order.product.productName} x {order.quantity} = {order.quantity * order.product.unitPrice}
                    //     <button className="btn danger btn-light btn-sm" onClick={() =>this.props.delOrder(order.product)} >x</button>
                    // </li>
                )
            })
            
        }
    }
    render(){
        const style ={
            height:50,
        }
        const {totalPrice,orders}=this.props;
        return(
            <div>
                <h1 className="text-success"><img style={style} src ="http://www.digithaigroup.com/wp-engine/wp-content/uploads/2016/10/pizzadaybkk.png" alt="not" />     แคชเชียร์</h1>
                <hr/>
                <h1 className="text-right text-success">{totalPrice} THB</h1>
                <hr/>
                <ul className="list-unstyled">
                    {this.showOrder(orders)}
                </ul>
                <hr/>
                <button className="btn btn-block btn-danger title" onClick={() => this.props.onConfirmOrder()}>ยืนยัน</button>
                <button  className="btn btn-block btn-secondary title" onClick={() => this.props.onCancelOrder()}>ยกเลิก</button>
            </div>
        );
    }
}
export default Calculator;