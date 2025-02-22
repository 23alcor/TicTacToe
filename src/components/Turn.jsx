import React from 'react'

function Turn({ turn, setTurn}) {


  return (
    <>
    <div>
       Turn
       <div className='h-10' style={{background: turn ? 'red' : 'blue'}}>
         
       </div>
    </div>
    </>
  )
}

export default Turn