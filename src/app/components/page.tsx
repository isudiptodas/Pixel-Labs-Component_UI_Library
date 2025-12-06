'use client'

import { CiSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonList, notificationList, drawerList, dropdownList, formList } from '@/data/componentList'
import { FaAngleDown } from "react-icons/fa";
import { usePathname } from "next/navigation";

function page() {

    const [currentSelected, setCurrentSelected] = useState(buttonList[0]);
    const [listVisible, setListVisible] = useState(false);
    const pathname = usePathname();

    const [dark, setDark] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") === "dark";
        }
        return false;
    });

    useEffect(() => {
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    }, [dark]);

    const [sidebarVisible, setSidebarVisible] = useState(false);

    useEffect(() => {
        if (sidebarVisible) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
    }, [sidebarVisible]);

    return (
        <>
            <div className={`w-full ${dark ? "bg-black" : "bg-white"} duration-200 ease-in-out h-screen flex flex-col justify-start items-center relative overflow-hidden`}>
                {/* sidebar */}
                <div className={`fixed ${sidebarVisible ? "translate-x-0" : "translate-x-full"} duration-500 ease-in-out rounded-l-3xl top-0 right-0 h-screen overflow-hidden flex flex-col justify-start items-center z-30 w-full bg-linear-to-br from-orange-500 via-orange-700 to-orange-900 shadow-2xl`}>
                    <p className={`text-white py-6 font-semibold text-xl font-Nearo`}>Pixel Labs</p>
                    <div className={`w-[90%] h-0.5 bg-linear-to-r from-transparent via-white to-transparent`} />
                    <span onClick={() => setSidebarVisible(false)} className={`absolute top-8 text-white right-7 text-xl`}><BsLayoutSidebarReverse /></span>

                    <Link href='/' className={`w-full mt-10 py-2 text-start px-5 text-white text-xl font-Recline`}>Home</Link>
                    <Link href='/about' className={`w-full py-2 text-start px-5 text-white text-xl font-Recline`}>About</Link>
                    <Link href='/components' className={`w-full py-2 text-start px-5 text-white text-xl font-Recline`}>Components</Link>
                    <Link href='/how-to-use' className={`w-full py-2 text-start px-5 text-white text-xl font-Recline`}>How to use</Link>
                </div>

                {/* navbar */}
                <div className={`w-[95%] md:w-[75%] lg:w-[70%] z-20 fixed top-5 h-auto backdrop-blur-2xl ${dark ? "bg-black/15" : "bg-white/15"} duration-200 ease-in-out px-5 flex justify-between items-center py-5 lg:py-2 rounded-full border ${dark ? "border-gray-400" : "border-zinc-600"}`}>
                    <Link href='/' className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out font-semibold text-xl cursor-pointer font-Nearo`}>Pixel Labs</Link>

                    <div className={`w-auto lg:hidden flex justify-center items-center gap-5`}>
                        <span onClick={() => { setDark(!dark); }} className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out cursor-pointer text-xl p-2 rounded-full border`}>{dark ? <CiSun /> : <IoMoonOutline />}</span>
                        <span onClick={() => setSidebarVisible(true)} className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out text-2xl cursor-pointer`}><IoMdMenu /></span>
                    </div>

                    <div className={`hidden lg:flex justify-center items-center gap-2`}>
                        <div className={`w-auto group hover:text-white duration-200 ease-in-out rounded-full px-5 py-2 overflow-hidden ${dark ? "text-white" : "text-black"} duration-200 ease-in-out font-Recline text-lg cursor-pointer relative`}>
                            <Link href='/' className={`relative z-20`}>Home</Link>
                            <div className={`absolute z-10 scale-0 group-hover:scale-100 ${pathname === '/' ? "scale-100" : "scale-0"} duration-200 ease-in-out h-44 w-44 top-0 right-0 bg-orange-500`}></div>
                        </div>
                        <div className={`w-auto group hover:text-white duration-200 ease-in-out rounded-full px-5 py-2 overflow-hidden ${dark ? "text-white" : "text-black"} duration-200 ease-in-out font-Recline text-lg cursor-pointer relative`}>
                            <Link href='/about' className={`relative z-20`}>About</Link>
                            <div className={`absolute z-10 scale-0 group-hover:scale-100 ${pathname === '/about' ? "scale-100" : "scale-0"} duration-200 ease-in-out h-44 w-44 top-0 right-0 bg-orange-500`}></div>
                        </div>
                        <div className={`w-auto group hover:text-white duration-200 ease-in-out rounded-full px-4 py-2 overflow-hidden ${dark ? "text-white" : "text-black"} duration-200 ease-in-out font-Recline text-lg cursor-pointer relative`}>
                            <div className={`absolute z-10 scale-0 group-hover:scale-100 ${pathname === '/components' ? "scale-100" : "scale-0"} duration-200 ease-in-out h-44 w-44 top-0 right-0 bg-orange-500`}></div>
                            <Link href='/components' className={`relative z-20`}>Components</Link>
                        </div>
                        <div className={`w-auto group hover:text-white duration-200 ease-in-out rounded-full px-4 py-2 overflow-hidden ${dark ? "text-white" : "text-black"} duration-200 ease-in-out font-Recline text-lg cursor-pointer relative`}>
                            <div className={`absolute z-10 scale-0 group-hover:scale-100 ${pathname === '/how-to-use' ? "scale-100" : "scale-0"} duration-200 ease-in-out h-44 w-44 top-0 right-0 bg-orange-500`}></div>
                            <Link href='/how-to-use' className={`relative z-20`}>How to use</Link>
                        </div>
                        <span onClick={() => { setDark(!dark); }} className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out cursor-pointer text-xl p-2 rounded-full border`}>{dark ? <CiSun /> : <IoMoonOutline />}</span>
                    </div>
                </div>

                {/* component list */}
                <div onClick={() => setListVisible(!listVisible)} className={`w-[95%] md:w-[70%] lg:hidden mt-32 ${listVisible ? "h-[60vh]" : "h-auto"} duration-300 ease-in-out transition-all py-3 px-5 rounded-xl ${dark ? "border border-gray-400" : "border border-zinc-600"} duration-200 ease-in-out flex flex-col justify-start items-center overflow-y-auto scrollbar`}>
                    <p className={`text-orange-500 font-semibold cursor-pointer text-sm w-full flex justify-between items-center`}>{currentSelected} <span className={`${listVisible ? "rotate-180" : "rotate-0"} ${dark ? "text-white" : "text-black"} duration-200 ease-in-out text-lg`}><FaAngleDown /></span></p>
                    <hr className={`w-full my-5 ${listVisible ? "block" : "hidden"} h-[3px] ${dark ? "bg-white" : "bg-black"} opacity-50`} />

                    <div className={`w-full ${listVisible ? "block" : "hidden"} h-auto flex flex-col justify-start items-center scrollbar`}>
                        <p className={`w-full mb-2 text-start text-[18px] font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Buttons</p>
                        {buttonList.map((btn) => {
                            return <span onClick={() => { setCurrentSelected(btn); setListVisible(false) }} key={btn} className={`w-full py-2 px-3 rounded-md ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} cursor-pointer duration-200 ease-in-out text-[12px]`}>{btn}</span>
                        })}
                        <p className={`w-full mb-2 mt-2 text-start text-[18px] font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Form</p>
                        {formList.map((form) => {
                            return <span onClick={() => { setCurrentSelected(form); setListVisible(false) }} key={form} className={`w-full py-2 px-3 rounded-md ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} cursor-pointer duration-200 ease-in-out text-[12px]`}>{form}</span>
                        })}
                        <p className={`w-full mb-2 mt-2 text-start text-[18px] font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Dropdown</p>
                        {dropdownList.map((drop) => {
                            return <span onClick={() => { setCurrentSelected(drop); setListVisible(false) }} key={drop} className={`w-full py-2 px-3 rounded-md ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} cursor-pointer duration-200 ease-in-out text-[12px]`}>{drop}</span>
                        })}
                        <p className={`w-full mb-2 mt-2 text-start text-[18px] font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Notification</p>
                        {notificationList.map((not) => {
                            return <span onClick={() => { setCurrentSelected(not); setListVisible(false) }} key={not} className={`w-full py-2 px-3 rounded-md ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} cursor-pointer duration-200 ease-in-out text-[12px]`}>{not}</span>
                        })}
                        <p className={`w-full mb-2 mt-2 text-start text-[18px] font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Drawer</p>
                        {drawerList.map((drw) => {
                            return <span onClick={() => { setCurrentSelected(drw); setListVisible(false) }} key={drw} className={`w-full py-2 px-3 rounded-md ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} cursor-pointer duration-200 ease-in-out text-[12px]`}>{drw}</span>
                        })}
                    </div>
                </div>

                {/* main section */}
                <div className={`w-full h-[80vh] ${dark ? "bg-black" : "bg-white"} duration-200 ease-in-out relative mt-10 lg:mt-24 flex justify-between items-end pr-7`}>

                    <div className={`h-[15%] hidden lg:block w-[20%] z-20 absolute top-0 bg-linear-to-b from-black to-transparent ${dark ? "opacity-100" : "opacity-0"} duration-200 ease-in-out`}></div>
                    <div className={`h-[15%] hidden lg:block w-[20%] z-20 absolute bottom-0 bg-linear-to-t from-black to-transparent ${dark ? "opacity-100" : "opacity-0"} duration-200 ease-in-out`}></div>

                    {/* sidebar section */}
                    <div className={`w-[20%] hidden h-full relative ${dark ? "bg-black" : "bg-white"} duration-200 ease-in-out overflow-y-auto scrollbar lg:flex flex-col justify-start items-center px-7 pt-10 pb-16`}>

                        <p className={`w-full mb-2 text-start text-[18px] lg:text-xl font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Buttons</p>
                        {buttonList.map((btn) => {
                            return <span onClick={() => { setCurrentSelected(btn); setListVisible(false) }} key={btn} className={`w-full py-2 px-3 rounded-full ${currentSelected === btn ? "bg-linear-to-br from-orange-400 via-orange-600 to-orange-800 text-white font-semibold" : ""} ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} hover:px-5 cursor-pointer duration-200 ease-in-out text-[12px]`}>{btn}</span>
                        })}
                        <p className={`w-full mb-2 mt-2 text-start text-[18px] lg:text-xl font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Form</p>
                        {formList.map((form) => {
                            return <span onClick={() => { setCurrentSelected(form); setListVisible(false) }} key={form} className={`w-full py-2 px-3 rounded-full ${currentSelected === form ? "bg-linear-to-br from-orange-400 via-orange-600 to-orange-800 text-white font-semibold" : ""} ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} hover:px-5 cursor-pointer duration-200 ease-in-out text-[12px]`}>{form}</span>
                        })}
                        <p className={`w-full mb-2 mt-2 text-start text-[18px] lg:text-xl font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Dropdown</p>
                        {dropdownList.map((drop) => {
                            return <span onClick={() => { setCurrentSelected(drop); setListVisible(false) }} key={drop} className={`w-full py-2 px-3 rounded-full ${currentSelected === drop ? "bg-linear-to-br from-orange-400 via-orange-600 to-orange-800 text-white font-semibold" : ""} ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} hover:px-5 cursor-pointer duration-200 ease-in-out text-[12px]`}>{drop}</span>
                        })}
                        <p className={`w-full mb-2 mt-2 text-start text-[18px] lg:text-xl font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Notification</p>
                        {notificationList.map((not) => {
                            return <span onClick={() => { setCurrentSelected(not); setListVisible(false) }} key={not} className={`w-full py-2 px-3 rounded-full ${currentSelected === not ? "bg-linear-to-br from-orange-400 via-orange-600 to-orange-800 text-white font-semibold" : ""} ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} hover:px-5 cursor-pointer duration-200 ease-in-out text-[12px]`}>{not}</span>
                        })}
                        <p className={`w-full mb-2 mt-2 text-start text-[18px] lg:text-xl font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Drawer</p>
                        {drawerList.map((drw) => {
                            return <span onClick={() => { setCurrentSelected(drw); setListVisible(false) }} key={drw} className={`w-full py-2 px-3 rounded-full ${currentSelected === drw ? "bg-linear-to-br from-orange-400 via-orange-600 to-orange-800 text-white font-semibold" : ""} ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} hover:px-5 cursor-pointer duration-200 ease-in-out text-[12px]`}>{drw}</span>
                        })}
                    </div>

                    {/* main content section */}
                    <div className={`w-[95%] ${dark ? "lg:bg-black" : "lg:bg-gray-100"} duration-200 ease-in-out rounded-xl h-full flex flex-col justify-start items-center`}>
                        <h1 className={`w-full py-3 px-5 lg:px-7 lg:py-6 text-3xl md:text-4xl font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>{currentSelected}</h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default page
