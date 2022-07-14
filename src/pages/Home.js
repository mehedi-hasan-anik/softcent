import React from 'react';
import AboutUs from '../components/AboutUs';
import Hero from '../components/Hero';
import OurCustomer from '../components/OurCustomer';
import OurDesignTech from '../components/OurDesignTech';
import OurDevTech from '../components/OurDevTech';
import OurPortfolio from '../components/OurPortfolio';
import OurProduct from '../components/OurProduct';
import Pricing from '../components/Pricing';
import WhatWeDo from '../components/WhatWeDo';
import WorkFlow from '../components/WorkFlow';
import Footer from '../layouts/Footer';

const Home = () => {
    return (
        <div className='px-4'>
            <Hero />
            <OurCustomer />
            <WhatWeDo />
            <OurProduct />
            <Pricing />
            <AboutUs />
            <OurPortfolio />
            <OurDevTech />
            <OurDesignTech />
            <WorkFlow />
            <Footer />
            <br />
            <br />
        </div>
    );
};

export default Home;