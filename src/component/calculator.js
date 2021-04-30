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
                    <li className="text-right text-success title">
                        {order.product.productName} x {order.quantity} ={order.quantity * order.product.unitPrice}
                        <button className="btn btn-light btn-sm" onClick={() =>this.props.delOrder(order.product)} >x</button>
                    </li>
                )
            })
        }
    }
    render(){
        const {totalPrice,orders}=this.props;
        return(
            <div>
                <h1 className="text-right">{totalPrice}</h1>
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