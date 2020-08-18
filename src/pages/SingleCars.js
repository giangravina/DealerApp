import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';

export default class SingleCars extends Component {
    render() {
        return (
            <div>
                Hello from Single Cars Page
            </div>
        )
    }
}
