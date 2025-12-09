'use client'

import { useState } from "react"
import { motion } from 'framer-motion';

function ExpandOnClickHorizontal() {

    const [currentImage, setCurrentImage] = useState('');

    const imageList = [
        'https://cdn.pixabay.com/photo/2025/10/19/10/14/deer-9903608_1280.jpg',
        'https://cdn.pixabay.com/photo/2025/08/02/09/25/bird-9750288_1280.jpg',
        'https://cdn.pixabay.com/photo/2025/11/06/02/13/agriculture-9939844_1280.jpg',
        'https://cdn.pixabay.com/photo/2025/11/09/17/47/mushrooms-9946579_1280.jpg',
        'https://cdn.pixabay.com/photo/2025/06/13/14/19/field-9658151_1280.jpg',
        'https://cdn.pixabay.com/photo/2025/09/12/16/49/dog-9830833_1280.jpg',
        'https://cdn.pixabay.com/photo/2025/11/23/00/52/golden-crowned-kinglet-9971731_1280.jpg',
        'https://cdn.pixabay.com/photo/2025/11/05/22/34/istanbul-9939687_1280.jpg',
        'https://cdn.pixabay.com/photo/2025/09/28/13/56/impala-9860591_1280.jpg'
    ];

    return (
        <>
            <div className={`w-full px-5 py-4 overflow-x-auto flex justify-start items-center gap-5 scrollbar h-[50vh]`}>
                {imageList.map((item, index) => {
                    return <motion.img onClick={() => setCurrentImage(item)} key={index} src={item} animate={{
                        width: currentImage === item ? "30vw" : "5vw"
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }} className={`h-full cursor-pointer object-cover rounded-lg`} />
                })}
            </div>
        </>
    )
}

export default ExpandOnClickHorizontal
