import { useState, useEffect } from 'react';
import './Home.css';
import PasswordGenerator from '../../utils/PasswordGenerator';
import ParticlesBackground from '../../components/ParticlesBackground';


function Home() {
  const [options, setOptions] = useState([]);
  const [pwdLength, setPwdLength] = useState(0);
  const [pwdGenerated, setPwdGenerated] = useState('');
  const [loading, setLoading] = useState(false);
  const optionList = ['numbers', 'symbols', 'uppercase' , 'lowercase'];

  const handleOptions = (optionName) => {
    setOptions((prevOptions) => {
      return prevOptions.includes(optionName)
        ? prevOptions.filter((opt) => opt !== optionName)
        : [...prevOptions, optionName];
    });
  };

  const handleLength = (e) => {
    const val = Number(e.target.value);
    setPwdLength(val);
  };

  const getPasswordGenerated = async () => {
    setLoading(true);
    const pwd = await PasswordGenerator(options, pwdLength);
    setPwdGenerated(pwd);
    setLoading(false);
  };

  return (
    <>
      {/* Particles Background Component */}
      {/* Main Content */}
      <div className="home-screen relative h-screen flex justify-center items-center overflow-hidden z-10"
          style={{ backgroundImage: 'linear-gradient(180deg, black 40%, rgba(255 , 255 , 255 , 0.195))' }}
      >
        <ParticlesBackground />
        <div className="w-[80%] lg:w-[50%] xl:w-[40%] h-auto bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-white p-8 box" 
          style={{ boxShadow: '0 0 8px #fff' }}
        >
          <h1 className="text-white text-3xl font-bold text-center mb-8">
            Password Generator
          </h1>
          <div className="w-full grid grid-cols-4 gap-2">
            <input
              type="number"
              className="w-full bg-transparent py-3 px-4 rounded-md text-white font-light border border-white outline-none placeholder-white text-xs lg:text-sm col-span-3"
              placeholder="Fill your password length here ..."
              pattern="\d+"
              title="Please input only number."
              onChange={handleLength}
            />
            <button
              className={`col-span-1 outline-none text-white font-bold transition-colors bg-transparent border border-white rounded-md ${
                loading ? 'loading' : 'hover:bg-white hover:text-black'
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

          <div className="w-full mt-4 flex">
              <div className="w-[90%] h-[40px] bg-slate-100 rounded-l-md overflow-hidden p-2">
               <input 
                type="text" 
                className='w-full h-full outline-none px-4'
                name="" 
                id="" 
                placeholder='Generated Password Here ...'
                disabled={true}
               /> 
              </div>
              <div className="flex-1 h-[40px] bg-gray-300 rounded-r-md transition-colors cursor-pointer hover:bg-gray-400"></div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Home;
