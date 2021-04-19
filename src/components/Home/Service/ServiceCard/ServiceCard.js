import React from 'react';
import { useHistory } from 'react-router';
import './ServiceCard.css'

const ServiceCard = ({service}) => {
    const history = useHistory();

    const handlePlaceService = id =>{
       history.push(`/checkout/${id}`)
       
    }
    return (
        <div className="col-lg-3 col-sm-6 text-center mb-4 ">
            <div className="card" onClick={()=> handlePlaceService(service._id)}>
                <div className="card-bod imageContainer">
                    <img style={{height:'200px', width:'100%'}} src={service.imgurl} alt=""/>
                   <h5 className="py-3 mb-3">{service.title} (${service.price})</h5>
                   <button className="btn btn-success btn-sm mb-3">Perches now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;