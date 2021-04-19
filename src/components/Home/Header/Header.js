import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.png';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                       <div className="logo">
                            <Link to="/home"><img src={logo} alt="logo"/></Link>
                       </div>
                    </div>
                    <div className="col-md-10">
                       <div className="menu">
                            <Navbar/>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;