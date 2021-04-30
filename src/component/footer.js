import React from "react";

const Footer = (props) => {
    const {company,email}=props;
    return <div className ="container-fulid">
            <hr/>
            <div className='text-center title text-uppercase'>
                <small>
                <span className="text-danger">Prowered by {company}</span> 
                <span className="text-muted">contact by email {email}</span>
                </small>
            </div>
               
           </div>
}
export default Footer;