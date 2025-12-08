'use client'

import { useState } from "react"
import { MdPeopleAlt } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function SimpleData() {

    const[name, setName] = useState('');
    const[contact, setContact] = useState('');
    const[email, setEmail] = useState('');

    const submit = () => {

    }

  return (
    <>
      <div className={`w-full md:w-[60%] py-4 px-3 border border-zinc-800 h-auto relative overflow-hidden flex flex-col justify-center items-center gap-4`}>
        
        {/* name section */}
        <div className={`w-full flex justify-between items-center`}>
            <span className={`w-auto text-lg text-zinc-500 bg-gray-100 py-[19px] px-3`}><MdPeopleAlt /></span>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter full name" className={`w-full bg-gray-100 py-4 px-3 outline-none text-black`} />
        </div>

        {/* contact section */}
        <div className={`w-full flex justify-between items-center`}>
            <span className={`w-auto text-lg text-zinc-500 bg-gray-100 py-[19px] px-3`}><FaPhone /></span>
            <input value={contact} onChange={(e) => setContact(e.target.value)} type="text" placeholder="Enter contact" className={`w-full bg-gray-100 py-4 px-3 outline-none text-black`} />
        </div>

        {/* email section */}
        <div className={`w-full flex justify-between items-center`}>
            <span className={`w-auto text-lg text-zinc-500 bg-gray-100 py-[19px] px-3`}><MdEmail /></span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" className={`w-full bg-gray-100 py-4 px-3 outline-none text-black`} />
        </div>

        <p onClick={submit} className={`w-full py-3 text-center cursor-pointer bg-blue-500 text-white active:opacity-70 duration-200 ease-in-out font-semibold text-sm`}>Submit</p>
      </div>
    </>
  )
}

export default SimpleData
