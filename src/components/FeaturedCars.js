import React, { Component } from 'react';
import {CarContext} from '../context';
import Loading from './Loading';
import Car from './Car';
import Title from './Title';

export default class FeaturedRooms extends Component {
    static contextType = CarContext;
    render() {
        let { loading, featuredRooms: rooms } = 
        this.context;
        rooms = rooms.map(room => {
            return <Car key={room.id} room={room}/>
        })


        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading?<Loading/>:rooms}
                </div>

            </section>
        )
    }
}
