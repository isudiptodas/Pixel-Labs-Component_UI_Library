'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function IconReveal() {

    const iconVariants = {
        initial: { opacity: 0, width: 0 },
        hover: { opacity: 1, width: 'auto' }
    };

    const containerVariants = {
        initial: { paddingLeft: 13, paddingRight: 13, paddingTop: 10, paddingBottom: 10, gap: '0px' },
        hover: { paddingLeft: 20, paddingRight: 20, gap: '8px' }
    };

    return (
        <>
            <motion.div
                variants={containerVariants}
                initial="initial"
                whileTap={{scale: 0.9}}
                whileHover="hover"
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`w-auto cursor-pointer bg-linear-to-r from-blue-500 to-blue-800 flex justify-center items-center rounded-full relative overflow-hidden`}>
                <p className={`text-white text-sm font-semibold`}>Get Started</p>
                <motion.span
                    variants={iconVariants}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className={`w-auto text-xl text-white`}><IoArrowForwardCircleOutline /></motion.span>
            </motion.div>
        </>
    )
}

export default IconReveal
