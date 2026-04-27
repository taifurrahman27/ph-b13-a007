'use client';

import { TimelineContext } from "@/context/Provider";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function QuickCheckIn({ friendName }) {

  const { timeline, setTimeline, dataType, setDataType } = useContext(TimelineContext);


  const handleCheckIn = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      title: `${type} with ${friendName}`,
    };

    const typeData = { type, friendName, date: newEntry.date };
    setDataType((prev) => [...prev, typeData]);

    setTimeline((prev) => [newEntry, ...prev]);
    toast(`${type} logged!`);
  };

  console.log(timeline, "Timeline");
  console.log(dataType, "Data Type");

  return (
    <div className="space-y-6">

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="font-semibold mb-4">Quick Check-In</h3>

        <div className="flex gap-3">
          <button onClick={() => handleCheckIn('Call', friendName)} className="flex-1 py-2 bg-green-100 text-green-700 rounded-lg">📞 Call</button>
          <button onClick={() => handleCheckIn('Text', friendName)} className="flex-1 py-2 bg-blue-100 text-blue-700 rounded-lg">💬 Text</button>
          <button onClick={() => handleCheckIn('Video', friendName)} className="flex-1 py-2 bg-purple-100 text-purple-700 rounded-lg">🎥 Video</button>
        </div>
      </div>

    </div>
  );
}