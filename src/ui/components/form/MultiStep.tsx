'use client'

import { Activity, useEffect, useState } from "react"
import { IoMdArrowDropdown } from "react-icons/io";

function MultiStep() {

  const [completed, setCompleted] = useState(0);
  const [state, setState] = useState('select state');
  const [allStates, setAllStates] = useState<string[]>();
  const [country, setCountry] = useState('select country');
  const [gender, setGender] = useState('gender');
  const [genderVisible, setGenderVisible] = useState(false);
  const [stateVisible, setStateVisible] = useState(false);
  const [countryVisible, setCountryVisible] = useState(false);

  const submit = () => {
    setCompleted(completed+1);
  }

  const countries = [
    "India",
    "United States",
    "China",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Brazil"
  ];

  const states = [
    {
      country: "India",
      allStates: [
        "Maharashtra",
        "Karnataka",
        "Delhi",
        "Tamil Nadu",
        "Uttar Pradesh",
        "Gujarat",
        "Rajasthan",
        "Kerala",
        "West Bengal",
        "Punjab",
        "Bihar",
        "Telangana"
      ]
    },
    {
      country: "United States",
      allStates: [
        "California",
        "Texas",
        "New York",
        "Florida",
        "Illinois",
        "Georgia",
        "Pennsylvania",
        "Ohio",
        "Michigan",
        "North Carolina",
        "New Jersey",
        "Virginia"
      ]
    },
    {
      country: "China",
      allStates: [
        "Guangdong",
        "Beijing",
        "Shanghai",
        "Sichuan",
        "Zhejiang",
        "Shandong",
        "Jiangsu",
        "Henan",
        "Hubei",
        "Fujian",
        "Tianjin"
      ]
    },
    {
      country: "United Kingdom",
      allStates: [
        "England",
        "Scotland",
        "Wales",
        "Northern Ireland"
      ]
    },
    {
      country: "Canada",
      allStates: [
        "Ontario",
        "Quebec",
        "British Columbia",
        "Alberta",
        "Manitoba",
        "Saskatchewan",
        "Nova Scotia",
        "New Brunswick",
        "Newfoundland and Labrador",
        "Prince Edward Island"
      ]
    },
    {
      country: "Australia",
      allStates: [
        "New South Wales",
        "Victoria",
        "Queensland",
        "Western Australia",
        "South Australia",
        "Tasmania",
        "Northern Territory",
        "Australian Capital Territory"
      ]
    },
    {
      country: "Germany",
      allStates: [
        "Bavaria",
        "Berlin",
        "Hamburg",
        "Hesse",
        "Saxony",
        "North Rhine-Westphalia",
        "Baden-Württemberg",
        "Thuringia",
        "Brandenburg",
        "Lower Saxony"
      ]
    },
    {
      country: "France",
      allStates: [
        "Île-de-France",
        "Occitanie",
        "Nouvelle-Aquitaine",
        "Brittany",
        "Normandy",
        "Grand Est",
        "Auvergne-Rhône-Alpes",
        "Provence-Alpes-Côte d'Azur"
      ]
    },
    {
      country: "Japan",
      allStates: [
        "Tokyo",
        "Osaka",
        "Hokkaido",
        "Kyoto",
        "Aichi",
        "Fukuoka",
        "Hyogo",
        "Okinawa",
        "Chiba",
        "Saitama"
      ]
    },
    {
      country: "Brazil",
      allStates: [
        "São Paulo",
        "Rio de Janeiro",
        "Bahia",
        "Minas Gerais",
        "Paraná",
        "Santa Catarina",
        "Pernambuco",
        "Goiás",
        "Rio Grande do Sul",
        "Ceará"
      ]
    }
  ];

  const Gender = [
    'male',
    'female',
    'trans',
    'i wish not to disclose'
  ];

  useEffect(() => {
    const data = states.find((st) => st.country === country);
    setAllStates(data?.allStates);
  }, [country]);


  return (
    <>
      <div className={`w-full md:w-[60%] py-4 px-3 border border-zinc-800 h-auto relative overflow-hidden flex flex-col justify-center items-center gap-4`}>

        {/* // progress bar */}
        <div className={`w-full px-5 relative flex justify-center items-center gap-6`}>
          <span className={`rounded-full z-20 border border-zinc-600 py-2 px-3 ${completed >= 1 ? "bg-green-500 text-white border-transparent" : "bg-gray-300 text-black"} duration-200 ease-in-out text-sm`}>{completed >= 1 ? "✓" : "1"}</span>
          <span className={`rounded-full z-20 border border-zinc-600 py-2 px-3 ${completed >= 2 ? "bg-green-500 text-white border-transparent" : "bg-gray-300 text-black"} duration-200 ease-in-out text-sm`}>{completed >= 2 ? "✓" : "2"}</span>
          <span className={`rounded-full z-20 border border-zinc-600 py-2 px-3 ${completed >= 3 ? "bg-green-500 text-white border-transparent" : "bg-gray-300 text-black"} duration-200 ease-in-out text-sm`}>{completed >= 3 ? "✓" : "3"}</span>
        </div>

        <div className={`w-full flex justify-center items-center mt-5 border border-zinc-500 py-4 px-4`}>

          {/* step 1 */}
          <Activity mode={completed === 0 ? "visible" : "hidden"}>
            <div className={`w-full flex flex-col justify-center items-center gap-4`}>
              <input type="text" className={`w-full px-3 py-3 bg-gray-100 outline-none text-black`} placeholder="Enter full name" />
              <input type="email" className={`w-full px-3 py-3 bg-gray-100 outline-none text-black`} placeholder="Enter email address" />
              <input type="text" className={`w-full px-3 py-3 bg-gray-100 outline-none text-black`} placeholder="Enter contact" />
              <input type="text" className={`w-full px-3 py-3 bg-gray-100 outline-none text-black`} placeholder="Enter current city" />
              <p onClick={() => setCompleted(completed + 1)} className={`w-full py-3 text-center bg-blue-500 text-white text-sm cursor-pointer active:opacity-60 duration-200 ease-in-out`}>Next</p>
            </div>
          </Activity>

          {/* step 2 */}
          <Activity mode={completed === 1 ? "visible" : "hidden"}>
            <div className={`w-full flex flex-col justify-center items-center gap-4`}>

              {/* gender */}
              <p onClick={() => setGenderVisible(!genderVisible)} className={`w-full py-3 px-3 text-black capitalize flex justify-between items-center bg-gray-100 cursor-pointer`}>{gender} <IoMdArrowDropdown className={`${genderVisible ? "rotate-180" : "rotate-0"} duration-200 ease-in-out text-2xl`} /></p>
              <div className={`w-full ${genderVisible ? "block" : "hidden"} max-h-[30vh] overflow-y-auto p-1 flex flex-col justify-start items-center bg-gray-100`}>
                {Gender.map((item, index) => {
                  return <p onClick={() => { setGender(item); setGenderVisible(false); }} key={index} className={`w-full py-2 px-3 text-[12px] capitalize cursor-pointer bg-transparent text-black hover:bg-white hover:font-semibold duration-200 ease-in-out`}>{item}</p>
                })}
              </div>

              {/* country */}
              <p onClick={() => setCountryVisible(!countryVisible)} className={`w-full py-3 px-3 text-black capitalize flex justify-between items-center bg-gray-100 cursor-pointer`}>{country} <IoMdArrowDropdown className={`${countryVisible ? "rotate-180" : "rotate-0"} duration-200 ease-in-out text-2xl`} /></p>
              <div className={`w-full ${countryVisible ? "block" : "hidden"} max-h-[30vh] overflow-y-auto p-1 flex flex-col justify-start items-center bg-gray-100`}>
                {countries.map((item, index) => {
                  return <p onClick={() => { setCountry(item); setCountryVisible(false); }} key={index} className={`w-full py-2 px-3 text-[12px] capitalize cursor-pointer bg-transparent text-black hover:bg-white hover:font-semibold duration-200 ease-in-out`}>{item}</p>
                })}
              </div>

              {/* state */}
              <p onClick={() => setStateVisible(!stateVisible)} className={`w-full ${country === 'select country' ? "hidden" : "block"} py-3 px-3 text-black capitalize flex justify-between items-center bg-gray-100 cursor-pointer`}>{state} <IoMdArrowDropdown className={`${stateVisible ? "rotate-180" : "rotate-0"} duration-200 ease-in-out text-2xl`} /></p>
              <div className={`w-full ${stateVisible ? "block" : "hidden"} max-h-[30vh] overflow-y-auto p-1 flex flex-col justify-start items-center bg-gray-100`}>
                {allStates && allStates.map((item, index) => {
                  return <p onClick={() => { setState(item); setStateVisible(false); }} key={index} className={`w-full py-2 px-3 text-[12px] capitalize cursor-pointer bg-transparent text-black hover:bg-white hover:font-semibold duration-200 ease-in-out`}>{item}</p>
                })}
              </div>

              <p onClick={() => setCompleted(completed + 1)} className={`w-full py-3 text-center bg-blue-500 text-white text-sm cursor-pointer active:opacity-60 duration-200 ease-in-out`}>Next</p>
            </div>
          </Activity>

          {/* step 3 */}
          <Activity mode={completed >= 2 ? "visible" : "hidden"}>
            <div className={`w-full flex flex-col justify-center items-center gap-4`}>
              <textarea className={`w-full h-40 bg-gray-100 text-black outline-none py-2 px-3`} placeholder="Write your feedback"/>
              <p onClick={submit} className={`w-full py-3 text-center bg-blue-500 text-white text-sm cursor-pointer active:opacity-60 duration-200 ease-in-out`}>Submit</p>
            </div>
          </Activity>
        </div>

      </div>
    </>
  )
}

export default MultiStep
