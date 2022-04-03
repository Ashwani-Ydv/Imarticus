import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

class Group extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <Navbar />
                This section is under development
            </div>
        );
    }
}

export default Group;