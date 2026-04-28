'use client';

import { useEffect, useState } from 'react';
import FriendCard from './FriendCard';

const AllFriend = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getFriends = async () => {
            try {
                const res = await fetch('/friends.json');
                const data = await res.json();
                setFriends(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getFriends();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">My Friends</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {friends.map((friend) => (

                    <FriendCard key={friend.id} friend={friend} />
                ))}

            </div>
        </div>
    );
};

export default AllFriend;