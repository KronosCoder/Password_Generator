import React from 'react'
import ParticlesBackground from '../../components/ParticlesBackground/ParticlesBackground'
import GeneratedPassword from '../../components/GeneratedPassword/GeneratedPassword'
import OptionCheckbox from '../../components/OptionCheckbox/OptionCheckbox'
import { usePasswordGenerator } from '../../features/Home/usePasswordGenerator'
import RangeSlider from '../../components/RangeSlider/RangeSlider'

import './Home.css'

function Home () {

  const {
    optionList,
    options,
    pwdLength,
    pwdGenerated,
    handleLengthChange,
    loading,
    showError,
    errorMsg,
    handleOptions,
    handleLength,
    getPasswordStrength,
    getPasswordGenerated,
  } = usePasswordGenerator()


  return (
    <>
      {/* Main Content */}
      <div className="home-screen relative h-screen flex justify-center items-center overflow-hidden z-10">
        {/* Particles Background Component */}
        <ParticlesBackground />
        <div className="w-[80%] lg:w-[50%] xl:w-[40%] h-auto bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-blue-200 p-8 box" 
          style={{ boxShadow: '0 0 8px #fff' }}
        >
          <h1 className="text-white text-3xl font-bold text-center mb-8">
            Password Generator
          </h1>
          <div className="w-full">
            <RangeSlider 
              min={8}
              max={128}
              step={1}
              value={pwdLength}
              onChange={handleLengthChange}
            />  
          </div>
          <form action="" className="mt-4 w-full">
            <fieldset className="border border-white p-4 rounded-md">
              <legend className="text-white font-semibold">Options</legend>
              <div className="flex justify-between gap-3">
                {optionList.map((option) => (
                  <div key={option}>
                    <OptionCheckbox 
                      option={option}
                      checked={options.includes(option)}
                      onChange={handleOptions}
                    />
                  </div>
                ))}
              </div>
            </fieldset>
          </form> 

          <div className="mt-4">
            <p className='text-white'>Strength : <span className={`${getPasswordStrength().color} font-bold`}>{getPasswordStrength().strength}</span></p>
          </div>

          {/* Generated Password Component */}
          <GeneratedPassword 
  
          />

          <div className="mt-10 w-full flex justify-center items-center">
            <button className='generate-btn'>
              Generate
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
