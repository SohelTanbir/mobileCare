import React from 'react';
import logo from '../../../images/logo/logo.png'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <img style={{height:'60px'}} src={logo} alt="logo"/>
                        <p className="my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa aperiam facilis iure deserunt dolore qui molestiae nostrum error vero dicta.</p>
                        <div className="social">
                            <ul className="d-flex">
                                <li>
                                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                <li>
                                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                </li>
                                <li>
                                <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                                </li>
                                <li>
                                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="footerService">
                      <h4>Our Service</h4>
                      <ul>
                          <li><a href="#">Slow Phone repair</a></li>
                          <li><a href="#">Overheating Phone repair</a></li>
                          <li><a href="#">Display damage repair</a></li>
                          <li><a href="#">MotherBoard repair</a></li>
                          <li><a href="#">LED Problem</a></li>
                      </ul>
                      </div>
                        
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <h4>Latest works</h4>
                      <ul>
                          <li><a href="#">Slow Phone repair</a></li>
                          <li><a href="#">Overheating Phone repair</a></li>
                          <li><a href="#">Display damage repair</a></li>
                          <li><a href="#">MotherBoard repair</a></li>
                          <li><a href="#">LED Problem</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <h4>Delivery project</h4>
                      <ul>
                          <li><a href="#">Slow Phone repair</a></li>
                          <li><a href="#">Overheating Phone repair</a></li>
                          <li><a href="#">Display damage repair</a></li>
                          <li><a href="#">MotherBoard repair</a></li>
                          <li><a href="#">LED Problem</a></li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;