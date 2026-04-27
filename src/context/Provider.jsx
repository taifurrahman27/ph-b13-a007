"use client"

import { createContext, useState } from "react";

export const TimelineContext = createContext();
const ContextProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([]);
    const [dataType, setDataType] = useState([]);
    return (
        <TimelineContext.Provider value={{ timeline, setTimeline, dataType, setDataType }}>
            {children}
        </TimelineContext.Provider>
    );
};

export default ContextProvider;