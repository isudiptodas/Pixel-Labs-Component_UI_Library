'use client'

import { motion } from 'framer-motion';
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function page() {

    return (
        <>
            <motion.div
                initial={{ paddingLeft: '3px', paddingRight: '3px', paddingTop: '2px', paddingBlock: '2px' }}
                whileHover={{ paddingLeft: '5px', paddingRight: '5px' }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`w-auto cursor-pointer bg-linear-to-r from-blue-300 to-blue-500 flex justify-center items-center gap-2 rounded-full relative overflow-hidden`}>
                <p className={`text-white text-sm font-semibold`}>Get Started</p>
                <motion.span
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`w-auto text-white`}><IoArrowForwardCircleOutline /></motion.span>
            </motion.div>
        </>
    )
}

export default page
