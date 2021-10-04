import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AllCourse from '../AllCourse/AllCourse';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import './Allcourses.css'
const Allcourses = () => {
    const [allcourses, setAllCourses] = useState([])
    useEffect(() => {
        fetch('fakecoursetwo.json')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])
    return (
        <div>
            <Menubar></Menubar>
            <div className="row container m-auto">
                {
                    allcourses.map(allcourse => <AllCourse key={allcourse.id} allcourse={allcourse}></AllCourse>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Allcourses;