'use client'

import { useEffect, useState } from "react"
import { CiSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { usePathname, useRouter } from "next/navigation";
import { motion } from 'framer-motion';

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

  return (
    <>
      <div className={`w-full ${dark ? "bg-black" : "bg-white"} min-h-screen flex flex-col justify-start items-center relative overflow-hidden scrollbar`}>

        {/* sidebar */}
        <div className={`fixed ${sidebarVisible ? "translate-x-0" : "translate-x-full"} duration-500 ease-in-out rounded-l-3xl top-0 right-0 h-screen overflow-hidden flex flex-col justify-start items-center z-30 w-full bg-linear-to-br from-orange-500 via-orange-700 to-orange-900 shadow-2xl`}>
          <p className={`text-white py-6 font-semibold text-xl font-Nearo`}>Pixel Labs</p>
          <div className={`w-[90%] h-0.5 bg-linear-to-r from-transparent via-white to-transparent`} />
          <span onClick={() => setSidebarVisible(false)} className={`absolute top-8 text-white right-7 text-xl`}><BsLayoutSidebarReverse /></span>

          <Link href='/' className={`w-full mt-10 py-2 text-start px-5 text-white text-4xl font-Recline`}>Home</Link>
          <Link href='/about' className={`w-full py-2 text-start px-5 text-white text-4xl font-Recline`}>About</Link>
          <Link href='/components' className={`w-full py-2 text-start px-5 text-white text-4xl font-Recline`}>Components</Link>
          <Link href='/how-to-use' className={`w-full py-2 text-start px-5 text-white text-4xl font-Recline`}>How to use</Link>
          <Link href='/license' className={`w-full py-2 text-start px-5 text-white text-4xl font-Recline`}>License</Link>
        </div>

        {/* navbar */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`w-[95%] lg:w-[90%] z-20 fixed top-5 h-auto backdrop-blur-2xl ${dark ? "bg-black/15" : "bg-white/15"} duration-200 ease-in-out px-5 flex justify-between items-center py-5 lg:py-2 rounded-full border ${dark ? "border-gray-400" : "border-zinc-600"}`}>
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
            <div className={`w-auto mr-3 group hover:text-white duration-200 ease-in-out rounded-full px-4 py-2 overflow-hidden ${dark ? "text-white" : "text-black"} duration-200 ease-in-out font-Recline text-lg cursor-pointer relative`}>
              <div className={`absolute z-10 scale-0 group-hover:scale-100 ${pathname === '/license' ? "scale-100" : "scale-0"} duration-200 ease-in-out h-44 w-44 top-0 right-0 bg-orange-500`}></div>
              <Link href='/license' className={`relative z-20`}>License</Link>
            </div>
            <span onClick={() => { setDark(!dark); }} className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out cursor-pointer text-xl p-2 rounded-full border`}>{dark ? <CiSun /> : <IoMoonOutline />}</span>
          </div>
        </motion.div>

        {/* hero section */}
        <div className={`w-full px-5 h-auto mt-32 md:mt-36 flex flex-col justify-start items-center scrollbar`}>
          <motion.h1
            initial={{ filter: 'blur(10px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className={`w-full text-6xl md:text-7xl lg:text-8xl xl:text-[110px] text-center font-bold ${dark ? "bg-linear-to-b from-white via-gray-500 to-zinc-800 bg-clip-text text-transparent" : "bg-linear-to-b from-black via-zinc-700 to-zinc-200 bg-clip-text text-transparent"} duration-200 ease-in-out`}>Build Websites 10x Faster</motion.h1>
          <motion.p
            initial={{ filter: 'blur(10px)', opacity: 0, y: '-20px' }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: '-0px' }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className={`w-full z-10 text-center ${dark ? "text-white" : "text-black"} px-10 md:px-20 lg:px-28 duration-200 ease-in-out font-semibold mt-5 text-[12px] md:text-lg opacity-60 italic lg:text-xl`}>A react based component UI library powered with TailwindCSS, Motion (formerly Framer Motion)</motion.p>
          <motion.p
            onClick={() => router.push('/components')}
            initial={{ filter: 'blur(10px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className={`w-auto px-5 py-2 rounded-full bg-linear-to-br from-orange-400 to-orange-600 mt-7 active:opacity-75 duration-150 ease-in-out text-sm cursor-pointer font-Recline text-white`}>Get Started</motion.p>

          {/* tech icons */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className={`w-full mt-5 flex justify-center items-center gap-4`}>
            <div className={`flex justify-center items-center gap-2`}>
              <span className={`text-xl ${dark ? "text-white" : "text-black"} duration-200 ease-in-out opacity-55`}><SiTailwindcss /></span>
              <p className={`hidden md:block ${dark ? "text-white" : "text-black"} duration-200 ease-in-out opacity-55 text-[12px]`}>TailwindCSS v(4.0)</p>
            </div>
            <div className={`flex justify-center items-center gap-2`}>
              <span className={`text-xl ${dark ? "text-white" : "text-black"} duration-200 ease-in-out opacity-55`}><RiNextjsFill /></span>
              <p className={`hidden md:block ${dark ? "text-white" : "text-black"} duration-200 ease-in-out opacity-55 text-[12px]`}>NextJs v(16)</p>
            </div>
            <div className={`flex justify-center items-center gap-2`}>
              <span className={`text-xl ${dark ? "text-white" : "text-black"} duration-200 ease-in-out opacity-55`}><FaReact /></span>
              <p className={`hidden md:block ${dark ? "text-white" : "text-black"} duration-200 ease-in-out opacity-55 text-[12px]`}>ReactJs v(19)</p>
            </div>
          </motion.div>
        </div>

        {/* main section */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className={`w-full lg:w-[80%] mt-5 columns-2 md:columns-3 h-auto gap-5 py-5 px-5 scrollbar`}>

          <div className={`w-auto break-inside-avoid mb-4 px-5 py-4 flex flex-col justify-center items-center rounded-lg border ${dark ? "border-gray-500" : "border-zinc-700"} ${dark ? "bg-black hover:bg-linear-to-br from-black via-zinc-900 to-zinc-700" : "bg-white hover:bg-linear-to-br from-white via-gray-100 to-gray-200"} cursor-default duration-200 ease-in-out`}>
            <h1 className={`w-full mb-2 ${dark ? "text-white" : "text-black"} duration-200 ease-in-out text-start font-bold text-xl`}>Hero Sections</h1>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Business Site</p>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Portfolio</p>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Ed-Tech Platform</p>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Image Based Carousel</p>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Video Opening</p>
          </div>

          <div className={`w-auto break-inside-avoid mb-4 px-5 py-4 flex flex-col justify-center items-center rounded-lg border ${dark ? "border-gray-500" : "border-zinc-700"} ${dark ? "bg-black hover:bg-linear-to-br from-black via-zinc-900 to-zinc-700" : "bg-white hover:bg-linear-to-br from-white via-gray-100 to-gray-200"} cursor-default duration-200 ease-in-out`}>
            <h1 className={`w-full mb-2 ${dark ? "text-white" : "text-black"} duration-200 ease-in-out text-start font-bold text-xl`}>Navbars</h1>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● 3 divided sections</p>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● multi level</p>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Full Screen Overlay</p>
          </div>

          <div className={`w-auto break-inside-avoid mb-4 px-5 py-4 flex flex-col justify-center items-center rounded-lg border ${dark ? "border-gray-500" : "border-zinc-700"} ${dark ? "bg-black hover:bg-linear-to-br from-black via-zinc-900 to-zinc-700" : "bg-white hover:bg-linear-to-br from-white via-gray-100 to-gray-200"} cursor-default duration-200 ease-in-out`}>
            <h1 className={`w-full mb-2 ${dark ? "text-white" : "text-black"} duration-200 ease-in-out text-start font-bold text-xl`}>Cards</h1>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Animated</p>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Info list</p>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Company pricing</p>
          </div>

          <div className={`w-auto break-inside-avoid mb-4 px-5 py-4 flex flex-col justify-center items-center rounded-lg border ${dark ? "border-gray-500" : "border-zinc-700"} ${dark ? "bg-black hover:bg-linear-to-br from-black via-zinc-900 to-zinc-700" : "bg-white hover:bg-linear-to-br from-white via-gray-100 to-gray-200"} cursor-default duration-200 ease-in-out`}>
            <h1 className={`w-full mb-2 ${dark ? "text-white" : "text-black"} duration-200 ease-in-out text-start font-bold text-xl`}>Accordian</h1>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Simple</p>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Stacked</p>
          </div>
          <div className={`w-auto break-inside-avoid mb-4 px-5 py-4 flex flex-col justify-center items-center rounded-lg border ${dark ? "border-gray-500" : "border-zinc-700"} ${dark ? "bg-black hover:bg-linear-to-br from-black via-zinc-900 to-zinc-700" : "bg-white hover:bg-linear-to-br from-white via-gray-100 to-gray-200"} cursor-default duration-200 ease-in-out`}>
            <h1 className={`w-full mb-2 ${dark ? "text-white" : "text-black"} duration-200 ease-in-out text-start font-bold text-xl`}>Gradients</h1>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Text Gradients</p>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Button Gradients</p>
          </div>
          <div className={`w-auto break-inside-avoid mb-4 px-5 py-4 flex flex-col justify-center items-center rounded-lg border ${dark ? "border-gray-500" : "border-zinc-700"} ${dark ? "bg-black hover:bg-linear-to-br from-black via-zinc-900 to-zinc-700" : "bg-white hover:bg-linear-to-br from-white via-gray-100 to-gray-200"} cursor-default duration-200 ease-in-out`}>
            <h1 className={`w-full mb-2 ${dark ? "text-white" : "text-black"} duration-200 ease-in-out text-start font-bold text-xl`}>Buttons</h1>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Hover Animate</p>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Expandable</p>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Text with Emoji</p>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Gradients</p>
          </div>
          <div className={`w-auto break-inside-avoid mb-4 px-5 py-4 flex flex-col justify-center items-center rounded-lg border ${dark ? "border-gray-500" : "border-zinc-700"} ${dark ? "bg-black hover:bg-linear-to-br from-black via-zinc-900 to-zinc-700" : "bg-white hover:bg-linear-to-br from-white via-gray-100 to-gray-200"} cursor-default duration-200 ease-in-out`}>
            <h1 className={`w-full mb-2 ${dark ? "text-white" : "text-black"} duration-200 ease-in-out text-start font-bold text-xl`}>Drawers</h1>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Screen Overlay</p>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Bottom Entry</p>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Upside Down</p>
          </div>
          <div className={`w-auto break-inside-avoid mb-4 px-5 py-4 flex flex-col justify-center items-center rounded-lg border ${dark ? "border-gray-500" : "border-zinc-700"} ${dark ? "bg-black hover:bg-linear-to-br from-black via-zinc-900 to-zinc-700" : "bg-white hover:bg-linear-to-br from-white via-gray-100 to-gray-200"} cursor-default duration-200 ease-in-out`}>
            <h1 className={`w-full mb-2 ${dark ? "text-white" : "text-black"} duration-200 ease-in-out text-start font-bold text-xl`}>Dropdowns</h1>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Single Selection</p>
            <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out w-full text-start text-[12px]`}>● Multiple Selection</p>
          </div>

        </motion.div>

        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: '-20px' }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: '-0px' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className={`w-full h-auto py-2 flex justify-center items-center`}>
          <img src="/assets/pixel-labs-ui-dark.png" className={`h-40 ${dark ? "block" : "hidden"} md:h-64 lg:h-[450px]`} />
          <img src="/assets/pixel-labs-ui-white.png" className={`h-40 ${dark ? "hidden" : "block"} md:h-64 lg:h-[450px]`} />
        </motion.div>

        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: '-20px' }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: '-0px' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className={`w-full pt-5 pb-10 px-5 flex flex-col justify-start items-center gap-2`}>
          <h1 className={`w-full md:px-10 text-center text-2xl md:text-5xl xl:text-7xl font-bold ${dark ? "bg-linear-to-r from-zinc-500 to-zinc-900 bg-clip-text text-transparent" : "bg-linear-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent"} duration-200 ease-in-out`}>COPY TO CODEBASE</h1>
          <div className={`h-0.5 w-[90%] md:w-[80%] my-2 ${dark ? "bg-linear-to-r from-black via-orange-500 to-black" : "bg-linear-to-r from-white via-orange-500 to-white"} duration-200 ease-in-out`} />
          <h1 className={`w-full md:px-10 text-center text-2xl md:text-5xl xl:text-7xl font-bold ${dark ? "bg-linear-to-r from-zinc-500 to-zinc-900 bg-clip-text text-transparent" : "bg-linear-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent"} duration-200 ease-in-out`}>SHIP TO PRODUCTION</h1>
        </motion.div>
      </div>
    </>
  )
}

export default page
