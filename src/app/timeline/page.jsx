"use client";

import { TimelineContext } from "@/context/Provider";
import { useContext } from "react";

const Timeline = () => {

    const { timeline } = useContext(TimelineContext);

    console.log(timeline, "time line timeline");


    return (
        <div className="container mx-auto">
            <div className="bg-[#F8FAFC] p-5 rounded-xl shadow">
                <h3 className="text-3xl font-bold my-8">Timeline</h3>

                <select defaultValue="Pick a color" className="select my-8">
                    <option >Filter timeline</option>
                    <option>Text</option>
                    <option>Call</option>
                    <option>Video</option>
                </select>

                {timeline.length === 0 ? (
                    <p className="h-52 text-center pt-10 font-bold text-xl text-gray-500">No interactions yet</p>
                ) : (
                    <div className="space-y-5">
                        {timeline.map((item) => (
                            <div key={item.id} className="bg-white rounded-xl border-l-2 pl-3">
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