import React, { useContext } from 'react';
import logo from '../../images/logo/logo.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config/firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig);


const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const handleGoogleSignIn = ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                const loggedUser = {name:user.displayName, email:user.email, img:user.photoURL};
                setLoggedInUser(loggedUser);
                history.push(from);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    }

    return (
        <div className="login bg-light" style={{height:'100vh'}}>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-5 mx-auto shadow p-5 mt-5">
                        <div className="loginBox">
                            <img className="mb-4" style={{ height: '80px' }} src={logo} alt="logo" />
                            <form onSubmit={handleGoogleSignIn}>
                                <div className="form-group">
                                    <input type="text" className="form-control mb-4" placeholder="E-mail" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control  mb-4" placeholder="Password" />
                                </div>
                                <div onClick={handleGoogleSignIn} className="btn btn-primary float-right">Login</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;