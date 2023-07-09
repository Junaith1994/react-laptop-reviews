import React from 'react';
import Review from '../Review/Review';
import useReviewsData from '../../hooks/useReviewsData';

const Reviews = () => {
    // Using custom hook
    const [reviewsData] = useReviewsData([]);

    return (
        <div className='container my-4'>
            <h1 className=''>All Reviews</h1>
            <div className='row allReviews-container'>
                {
                    reviewsData.map(review => <Review 
                    key={review.id}
                    review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;