"use client";

import { useContext } from "react";
import { TimelineContext } from "@/context/Provider";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const COLORS = [
    "#800080",
    "#10B981",
    "#F59E0B",
];

export default function Stats() {

    const { dataType } = useContext(TimelineContext);

    const counts = dataType.reduce((acc, curr) => {
        const type = curr.type.toLowerCase();

        acc[type] = (acc[type] || 0) + 1;

        return acc;
    }, {});

    const data = [
        {
            name: "Call",
            value: counts.call || 0
        },
        {
            name: "Text",
            value: counts.text || 0
        },
        {
            name: "Video",
            value: counts.video || 0
        }
    ];

    return (
        <div className="container mx-auto my-12">
            <h1 className="text-4xl font-bold mb-8 text-[#1F2937]">
                Friendship Analytics
            </h1>

            <div className="w-full h-112.5 bg-white rounded-2xl shadow p-6">
                <h4 className="text-xl font-semibold mb-4">By Interaction Type</h4>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={80}
                            outerRadius={130}
                            paddingAngle={5}
                            label
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index]}
                                    stroke="white"
                                />
                            ))}
                        </Pie>

                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}