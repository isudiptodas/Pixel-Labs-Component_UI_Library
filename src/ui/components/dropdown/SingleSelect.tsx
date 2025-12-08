'use client'

import { useState } from "react"
import { IoMdArrowDropdown } from "react-icons/io";

function SingleSelect({ SelectOption }: { SelectOption?: (option: string) => void }) {

  const [option, setOption] = useState<null | string>('select');
  const [dropDownVisible, setDropdownVisible] = useState(false);

  const handleSelectOption = (option: string) => {
    if(SelectOption){
      SelectOption(option);
    }
    setOption(option);
  }

  const optionList = [
    'steve',
    'nancy',
    'jonathan',
    'will',
    'mike',
    'eleven',
    'henry',
    'robin'
  ]

  return (
    <>
      <div className={`w-full md:w-[60%] py-4 px-3 h-auto relative overflow-hidden flex flex-col justify-center items-center`}>

        <p onClick={() => setDropdownVisible(!dropDownVisible)} className={`w-full flex justify-between items-center text-black bg-gray-100 py-3 px-3 cursor-pointer text-lg capitalize`}>{option} <IoMdArrowDropdown className={`text-2xl ${dropDownVisible ? "rotate-180" : "rotate-0"} duration-200 ease-in-out`} /></p>
        <div className={`w-full ${dropDownVisible ? "block" : "hidden"} flex flex-col justify-start items-center p-1 bg-gray-100 mt-1`}>
          {optionList.map((item, index) => {
            return <p onClick={() => {handleSelectOption(item); setDropdownVisible(false);}} key={index} className={`w-full text-start text-sm px-3 py-2 hover:bg-white text-black hover:font-semibold cursor-pointer duration-200 ease-in-out capitalize`}>{item}</p>
          })}
        </div>
      </div>
    </>
  )
}

export default SingleSelect
