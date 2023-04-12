import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Features from '../Features/Features';
import { data } from 'autoprefixer';
import Available from '../Available/Available';

const Home = () => {
    const companys = useLoaderData();
    // console.log(companys)
    const [availables, setAvailable] = useState([])
    useEffect(()=>{
        fetch('availablejob.json')
        .then(res => res.json())
        .then(data=> setAvailable(data))
    },[])
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 items-center justify-center'>
            <div className='ml-auto'>
            <h2 className='font-bold text-4xl mr-20'>One Step Closer To Your <br /> <span className='text-fuchsia-700'>Dream Job</span></h2>
            <h4 className='mt-8 mb-8'>Explore thousands of job opportunities with all the<br /> information you need. Its your future. Come find it.<br /> Manage all your job application<br /> from start to finish.</h4>
            <button className='text-2xl bg-cyan-500 rounded p-1 pl-2 pr-2 text-white'>Star Applying</button>
            </div>
        <div>
            <img className='h-96 w-96' src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
        </div>
        </div>
        <h2 className='text-3xl text-center mt-20 font-bold'>Job Category List</h2>
        <h4 className='text-center mt-5 mb-10'>Explore thousands of job opportunities with all the information you need. Its your future</h4>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 justify-center '>
            {
                availables.map(available => <Available
                key={available.id}
                available={available}
                ></Available>)
            }
        </div>
        {/* features job */}

        <div>
        <h2 className='text-3xl text-center mt-20 font-bold'>Featured Jobs</h2>
        <h4 className='text-center mt-5 mb-10'>Explore thousands of job opportunities with all the information you need. Its your future</h4>
        </div>
        <div>
            <div className='grid md:grid-cols-2 justify-center items-center'>
              {
                companys.map(company => <Features
                key={company.id}
                company={company}
                ></Features>)
              }
            </div>
        </div>
        <button className='text-1xl bg-cyan-500 rounded p-1 pl-2 pr-2 text-white mt-2 text-3xl items-center ml-64 mt-6'>see all</button>
        </div>
    );
};

export default Home;