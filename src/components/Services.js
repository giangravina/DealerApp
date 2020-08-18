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
            info:"Lorem ipsum dolor sit amet, eu euismod interpretaris per, ei stet eros quo. "
        },
        {
            icon:<FaWrench/>,
            title:"Discounted Repairs",
            info:"Lorem ipsum dolor sit amet, eu euismod interpretaris per, ei stet eros quo. "
        },
        {
            icon:<FaShuttleVan/>,
            title:"Complementary Roadside Assistance",
            info:"Lorem ipsum dolor sit amet, eu euismod interpretaris per, ei stet eros quo. "
        },
        {
            icon:<FaShippingFast/>,
            title:"Free Shipping Across USA",
            info:"Lorem ipsum dolor sit amet, eu euismod interpretaris per, ei stet eros quo. "
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
