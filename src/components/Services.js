import React, { Component } from 'react';
import { FaCar, FaWrench, FaShuttleVan, FaShippingFast }
from "react-icons/fa";
import Title from '../components/Title';

export default class Services extends Component {
state={
    services:[
        {
            icon:<FaCar/>,
            title:"Fully Serviced Vehicles",
            info:"Have the confidence directly off the lot. All of our vehicles are fully-serviced inside and out. "
        },
        {
            icon:<FaWrench/>,
            title:"Discounted Repairs",
            info:"Enjoy our 10% discounted repairs performed by our train master technicians. "
        },
        {
            icon:<FaShuttleVan/>,
            title:"Complementary Roadside Assistance",
            info:"Car not running as it's supposed to? Give us a call for complimentary roadside assistance. "
        },
        {
            icon:<FaShippingFast/>,
            title:"Free Shipping Across USA",
            info:"We'll deliver your vehicle directly to your footsteps across all states. "
        }
    ]
};
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return ( <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    );
                    })}
                </div>
            </section>
        )
    }
}
