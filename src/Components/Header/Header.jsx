import React from 'react';
import { Link } from 'react-router-dom';
import { AcademicCapIcon, ArrowRightIcon} from '@heroicons/react/24/solid'
const Header = () => {
    return (
        <div className='flex justify-between m-5 items-center bg-gray-200 pl-5 pr-5'>
         <h3 className='text-3xl font-bold text-cyan-700 flex mr-2 items-center pb-2'><span><AcademicCapIcon className="h-6 w-6 text-cyan-500" /></span><span>job Hunter</span></h3>
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/applied">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
        <button className='text-2xl bg-cyan-500 rounded p-1 pl-2 pr-2 text-white flex items-center'><span className='pb-2 mr-2'>Star Applying</span> <span><ArrowRightIcon className="h-6 w-6 text-white" /></span></button>
        </div>
    );
};

export default Header;