import React from 'react';
import { Link } from 'react-router-dom';

const Singlejob = ({apply}) => {
    const {image, title, job, place, address, name, salary, id} = apply
    return (
        <div className='flex justify-center items-center justify-between h-40 w-96 items-center ml-96'>
            <img className='h-20 w-20' src={image} alt="" />
            <div className=''>
            <h2>{title}</h2>
            <h2>{name}</h2>
            <div className='flex'>
                <button>{place}</button>
                <button>Onsite</button>
            </div>
            <div className='flex'>
            <h2>{address}</h2>
            <h2>{salary}</h2>
            </div>
            </div>
            <div><Link to={`/feature/${id}`}> <button className='text-1xl bg-cyan-500 rounded p-1 pl-2 pr-2 text-white mt-2 ml-12'>Visit Details</button></Link></div>
        </div>
    );
};

export default Singlejob;