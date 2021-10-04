import React from 'react';

const AllCourse = (props) => {
    console.log(props.allcourse)
    const { img, courseTitle, courseDescription, CourseFee, courseDuration } = props.allcourse;
    return (
        <div className="col-md-6 p-5">
            <div className="card h-100">
                <img height='300px' className='w-50' src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                     <h5 className="card-title">Course Name: {courseTitle}</h5>
                    <p className="card-text">{courseDescription}</p>
                    <span>Course Duration: <b>{courseDuration}</b></span><br />
                    <span>Course Fee: <b>{CourseFee}$</b></span><br />
                </div>

            </div>
        </div>
    );
};

export default AllCourse;