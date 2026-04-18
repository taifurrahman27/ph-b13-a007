"use client"
import React, { useEffect, useState } from 'react';
import FriendDetailsPage from './[id]/page';

const FriendDetails
    = () => {

        const [friends, setFriends] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const getFriends = async () => {
                try {
                    const res = await fetch('/friends.json');
                    const friendsData = await res.json();
                    setFriends(friendsData);
                    // console.log(friendsData);

                } catch (error) {
                    console.error(error);
                } finally {
                    setLoading(false);
                }
            };

            getFriends();
        }, []);
        console.log(friends);


        if (loading) return <div>Loading...</div>;



        // const handleCheckIn = (type) => {
        //     const newEntry = {
        //         id: Date.now(),
        //         date: new Date().toLocaleDateString(),
        //         title: `${type} with ${friend.name}`,
        //     };

        //     setTimeline((prev) => [newEntry, ...prev]);

        //     toast.success(`${type} logged!`);
        // };

        return (
            <div>
                <h1>Friend Details page for assignment 7</h1>

                <FriendDetailsPage friends={friends} />
            </div>
        );
    };

export default FriendDetails;
