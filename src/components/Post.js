import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const params = useParams();
    const {name} = params;
    console.log(name);
    return (
        <div>
           <h1> Yes! its a {name} page.</h1>
        </div>
    );
};

export default Post;