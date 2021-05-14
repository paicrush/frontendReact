import React, { Component } from "react";
import { Link } from "react-router-dom"

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {date : new Date()};
        setInterval(() => this.tick(),1000);
    }
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(),1000);
    }
    componentDidUpdate(){

    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({date : new Date()});
    }

    render(){
        const style ={
            height:125,
        }
        
        return (
            <div className="container-fulid headerbgc" >
                <div className="row">
                    <div className="col-md-8 text-left mt-2">
                        <h1 className="text-light ml-2"><img style={style} src ="http://www.digithaigroup.com/wp-engine/wp-content/uploads/2016/10/pizzadaybkk.png" alt="not" /> Pizza Day </h1>
                    </div>
                    <div className="col-md-4 text-right mt-5">
                        <h5 className="text-light mr-2">{this.state.date.toLocaleTimeString()}</h5>
                    <li className="list-inline-item title text-success "> </li>
                        <ul className="list-inline text-light">
                            <li className="list-inline-item title ">|</li>
                            <li className="list-inline-item title "><Link to="/" className="text-light">หน้าหลัก</Link></li>
                            <li className="list-inline-item title ">|</li>
                            <li className="list-inline-item title "><Link to="/order" className="text-light">รายการสั่งซื้อ</Link></li>
                            <li className="list-inline-item title ">|</li>
                            <li className="list-inline-item title "><Link to="/product"className="text-light">สินค้า</Link></li>
                            <li className="list-inline-item title ">|</li>
                            <li className="list-inline-item title "><Link to="/about"className="text-light">เกี่ยวกับเรา</Link></li>
                            <li className="list-inline-item title ">|</li>
                            <li className="list-inline-item title "> </li>
                        </ul>
                    </div>    
                </div>    
                <hr/>        
            </div>
            
        );
    }
}
export default Header;