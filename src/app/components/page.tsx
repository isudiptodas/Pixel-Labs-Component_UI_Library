'use client'

import { CiSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import Link from "next/link";
import { Activity, ReactElement, useEffect, useState } from "react";
import { buttonList, drawerList, dropdownList, formList, cardList, accordianList } from '@/data/componentList'
import { FaAngleDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { buttonComponent } from "@/data/buttonComponent";
import { IoCopyOutline } from "react-icons/io5";
import axios from "axios";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight, irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { formComponent } from "@/data/formComponent";
import { dropdownComponent } from "@/data/dropdownComponent";
import { drawerComponent } from "@/data/drawerComponent";
import { cardsComponent } from "@/data/cardsComponent";
import { motion } from 'framer-motion';
import { accordianComponent } from "@/data/accordianComponent";

interface currentComponent {
    name: string,
    desc: string,
    codePage: string,
    codePath: string,
    steps?: { name: string, command?: string }[] | null,
    demo?: ReactElement,
    usage: string,
    props?: { name: string, desc: string, example: string }[]
}

function page() {

    const [currentSelected, setCurrentSelected] = useState(buttonList[0]);
    const [listVisible, setListVisible] = useState(false);
    const [currentType, setCurrentType] = useState('button');
    const [viewType, setViewType] = useState('demo');
    const [currentCode, setCurrentCode] = useState<string>('');
    const [currentComponent, setCurrentComponent] = useState<currentComponent | null>(buttonComponent[0]);
    const pathname = usePathname();

    // find type of component and set in currentComponent
    useEffect(() => {
        if (currentType === 'button') {
            const currentName = currentSelected;
            const data = buttonComponent.filter((btn) => btn.name.toLowerCase() === currentName.toLowerCase());
            setCurrentComponent(data[0] as currentComponent);
        }
        else if (currentType === 'form') {
            const currentName = currentSelected;
            const data = formComponent.filter((form) => form.name.toLowerCase() === currentName.toLowerCase());
            setCurrentComponent(data[0] as currentComponent);
        }
        else if (currentType === 'dropdown') {
            const currentName = currentSelected;
            const data = dropdownComponent.filter((drop) => drop.name.toLowerCase() === currentName.toLowerCase());
            setCurrentComponent(data[0] as currentComponent);
        }
        else if (currentType === 'drawer') {
            const currentName = currentSelected;
            const data = drawerComponent.filter((draw) => draw.name.toLowerCase() === currentName.toLowerCase());
            setCurrentComponent(data[0] as currentComponent);
        }
        else if (currentType === 'cards') {
            const currentName = currentSelected;
            const data = cardsComponent.filter((card) => card.name.toLowerCase() === currentName.toLowerCase());
            setCurrentComponent(data[0] as currentComponent);
        }
        else if (currentType === 'accordian') {
            const currentName = currentSelected;
            const data = accordianComponent.filter((acc) => acc.name.toLowerCase() === currentName.toLowerCase());
            setCurrentComponent(data[0] as currentComponent);
        }
    }, [currentSelected]);

    // after finding current component fetch code block
    useEffect(() => {
        if (!currentComponent?.codePath) {
            return;
        }

        const fetchCode = async () => {
            const path = currentComponent.codePath;
            try {
                const res = await axios.post(`/api/readFile`, {
                    filePath: path,
                });
                setCurrentCode(res.data.code);
            } catch (err: any) {
            }
        }

        fetchCode();
    }, [currentComponent]);

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
                <div onClick={() => setListVisible(!listVisible)} className={`w-[95%] md:w-[70%] lg:hidden mt-32 ${listVisible ? "h-[60vh]" : "h-auto"} duration-300 ease-in-out py-3 px-5 rounded-xl ${dark ? "border border-gray-400" : "border border-zinc-600"} duration-200 ease-in-out flex flex-col justify-start items-center`}>
                    <p className={`text-orange-500 font-semibold cursor-pointer text-sm w-full flex justify-between items-center`}>{currentSelected} <span className={`${listVisible ? "rotate-180" : "rotate-0"} ${dark ? "text-white" : "text-black"} duration-200 ease-in-out text-lg`}><FaAngleDown /></span></p>
                    <motion.hr
                        initial={{ height: '0px', opacity: 0 }}
                        animate={{
                            height: listVisible ? "1px" : "0px",
                            marginBottom: listVisible ? "20px" : "0px",
                            marginTop: listVisible ? "20px" : "0px",
                            opacity: listVisible ? 0.5 : 0
                        }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className={`w-full ${dark ? "bg-white" : "bg-black"}`} />

                    <motion.div
                        initial={{ height: '0px' }}
                        animate={{
                            height: listVisible ? "40vh" : "0px",
                        }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }} className={`w-full flex flex-col justify-start items-center overflow-y-auto scrollbar`}>
                        <p className={`w-full mb-2 text-start text-[18px] font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Buttons</p>
                        {buttonList.map((btn) => {
                            return <span onClick={() => { setCurrentSelected(btn); setListVisible(false); setCurrentType('button') }} key={btn} className={`w-full py-2 px-3 rounded-md ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} cursor-pointer duration-200 ease-in-out text-[12px]`}>{btn}</span>
                        })}
                        <p className={`w-full mb-2 mt-2 text-start text-[18px] font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Form</p>
                        {formList.map((form) => {
                            return <span onClick={() => { setCurrentSelected(form); setListVisible(false); setCurrentType('form') }} key={form} className={`w-full py-2 px-3 rounded-md ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} cursor-pointer duration-200 ease-in-out text-[12px]`}>{form}</span>
                        })}
                        <p className={`w-full mb-2 mt-2 text-start text-[18px] font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Dropdown</p>
                        {dropdownList.map((drop) => {
                            return <span onClick={() => { setCurrentSelected(drop); setListVisible(false); setCurrentType('dropdown') }} key={drop} className={`w-full py-2 px-3 rounded-md ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} cursor-pointer duration-200 ease-in-out text-[12px]`}>{drop}</span>
                        })}
                        <p className={`w-full mb-2 mt-2 text-start text-[18px] font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Drawer</p>
                        {drawerList.map((drw) => {
                            return <span onClick={() => { setCurrentSelected(drw); setListVisible(false); setCurrentType('drawer') }} key={drw} className={`w-full py-2 px-3 rounded-md ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} cursor-pointer duration-200 ease-in-out text-[12px]`}>{drw}</span>
                        })}
                        <p className={`w-full mb-2 mt-2 text-start text-[18px] font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Cards</p>
                        {cardList.map((card) => {
                            return <span onClick={() => { setCurrentSelected(card); setListVisible(false); setCurrentType('cards') }} key={card} className={`w-full py-2 px-3 rounded-md ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} cursor-pointer duration-200 ease-in-out text-[12px]`}>{card}</span>
                        })}
                        <p className={`w-full mb-2 mt-2 text-start text-[18px] font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Accordian</p>
                        {accordianList.map((acc) => {
                            return <span onClick={() => { setCurrentSelected(acc); setListVisible(false); setCurrentType('accordian') }} key={acc} className={`w-full py-2 px-3 rounded-md ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} cursor-pointer duration-200 ease-in-out text-[12px]`}>{acc}</span>
                        })}
                    </motion.div>
                </div>

                {/* main section */}
                <div className={`w-full h-[80vh] lg:h-[75vh] ${dark ? "bg-black" : "bg-white"} duration-200 ease-in-out relative mt-10 lg:mt-32 flex flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-end px-2 lg:px-0`}>

                    <div className={`h-[15%] hidden lg:block w-[20%] z-20 absolute top-0 bg-linear-to-b from-black to-transparent ${dark ? "opacity-100" : "opacity-0"} duration-200 ease-in-out`}></div>
                    <div className={`h-[15%] hidden lg:block w-[20%] z-20 absolute bottom-0 bg-linear-to-t from-black to-transparent ${dark ? "opacity-100" : "opacity-0"} duration-200 ease-in-out`}></div>

                    {/* sidebar section */}
                    <div className={`w-[20%] hidden h-full relative ${dark ? "bg-black" : "bg-white"} duration-200 ease-in-out overflow-y-auto scrollbar lg:flex flex-col justify-start items-center px-7 pt-10 pb-16`}>

                        <p className={`w-full mb-2 text-start text-[18px] lg:text-xl font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Buttons</p>
                        {buttonList.map((btn) => {
                            return <span onClick={() => { setCurrentSelected(btn); setListVisible(false); setCurrentType('button') }} key={btn} className={`w-full py-2 px-3 rounded-full ${currentSelected === btn ? "bg-linear-to-br from-orange-400 via-orange-600 to-orange-800 text-white font-semibold" : ""} ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} hover:px-5 cursor-pointer duration-200 ease-in-out text-[10px] xl:text-[12px]`}>{btn}</span>
                        })}
                        <p className={`w-full mb-2 mt-2 text-start text-[18px] lg:text-xl font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Form</p>
                        {formList.map((form) => {
                            return <span onClick={() => { setCurrentSelected(form); setListVisible(false); setCurrentType('form') }} key={form} className={`w-full py-2 px-3 rounded-full ${currentSelected === form ? "bg-linear-to-br from-orange-400 via-orange-600 to-orange-800 text-white font-semibold" : ""} ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} hover:px-5 cursor-pointer duration-200 ease-in-out text-[10px] xl:text-[12px]`}>{form}</span>
                        })}
                        <p className={`w-full mb-2 mt-2 text-start text-[18px] lg:text-xl font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Dropdown</p>
                        {dropdownList.map((drop) => {
                            return <span onClick={() => { setCurrentSelected(drop); setListVisible(false); setCurrentType('dropdown') }} key={drop} className={`w-full py-2 px-3 rounded-full ${currentSelected === drop ? "bg-linear-to-br from-orange-400 via-orange-600 to-orange-800 text-white font-semibold" : ""} ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} hover:px-5 cursor-pointer duration-200 ease-in-out text-[10px] xl:text-[12px]`}>{drop}</span>
                        })}
                        <p className={`w-full mb-2 mt-2 text-start text-[18px] lg:text-xl font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Drawer</p>
                        {drawerList.map((drw) => {
                            return <span onClick={() => { setCurrentSelected(drw); setListVisible(false); setCurrentType('drawer') }} key={drw} className={`w-full py-2 px-3 rounded-full ${currentSelected === drw ? "bg-linear-to-br from-orange-400 via-orange-600 to-orange-800 text-white font-semibold" : ""} ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} hover:px-5 cursor-pointer duration-200 ease-in-out text-[10px] xl:text-[12px]`}>{drw}</span>
                        })}
                        <p className={`w-full mb-2 mt-2 text-start text-[18px] lg:text-xl font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Cards</p>
                        {cardList.map((card) => {
                            return <span onClick={() => { setCurrentSelected(card); setListVisible(false); setCurrentType('cards') }} key={card} className={`w-full py-2 px-3 rounded-full ${currentSelected === card ? "bg-linear-to-br from-orange-400 via-orange-600 to-orange-800 text-white font-semibold" : ""} ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} hover:px-5 cursor-pointer duration-200 ease-in-out text-[10px] xl:text-[12px]`}>{card}</span>
                        })}
                        <p className={`w-full mb-2 mt-2 text-start text-[18px] lg:text-xl font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Accordian</p>
                        {accordianList.map((acc) => {
                            return <span onClick={() => { setCurrentSelected(acc); setListVisible(false); setCurrentType('accordian') }} key={acc} className={`w-full py-2 px-3 rounded-full ${currentSelected === acc ? "bg-linear-to-br from-orange-400 via-orange-600 to-orange-800 text-white font-semibold" : ""} ${dark ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-200"} hover:px-5 cursor-pointer duration-200 ease-in-out text-[10px] xl:text-[12px]`}>{acc}</span>
                        })}
                    </div>

                    {/* main content section */}
                    <div className={`w-[95%] h-auto z-20 lg:border-l-2 ${dark ? "border-l-zinc-700" : " border-l-gray-300"} duration-200 ease-in-out rounded-2xl h-full flex flex-col lg:flex-row justify-start lg:justify-between items-center overflow-y-auto scrollbar pb-10 lg:pb-0`}>
                        {/* code section */}
                        <div className={`w-full rounded-2xl lg:border-r-2 ${dark ? "border-r-zinc-700" : "border-r-gray-300"} lg:w-[70%] h-auto lg:h-full lg:px-10 pt-5 flex flex-col justify-start items-center lg:overflow-y-auto scrollbar pb-10`}>
                            <h1 className={`w-full text-3xl font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>{currentComponent?.name}</h1>
                            <p className={`w-full text-[12px] lg:text-sm mt-1 mb-3 italic ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>{currentComponent?.desc}</p>
                            <div className={`w-full py-5 flex justify-start items-center gap-2`}>
                                <span onClick={() => setViewType('demo')} className={`w-auto cursor-pointer active:scale-95 border-2 ${viewType === 'demo' ? ` ${dark ? "bg-zinc-800 text-white border-zinc-700" : "bg-gray-100 text-black border-gray-200"}` : `${dark ? "border-transparent text-white bg-transparent" : "bg-transparent text-black border-transparent"}`} text-[12px] md:text-sm duration-200 ease-in-out px-4 py-1 `}>Demo</span>
                                <span onClick={() => setViewType('code')} className={`w-auto cursor-pointer active:scale-95 border-2 ${viewType === 'code' ? ` ${dark ? "bg-zinc-800 text-white border-zinc-700" : "bg-gray-100 text-black border-gray-200"}` : `${dark ? "border-transparent text-white bg-transparent" : "bg-transparent text-black border-transparent"}`} text-[12px] md:text-sm duration-200 ease-in-out px-4 py-1 `}>Code</span>
                            </div>

                            <Activity mode={viewType === 'code' ? "visible" : "hidden"}>
                                <p className={`w-full ${dark ? "text-white" : "text-black"} opacity-60 text-[12px] lg:text-sm px-2 duration-200 ease-in-out italic text-start pb-2`}>{currentComponent?.codePage}</p>
                                <div className={`w-full min-h-[40vh] overflow-auto scrollbar ${dark ? "bg-black text-white border-zinc-800" : "bg-white border-gray-300 text-black"} border duration-200 ease-in-out rounded-2xl relative py-4 px-4`}>
                                    <span onClick={() => navigator.clipboard.writeText(currentCode as string)} className={`absolute right-3 active:opacity-40 duration-200 ease-in-out text-sm lg:text-lg cursor-pointer ${dark ? "text-white" : "text-black"} opacity-50`}><IoCopyOutline /></span>
                                    <SyntaxHighlighter customStyle={{
                                        scrollbarWidth: "none",
                                        msOverflowStyle: "none"
                                    }} style={dark ? irBlack : a11yLight} language="javascript">{currentCode}</SyntaxHighlighter>
                                </div>
                            </Activity>
                            <Activity mode={viewType === 'demo' ? "visible" : "hidden"}>
                                <div className={`w-full h-auto ${dark ? "bg-black text-white border-zinc-800" : "bg-white border-gray-300 text-black"} duration-200 ease-in-out border rounded-2xl relative flex justify-center items-center py-4 px-4`}>
                                    {currentComponent?.demo}
                                </div>
                            </Activity>

                            <h1 className={`w-full mt-5 text-3xl font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Usage</h1>
                            <p className={`w-full mt-5 text-[12px] lg:text-sm ${dark ? "text-white bg-zinc-800" : "text-black bg-gray-200"} duration-200 ease-in-out px-3 py-2 rounded-md font-mono`}>{currentComponent?.usage}</p>

                            <h1 className={`w-full mt-7 mb-3 text-3xl font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out ${currentComponent?.props && currentComponent.props.length > 0 ? "block" : "hidden"}`}>Props</h1>
                            {currentComponent?.props && currentComponent.props.map((prop, index) => {
                                return <table key={index} className={`w-full flex flex-col justify-start items-center border rounded-t-lg border-zinc-500`}>
                                    <tr className={`w-full py-2 px-3 lg:px-5 rounded-t-lg ${dark ? "bg-zinc-800" : "bg-gray-200"} duration-200 ease-in-out flex justify-start items-start`}>
                                        <th className={`${dark ? "text-white" : "text-black"} text-start duration-200 ease-in-out text-sm w-[20%]`}>Name</th>
                                        <th className={`${dark ? "text-white" : "text-black"} text-start duration-200 ease-in-out text-sm w-[60%]`}>Description</th>
                                        <th className={`${dark ? "text-white" : "text-black"} text-start duration-200 ease-in-out text-sm w-[35%]`}>Example</th>
                                    </tr>
                                    <tr className={`w-full py-2 px-3 lg:px-5 flex justify-start items-center`}>
                                        <td className={`${dark ? "text-white" : "text-black"} text-start duration-200 ease-in-out text-[10px] pr-4 lg:text-[12px] w-[20%]`}>{prop.name}</td>
                                        <td className={`${dark ? "text-white" : "text-black"} text-start duration-200 ease-in-out text-[10px] lg:text-[12px] pr-5 w-[60%]`}>{prop.desc}</td>
                                        <td className={`${dark ? "text-white" : "text-black"} text-start duration-200 ease-in-out font-mono text-[10px] lg:text-[12px] w-[35%]`}>{prop.example}</td>
                                    </tr>
                                </table>
                            })}
                        </div>

                        {/* steps section */}
                        <div className={`w-full mt-5 lg:mt-0 lg:w-[30%] h-full lg:px-6 pt-5 pb-16 flex flex-col justify-start items-center`}>
                            <h1 className={`w-full mb-5 text-start lg:text-center text-3xl font-semibold ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Steps</h1>
                            {currentComponent?.steps?.map((step, index) => {
                                return <div key={index} className={`w-full flex flex-col justify-start items-center`}>
                                    <p className={`w-full text-start ${dark ? "text-white" : "text-black"} duration-200 ease-in-out text-[12px]`}>{step.name}</p>
                                    <p className={`w-full text-start ${step.command ? "block" : "hidden"} ${dark ? "text-white bg-zinc-800" : "text-black bg-gray-200"} md:py-2 py-3 px-3 rounded-md z-10 my-2 duration-200 ease-in-out font-mono text-[12px] relative`}>{step?.command}
                                        <span onClick={() => navigator.clipboard.writeText(step?.command as string)} className={`absolute right-3 z-20 active:opacity-40 duration-200 ease-in-out text-sm cursor-pointer ${dark ? "text-white" : "text-black"} opacity-50`}><IoCopyOutline /></span>
                                    </p>
                                </div>
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default page
