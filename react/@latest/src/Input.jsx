import React from 'react'

const Input = ({inpu}) => {
  return (
    <input type="text" onChange={(e)=>inpu(e.target.value)}/>
  )
}

export default Input