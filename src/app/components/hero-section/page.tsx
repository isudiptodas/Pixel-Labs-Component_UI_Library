'use client'

import { useSearchParams } from 'next/navigation';
import { Activity, Suspense, useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function Hero1() {

    const [sidebarVisible, setSidebarVisible] = useState(false);

    const pricingDetails = [
        {
            price: "49",
            plan: "Starter",
            description:
                "Perfect for individuals and small teams getting started. Includes core features, basic analytics, and standard support to help you launch quickly."
        },
        {
            price: "99",
            plan: "Pro",
            description:
                "Designed for growing businesses that need advanced tools, priority support, automation features, and enhanced performance for daily operations."
        },
        {
            price: "199",
            plan: "Enterprise",
            description:
                "Built for large teams and organizations requiring full scalability, custom integrations, dedicated support, and robust security solutions."
        }
    ];


    return (
        <>
            <div className={`w-full h-screen bg-zinc-950 relative flex flex-col justify-start items-center overflow-x-hidden overflow-y-auto pb-12`}>

                {/* mobile sidebar */}
                <div className={`w-full ${sidebarVisible ? "translate-y-0" : "-translate-y-full"} duration-500 ease-in-out h-screen flex flex-col justify-start items-center rounded-b-3xl absolute bg-white z-30`}>
                    <span onClick={() => setSidebarVisible(false)} className={`absolute right-5 top-5 text-4xl `}><RxCross2 /></span>
                    <div className={`w-full px-5 flex flex-col justify-start items-center mt-14`}>
                        <p className={`w-full text-start text-black text-4xl border-b border-gray-500 py-5`}>About</p>
                        <p className={`w-full text-start text-black text-4xl border-b border-gray-500 py-5`}>Components</p>
                        <p className={`w-full text-start text-black text-4xl border-b border-gray-500 py-5`}>Privacy</p>
                        <p className={`w-full text-start text-black text-4xl border-b border-gray-500 py-5`}>Contact</p>
                    </div>
                </div>

                {/* top image section */}
                <div className={`min-h-[50vh] pb-10 bg-zinc-950 rounded-b-3xl w-full flex flex-col justify-start items-start md:items-center relative overflow-hidden`}>

                    {/* top navbar */}
                    <nav className={`w-[95%] lg:w-[70%] z-20 absolute -translate-x-1/2 left-1/2 top-5 backdrop-blur-2xl bg-black/20 rounded-full py-2 h-auto px-3 lg:px-5 flex justify-between items-center`}>
                        <p className={`text-white text-sm lg:text-lg`}>PixelLab UI</p>
                        <div className={`hidden lg:flex justify-center items-center gap-5 px-3`}>
                            <p className={`text-white text-sm cursor-pointer`}>About</p>
                            <p className={`text-white text-sm cursor-pointer`}>Components</p>
                            <p className={`text-white text-sm cursor-pointer`}>Privacy</p>
                            <p className={`text-white text-sm cursor-pointer`}>Contact</p>
                        </div>
                        <span onClick={() => setSidebarVisible(true)} className={`text-black bg-white p-2 rounded-full lg:hidden text-sm md:text-lg`}><CiMenuFries /></span>
                    </nav>

                    <h1 className={`w-full text-start md:text-center px-4 lg:px-10 z-20 text-white font-bold text-5xl md:text-7xl mt-24 lg:mt-28`}>Pre-Built Components</h1>
                    <p className={`w-full text-start md:text-center px-4 lg:px-11 z-20 text-white text-xl md:text-3xl mt-2`}>Make development faster</p>

                    <div className={`w-auto ml-5 z-20 mt-32 lg:mt-20 xl:mt-14 rounded-full flex justify-start items-center bg-white p-0.5`}>
                        <p className={`w-auto px-5 flex justify-center items-center gap-2 text-black text-sm cursor-pointer`}>Docs <FaLocationArrow /></p>
                        <p className={`w-auto text-white px-5 py-2 cursor-pointer rounded-full bg-black`}>Get Started</p>
                    </div>
                    <img src="https://images.pexels.com/photos/2983141/pexels-photo-2983141.jpeg" className={` opacity-70 absolute z-10 w-full object-cover`} />
                </div>

                {/* pricing section */}
                <div className={`w-full px-5 h-auto flex flex-col justify-start items-center relative py-10`}>
                    <h1 className={`w-full text-gray-500 text-8xl xl:text-[140px] font-mono text-center font-bold`}>PRICING</h1>

                    <div className={`w-full mt-5 md:mt-0 md:absolute md:top-24 lg:top-28 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5 px-5`}>
                        {pricingDetails.map((data, index) => {
                            return <div key={index} className={`w-full rounded-xl backdrop-blur-sm bg-white/10 flex flex-col justify-start items-start px-5 py-5`}>
                                <h1 className={`w-full text-start text-5xl font-mono text-white font-bold flex justify-start items-end gap-2`}>${data.price} <span className={`text-lg pb-2 text-white`}>/month</span></h1>
                                <p className={`w-auto mt-3 px-5 py-1 rounded-full bg-white text-[12px] md:text-sm text-black`}>{data.plan}</p>
                                <p className={`w-full text-start mt-5 py-2 rounded-full text-[12px] md:text-sm text-white`}>{data.description}</p>

                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

function MainSection() {

    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    return (
        <>
            <div className={`w-full h-auto relative overflow-hidden`}>
                <Activity mode={id === 'type1' ? "visible" : "hidden"}>
                    <Hero1 />
                </Activity>
            </div>
        </>
    )
}

function page() {

    return (
        <>
            <Suspense fallback={"Loading..."}>
                <MainSection />
            </Suspense>
        </>
    )
}

export default page
