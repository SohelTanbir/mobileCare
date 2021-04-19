import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const [service, setService] = useState();
    const [imageURL, setImageURL] = useState();
    const handleBlur = event => {
        const newService = {...service};
        newService[event.target.name] = event.target.value;
        setService(newService);
    }

    const handleAddService = () => {
        const newService = {...service, imgurl:imageURL}
        const url = `https://mobilecare1.herokuapp.com/addservice`;
       fetch(url, {
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify(newService)
       })
       .then(result =>{
           if(result.ok){
               alert('New service added successfully!!');
               setService({});
           }
       })
    }

    const uploadImg = event =>{
        const imgData = new FormData();
        imgData.set('key','f6131cc67564d3137142d5a7319168ea');
        imgData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imgData)
        .then(function (response) {
            setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return (
        <div className="addService bg-light">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-8 p-4 ">
                 <div className="container">
                 <h4 className="text-muted mb-4">Add service</h4>
                    <form onSubmit={handleAddService}>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="title">Service Title</label>
                                    <input type="text" name="title" onBlur={handleBlur} className="form-control mb-3" placeholder="Enter Title" required/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="price">Price</label>
                                    <input type="text" name="price" onBlur={handleBlur} className="form-control  mb-3" placeholder="$Enter Price" required/>
                                </div>
                            </div>
                        </div>
                        <label htmlFor="img">Upload photo</label>
                        <div className="form-group">
                            <input type="file" name="img" onBlur={uploadImg} className="form-control  mb-3" required/>
                        </div>
                        <div className="form-group">
                          <textarea name="description" className="form-control mb-3" rows="5" onBlur={handleBlur} placeholder="Description about service"></textarea>
                        </div>
                        <div onClick={handleAddService} className="btn btn-primary floatRight">Add Now</div>
                    </form>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;