import React from 'react'

const CustomButton = ({ action, disabled }) => {
  return (
    <button disabled={disabled} onClick={action} className={`w-full mt-5 border text-center py-3.5 bg-primary rounded-lg text-white font-seimibold text-lg hover:opacity-80 ${disabled && "opacity-70 cursor-not-allowed"}`}>Sign In</button>
  )
}

export default CustomButton