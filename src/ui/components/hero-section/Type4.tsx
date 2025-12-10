'use client'

import { useRouter } from "next/navigation"

function Type4() {

  const router = useRouter();

    return (
        <>
            <div className={`w-full h-[40vh] flex justify-center items-center`}>
              <p onClick={() => router.push('/components/hero-section?id=type4')} className={`w-auto px-5 py-2 rounded-full inset-shadow-sm inset-shadow-gray-500 text-black bg-white cursor-pointer`}>View Type 4 in another tab</p>
            </div>
        </>
    )
}

export default Type4
