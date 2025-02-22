import React, { useEffect, useState } from 'react'

function Box( {shape, index, handleClick} ) {
  let color = ''
  if (shape === 'X'){
    color = 'red'
  }
  if (shape === 'O'){
    color = 'blue'
  }

  return (
    <button onClick={() => {handleClick(index)}} className = 'text-8xl border border-red-500 text-center items-center border-solid h-30 hover:bg-sky-700 hover:cursor-pointer' style={{color: color}}>{shape}</button>

  )
}

export default Box