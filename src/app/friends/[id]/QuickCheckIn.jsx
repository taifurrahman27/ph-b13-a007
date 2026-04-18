'use client';

import { useState } from "react";

export default function QuickCheckIn({ friendName }) {
  const [timeline, setTimeline] = useState([]);

  const handleCheckIn = (type) => {
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      title: `${type} with ${friendName}`,
    };

    setTimeline((prev) => [newEntry, ...prev]);
    alert(`${type} logged!`);
  };

  return (
    <div className="space-y-6">

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="font-semibold mb-4">Quick Check-In</h3>

        <div className="flex gap-3">
          <button onClick={() => handleCheckIn('Call')} className="flex-1 py-2 bg-green-100 text-green-700 rounded-lg">📞 Call</button>
          <button onClick={() => handleCheckIn('Text')} className="flex-1 py-2 bg-blue-100 text-blue-700 rounded-lg">💬 Text</button>
          <button onClick={() => handleCheckIn('Video')} className="flex-1 py-2 bg-purple-100 text-purple-700 rounded-lg">🎥 Video</button>
        </div>
      </div>

      {/* Timeline */}
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
}