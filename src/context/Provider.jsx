"use client"


import { createContext, useState } from "react";

const context = createContext();
const Provider = ({ children }) => {
    const [state, setState] = useState();
    const value = { state, setState };
    return (
        <context.Provider value={value}>
            {children}
        </context.Provider>
    );
};

export default Provider;