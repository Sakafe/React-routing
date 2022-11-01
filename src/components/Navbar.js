import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
// import classes from '../Styles/Header.css'

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className='navbar'>
                    <li>
                        <NavLink  className={(navInfo)=>(navInfo.isActive? 'active':'link')}   to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink  className={(navInfo)=>(navInfo.isActive? 'active':'link')}  to="/About">  About  </NavLink>
                    </li>
                    <li>
                        <NavLink  className={(navInfo)=>(navInfo.isActive? 'active':'link')}  to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink  className={(navInfo)=>(navInfo.isActive? 'active':'link')}  to="/address">Address</NavLink>
                    </li>
                    <li>
                        <NavLink  className={(navInfo)=>(navInfo.isActive? 'active':'link')}  to="/subject">Subject</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;