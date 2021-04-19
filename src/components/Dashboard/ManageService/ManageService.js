import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../../images/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ManageService = () => {
    const [serviceData, setServiceData] = useState();

    fetch('https://mobilecare1.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServiceData(data));

    const handleDelete = id => {
        fetch(`https://mobilecare1.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(result => {
                if (result) {
                    alert('Delete Successfully!!')
                }
            })
    }


    return (
        <div className="manageService">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10 p-4 bg-light">

                    {serviceData ? '' : <div className="spinner text-center">
                        <div className="spinner-border text-primary text-center">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>}


                    <div className="manage">
                        <h5 className="text-muted mb-4">Manage your service</h5>
                        <table className="table text-muted  p-2">
                            <thead>
                                <tr>
                                    <th>SI</th>
                                    <th>Service Title</th>
                                    <th>Price</th>
                                    <th>Photo</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {
                                serviceData?.map((service, index) => <tbody>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{service.title}</td>
                                        <td>${service.price}</td>
                                        <td>
                                            <img style={{ height: '60px' }} src={service.imgurl} alt="img" />
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(service._id)} className="btn bg-danger">
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

export default ManageService;