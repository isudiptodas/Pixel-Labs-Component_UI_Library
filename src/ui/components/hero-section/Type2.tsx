'use client'

import { useRouter } from "next/navigation"

function Type2() {

  const router = useRouter();

    return (
        <>
            <div className={`w-full h-[40vh] flex justify-center items-center`}>
              <p onClick={() => router.push('/components/hero-section?id=type2')} className={`w-auto px-5 py-2 rounded-full inset-shadow-sm inset-shadow-gray-500 text-black bg-white cursor-pointer`}>View Type 2 in another tab</p>
            </div>
        </>
    )
}

export default Type2
