import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between m-5 items-center bg-gray-200 pl-5 pr-5'>
         <h3 className='text-3xl font-bold text-cyan-700'>Gob Hunter</h3>
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/applied">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
        <button className='text-2xl bg-cyan-500 rounded p-1 pl-2 pr-2 text-white'>Star Applying</button>
        </div>
    );
};

export default Header;