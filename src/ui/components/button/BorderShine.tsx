'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function BorderShine({ Shine = 'default' }: { Shine?: string }) {

    const [shineColor, setShineColor] = useState('');

    const colors = [
        {
            name: `default`,
            class: `bg-linear-to-r from-gray-300 via-white to-zinc-500`
        },
        {
            name: `red`,
            class: `bg-linear-to-r from-red-600 via-white to-red-800`
        },
        {
            name: `green`,
            class: `bg-linear-to-r from-teal-700 via-white to-green-800`
        },
        {
            name: `yellow`,
            class: `bg-linear-to-r from-yellow-600 via-white to-yellow-800`
        },
        {
            name: `blue`,
            class: `bg-linear-to-r from-blue-500 via-white to-blue-700`
        },
    ];

    useEffect(() => {
        const find = colors.find((color) => color.name === Shine);
        if (find) {
            setShineColor(find.class);
        }
    }, [Shine]);

    return (
        <>
            <div className={`w-auto cursor-pointer flex justify-center items-center p-0.5 rounded-full relative overflow-hidden`}>
                <motion.div 
                    animate={{rotate: 360}}
                    transition={{duration: 6, repeat: Infinity}}
                className={`h-[200px] w-[200px] -top-4 absolute z-10 ${shineColor}`}></motion.div>
                <p className={`h-full py-2 px-4 bg-white text-black text-sm rounded-full w-full text-center z-20`}>Border Shine</p>
            </div>
        </>
    )
}

export default BorderShine
