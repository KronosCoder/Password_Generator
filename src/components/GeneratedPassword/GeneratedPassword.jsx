import React from 'react'
import { Copy } from 'lucide-react'

export default function GeneratedPassword() {
  return (
    <div>
        <div className="w-full mt-4 flex">
            <div className="w-[90%] h-[40px] bg-white rounded-l-md overflow-hidden p-2">
             <input 
              type="text" 
              className='w-full h-full outline-none px-4'
              name="" 
              id="" 
              placeholder='Generated Password Here ...'
              disabled={true}
             /> 
            </div>
            <div className="flex-1 h-[40px] bg-gray-300 rounded-r-md transition-colors cursor-pointer hover:bg-gray-400 flex items-center justify-center">
                <Copy className='text-gray-600' size={18} />
            </div>
        </div>
    </div>
  )
}

  
