import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='row w-100'>
            <div className="col-md-12 headerRow text-center d-flex align-items-center">
                <div className='col-md-8 m-auto'>
                    <h1 className='mb-3'>Learning Courses Online</h1>
                    <p className='mb-5'>Online Courses BD , one of the leading IT training institutes in Bangladesh offers the best training opportunities. It has been playing a vital role to eradicate the unemployment problem since 2008. Enriched with quality training this institute has never failed to help the individuals to reveal their talents making harmony between creativity and IT. No matter what is your background, we are offering 8 courses for you conducted by experienced trainers to advance your skills.</p>
                    <Link id='learnMore' to='/about'><span>Learn More</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;