import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [orders, setOrders]= useState();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);


    fetch('https://mobilecare1.herokuapp.com/orders',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email:loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => setOrders(data));

    return (
        <div className="orderList">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10 p-4 bg-light">
        
                    <div className="listInfo d-flex justify-content-between">
                        <h5 className="text-muted px-2 mb-4">Order List</h5>
                        <h5 className="text-muted px-2 mb-4">Admin</h5>
                    </div>
                    {orders?'':<div className="spinner text-center">
                        <div className="spinner-border text-primary text-center">
                                <span className="sr-only">Loading...</span>
                            </div>
                    </div>}
                    <div className="orders bg-white p-4">
                        <table className="table text-muted mb-3 p-p">
                            <thead className="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Service</th>
                                    <th>Pay with</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            {
                                orders?.map((order, index) =><tbody>
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{order?.name}</td>
                                        <td>{order?.email}</td>
                                        <td>{order?.title}</td>
                                        <td>Credit card</td>
                                        <td>Pending</td>
                                    </tr>
                                </tbody>)
                            }
                           
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;