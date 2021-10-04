import React from 'react';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menubar from '../Menubar/Menubar';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Header></Header>
            <Courses></Courses>
            <Footer></Footer>
        </div>
    );
};

export default Home;