import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakeDB';
import {MapPinIcon, CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
const FeatureDetails = () => {
    // const dynamic = useParams()
    // const details = useLoaderData();
    // console.log(details);
    // console.log(dynamic);
    // const [job, setJob] = useState({})
    // useEffect(()=>{
    //     useLoaderData.find(id => dynamic === details.id)
    //     setJob()
    // },[])

    // useEffect(()=>{
    //     fetch('company.json')
    //     .then(res=> res.json())
    //     .then(data=> console.log(data))
    // },[])
    // const [appliedjob, setAppliedjob]= useState([])
    // const singlejob = useLoaderData()
    // console.log(singlejob);
    // console.log(appliedjob);

    // useEffect(()=>{

    // },[])
    const [singlejob, setSinglejob] = useState([]);
    const idd = useParams()
    const jobb = useLoaderData()
    // console.log(idd);
    // console.log(jobb);
    // console.log(singlejob);

    useEffect(()=>{
        const details = jobb.find(job => job.id === idd.Id)
        setSinglejob(details)
        // console.log(details.description);
    },[])
    const {office, description, location, title, job, place, responsibility,  name, address, salary, id, education, experience, phone, email, jobtitle,  } = singlejob;

    // add to local storage
    const dataAddToDb= (id)=>{
        addToDb
    }
    return (
        <div>
            <h3 className='text-4xl text-center mb-10'>job details</h3>
            <div className='grid grid-cols-2 ml-10 mr-10'>
            <div className='ml-12'>
            <h4 className='mb-5'><span className='text-2xl'>Job Description:</span> <span className='text-sm'>{description}</span></h4>
            <h4 className='mb-5'><span className='text-2xl'>Job Responsibility</span> <span className='text-sm'>{responsibility}</span></h4>
            <h4 className='text-2xl'>Educational Requirements:</h4>
            <p className='mb-5'>{education}</p>
            <h4 className='text-2xl'>Experiences: </h4>
            <p  className='mb-5'>{experience}</p>
            </div>
            <div className='ml-52 h-420'>
            <h3 className='text-3xl mb-5'>Job Details</h3><hr />
            <h4 className='mb-3 flex items-center'><span><CurrencyDollarIcon className="h-6 w-6 text-gray-500 mr-1" /></span><span className='text-2xl'>Salary: </span><span>{salary}</span></h4>
            <h4 className='mb-3 flex items-center'><span><BriefcaseIcon className="h-6 w-6 text-gray-500 mr-1" /></span><span className='text-2xl'>job title:</span> <span>{jobtitle}</span></h4>
            <h3 className='text-3xl mb-5'>Contact Information</h3><hr />
            <h4 className='mb-3 flex items-center'><span><PhoneIcon className="h-6 w-6 text-graye-500 mr-1" /></span><span className='text-2xl'>Phone :</span><span> {phone}</span></h4>
            <h4 className='mb-3 flex items-center'><span><EnvelopeIcon className="h-6 w-6 text-gray-500 mr-1" /></span><span className='text-2xl'>Email : </span><span>{email}</span></h4>
            <h4 className='mb-3 flex items-center'><span><MapPinIcon className="h-6 w-6 text-gray-500 mr-1" /></span><span className='text-2xl'>Address : </span> <span>{address}</span></h4>
            <button onClick={()=>addToDb(id)} className='text-2xl bg-cyan-500 rounded pb-1 pl-10 pr-10 text-white mb-10'>Apply Now</button>
            </div>
            </div>
            
        </div>
    );
};

export default FeatureDetails;