'use client'

import { motion } from 'framer-motion';

function HoverInfo() {

    const infoList = [
        {
            image: `https://cdn.pixabay.com/photo/2023/08/06/14/34/woman-8173091_1280.jpg`,
            name: `Marym Jones`,
            profession: `Sculpture Artist`
        },
        {
            image: `https://cdn.pixabay.com/photo/2022/06/21/08/57/male-7275452_1280.jpg`,
            name: `David Smith`,
            profession: `Businessman`
        },
        {
            image: `https://cdn.pixabay.com/photo/2023/11/20/23/06/woman-8402052_1280.jpg`,
            name: `Lisa Williams`,
            profession: `Songwriter`
        },
        {
            image: `https://cdn.pixabay.com/photo/2023/12/23/22/15/teen-photo-8466399_1280.jpg`,
            name: `Sydney Catherine`,
            profession: `Fashion Designer`
        },
        {
            image: `https://cdn.pixabay.com/photo/2025/06/30/01/24/01-24-42-704_1280.jpg`,
            name: `Noah Areline`,
            profession: `Choreographer`
        },
    ];

    return (
        <>
            <div className={`w-full px-5 py-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-5 scrollbar`}>
                {infoList.map((info, index) => {
                    return <div key={index} className={`w-full h-[60vh] rounded-xl shadow-xl flex flex-col justify-start items-center relative overflow-hidden`}>
                        <img src={info.image} className={`h-full z-10 w-full object-cover`} />
                        <motion.div
                            initial={{opacity: 0}}
                            whileHover={{opacity: 1}}
                            transition={{duration: 0.5, ease: 'easeInOut'}}
                        className={`w-full h-full absolute bg-linear-to-t from-black to-transparent bottom-0 flex flex-col justify-end items-center pb-3 px-3 z-20`}>
                            <p className={`text-white w-full px-3 pb-2 text-start text-3xl font-semibold`}>{info.name}</p>
                            <p className={`text-white w-full px-3 text-start text-lg`}>{info.profession}</p>
                            <div className={`w-full py-3 px-3 flex justify-between items-center gap-3`}>
                                <p className={`w-full py-2 px-3 rounded-full text-black cursor-pointer active:scale-95 duration-200 ease-in-out bg-white text-center font-semibold text-[12px]`}>Profile</p>
                                <p className={`w-full py-2 px-3 rounded-full text-white cursor-pointer active:scale-95 duration-200 ease-in-out bg-blue-500 text-center font-semibold text-[12px]`}>Contact</p>
                            </div>
                        </motion.div>
                        <div
                        className={`w-full xl:hidden h-full absolute bg-linear-to-t from-black to-transparent bottom-0 flex flex-col justify-end items-center pb-3 px-3 z-20`}>
                            <p className={`text-white w-full px-4 pb-2 text-start text-5xl font-semibold`}>{info.name}</p>
                            <p className={`text-white w-full px-4 text-start text-lg`}>{info.profession}</p>
                            <div className={`w-full py-3 px-4 flex justify-between items-center gap-3`}>
                                <p className={`w-full py-2 px-3 rounded-full text-black cursor-pointer active:scale-95 duration-200 ease-in-out bg-white text-center font-semibold`}>Profile</p>
                                <p className={`w-full py-2 px-3 rounded-full text-white cursor-pointer active:scale-95 duration-200 ease-in-out bg-blue-500 text-center font-semibold`}>Contact</p>
                            </div>
                        </div>
                        
                    </div>
                })}
            </div>
        </>
    )
}

export default HoverInfo
