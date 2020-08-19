import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import CarsContainer from '../components/CarsContainer';

const Cars = () => {
  return (
  <>
  <Hero hero="roomsHero">
  <Banner title="Our Cars">
    <Link to='/' className='btn-primary'>return home
    </Link>
  </Banner>
  </Hero>
  <CarsContainer/>
  </>
);
};

export default Cars;
