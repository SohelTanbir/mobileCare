import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="container">
            <h3 className="text-center text-white mb-5">Contact us</h3>
                <div className="row">
                    <div className="col-md-7 mx-auto">
                        <form>
                            <div className="row">
                                <div className="col">
                                <div class="form-group">
                                <input type="text" class="form-control mb-4" placeholder="Enter Name" />
                            </div>
                                </div>
                                <div className="col">
                                <div class="form-group">
                                <input type="text" class="form-control mb-4" placeholder="Enter phone" />
                            </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control mb-4" placeholder="Enter email" />
                            </div>
                                <div class="form-group">
                                    <textarea className="form-control mb-4" rows="5" placeholder="Write your message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-danger contactBtn">Send message</button>
                            </form>
                        </div>
                    </div>
                </div>
         </div>
    );
};

export default Contact;