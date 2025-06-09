  import { useState , useEffect } from 'react'
  import './Home.css'
  import PasswordGenerator from '../../utils/PasswordGenerator'

  function Home () {  
    const [options , setOptions] = useState([])
    const [pwdLength , setPwdLength] = useState(0)
    const [pwdGenerated , setPwdGenerated] = useState('') 
    const [loading , setLoading] = useState(false)

    const handleOptions = (optionName) => {
      setOptions((prevOptions) => {
        return prevOptions.includes(optionName)  
        ? prevOptions.filter(opt => opt !== optionName)
        : [...prevOptions , optionName]
      })
    }

    const handleLength = (e) => {
      const val = Number(e.target.value);
      setPwdLength(val)
    }

    const getPasswordGenerated = async () => {
      setLoading(true); 
      const pwd = await PasswordGenerator(options, pwdLength);
      setPwdGenerated(pwd);
      setLoading(false);
    }

  return (
    <div className='home-screen relative h-screen bg-neutral-900 flex justify-center items-center overflow-hidden'>
        <div className="particle-shape"></div>
        <div className="particle-shape"></div>
        <div className="w-[80%] lg:w-[50%] xl:w-[40%] h-auto bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 border border-gray-100 p-8">
          <h1 className='text-white text-3xl font-bold text-center mb-8'>Password Generator</h1>
          <div className="w-full grid grid-cols-4 gap-2 ">
               <input type="number" 
                className='w-full bg-transparent py-3 px-4 rounded-md text-white font-light border border-white outline-none placeholder-white text-xs lg:text-sm col-span-3' 
                placeholder='Fill your password length here ...' 
                pattern='\d+' 
                title='Please input only number.' 
                onChange={handleLength}
              />
              <button 
                className={`col-span-1 outline-none text-black font-bold transition-colors bg-white rounded-md ${loading ? 'loading' : 'hover:bg-gray-400'}`} 
                onClick={getPasswordGenerated}
                disabled={loading}
              >
                {loading ? (
                  <div className="loader"></div>
                ) : (
                  'Generate'
                )}
              </button>
          </div>
          <form action="" className='mt-4 w-full'>
            <fieldset className='border border-white p-4 rounded-md'>
              <legend className='text-white font-semibold'>Options</legend>  
              <div className='flex justify-between gap-3'>
                <div className="">
                  <input 
                    type="checkbox" 
                    name="" 
                    id="numbers_check" 
                    className="hidden"
                    onChange={() => handleOptions('numbers')}
                  />
                  <label 
                    htmlFor="numbers_check" 
                    className='option-buttons'
                  >Numbers</label>
                </div>
                <div className="">
                  <input 
                    type="checkbox" 
                    name="" 
                    id="lowercase_check" 
                    className="hidden"
                    onChange={() => handleOptions('lowercase')} 
                  />
                  <label htmlFor="lowercase_check" className='option-buttons'>Lowercase</label>
                </div>
                <div className="">
                  <input 
                    type="checkbox" 
                    name="" 
                    id="uppercase_check" 
                    className="hidden"
                    onChange={() => handleOptions('uppercase')} 
                  />
                  <label htmlFor="uppercase_check" className='option-buttons'>Uppercase</label>
                </div>
                <div className="">
                  <input 
                    type="checkbox" 
                    name="" 
                    id="symbols_check" 
                    className="hidden"
                    onChange={() => handleOptions('symbols')} 
                  />
                  <label htmlFor="symbols_check" className='option-buttons'>Symbols</label>
                </div>
              </div>
            </fieldset>    
          </form>
        </div>
    </div>
  )
}

export default Home