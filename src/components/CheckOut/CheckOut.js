import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import { userContext } from '../../App';

const CheckOut = () => {
    const [selectService, setSelectService] = useState();
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const { id } = useParams();

    fetch(`https://mobilecare1.herokuapp.com/checkout/${id}`)
    .then(res => res.json())
    .then(data => setSelectService(data[0]))

    const handleOrder = e => {
        const orders = {...selectService, name:loggedInUser.name, email:loggedInUser.email }
        const url = `https://mobilecare1.herokuapp.com/order`;
       fetch(url, {
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify(orders)
       })
       .then(result =>{
           if(result.ok){
               alert('Order placed Successful!');
           }
       })
       e.preventDefault();
    }

    return (
        <div className="checkout">
                <div className="row">
                   <div className="col-md-2">
                       <Sidebar/>
                   </div>
                   <div className="col-md-6 pt-5">
                        <form onSubmit={handleOrder}>
                            <div className="form-group">
                                <label htmlFor="title">Service Title</label>
                                <input className="form-control" type="text" value={selectService?.title} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input className="form-control" type="text" value={'$'+ selectService?.price} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Description:</label>
                                <textarea className="form-control" rows="5" value={selectService?.description}></textarea>
                            </div>
                            <button onClick={handleOrder} className="btn btn-success mt-4 floatRight">Order placed</button>
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default CheckOut;