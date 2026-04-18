import React from 'react';

const Timeline = () => {

    const timeline = [];
    return (
        <div>
            <h1>Timeline</h1>
            <div className="bg-white p-5 rounded-xl shadow">
                <h3 className="font-semibold mb-4">Timeline</h3>

                {timeline.length === 0 ? (
                    <p className="text-sm text-gray-500">No interactions yet</p>
                ) : (
                    <div className="space-y-3">
                        {timeline.map((item) => (
                            <div key={item.id} className="border-l-2 pl-3">
                                <p className="text-sm font-medium">{item.title}</p>
                                <p className="text-xs text-gray-400">{item.date}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Timeline;