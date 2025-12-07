'use client'

function MultiColorBeam() {
  return (
    <>
      <div className={`w-auto cursor-pointer h-auto p-[3px] bg-linear-to-r from-fuchsia-500 via-green-500 to-indigo-500 rounded-full flex justify-center items-center`}>
        <p className={`w-full px-5 py-2 rounded-full text-black text-center bg-white`}>Shine</p>
      </div>
    </>
  )
}

export default MultiColorBeam
