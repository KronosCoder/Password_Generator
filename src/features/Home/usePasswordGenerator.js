import { useState , useCallback } from "react";
import PasswordGenerator from "../../utils/PasswordGenerator"

const optionList = ['numbers', 'symbols', 'uppercase' , 'lowercase']


export function usePasswordGenerator () {
    const [options, setOptions] = useState([])
    const [pwdLength, setPwdLength] = useState(12)
    const [pwdGenerated, setPwdGenerated] = useState('')
    const [loading, setLoading] = useState(false)
    const [showError,setShowError] = useState(false)
    const [errorMsg , setErrorMsg] = useState('')

    const handleOptions = (optionName) => {
        setOptions((prevOptions) => {
          if (prevOptions.includes(optionName)) {
            return prevOptions.filter((option) => option !== optionName) 
          } else {
            return [...prevOptions , optionName] 
          }
        })
      }
    
      const handleLengthChange = (value) => {
          setPwdLength(value);
          console.log(pwdLength)
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
      },[pwdLength])

      const getPasswordStrength = () => {
        if (options.length === 1) return { strength: 'Weak', color: 'text-red-400' }
        if (options.length === 2) return { strength: 'Medium', color: 'text-blue-400' }
        if (options.length === 3) return { strength: 'Strong', color: 'text-green-200' }
        if (options.length === 4) return { strength: 'Very Strong', color: 'text-green-400 font-extrabold '}
        return { strength: 'No Select', color: 'text-white' }
      }

      return {
        optionList,
        options,
        pwdLength,
        pwdGenerated,
        loading,
        showError,
        errorMsg,
        handleOptions,
        handleLengthChange,
        getPasswordStrength,
        getPasswordGenerated,
      }
}
