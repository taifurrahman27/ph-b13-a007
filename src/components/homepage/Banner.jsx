import React from 'react';
import { IoIosAdd } from 'react-icons/io';

const Banner = () => {
    return (
        <div className="py-10 bg-[#F8FAFC] text-center space-y-5 mt-20">
            <h1 className='text-[#1F2937] text-5xl font-bold'>Friends to keep close in your life</h1>
            <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>
            <button className='bg-[#244D3F] mx-auto flex justify-center items-center gap-1 text-white py-2 px-4  hover:bg-[#1a3b2f]'><IoIosAdd />
                Add a Friend</button>
        </div>
    );
};

export default Banner;