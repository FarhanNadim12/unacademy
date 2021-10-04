import React from 'react';
import './Course.css'
const Course = (props) => {

    const { id, img, courseTitle, courseDescription, CourseFee, courseDuration } = props.course;

    return (

        <div className="col-md-6 p-5 ">
            <div className="card h-100 container">
                <img height='300px' className='w-50' src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{courseTitle}</h5>
                    <p className="card-text">{courseDescription}</p>
                    <span>Course Duration: <b>{courseDuration}</b></span><br />
                    <span>Course Fee: <b>{CourseFee}$</b></span><br />
                </div>

            </div>
        </div>



    );
};

export default Course;