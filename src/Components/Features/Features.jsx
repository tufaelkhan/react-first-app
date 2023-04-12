import React from 'react';
import { Link } from 'react-router-dom';
import {MapPinIcon, CurrencyDollarIcon} from '@heroicons/react/24/solid'
const Features = ({company}) => {
    const {image, location, title, job, place, name, address, salary, id} = company;
    return (
        <div className='mt-5 ml-auto mr-auto'>
            <img className='h-14 w-32' src={image} alt="" />
            <h3>{title}</h3>
            <h4>{name}</h4>
            <div>
                <button className='mr-5 text-1xl text-cyan-700 rounded p-1 pl-2 pr-2 outline mt-2'>{place}</button>
                <button className='text-1xl text-cyan-700 rounded p-1 pl-2 pr-2 outline'>{job}</button>
            </div>
                <div className='flex mt-2 mb-2'>
                    <h2 className='flex'><span><MapPinIcon className="h-6 w-6 text-blue-500" /></span><span>{address}</span></h2>
                    <h2 className='ml-4 flex'><span><CurrencyDollarIcon className="h-6 w-6 text-blue-500" /></span><span>{salary}</span></h2>
                </div>
                <p><Link to={`../feature/${id}`}><button className='text-1xl bg-cyan-500 rounded p-1 pl-2 pr-2 text-white mt-2'>View Details</button></Link></p>
        </div>
    );
};

export default Features;