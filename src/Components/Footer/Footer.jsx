import React from 'react';

const Footer = () => {
    return (
        <div className='grid grid-cols-4 justify-center items-center bg-gray-900 pt-10 pl-20 pb-10 mt-10'>
            <div className='text-white'>
                <h2 className='text-2xl font-sans'>SERVICES</h2>
                <p>Branding</p>
                <p>Design</p>
                <p>Marketing</p>
                <p>Advertisement</p>
            </div>
            <div className='text-white'>
                <h2 className='text-2xl font-sans'>PRODUCT</h2>
                <p>Prototype</p>
                <p>Plans & Pricing</p>
                <p>Customers</p>
                <p>Integrations</p>
            </div>
            <div className='text-white'>
                <h2 className='text-2xl font-sans'>COMPANY</h2>
                <p>About us</p>
                <p>Contact</p>
                <p>Jobs</p>
                <p>Press kit</p>
            </div>
            <div className='text-white'>
                <h2 className='text-2xl font-sans'>LEGAL</h2>
                <p>Terms of use</p>
                <p>Privacy policy</p>
                <p>Cookie policy</p>
                <p>Advertisement</p>
            </div>
        </div>
    );
};

export default Footer;