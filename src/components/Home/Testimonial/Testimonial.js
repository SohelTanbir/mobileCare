import React, { useState } from 'react';
import img1 from '../../../images/testimonial/testimonial-1.jpg'
import img2 from '../../../images/testimonial/testimonial-2.jpg'
import img3 from '../../../images/testimonial/testimonial-3.jpg'
import './Testimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';



const Testimonial = () => {
    const [reviews, setReview] = useState();
    fetch('https://mobilecare1.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReview(data));

    return (
        <div className="testimonial" id="testimonial">
            <div className="serviceTitle">
                <h3>Testimonial</h3>
                {reviews?'':<div className="spinner text-center mt-5">
                    <div className="spinner-border text-primary text-center">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>}
            </div>
            <div className="container">
                <div className="row">
                    {
                        reviews?.map(review =>
                            <div className="col-md-4 text-center mb-4">
                                <div className="card  p-2" style={{ minHeight: '322px' }}>
                                    <div className="card-body">
                                        <img className="testiImg" src={review.img} alt="images" />
                                        <h5 className="mt-3">{review.name}</h5>
                                        <div className="rating mb-3">
                                            <FontAwesomeIcon icon={faStar} style={{ fontSize: '14px' }} className="text-warning" />
                                            <FontAwesomeIcon icon={faStar} style={{ fontSize: '14px' }} className="text-warning ms-1" />
                                            <FontAwesomeIcon icon={faStar} style={{ fontSize: '14px' }} className="text-warning ms-1" />
                                            <FontAwesomeIcon icon={faStar} style={{ fontSize: '14px' }} className="text-warning ms-1" />
                                            <FontAwesomeIcon icon={faStar} style={{ fontSize: '14px' }} className="text-warning ms-1" />
                                        </div>
                                        <p>
                                            <FontAwesomeIcon icon={faQuoteLeft} className="text-info mr-2" />&nbsp;&nbsp;{review.description}&nbsp;&nbsp;
                                <FontAwesomeIcon icon={faQuoteRight} className="text-info mr-2" />
                                        </p>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;