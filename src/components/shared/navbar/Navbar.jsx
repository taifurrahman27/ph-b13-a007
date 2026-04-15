import React from "react";

import MyLink from "./MyLink";
import Image from "next/image";

const Navbar = () => {
    const navItems = [
        {
            path: "/",
            text: "Home",
        },
        {
            path: "/timeline",
            text: "Timeline",
        },
        {
            path: "/stats",
            text: "Stats",
        },

    ];

    return (
        <nav className="shadow">
            <div className="flex justify-between gap-4 items-center py-2 container mx-auto">
                <Image
                    src="/assets/logo.png"
                    alt="KeenKeep"
                    height="50"
                    width="100"
                />


                <ul className="flex justify-between gap-4 rounded-xl items-center">
                    {navItems.map((item, index) => (
                        <MyLink key={index} href={item.path}>
                            {item.text}
                        </MyLink>
                    ))}


                </ul>

            </div>
        </nav>
    );
};

export default Navbar;