import React, { useState } from 'react';
import './Service.css'
import ServiceCard from './ServiceCard/ServiceCard';

const Service = () => {
    const [serviceData, setServiceData] = useState();

    fetch('https://mobilecare1.herokuapp.com/services')
    .then(res => res.json())
    .then(data => setServiceData(data))

    return (
        <div className="container-fluid" id="service">
            <div className="serviceTitle">
                <h3>Our Service</h3>
            </div>
            {serviceData?'':<div className="spinner text-center">
                    <div className="spinner-border text-primary text-center">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>}
            <div className="row">
                {
                    serviceData?.map(service => <ServiceCard service={service}/>)
                }
            </div>
        </div>
    );
};

export default Service;