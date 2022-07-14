import React from 'react';
import PricingCard from './PricingCard';

const Pricing = () => {
    return (
        <div className='pricing' id='premium'>
            <div className='text-center'>
                <h2 className='fw-bold'>Pricing Package Choose Your Plan</h2>
                <p className='banner-text my-5'>We believe that great design should not be out of reach, so our services <br /> are less than half the price of a full-time designer.</p>
                <div>
                    <button className='btn btn-light fs-5'>Monthly</button>
                    <button className='btn btn-primary ms-3 fs-5'>Yearly</button>
                </div>
            </div>
            <div className='mt-5'>
                <div className='row'>
                    <PricingCard bgColor="pricing-bg-light" />
                    <PricingCard bgColor="pricing-bg-blue text-white" />
                    <PricingCard bgColor="pricing-bg-light" />
                </div>
            </div>
        </div>
    );
};

export default Pricing;