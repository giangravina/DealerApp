import React from 'react';
import CarFilter from './CarFilter';
import CarList from './CarList';
import {CarConsumer} from '../context';
import Loading from './Loading';

export default function CarsContainer() {
    return (
        <div>
            hello from cars container
            <CarFilter />
            <CarList />
        </div>
    )
}
