import React from 'react';
import './menu-item.style.scss'

const MenuItem = ({ title, imageURL }) => {
    return (
        <div style={{
            backgroundImage: `url(${imageURL})`,
        }} className='menu-item'>
            <div className='content' >
                <div className='title' > {title} </div>
                <span className='sub-title' >Shop Now</span>
            </div>
        </div>
    );
};

export default MenuItem;
