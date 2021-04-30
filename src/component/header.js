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
                height:80,
        }
        return (
            <div className="container-fulid">
                <div className="row">
                    <div className="col-md-8 text-left mt-1">
                        <h1 className="text-success"><img style={style} src ="/images/logo/logo.png" alt="not" />jakkrapong cafe </h1>
                    </div>
                    <div className="col-md-4 text-right mt-4">{this.state.date.toLocaleTimeString()}
                        <ul className="list-inline">
                            <li className="list-inline-item title text-success "><Link to="/" className="text-success">หน้าหลัก</Link></li>
                            <li className="list-inline-item title text-success ">|</li>
                            <li className="list-inline-item title text-success "><Link to="/order" className="text-success">รายการสั่งซื้อ</Link></li>
                            <li className="list-inline-item title text-success ">|</li>
                            <li className="list-inline-item title text-success "><Link to="/product"className="text-success">สินค้า</Link></li>
                            <li className="list-inline-item title text-success ">|</li>
                            <li className="list-inline-item title text-success "><Link to="/about"className="text-success">เกี่ยวกับเรา</Link></li>
                        </ul>
                    </div>    
                </div>
              
                <hr/>
                
            </div>
            
        );
    }
}
export default Header;