import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";

const About = () => {
    return (
        <div>
            <Header />
                <div className="container col-md-8">
                    <h2>
                    <p className="title text-center mt-4 mb43">
                    Pizza Day ใช้วัตถุดิบที่สดใหม่และส่งเสริมสุขภาพเท่านั้น จึงรับประกันได้ว่าพิซซ่านั้นมีความกรอบและการผสมผสานรสชาติได้อย่างลงตัว
                    </p>
                    <p className="title text-center mt-4 mb43">
                    โดยวัตถุดิบหลักที่สำคัญ คือชีสคุณภาพดีเยี่ยมที่ผลิตจากนมสด 100%
                    </p>
                    </h2>
                </div>
            <Footer company="Pizza Day" email="dcdc07411@gmail.com"  />
        </div>
    )
}

export default About;