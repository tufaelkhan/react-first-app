import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakeDB';
import Singlejob from '../Singlejob/Singlejob';

const Applied = () => {
    const [applies, setApplies] = useState([])
    const singlejob = useLoaderData()

    let appliedjob = []
    const savedId = getShoppingCart()
    useEffect(()=>{
        for(const id in savedId){
            const foundjob = singlejob.find(job=> job.id == id);
            // console.log(job);
            if(foundjob){
                appliedjob.push(foundjob)
            }
            if(appliedjob){
                setApplies(appliedjob)
            }
        }
    },[])
    console.log(applies);
    // const { location, title, job, place, responsibility,  name, address, salary, jobtitle,image, id } = applies
    return (
        <div>
            <h3 className='text-4xl items-center '>Applied job</h3>
            <div className=''>
           
            {
                applies.map(apply => <Singlejob
                key={apply.id}
                apply={apply}
                ></Singlejob>)
            }
            </div>
        </div>
    );
};

export default Applied;