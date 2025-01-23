import React from 'react';
import {  FaCheckSquare, FaRegSquare } from "react-icons/fa";

const CheckBox = ({checked, setChecked}) => {

  return (
    <div className="inline" onClick={() => setChecked(!checked)}>
      {checked ? <FaCheckSquare color="#7044EE" size={24} /> : <FaRegSquare color="#7044EE" size={24} />}
    </div>
  )
}

export default CheckBox