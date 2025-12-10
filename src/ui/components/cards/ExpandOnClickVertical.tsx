'use client'

import { useState } from "react"
import { motion } from 'framer-motion';

function ExpandOnClickVertical() {

    const [currentImage, setCurrentImage] = useState('');

    const imageList = [
        'https://cdn.pixabay.com/photo/2025/10/26/13/00/ai-generated-9917901_1280.png',
        'https://cdn.pixabay.com/photo/2022/08/19/12/46/landscape-7396852_1280.jpg',
        'https://cdn.pixabay.com/photo/2025/11/28/15/29/zebras-9983175_1280.jpg',
        'https://cdn.pixabay.com/photo/2025/10/23/11/35/food-9911963_1280.jpg',
        'https://cdn.pixabay.com/photo/2025/11/08/13/23/zebra-9944593_1280.jpg',
        'https://cdn.pixabay.com/photo/2025/08/15/06/29/mountain-cabin-9776289_1280.jpg',
        'https://cdn.pixabay.com/photo/2025/11/14/17/32/pool-9957219_1280.jpg',
        'https://cdn.pixabay.com/photo/2025/11/10/10/01/landscape-9947733_1280.jpg'
    ]; 

    return (
        <>
            <div className={`w-full px-5 py-4 overflow-y-auto flex flex-col justify-start items-center gap-5 scrollbar h-[70vh]`}>
                {imageList.map((item, index) => {
                    return <motion.img onClick={() => setCurrentImage(item)} key={index} src={item} initial={{height: "5vh"}} animate={{
                        height: currentImage === item ? "70vh" : "5vh"
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }} className={`w-full lg:w-[60%] cursor-pointer object-cover rounded-lg`} />
                })}
            </div>
        </>
    )
}

export default ExpandOnClickVertical
