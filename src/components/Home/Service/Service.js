import React, { useState } from 'react';
import './Service.css'
import ServiceCard from './ServiceCard/ServiceCard';

// const serviceDate = [
//     {
//         id:1,
//         title:'Slow Phone',
//         price:20,
//         img:'https://images.unsplash.com/photo-1611396000732-f8c9a933424f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//         description:'Clean your cell phone and close/delete apps, files and clear the cache data. If you recently installed an app and your phone is not working well, you should uninstall it and see if your mobile phone runs faster.'
//     },
//     {
//         id:2,
//         title:' Overheating Phone',
//         price:25,
//         img:'https://images.unsplash.com/photo-1607432651848-9c921887b8c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=822&q=80',
//         description:'You should try the previous possible solutions first to see if this problem is directly related to your battery issue. If it keeps overheating, try to carry your phone in a fresh place and keep it away from the sun’s heat'
//     },
//     {
//         id:3,
//         title:'App Crashes/Freezes',
//         price:10,
//         img:'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//         description:'This problem happens a lot and, although it is a very annoying thing, it is not so difficult to solve. Although it should not be a common thing, the truth is that apps sometimes present this issue and can be related to bugs'
//     },
//     {
//         id:4,
//         title:'Display damage',
//         price:40,
//         img:'https://thumbs.dreamstime.com/b/hand-holding-mobile-phone-broken-glass-screen-man-hand-holding-mobile-phone-broken-glass-screen-152249381.jpg',
//         description:'Clean your cell phone and close/delete apps, files and clear the cache data. If you recently installed an app and your phone is not working well, you should uninstall it and see if your mobile phone runs faster.'
//     },
//     {
//         id:5,
//         title:'MotherBoard repair',
//         price:38,
//         img:'https://images.unsplash.com/photo-1512439408685-2e399291a4e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwbW90aGVyYm9hcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//         description:'Clean your cell phone and close/delete apps, files and clear the cache data. If you recently installed an app and your phone is not working well, you should uninstall it and see if your mobile phone runs faster.'
//     },
//     {
//         id:6,
//         title:'Hardware testing',
//         price:45,
//         img:'https://www.yourphoneguyllc.com/wp-content/uploads/2019/11/7.jpg',
//         description:'Clean your cell phone and close/delete apps, files and clear the cache data. If you recently installed an app and your phone is not working well, you should uninstall it and see if your mobile phone runs faster.'
//     },
//     {
//         id:7,
//         title:'LED Problem',
//         price:23,
//         img:'https://images.unsplash.com/photo-1602453714579-55f0ad8a17fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//         description:'Clean your cell phone and close/delete apps, files and clear the cache data. If you recently installed an app and your phone is not working well, you should uninstall it and see if your mobile phone runs faster.'
//     },
//     {
//         id:8,
//         title:'Network issue',
//         price:23,
//         img:'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//         description:'Clean your cell phone and close/delete apps, files and clear the cache data. If you recently installed an app and your phone is not working well, you should uninstall it and see if your mobile phone runs faster.'
//     }
// ]

const Service = () => {
    const [serviceData, setServiceData] = useState();

    fetch('https://mobilecare1.herokuapp.com/services')
    .then(res => res.json())
    .then(data => setServiceData(data))

    return (
        <div className="container-fluid" id="service">
            <div className="serviceTitle">
                <h3>Our Service</h3>
            </div>
            {serviceData?'':<div className="spinner text-center">
                    <div className="spinner-border text-primary text-center">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>}
            <div className="row">
                {
                    serviceData?.map(service => <ServiceCard service={service}/>)
                }
            </div>
        </div>
    );
};

export default Service;