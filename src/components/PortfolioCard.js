import React from 'react';

const PortfolioCard = ({ photo, text }) => {
    return (
        <div className='col-md-4'>
            <div>
                <img src={photo} alt="" />
            </div>
            <h3 className='text-center mt-4'>{text}</h3>
        </div>
    );
};

export default PortfolioCard;