import React from 'react'

function Leaderboard({ blueWins, redWins}) {
  return (
    <div className="">
      Leaderboard: 
      <div>Blue: {blueWins} | Red: {redWins}</div>
    </div>
  )
}

export default Leaderboard