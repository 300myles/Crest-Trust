import React from 'react'

const CustomButton = ({ action }) => {
  return (
    <div onClick={action} className="w-full mt-5 border text-center py-3.5 bg-primary rounded-lg text-white font-seimibold text-lg hover:opacity-80">Sign In</div>
  )
}

export default CustomButton