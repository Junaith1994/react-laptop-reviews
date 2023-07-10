import React from 'react';
import './Home.css';
import { Button } from 'react-bootstrap';
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';
import useReviewsData from '../../hooks/useReviewsData';

const Home = () => {
    const [reviewsData] = useReviewsData([]); // Using custom hook
    const navigate = useNavigate();

    // Function to navigate Reviews page
    const handleSeeAllReviewsBtn = () => {
        navigate('/reviews');
    }

    return (
        <div className='container mt-5 banner-container'>
            <div className='d-md-flex text-center'>
                <div className='w-md-50 w-100 me-3'>
                    <h2 className='fw-bolder fs-1 line-1'>Get The Best One</h2>
                    <h2 className='fw-bolder fs-1 line-2'>Your Next Laptop</h2>
                    <p>Choose your dream laptop by analyzing hundreds of user's review. Choose the best one according to your needs. We are here to asist you so that you can get the suitable laptop for you.</p>
                    <Button className='fw-semibold mb-3' variant="outline-info">See How To</Button>
                </div>
                <div className='w-md-50 w-100'>
                    <img className='img-fluid rounded-4' src="/images/Laptop-dell.jpg" alt="Laptop" />
                </div>
            </div>
            {/* Review Section */}
            <div className='my-5'>
                <h2 className='fs-3 fw-bold'>Customer Reviews</h2>
                <div className='row reviews-container'>
                    {
                        reviewsData.slice(0, 3).map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <Button onClick={handleSeeAllReviewsBtn} className='mt-4' variant="primary">See All Reviews</Button>
            </div>
        </div>
    );
};

export default Home;