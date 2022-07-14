import React from 'react';
import img from '../assets/images/computer-logos-8-2.png';

const WhatWeDo = () => {
    return (
        <div className='what-we-do'>
            <h2 className='fw-bold'>What We Do</h2>
            <div className='row my-5'>
                <div className='col-md-4 service-card'>
                    <div className='d-flex align-items-center mb-3'>
                        <img src={img} alt="" /><h4>Branding</h4>
                    </div>
                    <ul>
                        <li>Brand Strategy</li>
                        <li>Social media</li>
                        <li>Marketing Assets</li>
                        <li>Presentations</li>
                        <li>Build MVP Version</li>
                        <li>Pitch Deck</li>
                    </ul>
                </div>
                <div className='col-md-4 service-card'>
                    <div className='d-flex align-items-center mb-3'>
                        <img src={img} alt="" /><h4>UI/UX Design</h4>
                    </div>
                    <ul>
                        <li>User Interface</li>
                        <li>User Experience</li>
                        <li>Design System</li>
                        <li>Wireframe</li>
                        <li>Prototype</li>
                        <li>Website &amp; Mobile App</li>
                        <li>IOS + Android</li>
                    </ul>
                </div>
                <div className='col-md-4 service-card'>
                    <div className='d-flex align-items-center mb-3'>
                        <img src={img} alt="" /><h4>Development</h4>
                    </div>
                    <ul>
                        <li>Front End (HTML, CSS, React)</li>
                        <li>Backend (Node.js, MongoDB)</li>
                        <li>iOS (Swift)</li>
                        <li>Android (Kotlin, Flutter)</li>
                        <li>Blockchain Development (NFT)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;