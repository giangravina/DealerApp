import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedCars from '../components/FeaturedCars';

export default function Home() {
    return (
    <>
    <Hero>
        <Banner title="luxuious rooms" subtitle="deluxe rooms starting at $299">
            <Link to='Cars' className='btn-primary'>Our rooms
            </Link>
        </Banner>
    </Hero>
    <Services />
    <FeaturedCars />
    </>
    );
}
