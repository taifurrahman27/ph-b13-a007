import React from 'react';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className="py-10 bg-[#244D3F] text-center">
            <h1 className='text-5xl font-bold text-white'>KeenKeeper</h1>
            <p className='text-gray-300 my-5'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p className='text-gray-100'>Social Links</p>
            <div className='flex justify-center items-center gap-2 p-2'>
                <span className='bg-white p-2 rounded-full'>
                    <FaFacebookF />
                </span>
                <span className='bg-white p-2 rounded-full'>
                    <RiInstagramFill />
                </span>
                <span className='bg-white p-2 rounded-full'>
                    <FaXTwitter />
                </span>
            </div>
            <div className='md:flex justify-between pt-10'>
                <p className='text-gray-300'>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='md:flex gap-4'>
                    <p className='text-gray-300 mx-2'>Privacy Policy</p>
                    <p className='text-gray-300 mx-2'>Terms of Service</p>
                    <p className='text-gray-300 mx-2'>Cookies</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;