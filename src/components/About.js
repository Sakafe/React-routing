import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>This is a About page.</h1>
            <h2>Welcome to the about page.</h2>
            <ul>
            <li>
                <NavLink  className={(navInfo)=>(navInfo.isActive? 'active':'link')}  to="/post/Anil">Post</NavLink>
            </li>
            <li>
                <NavLink  className={(navInfo)=>(navInfo.isActive? 'active':'link')}  to="/post/peter">Dynamic-Post</NavLink>
            </li>
            </ul>
        </div>
    );
};

export default About;