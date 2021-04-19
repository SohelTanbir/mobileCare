import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState();

    const handleBlur = e =>{
        const newAdmin = {...admin};
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin)
    }


    const handleMakeAdmin = e =>{
        if(admin?.admin){
            fetch('https://mobilecare1.herokuapp.com/addAddmin', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(admin)
            })
            .then(result =>{
                if(result.ok){
                    alert('New Admin added!');
                }
            })
        }else{
            alert('Please Enter email!')
        }
       


        e.preventDefault();
    }

    return (
        <div className="makeAdmin">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10 p-4 bg-light">
                    <div className="makeAdminForm">
                        <h5 className="text-muted mb-3">Add New Admin</h5>
                        <form onSubmit={handleMakeAdmin}>
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="form-group">
                                        <input type="email" name="admin" onBlur={handleBlur} className="form-control" placeholder="Enter Email" required/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <input onClick={handleMakeAdmin} className="btn btn-success" type="submit" value="Submit" />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;