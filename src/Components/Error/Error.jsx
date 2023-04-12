import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const {error, status} = useRouteError()
    return (
        <div>
           <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-cyan-500 text-gray-900'
          >
            Back to homepage
          </Link>
        </div>
        </div>
    );
};

export default Error;