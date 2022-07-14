import React from 'react';
import img1 from '../assets/images/Figma_square-512.webp'
import img2 from '../assets/images/Adobe_InDesign_CC_icon.svg.png'
import img3 from '../assets/images/Adobe_XD_CC_icon.svg.png'
import img4 from '../assets/images/Adobe_Photoshop_CC_icon.svg.png'
import img5 from '../assets/images/Adobe_Illustrator_CC_icon.svg.png'
import LanguageLogos from './LanguageLogos';

const images = [
    img1, img2, img3, img4, img5
]

const OurDesignTech = () => {
    return (
        <div className='design-technology'>
            <h2 className='text-center my-5 fw-bold'>Our Design Technology</h2><br />
            <LanguageLogos images={images} />
        </div>
    );
};

export default OurDesignTech;