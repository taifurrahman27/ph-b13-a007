"use client"

import { createContext, useState } from "react";

export const TimelineContext = createContext();
const ContextProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([]);
    return (
        <TimelineContext.Provider value={{ timeline, setTimeline }}>
            {children}
        </TimelineContext.Provider>
    );
};

export default ContextProvider;