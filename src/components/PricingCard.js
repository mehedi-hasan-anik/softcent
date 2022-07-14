import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const PricingCard = ({ bgColor }) => {
    return (
        <div className={`col-md-3 mx-auto pricing-card ${bgColor} border`}>
            <div className='d-flex align-items-center justify-content-between px-4 py-4'>
                <h2>Marketing</h2>
                <span>$899/ mo</span>
            </div>
            <div>
                <ul className='pricing-container'>
                    <li><FontAwesomeIcon icon={faCheck} className='me-2' />Dedicated Designer</li>
                    <li><FontAwesomeIcon icon={faCheck} className='me-2' />Unlimited requests</li>
                    <li><FontAwesomeIcon icon={faCheck} className='me-2' />Unlimited brand profiles</li>
                    <li><FontAwesomeIcon icon={faCheck} className='me-2' />Native source files</li>
                    <li><FontAwesomeIcon icon={faCheck} className='me-2' />Real-time collaboration</li>
                    <li><FontAwesomeIcon icon={faCheck} className='me-2' />Banner Ads</li>
                    <li><FontAwesomeIcon icon={faCheck} className='me-2' />Clothing &amp; Merchandise </li>
                    <li><FontAwesomeIcon icon={faCheck} className='me-2' />Packaging &amp; Label</li>
                    <li><FontAwesomeIcon icon={faCheck} className='me-2' />Logo &amp; Brand Guide</li>
                </ul>
            </div>
            <div className='text-center'>
                <button className='btn btn-warning px-5 text-white'>$899 / mo</button>
            </div>
        </div>
    );
};

export default PricingCard;