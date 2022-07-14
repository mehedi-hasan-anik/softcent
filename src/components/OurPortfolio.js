import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import PortfolioCard from './PortfolioCard';
import img from '../assets/images/b1efad66831ef7e238f9979dd66af8a4.png';

const OurPortfolio = () => {
    return (
        <div className='my-5 bg-white our-portfolio-container' id='blog'>
            <div className='our-portfolio'>
                <h2 className='fw-bold'>Our Portfolio</h2>
                <div>
                    <span className='bg-light'> <FontAwesomeIcon icon={faArrowLeft} className='me-2' /></span>
                    <span className='bg-primary'>  <FontAwesomeIcon icon={faArrowRight} className='me-2' /></span>
                </div>
            </div>
            <br /><br />
            <div className='row'>
                <PortfolioCard photo={img} text="Color System Design" />
                <PortfolioCard photo={img} text="Logo Design" />
                <PortfolioCard photo={img} text="UI/UX Design" />
            </div>
            <div className='text-center'>
                <button className='mt-5 btn btn-primary px-5'>See All Protfolio</button>
            </div>
        </div>
    );
};

export default OurPortfolio;