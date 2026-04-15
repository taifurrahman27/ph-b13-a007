import React from 'react';

const Summery = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 my-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="bg-white rounded-2xl shadow-md p-5 text-center hover:shadow-lg transition">

                    <h2 className="text-3xl font-bold text-[#244D3F]">10</h2>
                    <p className="text-sm text-gray-500">Total Friends</p>
                </div>

                <div className="bg-green-50 border border-green-100 rounded-2xl shadow-sm p-5 text-center hover:shadow-lg transition">

                    <h2 className="text-3xl font-bold text-green-700">3</h2>
                    <p className="text-sm text-green-600">On Track</p>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-2xl shadow-sm p-5 text-center hover:shadow-lg transition">

                    <h2 className="text-3xl font-bold text-red-700">6</h2>
                    <p className="text-sm text-red-600">Need Attention</p>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-2xl shadow-sm p-5 text-center hover:shadow-lg transition">

                    <h2 className="text-3xl font-bold text-blue-700">12</h2>
                    <p className="text-sm text-blue-600">Interactions This Month</p>
                </div>

            </div>
        </div>
    );
};

export default Summery;