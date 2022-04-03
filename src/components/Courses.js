import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Ml from './Assets/ML.png'
import './Courses.css';

class Courses extends Component {
    render() {
        return (
            <div>
                <div className='course-content'>
                    <div className='courses-heading'>
                        Individual Course
                    </div>
                    <div className='courses'>
                        <div className='img-section'>
                            <img className='courses-img' src={Ml} alt="ml" />
                        </div>
                        <div className='progress'>
                            <div className='content-container'>
                                <p className='topic-name'>Introduction to Machine Learning
                                </p>
                                <div className='progress-container'>
                                    <div className='progress-bar'>
                                        <div className='active-status'>

                                        </div>
                                    </div>
                                    <span className='percent'></span>
                                </div>
                            </div>
                        </div>
                        <div className='btn-container'>
                            <button type="button" className="button">Start Course</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Courses;