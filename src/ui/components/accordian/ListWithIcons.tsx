'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import useMeasure from "react-use-measure";
import { FaHeartbeat, FaShieldAlt, FaRobot, FaChartLine, FaBolt } from "react-icons/fa";

function ListWithIcons() {

    const [current, setCurrent] = useState<null | number>(null);

    const data = [
        {
            title: "Healthcare Solutions",
            icon: <FaHeartbeat />,
            description:
                "Effortlessly manage medical workflows with intelligent automation, secure patient data handling, and smooth integration with existing healthcare systems. From optimizing patient intake processes to ensuring seamless records management, the platform enhances operational efficiency for clinics, hospitals, and telehealth setups."
        },
        {
            title: "Financial Intelligence",
            icon: <FaChartLine />,
            description:
                "Unlock smarter financial decisions with real-time analytics, automated reporting, and fraud-resistant data handling. The system adapts to complex financial environments, providing institutions with reliable insights, faster processing, and consistent accuracy across high-volume operations."
        },
        {
            title: "Security & Compliance",
            icon: <FaShieldAlt />,
            description:
                "Protect sensitive information with enterprise-grade encryption, multi-layered authentication, and continuous threat monitoring. Built to meet global compliance standards, it ensures your data ecosystem remains safe, reliable, and resilient against evolving security challenges."
        },
        {
            title: "Intelligent Automation",
            icon: <FaRobot />,
            description:
                "Automate repetitive, manual, and time-consuming tasks using adaptive workflows and AI-powered systems. Whether managing large datasets, running routine operations, or orchestrating complex sequences, automation significantly reduces errors and increases overall productivity."
        },
        {
            title: "High-Performance Scalability",
            icon: <FaBolt />,
            description:
                "Experience lightning-fast performance with a system designed to scale effortlessly—from small teams to enterprise-level workloads. Whether onboarding thousands of users or expanding operational complexity, the platform maintains speed, stability, and responsiveness without interruption."
        }
    ];


    return (
        <>
            <div className={`w-full h-auto flex flex-col justify-start items-center gap-5 py-2 px-3`}>
                {data.map((item, index) => {
                    const [ref, bounds] = useMeasure();
                    return <div key={index} className={`w-full h-auto border border-gray-400 rounded-xl flex flex-col justify-start items-center bg-white overflow-hidden`}>
                        <div onClick={() => setCurrent(index)} className={`w-full font-semibold ${current === index ? "shadow-md" : ""} cursor-pointer flex justify-between items-center pr-5`}>
                            <p className={`text-black text-sm lg:text-lg flex justify-center items-center gap-3`}> <span className={`h-full w-auto py-4 px-3 rounded-xl inset-shadow-sm inset-shadow-gray-500`}>{item.icon}</span> {item.title}</p>
                            <span className={`text-sm text-black`}><FaPlus className={`${current === index ? "rotate-45" : "rotate-0"} duration-200 ease-in-out`} /></span>
                        </div>
                        <AnimatePresence>
                            <motion.div
                                initial={false}
                                animate={{
                                    height: current === index ? bounds.height : '0px',
                                    opacity: current === index ? 1 : 0,
                                    paddingBottom: current === index ? '60px' : "0px",
                                    paddingTop: current === index ? '50px' : "0px"
                                }}
                                exit={{ opacity: 0, height: 0, paddingBottom: '0px', paddingTop: '0px' }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                style={{ overflow: "hidden" }}
                                className={`w-full flex justify-start bg-white items-center px-5`}>
                                <div ref={ref} className="py-4">
                                    <p className="italic text-black text-[12px] lg:text-sm">{item.description}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                })}
            </div>
        </>
    )
}

export default ListWithIcons
