import React from 'react';

const LanguageLogos = ({ images }) => {
    return (
        <div className='d-flex justify-content-around my-5'>
            {images.map(img =>
                <div className='language-logo-wrapper'><img src={img} alt="" /></div>
            )}
        </div>
    );
};

export default LanguageLogos;