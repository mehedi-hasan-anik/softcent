import React from 'react';
import logo from '../assets/images/logo.png'

const Footer = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-md-3'>
                    <img style={{ width: '200px' }} src={logo} alt="" />
                    <p>Get a fully stacked design team that will give you accessible design, exhaustive research, and an outstanding experience.</p>
                    <p className='fw-bold'>Email: info@softcent.eu</p>
                    <p className='fw-bold'>Phone: +(372) 57836500</p>
                </div>
                <div className='col-md-3 ps-5' style={{ marginTop: '100px' }}>
                    <h4 className='fw-bold'>Company</h4>
                    <h5>About us</h5>
                    <h5>Our portfolio</h5>
                    <h5>Our Product</h5>
                    <h5>Our Team</h5>
                    <h5>Our Pricing</h5>
                    <h5>Testimonials</h5>
                    <h5>Contact Us</h5>
                </div>
                <div className='col-md-3 ps-5' style={{ marginTop: '100px' }}>
                    <h4 className='fw-bold'>Our Service</h4>

                    <h5>Marketing</h5>
                    <h5>UI/UX Design</h5>
                    <h5>Graphic Design (Branding)</h5>
                    <h5>Development</h5>
                    <h5>New Products</h5>
                </div>
                <div className='col-md-3 ps-5' style={{ marginTop: '100px' }}>
                    <h4 className='fw-bold'>Supports</h4>
                    <h5>FAQs</h5>
                    <h5>Support Policy</h5>
                    <h5>Privacy Policy</h5>
                    <h5>Trams of Service</h5>
                    <h5>Refund Policy</h5>
                </div>
            </div>
            <hr />
            <p className='text-center'>© 2022, Softcent EU, A European IT company</p>
        </div>
    );
};

export default Footer;