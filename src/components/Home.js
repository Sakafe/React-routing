import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Hello</h1>
            <h2>This is a Home page</h2>
            <Outlet/>
        </div>
    );
};

export default Home;