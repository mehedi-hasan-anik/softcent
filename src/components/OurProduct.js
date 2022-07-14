import React from 'react';
import img from '../assets/images/b1efad66831ef7e238f9979dd66af8a4.png';

const OurProduct = () => {
    return (
        <div id='work'><br /><br /><br /><br /><br />
            <h2 className='fw-bold'>Our Products</h2>
            <div className='d-flex justify-content-between align-items-center'>
                <p className='banner-text'>We believe that great design should not be out of reach, so our services <br /> are less than half the price of a full-time designer.</p>
                <button className='btn btn-primary text-white see-more-btn'>See More</button>
            </div>
            <br /><br />
            <div className='row'>
                <div className='col-md-5 d-flex flex-column align-items-start justify-content-center bg-white p-5'>
                    <h2>SwipeXYZ Product</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className='btn btn-info'>View product</button>
                </div>
                <div className='col-md-7'>
                    <img className='w-75 ms-2' src={img} alt="" />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-7'>
                    <img className='w-75' src={img} alt="" />
                </div>
                <div className='col-md-5 d-flex flex-column align-items-start justify-content-center bg-white p-5'>
                    <h2>Cashback Product</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className='btn btn-info'>View product</button>
                </div>
            </div>
        </div>
    );
};

export default OurProduct;