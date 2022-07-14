import React from 'react';
import logo1 from '../assets/images/UBS_logo.png';
import logo2 from '../assets/images/HSBC_logo.png';
import logo3 from '../assets/images/gameloft.png';
import logo4 from '../assets/images/appsero.png';

const OurCustomer = () => {
    return (
        <div className='our-customer'>
            <div>
                <h2 className='text-center fw-bold mb-5 fs-bold'>Our Customers</h2><br />
                <div className='customer-logo-container mt-5'>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurCustomer;