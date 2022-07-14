import React from 'react';
import LanguageLogos from '../components/LanguageLogos';
import img1 from '../assets/images/PHP_Logo.png'
import img2 from '../assets/images/javascript-logo.png'
import img3 from '../assets/images/html.png'
import img4 from '../assets/images/CSS3_logo.svg.png'
import img5 from '../assets/images/flutter.webp'

const images = [
    img1, img2, img3, img4, img5
]

const OurDevTech = () => {
    return (
        <div className='my-5'>
            <h2 className='text-center my-5 fw-bold'>Our Dev Technology</h2><br /><br />
            <div className='d-flex justify-content-between'>
                <div className='language-text'><h3>Programming Languages</h3></div>
                <div className='language-text'><h3>Frameworks</h3></div>
                <div className='language-text'><h3>Databases</h3></div>
                <div className='language-text'><h3>Mobile Platforms</h3></div>
            </div>
            <LanguageLogos images={images} />
        </div>
    );
};

export default OurDevTech;