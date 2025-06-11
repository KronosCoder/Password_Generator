import { useState , useCallback } from 'react'
import PasswordGenerator from '../../utils/PasswordGenerator'
import ParticlesBackground from '../../components/ParticlesBackground/ParticlesBackground'
import GeneratedPassword from '../../components/GeneratedPassword/GeneratedPassword'
import './Home.css'

const initialPwdStrength = {
  score : 0,
  desc : ''
}

function Home () {
  const [options, setOptions] = useState([])
  const [pwdLength, setPwdLength] = useState(0)
  const [pwdGenerated, setPwdGenerated] = useState('')
  const [loading, setLoading] = useState(false)
  const [showError,setShowError] = useState(false)
  const [errorMsg , setErrorMsg] = useState('')
  const [pwdStrength , setPwdStrength] = useState(initialPwdStrength)

  const optionList = ['numbers', 'symbols', 'uppercase' , 'lowercase']

  const handleOptions = (optionName) => {
    setOptions((prevOptions) => {
      if (prevOptions.includes(optionName)) {
        return prevOptions.filter((option) => option !== optionName) // หาว่าค่าก่อนหน้าค่าไหนที่ตรงกับค่าปัจจุบัน ถ้าเจอให้ลบออก
      } else {
        return [...prevOptions , optionName] // กระจาย array ผ่าน spread operator และเพิ่ม array ใหม่เข้าไปต่อท้าย
      }
    })
  }

  const handleLength = (e) => {
    const val = Number(e.target.value)
    setPwdLength(val)
  }

  const getPasswordGenerated = useCallback(async () => {
    setLoading(true)
    setShowError(false)

    try {
      const password = await PasswordGenerator(optionList , pwdLength)
      setPwdGenerated(password)
    } catch (err) {
      setShowError(true)
      setErrorMsg('Failed to generate password please try again.')
    } finally {
      setLoading(false)
    }
    
  },[optionList , pwdLength])

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
          <div className="w-full grid grid-cols-4 gap-2">
            <input
              type="number"
              className="w-full bg-transparent py-3 px-4 rounded-md text-white border border-white outline-none placeholder-white text-xs lg:text-sm col-span-3 font-bold"
              placeholder="Fill your password length here ..."
              pattern="\d+"
              title="Please input only number."
              onChange={handleLength}
            />
            <button
              className={`generate-btn col-span-1 outline-none text-white font-bold transition-colors bg-transparent border border-white rounded-md ${
                loading ? 'loading' : ''
              }`}
              onClick={getPasswordGenerated}
              disabled={loading}
            >
              {loading ? <div className="loader"></div> : 'Generate'}
            </button>
          </div>

          <form action="" className="mt-4 w-full">
            <fieldset className="border border-white p-4 rounded-md">
              <legend className="text-white font-semibold">Options</legend>
              <div className="flex justify-between gap-3">
                {optionList.map((option) => (
                  <div key={option}>
                    <input
                      type="checkbox"
                      id={`${option}_check`}
                      className="hidden"
                      onChange={() => handleOptions(option)}
                    />
                    <label
                      htmlFor={`${option}_check`}
                      className={`option-buttons ${options.includes(option) ? 'opt-activce' : ''}`}
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </form>

          <div className="mt-4">
            <p className='text-white'>Strength : <span className='text-green-300 font-bold'>Strong</span></p>
          </div>

          {/* Generated Password Component */}
          <GeneratedPassword 

          />
        </div>
      </div>
    </>
  )
}

export default Home
