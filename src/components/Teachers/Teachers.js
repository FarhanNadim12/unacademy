import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import Teacher from '../Teacher/Teacher';

import './Teachers.css'
const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div>
            <Menubar></Menubar>
            <div className='mb-5'>
                <h1 className='text-center mt-3 mb-3'>Our Honarable Teachers</h1>
                <div className='row '>
                    {
                        teachers.map(teacher => <Teacher key={teacher.id} teacher={teacher}></Teacher>)
                    }
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Teachers;