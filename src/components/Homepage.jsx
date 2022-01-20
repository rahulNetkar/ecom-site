import React from 'react';
import '../styles/homepage.styles.scss'

const Homepage = () => {
    return (
        <div className='homepage' >
            <div className='directory-menu' >
                <div className='menu-item'>
                    <div className='content' >
                        <div className='title' >Hats</div>
                        <span className='sub-title' >Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content' >
                        <div className='title' >Shoes</div>
                        <span className='sub-title' >Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content' >
                        <div className='title' >Jackets</div>
                        <span className='sub-title' >Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content' >
                        <div className='title' >Men</div>
                        <span className='sub-title' >Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content' >
                        <div className='title' >Women</div>
                        <span className='sub-title' >Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
