'use client';
import { ReactNode, useContext, useEffect, useState } from "react";
import { Header } from "../header/header";
import { DarkAndLightBtn } from "../ui/darkAndLightBtn/darkAndLightBtn";
import LightAndDarkModeContext from "@/context/lightAndDarkMode";
import React from "react";
import Head from 'next/head';

type LayoutChildrenContainerPropsType = {
    children: ReactNode
}

export const LayoutChildrenContainer = ({ children }: LayoutChildrenContainerPropsType) => {

    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        const isDarkStorage = localStorage.getItem("isDark");
        if (isDarkStorage !== null) {
            setIsDark(isDarkStorage === "true");
        }
    }, []);


    return (
        <>

            <LightAndDarkModeContext.Provider value={{ isDark, setIsDark }}>
                <Header />
                <DarkAndLightBtn />
                <main className={isDark ? "darkModeBg darkModeTxt" : "lightModeBg lightModeTxt"}>
                    {children}
                </main>
            </LightAndDarkModeContext.Provider>
        </>
    )
}