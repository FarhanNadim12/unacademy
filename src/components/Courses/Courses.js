import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Course from '../Course/Course';


import './Courses.css'
const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./fakecourseone.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (

        <>
            
            <div className='row container m-auto'>
                <h1 className='text-center mt-5'>Top Courses</h1>

                {
                    courses.map(course => <Course course={course}></Course>)
                }
            </div>
        </>
    );
};

export default Courses;