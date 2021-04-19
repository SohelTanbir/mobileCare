import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [review, setReview] =useState()

    const handleBlur = e =>{
        const newReview = {...review,name:loggedInUser.name, email:loggedInUser.email, img:loggedInUser.img};
        newReview[e.target.name] = e.target.value;
        setReview(newReview)
    }

    const handleReview = e =>{
        
        fetch('http://localhost:5000/review', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(review)
        })
        .then(result =>{
            if(result.ok){
                alert('Thanks for valuable Review!')
            }
        })

       e.preventDefault();
    }
    return (
        <div className="review">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-9 p-4">
                    <h4>Add Review </h4>
                    <form onSubmit={handleReview}>
                        <div className="form-group">
                            <input type="text" className="form-control mb-3" value={loggedInUser.name}/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control mb-3" value={loggedInUser.email}/>
                        </div>
                        <div className="form-group">
                         <textarea name="description" onBlur={handleBlur}  rows="5" className="form-control mb-3" placeholder="Write Review..."></textarea>
                        </div>
                        <button onClick={handleReview} className="btn btn-warning">Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;