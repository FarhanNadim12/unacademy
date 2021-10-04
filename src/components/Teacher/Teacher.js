import React from 'react';

const Teacher = (props) => {
    console.log(props.teacher)
    const { designation, img, teacherName } = (props.teacher)
    return (
        <div class="card col-md-4 m-3  container">
            <div class="row  m-auto  container">
                <div class="col-md-4">
                    <img height='100px' src={img} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{teacherName}</h5>
                        <p class="card-text">Teacher of: {designation}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teacher;