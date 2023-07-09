import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header container d-flex justify-content-between align-items-center mt-2'>
            <h2 className='site-name p-2 rounded-1'>LAPTOP REVIEW</h2>
            <div>
                <Link to='/home'>HOME</Link>
                <Link to='/reviews'>REVIEWS</Link>
                <Link to='/dashboard'>DASHBOARD</Link>
                <Link to='/blogs'>BLOGS</Link>
                <Link to='/about'>ABOUT</Link>
            </div>
        </div>
    );
};

export default Header;