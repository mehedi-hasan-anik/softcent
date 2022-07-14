import React from 'react';

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='banner'>
                <div className='banner-left'>
                    <h2 className='banner-title'>Software services for startups without limits..</h2>
                    <p className='banner-text'>We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.</p>
                </div>
                <div className='banner-right'>

                </div>
            </div>
            <div className='video-container'>
                <iframe width="" height="" src="https://www.youtube.com/embed/J-7My6CXWP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default Hero;