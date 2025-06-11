import React from 'react'

const OptionCheckbox = ({ option, checked, onChange }) => (
  <>
    <input
      type="checkbox"
      id={`${option}_check`}
      className="hidden"
      checked={checked}
      onChange={() => onChange(option)}
    />
    <label
      htmlFor={`${option}_check`}
      className={`option-buttons ${checked ? 'opt-active' : ''}`}
    >
      {option.charAt(0).toUpperCase() + option.slice(1)}
    </label>
  </>
)

export default OptionCheckbox
