import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="dashboard w-100">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10 text-center bg-light">
                    <div className="container mt-5">
                        <div className="row text-white ms-auto">
                            <div className="col-md-3 col-sm-12 bg-primary p-4">
                                <h6>Total Service</h6>
                                <h6>10</h6>
                            </div>
                            <div className="col-md-3 col-sm-12 bg-success ms-3 p-4">
                                <h6>Total Orders</h6>
                                <h6>15</h6>
                            </div>
                            <div className="col-md-3 col-sm-12 bg-warning ms-3 p-4">
                            <h6>Total Review</h6>
                                <h6>5</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;