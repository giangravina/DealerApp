import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedCars from '../components/FeaturedCars';
import Button from '../components/StyledHero';
export default function Home() {
    return (
    <>
    <Hero>
        <Banner title="Luxury Cars for Sale" subtitle="Vehicles starting at $15,000">
            <Link to='Cars' className='btn-primary'>Our vehicles
            </Link>
        </Banner>
    </Hero>
    <Services />
    <FeaturedCars />
    </>
    );
}
