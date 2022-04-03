import React, { Component } from 'react';
import imarticus from './Assets/imarticus.svg'

import './Sidebar.css'

class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <div className='logo-container'>
                    <img src={imarticus} alt="imarticus" />
                </div>
                <div className='sidebar-item-container'>
                    <div className='sidebar-item'>My Courses</div>
                    <div className='sidebar-item'>My Groups</div>
                    <div className='sidebar-item'>Explore</div>
                </div>
            </div>
        );
    }
}

export default Sidebar;