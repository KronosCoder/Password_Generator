import { useState , useEffect } from 'react'
import './Home.css'

function Home() {
  const [optionClick , setOptionClick] = useState(false)
  const stack = []

  return (
    <div className='home-screen relative h-screen bg-neutral-900 flex justify-center items-center overflow-hidden'>
        <div className="particle-shape"></div>
        <div className="particle-shape"></div>
        <div className="w-[80%] xl:w-[30%] h-auto bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 border border-gray-100 p-8">
          <h1 className='text-white text-3xl font-bold text-center mb-8'>Password Generator</h1>
          <input type="number" className='w-full bg-transparent py-3 px-4 rounded-md text-white text-xl font-light border border-white outline-none placeholder-white' 
          placeholder='Fill your password length here ...' pattern='\d+' title='Please input only number.' />
        <form action="" className='mt-4'>
            <fieldset className="border border-white p-6 rounded-md">
              <legend className='text-white text-xl font-light'>
                Options
              </legend>
              <div className='flex justify-between gap-3'>
                <div className="">
                  <input type="checkbox" name="" id="numbers_check" className="hidden" />
                  <label htmlFor="" className='text-white cursor-pointer py-1 px-2 border border-white rounded-md font-semibold transition-all duration-200 hover:bg-white hover:text-black'>Numbers</label>
                </div>
                <div className="">
                  <input type="checkbox" name="" id="lowercase_check" className="hidden" />
                  <label htmlFor="" className='text-white cursor-pointer py-1 px-2 border border-white rounded-md font-semibold transition-all duration-200 hover:bg-white hover:text-black'>Lowercase</label>
                </div>
                <div className="">
                  <input type="checkbox" name="" id="uppercase_check_check" className="hidden" />
                  <label htmlFor="" className='text-white cursor-pointer py-1 px-2 border border-white rounded-md font-semibold transition-all duration-200 hover:bg-white hover:text-black'>Uppercase</label>
                </div>
                <div className="">
                  <input type="checkbox" name="" id="symbols_check" className="hidden" />
                  <label htmlFor="" className='text-white cursor-pointer py-1 px-2 border border-white rounded-md font-semibold transition-all duration-200 hover:bg-white hover:text-black'>Symbols</label>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
    </div>
  )
}

export default Home