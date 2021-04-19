import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div className="bannerText">
                            <h1>Welcome to Mobile Care</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, at! Eveniet repudiandae velit enim sapiente.</p>
                            <button className="btn btn-primary mr-2">Get Service</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;