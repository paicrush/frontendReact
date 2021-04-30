import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";

const About = () => {
    return (
        <div>
            <Header />
                <div className="container col-md-5">
                    <h3>สวัสดีครับ </h3>
                    <p className="title text-justify mt-4 mb-4">
                        เราคือร้านอาหาร ที่เน้นอาหารอร่อยเท่านั้นจริงๆ ไม่ให้ความสำคัญกับสุขภาพเท่าไร 
                        เพราะสุขภาพที่ดีนั้นคุณสามารถสร้างได้ด้วยการ "ออกกำลังกาย"
                        ดังนั้นกินของอร่อยก่อน แล้วคุณจะมีกำลังไปทำในสิ่งที่คุณรัก ครับผม
                    </p>
                    <h4 className="text-success">from Jakkrapong cafe</h4>
                </div>
            <Footer company="Jakkrapong" email="dcdc07411@gmail.com"  />
        </div>
    )
}

export default About;