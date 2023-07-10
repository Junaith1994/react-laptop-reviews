import React from 'react';

const Review = ({ review }) => {
    const { name, Review, img, rating } = review;
    return (
        <div className='col-md-4 col-12 mt-3 border border-secondary-subtle rounded-5 shadow'>
            <img className='img-fluid w-50 rounded-2 mt-2' src={img} alt="" />
            <h3>{name}</h3>
            <p><span className='fw-semibold'>Review:</span> {Review}</p>
            <p><span className='fw-semibold'>Rating:</span> {rating}</p>
        </div>
    );
};

export default Review;