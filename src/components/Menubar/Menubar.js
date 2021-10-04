import React from 'react';
import './Menubar.css';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <div>

            <nav>
                <Link to='/home' className='menuItem'>Home</Link>
                <Link to='/Allcourses' className='menuItem'>All Courses</Link>
                <Link to='/teachers' className='menuItem'>Teachers</Link>
                <Link to='/about' className='menuItem'>About Us</Link>
            </nav>
        </div>
    );
};

export default Menubar;