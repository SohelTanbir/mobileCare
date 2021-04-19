import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ManageOrders = () => {
    const [orders, setOrders]= useState();

    fetch('https://mobilecare1.herokuapp.com/orders')
    .then(res => res.json())
    .then(data => setOrders(data));

    const DeleteOrder = id => {
        fetch(`https://mobilecare1.herokuapp.com/deleteOrder/${id}`, {
            method: 'DELETE',
        })
            .then(result => {
                if (result.ok) {
                    alert('Order Delete Successfully!!')
                }
            })
    }

    return (
        <div className="orderList">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10 p-4 bg-light">
        
                    <div className="listInfo d-flex justify-content-between">
                        <h5 className="text-muted px-2 mb-4">Manage orders</h5>
                        <h5 className="text-muted px-2 mb-4">{orders?.[0].name}</h5>
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
                                    <th>Action</th>
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
                                        <td>
                                        <button onClick={()=> DeleteOrder(order._id)} className="btn bg-danger">
                                                <FontAwesomeIcon style={{ color: 'white', fontSize: '20px' }} icon={faTrash} />
                                            </button>
                                        </td>
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

export default ManageOrders;