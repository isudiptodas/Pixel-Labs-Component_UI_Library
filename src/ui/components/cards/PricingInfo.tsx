'use client'

function PricingInfo() {

    const pricingData = [
        {
            price: `99`,
            plan: `Starter`,
            detail: `For hobby`,
            points: [
                '1GB cloud storage',
                '1GB database space',
                '10,000 operations per month'
            ]
        },
        {
            price: `299`,
            plan: `Pro`,
            detail: `For businesses`,
            points: [
                '20GB cloud storage',
                '10GB database space',
                '50,000 operations per month',
                '24/7 online support',
                '10 task scheduler'
            ]
        },
        {
            price: `499`,
            plan: `Enterprise`,
            detail: `For large organizations`,
            points: [
                '100GB cloud storage',
                '50GB database space',
                '5,00,000 operations per month',
                '24/7 online support',
                '10 task scheduler',
                '5 email addresses'
            ]
        },
    ]

    return (
        <>
            <div className={`w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-3 px-5 py-4 scrollbar`}>
                {pricingData.map((data, index) => {
                    return <div key={index} className={`w-full bg-white rounded-2xl h-auto pb-5 border flex flex-col justify-between items-center p-1`}>
                        <div className={`w-full h-auto shadow-xl rounded-2xl px-3 py-3 mb-3 bg-linear-to-br from-gray-100 to-white flex flex-col justify-center items-start`}>
                            <p className={`text-[12px] w-auto text-start my-2 px-4 py-2 rounded-full text-white bg-zinc-800`}>{data.plan}</p>
                            <p className={`w-full text-start text-black font-bold text-5xl xl:text-4xl font-mono flex justify-start items-center mt-10`}>${data.price} <span className={`text-black text-lg`}>/month</span></p>
                            <p className={`w-full text-start text-black opacity-40 text-sm py-2 font-semibold`}>{data.detail}</p>
                        </div>
                        {data.points.map((point, index) => {
                            return <p key={index} className={`w-full text-start text-black text-sm xl:text-[12px] px-3`}>● {point}</p>
                        })}
                        <p className={`w-[95%] rounded-full py-3 text-center bg-black text-white font-semibold mt-2 cursor-pointer active:opacity-70 duration-200 ease-in-out`}>Get Started</p>
                    </div>
                })}
            </div>
        </>
    )
}

export default PricingInfo
