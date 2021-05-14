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
                        กินอะไร กินอะไร กินอะไร ไปกิน Pizza Day
                    </p>
                    </h2>
                </div>
            <Footer company="Pizza Day" email="dcdc07411@gmail.com"  />
        </div>
    )
}

export default About;