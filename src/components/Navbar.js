import React, { Component } from 'react';
import profile from './Assets/Profile.svg';
import dropdown from './Assets/down-arrow.png';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className='navbar-container'>
                <div className='tab-name'>My Courses </div>
                <div>
                    <div></div>
                    <div className='profile'>
                        <img src={profile} alt="profile" />&emsp;
                        <div className='username'>
                            Ashwani Yadav
                            <img className='dropdown' src={dropdown} alt="dropdown" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;