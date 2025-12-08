'use client'

import { useState } from "react"

function BottomSlide() {

  const[drawerVisible, setDrawerVisible] = useState(false);

  return (
    <>
      <div className={`w-full h-[40vh] py-4 px-3 relative overflow-hidden flex flex-col justify-center items-center`}>

        <p onClick={() => setDrawerVisible(!drawerVisible)} className={`w-auto px-5 py-2 text-sm text-black rounded-full shadow-xl bg-white active:scale-95 active:opacity-80 duration-200 ease-in-out cursor-pointer`}>Open Drawer from Bottom</p>

        {/* drawer */}
        <div className={`w-full ${drawerVisible ? "-translate-y-5" : "translate-y-full"} bottom-0  duration-300 ease-in-out h-auto absolute left-1/2 -translate-x-1/2 lg:w-auto px-5 py-3 rounded-xl bg-white shadow-xl flex flex-col justify-center items-center`}>
          <p className={` text-black text-sm`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae expedita magni officia hic voluptates explicabo commodi eaque, mollitia est voluptas, minima officiis reprehenderit necessitatibus.</p>
          <p onClick={() => setDrawerVisible(false)} className={`text-sm text-gray-400 w-full text-center mt-5 cursor-pointer`}>Close</p>
        </div>
       
      </div>
    </>
  )
}

export default BottomSlide
