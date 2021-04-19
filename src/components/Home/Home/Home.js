import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import RecentWork from '../RecentWork/RecentWork';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Banner/>
            <Service/>
            <RecentWork/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;