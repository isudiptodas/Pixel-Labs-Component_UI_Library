'use client'

import { useEffect, useState } from "react"
import { CiSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function page() {

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
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (sidebarVisible) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "auto";
    }
  }, [sidebarVisible]);

  const steps = [
    { step: "Step 1 :", details: "Initialize your project with vite react or nextjs." },
    { step: "Step 2 :", details: "Select components from a wide variety of list." },
    { step: "Step 3 :", details: "Install core dependencies (if mentioned)." },
    { step: "Step 4 :", details: "Copy component code and paste in your codebase." }
  ];

  return (
    <>
      <div className={`w-full ${dark ? "bg-black" : "bg-white"} min-h-screen flex flex-col justify-start items-center relative overflow-hidden`}>

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
          <Link href='/' className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out cursor-pointer font-semibold text-xl font-Nearo`}>Pixel Labs</Link>

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

        {/* main section */}
        <div className={`w-full px-5 mt-32 lg:mt-28 flex flex-col justify-start items-center`}>
          <h1 className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out text-4xl lg:text-4xl font-Recline font-semibold`}>How to Use ?</h1>

          <div className={`w-full md:w-[70%] py-5 px-8 lg:px-14 mt-5 h-auto flex flex-col justify-start items-center border-t border-t-orange-500 rounded-4xl`}>
            <p className={`w-full text-center text-[12px] lg:text-sm ${dark ? "text-white" : "text-black"} duration-200 ease-in-out`}>Use the best of Pixel Labs.</p>
            <p className={`w-full mt-2 text-center text-[12px] lg:text-sm ${dark ? "text-white" : "text-black"} duration-200 ease-in-out flex justify-center items-center gap-2`}>Start by visiting our <span onClick={() => router.push('/components')} className={`text-orange-500 font-semibold cursor-pointer`}>Components</span>page.</p>

            <div className={`w-full mt-10 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-3`}>
              {steps.map((step, index) => {
                return <div key={index} className={`w-full cursor-pointer rounded-lg flex flex-col justify-center items-center gap-2 px-3 py-3 ${dark ? "bg-zinc-800" : "bg-gray-200"}`}>
                  <p className={`w-full ${dark ? "text-white" : "text-black"} duration-200 ease-in-out font-semibold text-xl`}>{step.step}</p>
                  <p className={`w-full ${dark ? "text-white" : "text-black"} duration-200 ease-in-out text-[12px] md:text-sm`}>{step.details}</p>
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
