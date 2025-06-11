import React from 'react'
import './RangeSlider.css'

export default function RangeSlider ({ min , max , step , value , onChange }) {
    const handleChange = (e) => {
      const newValue = Number(e.target.value)
      onChange(newValue)
    }

    return (
        <>
            <label htmlFor="pwd-length-range" className="block mb-2 text-base font-medium text-white">
                Password Length : {value}
            </label>
            <input
            id="pwd-length-range"
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            style={{
                background: `linear-gradient(to right, #5667ff ${((value - min) / (max - min)) * 100}%, #0000 ${(value - min) / (max - min) * 100}%)`
              }}
            className="w-full h-2"
            />
        </>
    )
}
