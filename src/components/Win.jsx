import React from 'react'

function Win( {choice, handleReset} ) {
  return (
    <>
      <div>
        {choice} 
        <button
        onClick={handleReset}
        className='bg-red-700 p-5 px-20 m-1 text-white text-10 hover:cursor-pointer hover:bg-red-500'
        >RESET</button>
      </div>
      
    </>
  )
}

export default Win