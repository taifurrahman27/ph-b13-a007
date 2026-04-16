'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

export default function FriendDetailsCard({ id }) {

    const params = useParams();
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

    const friend = friends.map((f) => f);
    console.log(friend);


    if (!friend) return <div>Friend not found</div>;

    const getStatusStyle = (status) => {
        switch (status) {
            case 'overdue':
                return 'bg-red-100 text-red-600';
            case 'almost due':
                return 'bg-yellow-100 text-yellow-600';
            case 'on-track':
                return 'bg-green-100 text-green-600';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    };

    const handleCheckIn = (type) => {
        const newEntry = {
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            title: `${type} with ${friend.name}`,
        };

        setTimeline((prev) => [newEntry, ...prev]);

        toast.success(`${type} logged!`);
    };

    return (
        <div className="max-w-7xl mx-auto p-6 grid lg:grid-cols-3 gap-6">

            <div className="lg:col-span-1 space-y-6">

                <div className="bg-white rounded-2xl shadow p-6 text-center">
                    <Image
                        src={friend.picture}
                        width={100}
                        height={100}
                        alt={friend.name}
                        className="rounded-full mx-auto mb-4"
                    />

                    <h2 className="text-xl font-bold">{friend.name}</h2>

                    <span className={`px-3 py-1 text-xs rounded-full inline-block mt-2 ${getStatusStyle(friend.status)}`}>
                        {friend.status}
                    </span>

                    <div className="flex flex-wrap justify-center gap-2 mt-3">
                        {/* {friend.tags.map((tag, i) => (
                            <span key={i} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                #{tag}
                            </span>
                        ))} */}
                    </div>

                    <p className="text-sm text-gray-600 mt-4">{friend.bio}</p>
                    <p className="text-sm text-gray-500 mt-2">{friend.email}</p>
                </div>

                <div className="bg-white rounded-2xl shadow p-4 space-y-3">
                    <button className="w-full py-2 rounded-lg bg-yellow-100 text-yellow-700">⏰ Snooze 2 Weeks</button>
                    <button className="w-full py-2 rounded-lg bg-gray-100 text-gray-700">📦 Archive</button>
                    <button className="w-full py-2 rounded-lg bg-red-100 text-red-600">🗑️ Delete</button>
                </div>
            </div>

            <div className="lg:col-span-2 space-y-6">

                <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow text-center">
                        <p className="text-gray-500 text-sm">Days Since Contact</p>
                        <h3 className="text-2xl font-bold">{friend.days_since_contact}</h3>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow text-center">
                        <p className="text-gray-500 text-sm">Goal</p>
                        <h3 className="text-2xl font-bold">{friend.goal} days</h3>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow text-center">
                        <p className="text-gray-500 text-sm">Next Due</p>
                        <h3 className="text-2xl font-bold">{friend.next_due_date}</h3>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
                    <div>
                        <p className="text-gray-500 text-sm">Relationship Goal</p>
                        <h3 className="text-lg font-semibold">Contact every {friend.goal} days</h3>
                    </div>
                    <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg">Edit</button>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                    <h3 className="font-semibold mb-4">Quick Check-In</h3>

                    <div className="flex gap-3">
                        <button
                            onClick={() => handleCheckIn('Call')}
                            className="flex-1 py-2 bg-green-100 text-green-700 rounded-lg"
                        >
                            📞 Call
                        </button>

                        <button
                            onClick={() => handleCheckIn('Text')}
                            className="flex-1 py-2 bg-blue-100 text-blue-700 rounded-lg"
                        >
                            💬 Text
                        </button>

                        <button
                            onClick={() => handleCheckIn('Video')}
                            className="flex-1 py-2 bg-purple-100 text-purple-700 rounded-lg"
                        >
                            🎥 Video
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}


