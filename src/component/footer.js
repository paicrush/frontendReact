import React from "react";

const Footer = (props) => {
    const {company,email}=props;
    return <div className ="container-fulid footerbgc">
            <hr/>
            <div className='text-center title text-uppercase'>
                <small>
                <span className="text-light">Prowered by {company}</span> 
                <br/>
                <span className="text-light">contact by email {email}</span>
                </small>
            </div>
            <hr/>   
           </div>
}
export default Footer;