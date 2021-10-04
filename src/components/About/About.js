import React from 'react';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import './About.css'
const About = () => {
    return (
        <div>
            <Menubar></Menubar>
            <div className='w-75 row about m-auto p-5 d-flex align-items-center pt-5 m-5'>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <img height='350px' className='w-100' src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/01/Top-10-Ranking-About-Us-Pages.png" alt="" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h2>Abot Us</h2>
                    <p>
                        Unacademy is an online platform where empowering the community for an excellent standard of learning is what we desire. We endeavor for the continuous improvement of our leaders who will work for constructing a better future. The institute is dedicated to serving the quality training programs under ISO 9001: 2015 certification which remarks us in the IT world. We will continue to share our knowledge for contributing to the success of individuals and to serve society with the best interest.

                        We are committed to providing our students with a platform where superiority is the mantra. We nurture the young talent by sharing knowledge, providing supports in learning techniques, co-operating them for international standard projects, making successful freelancers and driving our youth towards a world of entrepreneurship and thus reducing inequalities. Our culture is important to us and our team of experts drives our culture. The skilled human resource make our deliverables valuable that really helps us to set our standard internationally.

                        In this fast-paced digital world, achieving in career and reaching in targeted goal is depending on the proper execution of planning, implementing and sustaining changes. So getting there with an institution like us will be your wise choice. Your great experience of learning influences our way of training and thus we serve our students and engage with our commitments. Here we invite you to come and join us to have a change in the result of your life and thus we would be grateful to know you and to strengthen a long-lasting relationship.
                    </p>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;