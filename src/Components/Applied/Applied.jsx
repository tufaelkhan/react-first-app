import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Applied = () => {
    const jobs = useLoaderData()
    console.log(jobs);
    return (
        <div>
            <h3>all are applied</h3>
        </div>
    );
};

export default Applied;