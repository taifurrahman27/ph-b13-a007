"use client";

import { TimelineContext } from "@/context/Provider";
import { useContext, useState } from "react";

const Timeline = () => {
  const { timeline } = useContext(TimelineContext);

  const [filter, setFilter] = useState("all");

  const filteredTimeline =
    filter === "all"
      ? timeline
      : timeline.filter(
          (item) => item.type?.toLowerCase() === filter
        );

  return (
    <div className="container mx-auto">
      <div className="bg-[#F8FAFC] p-6 rounded-2xl shadow">

        <h3 className="text-3xl font-bold my-8">
          Timeline
        </h3>

        <div className="mb-8">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="select select-bordered bg-white"
          >
            <option value="all">All Interactions</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>
        </div>

        {filteredTimeline.length === 0 ? (
          <p className="h-52 text-center pt-10 font-bold text-xl text-gray-500">
            No interactions found
          </p>
        ) : (
          <div className="space-y-5">
            {filteredTimeline.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border-l-4 p-4 shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium">
                    {item.title}
                  </p>

                  <span
                    className={`text-xs px-3 py-1 rounded-full
                    ${
                      item.type === "call"
                        ? "bg-blue-100 text-blue-600"
                        : item.type === "text"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>

                <p className="text-xs text-gray-400 mt-2">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;