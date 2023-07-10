import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const handleLaptopReviewBtn = () => {
        navigate('/');
    }
    return (
        <div className='header container d-md-flex justify-content-between align-items-center mt-2'>
            <h2 onClick={handleLaptopReviewBtn} className='site-name p-2 rounded-1'>LAPTOP REVIEW</h2>
            <div>
                <NavLink className={({isActive}) => isActive ? 'active' : ''} to='/home'>HOME</NavLink>
                <NavLink className='' to='/reviews'>REVIEWS</NavLink>
                <NavLink to='/dashboard'>DASHBOARD</NavLink>
                <NavLink to='/blogs'>BLOGS</NavLink>
                <NavLink to='/about'>ABOUT</NavLink>
            </div>
        </div>
    );
};

export default Header;