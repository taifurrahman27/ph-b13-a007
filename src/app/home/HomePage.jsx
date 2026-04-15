import AllFriend from '@/components/homepage/AllFriend';
import Banner from '@/components/homepage/Banner';
import Summery from '@/components/homepage/Summery';
import React from 'react';

const HomePage = () => {
    return (
        <div className='container mx-auto'>
            <Banner />
            <Summery />
            <AllFriend />
        </div>
    );
};

export default HomePage;