'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import useMeasure from "react-use-measure";

function SingleOpen() {

    const [current, setCurrent] = useState<null | number>(null);

    const data = [
        {
            title: "Seamless Integration",
            description:
                "Effortlessly connect your workflow with intuitive tools designed for smooth collaboration. Our platform integrates with your existing systems without friction, minimizing setup time and allowing teams to work together across different environments. Whether you're syncing data, linking services, or coordinating teams, everything stays fluid and efficient."
        },
        {
            title: "Lightning-Fast Performance",
            description:
                "Experience optimized speed and responsiveness across all features and interactions. Each component is finely tuned to reduce delays, ensure instant feedback, and deliver a smooth user experience even under heavy workloads. No matter the task, the system stays sharp, fast, and consistently reliable."
        },
        {
            title: "Smart Automation",
            description:
                "Automate repetitive tasks with intelligent systems that adapt to your workflow. Our automation engine learns patterns, reduces manual effort, and ensures that operations run consistently and error-free. From routine processes to more complex sequences, it handles the details so you can focus on what actually matters."
        },
        {
            title: "Secure & Reliable",
            description:
                "Your data stays protected with enterprise-grade security and continuous monitoring. We employ strong encryption, multi-layered safeguards, and rigorous compliance standards to keep your information safe. Reliability is built into every layer, ensuring stable performance you can trust at all times."
        },
        {
            title: "Scalable Design",
            description:
                "Built to grow with you, supporting everything from small teams to large enterprises. As your needs evolve, the system expands seamlessly—handling increased workloads, more users, and complex operations without slowing down. You get long-term flexibility without sacrificing efficiency."
        }
    ];


    return (
        <>
            <div className={`w-full h-auto flex flex-col justify-start items-center gap-5 py-2 px-3`}>
                {data.map((item, index) => {
                    const [ref, bounds] = useMeasure();
                    return <div key={index} className={`w-full h-auto border border-gray-400 rounded-xl flex flex-col justify-start items-center bg-white overflow-hidden`}>
                        <div onClick={() => setCurrent(index)} className={`w-full font-semibold ${current === index ? "shadow-md" : ""} cursor-pointer flex justify-between items-center px-5 py-3`}>
                            <p className={`text-black text-sm lg:text-lg`}>{item.title}</p>
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

export default SingleOpen
