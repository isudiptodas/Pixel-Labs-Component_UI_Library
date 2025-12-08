'use client'

import { useState } from "react"
import { IoMdArrowDropdown } from "react-icons/io";

function ExtendedInfo({ SelectOption }: { SelectOption?: (option: string) => void }) {

  const [option, setOption] = useState<null | string>('select');
  const [dropDownVisible, setDropdownVisible] = useState(false);

  const handleSelectOption = (option: string) => {
    if(SelectOption){
      SelectOption(option);
    }
    setOption(option);
  }

  const optionList = [
  {
    name: "steve",
    description: "Always the goddamn babysitter!"
  },
  {
    name: "dustin",
    description: "She’s our friend and she’s crazy!"
  },
  {
    name: "max",
    description: "We make our own rules."
  },
  {
    name: "nancy",
    description: "You're an idiot Steve Harrington"
  },
  {
    name: "will",
    description: "He's here, I can feel him."
  },
  {
    name: "mike",
    description: "Mom! Just get off the phone!"
  },
  {
    name: "jonathan",
    description: "Don't Take It So Personally ... I Don't Like Most People. He's In The Vast Majority."
  },
  {
    name: "joyce",
    description: "Will? Will! Can you hear me?"
  },
  {
    name: "robin",
    description: "Am I a mistake?"
  },
  {
    name: "eleven",
    description: "I kept the door open three inches"
  }
];


  return (
    <>
      <div className={`w-full md:w-[60%] py-4 px-3 h-auto relative overflow-hidden flex flex-col justify-center items-center`}>
        <p onClick={() => setDropdownVisible(!dropDownVisible)} className={`w-full flex justify-between items-center text-black bg-gray-100 py-3 px-3 cursor-pointer text-lg capitalize`}>{option} <IoMdArrowDropdown className={`text-2xl ${dropDownVisible ? "rotate-180" : "rotate-0"} duration-200 ease-in-out`} /></p>
        <div className={`w-full max-h-[40vh] overflow-y-auto ${dropDownVisible ? "block" : "hidden"} flex flex-col justify-start items-center gap-2 p-1 bg-gray-100 mt-1`}>
          {optionList.map((item, index) => {
            return <div onClick={() => {handleSelectOption(item.name); setDropdownVisible(false);}} key={index} className={`w-full group cursor-pointer flex flex-col justify-center items-start px-3 py-2 hover:bg-white duration-500 ease-in-out`}>
              <p className={`w-full text-sm group-hover:font-semibold duration-300 ease-in-out text-start capitalize text-black pb-2 border-b border-gray-300`}>{item.name}</p>
              <p className={`w-full text-[12px] group-hover:font-semibold duration-300 ease-in-out text-start capitalize text-black py-2 opacity-70 italic`}>{item.description}</p>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default ExtendedInfo
