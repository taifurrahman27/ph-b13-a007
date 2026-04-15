"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ImStatsDots } from "react-icons/im";
import { IoHome, IoTimerOutline } from "react-icons/io5";

const MyLink = ({ href, children }) => {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={`flex items-center gap-2 ${pathname === href ? "bg-[#244D3F] text-white font-bold p-2" : ""}`}
        >{href === "/" ? <IoHome /> : ""}
            {href === "/timeline" ? <IoTimerOutline /> : ""}
            {href === "/stats" ? <ImStatsDots /> : ""}
            {children}
        </Link>
    );
};

export default MyLink;