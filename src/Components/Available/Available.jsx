import React from 'react';

const Available = ({available}) => {
    const {availablejob, image, title } = available;
    return (
        <div className='ml-auto mr-auto'>
            <img className='h-10 w-10' src={image} alt="" />
            <h2 className='text-2xl mt-2 mb-1 font-bold'>{title}</h2>
            <p>{availablejob}</p>
        </div>
    );
};

export default Available;