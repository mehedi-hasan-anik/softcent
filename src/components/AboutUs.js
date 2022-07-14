import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import img from '../assets/images/a48fec6b832f1aed_org.jpg'

const AboutUs = () => {
    return (
        <div className='hero' id='about'>
            <h2 className='text-center mb-5 fw-bold'>Talk About Us!</h2>
            <div className='banner'>
                <div className='banner-left'>
                    <div className='blockquote'>
                        <span className='blockquote-left'><FontAwesomeIcon icon={faQuoteLeft} /></span>
                        <blockquote className='about-us-text' cite="http://www.worldwildlife.org/who/index.html">
                            We had a bit of a slow and bumpy start, but after changing the designer on their side everything went in a very good direction. The designers were talented and easy to work with.
                        </blockquote>
                        <span className='blockquote-right'><FontAwesomeIcon icon={faQuoteRight} /></span>
                    </div>
                </div>
                <div className='banner-right'>
                    <div className='about-us-img-wrapper'><img className='border' src={img} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;