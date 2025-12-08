'use client'

import { useState } from "react"

function FormWithFileUpload() {

  const [file, setFile] = useState<null | File>(null);
  const [Url, setURL] = useState<string | null>(null);

  const submit = () => {

  }

  return (
    <>
      <div className={`w-full md:w-[60%] py-4 px-3 border border-zinc-800 h-auto relative overflow-hidden flex flex-col justify-center items-center gap-4`}>

        <div className={`w-full flex flex-col justify-center items-center gap-1`}>
          <p className={`w-full text-start text-gray-400 text-[12px]`}>Enter name :</p>
          <input type="text" className={`w-full py-3 px-3 bg-gray-100 outline-none text-black`} placeholder="John Doe" />
        </div>

        <div className={`w-full flex flex-col justify-center items-center gap-1`}>
          <p className={`w-full text-start text-gray-400 text-[12px]`}>Enter your email :</p>
          <input type="text" className={`w-full py-3 px-3 bg-gray-100 outline-none text-black`} placeholder="johndoe@gmail.com" />
        </div>

        <div className={`w-full flex flex-col justify-center items-center gap-1`}>
          <p className={`w-full text-start text-gray-400 text-[12px]`}>Enter your contact :</p>
          <input type="text" className={`w-full py-3 px-3 bg-gray-100 outline-none text-black`} placeholder="7638 9876 765" />
        </div>

        <div className={`w-full relative flex flex-col justify-center items-start gap-1`}>
          <p className={`w-full ${file === null ? "block" : "hidden"} text-start text-gray-400 text-[12px]`}>Upload profile picture :</p>
          <p className={`w-auto ${file === null ? "block" : "hidden"} overflow-hidden px-5 py-2 cursor-pointer active:opacity-70 duration-200 ease-in-out bg-linear-to-r from-blue-400 to-blue-600 text-white flex justify-center items-center`}>Choose File
            <input onChange={(e) => {
              if (e.target.files && e.target.files[0].type.startsWith('image/')) {
                setFile(e.target.files[0]);
                const url = URL.createObjectURL(e.target.files[0]);
                setURL(url);
              }
            }} type="file" accept="image/*" className={`w-[30%] left-0 opacity-0 absolute inset-6 py-3 px-3 bg-gray-100 outline-none text-black`} /></p>
          <img src={Url ? Url : ""} className={`${Url === null ? "hidden" : "block"} h-[30vh] object-cover`} />
          <p className={`w-full ${file === null ? "hidden" : "block"} mb-2 text-sm text-gray-400  text-start`}>{file?.name}</p>
          <p onClick={() => { setFile(null); setURL(null); }} className={`w-auto ${file === null ? "hidden" : "block"} px-4 py-2 bg-red-500 text-white cursor-pointer active:opacity-65 duration-150 ease-in-out`}>Remove X</p>
        </div>

        <p onClick={submit} className={`w-full text-white font-semibold bg-zinc-800 cursor-pointer active:opacity-65 duration-200 ease-in-out py-3 text-center`}>Submit</p>

      </div>
    </>
  )
}

export default FormWithFileUpload
