import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext, CarContext} from '../context';
import StyledHero from '../components/StyledHero';
//access param via react router

export default class SingleCars extends Component {
   constructor(props){
       super(props);
    // console.log(this.props);
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        };
   }
   static contextType = CarContext;
//    componentDidMount(){}
//    }

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        console.log(room);
        if(!room){
            return <div className="error">
                <h3>no such car could be found...</h3>
                <Link to="/cars" className="btn-primary">
                    back to gallery
                </Link>
            </div>
        }
        const {
            name,
            description,
            horsepower,
            cylinders,
            price,
            extras,
            warranty,
            manual,
            images
        } = room;
        return (
            <>
            <StyledHero img={images[0] || this.state.defaultBcg}>
                <Banner title={`${name}`}>
                    <Link to='/cars' className="btn-primary">Return to gallery</Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {images.map((item,index)=>{
                        return <img key={index} src={item} alt={name}/>
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price : ${price}</h6>
                        <h6>Cylinders : {cylinders}</h6>
                        <h6>Horsepower : {horsepower}</h6>
                        <h6>{manual?"manual transmission":"automatic transmission"}</h6>
                        <h6>{warranty?"under manufacturer warranty":"extended warranty available"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item,index)=>{
                    return <li key={index}>- {item}</li>
                })}
                </ul>
            </section>
            </>
        );
     }
}
