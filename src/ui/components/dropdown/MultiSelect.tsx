'use client'

import { useState } from "react"
import { IoMdArrowDropdown } from "react-icons/io";
import { motion } from 'framer-motion';

function MultiSelect({ SelectOption }: { SelectOption?: (option: string[]) => void }) {

  const [selectedOptions, setSelectedOptions] = useState<[] | string[]>([]);
  const [dropDownVisible, setDropdownVisible] = useState(false);

  const handleSelectOption = (option: string) => {

    const updated = [...selectedOptions, option];
    setSelectedOptions(updated);
    if (SelectOption) {
      SelectOption(updated);
    }
  }

  const optionList = [
    'steve',
    'nancy',
    'jonathan',
    'will',
    'mike',
    'eleven',
    'henry',
    'robin',
    'murray',
    'hopper',
    'dustin',
    'max',
    'lucas',
    'joyce'
  ]

  return (
    <>
      <div className={`w-full md:w-[60%] py-4 px-3 border border-zinc-800 h-auto relative overflow-hidden flex flex-col justify-center items-center`}>

        <p onClick={() => setDropdownVisible(!dropDownVisible)} className={`w-full flex justify-between items-center text-black bg-gray-100 py-3 px-3 cursor-pointer text-lg capitalize`}>Select <IoMdArrowDropdown className={`text-2xl ${dropDownVisible ? "rotate-180" : "rotate-0"} duration-200 ease-in-out`} /></p>
        <motion.div
          initial={{ height: '0px' }}
          animate={{
            height: dropDownVisible ? "auto" : "0px",
            padding: dropDownVisible ? "4px" : "0px"
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={`w-full max-h-[30vh] overflow-y-auto flex flex-col justify-start items-center bg-gray-100 mt-1`}>
          {optionList.map((item, index) => {
            return <p onClick={() => { handleSelectOption(item); }} key={index} className={`w-full text-start text-sm px-3 py-2 hover:bg-white hover:font-semibold cursor-pointer duration-200 ease-in-out capitalize text-black flex justify-between items-center`}>{item} <span className={`text-black ${selectedOptions.length > 0 && selectedOptions.includes(item as never) ? "block" : "hidden"}`}>✓</span></p>
          })}
        </motion.div>
      </div>
    </>
  )
}

export default MultiSelect
