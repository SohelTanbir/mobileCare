import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../../images/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faEdit, faHome, faList, faPen, faPlusSquare, faStar, faUserCog, faUserPlus, } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setAdmin] = useState(false);
    fetch('https://mobilecare1.herokuapp.com/isAdmin', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: loggedInUser.email })
    })
        .then(res => res.json())
        .then(data => setAdmin(data));
    return (
        <div className="sidebar pr-0">
            <img className="mb-2" style={{ height: '50px' }} src={logo} alt="logo" />
            <ul>
                <li>
                    <Link to="/home">
                        <FontAwesomeIcon icon={faHome} />  Home
                    </Link>
                </li>
                <li>
                    <Link to="/orderslist">
                        <FontAwesomeIcon icon={faList} />  Order list
                    </Link>
                </li>
                <li>
                    <Link to="/review">
                        <FontAwesomeIcon icon={faStar} /> Review
                    </Link>
                </li>
                {isAdmin ? <div>
                    <li>
                        <Link to="/manageorders">
                            <FontAwesomeIcon icon={faEdit} /> Manage Orders
                    </Link>
                    </li>
                    <li>
                        <Link to="/addservice">
                            <FontAwesomeIcon icon={faPlusSquare} /> Add service
                    </Link>
                    </li>
                    <li>
                        <Link to="/makeadmin"> <FontAwesomeIcon icon={faUserPlus} /> Make admin
                    </Link>
                    </li>
                    <li>
                        <Link to="/manageservice"> <FontAwesomeIcon icon={faEdit} /> Manage service</Link>
                    </li>
                    <li>
                        <Link> <FontAwesomeIcon icon={faCog} /> Setting</Link>
                    </li>
                </div> : ''
                }
            </ul>
        </div>
    );
};

export default Sidebar;