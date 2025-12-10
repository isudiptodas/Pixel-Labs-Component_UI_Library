'use client'

import { useState } from "react"
import { motion } from 'framer-motion';

function HoverNameReveal() {

    const[currentImage, setCurrentImage] = useState('');

    const data = [
        {
            name: `Matthew`,
            image: `https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg`
        },
        {
            name: `Selena`,
            image: `https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg`
        },
        {
            name: `Florence`,
            image: `https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg`
        },
        {
            name: `David`,
            image: `https://images.pexels.com/photos/2380795/pexels-photo-2380795.jpeg`
        },
        {
            name: `Rollins`,
            image: `https://images.pexels.com/photos/35058258/pexels-photo-35058258.jpeg`
        },
        {
            name: `Edith`,
            image: `https://images.pexels.com/photos/35102778/pexels-photo-35102778.jpeg`
        },
    ]

    return (
        <>
            <div className={`w-full h-[70vh] flex justify-start items-center gap-5 px-5 py-4 overflow-x-auto scrollbar`}>
                {data.map((item, index) => {
                    return <div onClick={() => setCurrentImage(item.image)} key={index} className={`w-auto h-full flex-none relative border-r flex justify-center items-center`}>
                        <motion.p
                            style={{ whiteSpace: "nowrap" }}
                            initial={{width: "10vw", opacity: 0}}
                            animate={{width: currentImage === item.image ? "50vw" : "10vw", opacity: currentImage === item.image ? 0 : 1}}
                            transition={{duration: 0.5, ease: 'easeInOut'}}
                        className={`text-gray-400 h-full absolute bottom-5 right-2 flex justify-start items-center text-6xl -rotate-90`}>{item.name}</motion.p>
                        <motion.img
                        initial={{width: "10vw", opacity: 0}}
                        animate={{width: currentImage === item.image ? "50vw" : "10vw", opacity: currentImage === item.image ? 1 : 0}}
                        transition={{duration: 0.5, ease: 'easeInOut'}}
                        src={item.image} className={`h-full object-cover rounded-2xl`}/>
                    </div>
                })}
            </div>
        </>
    )
}

export default HoverNameReveal
