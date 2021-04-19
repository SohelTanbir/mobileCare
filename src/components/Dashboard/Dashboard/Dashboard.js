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
                    <div className="welcomeText text-center">
                        <h2>Welcome to MobileCare <br/></h2>
                        <h5>Online mobile repair center</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;