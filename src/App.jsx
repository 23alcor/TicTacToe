import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './components/box'
import Leaderboard from './components/Leaderboard'
import Turn from './components/Turn'
import Win from './components/Win'

function App() {
  const [ turn, setTurn ] = useState(false)
  const [ board, setBoard ] = useState(Array(9).fill(""))
  const [win, setWin] = useState('')
  const [count, setCount] = useState(0)
  const [RedWins, setRedWins] = useState(0)
  const [BlueWins, setBlueWins] = useState(0)

  const handleClick = (index) => {
  if (board[index] !== '' || win) return

  const newBoard = [...board];
  newBoard[index] = turn ? 'X' : 'O'
  setBoard(newBoard)

  if (check(newBoard, 'X')) {
    setWin('RED')
    setRedWins(prev => prev + 1)
    return
  }
  if (check(newBoard, 'O')) {
    setWin('BLUE')
    setBlueWins(prev => prev + 1)
    return
  }

  setCount(prev => prev + 1)
  if (count + 1 >= 9) {
    setWin("NO")
    return
  }

  setTurn(!turn)
  }

  const handleReset = () => {
    const newBoard = Array(9).fill("")
    setBoard(newBoard)
    setWin('')
    setCount(0)
  }

  const check = (board, choice) => {
    if (board[0] === choice && board[1] === choice && board[2] === choice) return true 
    if (board[3] === choice && board[4] === choice && board[5] === choice) return true
    if (board[6] === choice && board[7] === choice && board[8] === choice) return true

    if (board[0] === choice && board[3] === choice && board[6] === choice) return true
    if (board[1] === choice && board[4] === choice && board[7] === choice) return true
    if (board[2] === choice && board[5] === choice && board[8] === choice) return true
    
    if (board[0] === choice && board[4] === choice && board[8] === choice) return true
    if (board[2] === choice && board[4] === choice && board[6] === choice) return true

  }

  return (
    <>
      <div className = 'grid grid-cols-3 w-full items-center max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <Box shape={board[0]} index={0} handleClick={handleClick} />
      <Box shape={board[1]} index={1} handleClick={handleClick} />
      <Box shape={board[2]} index={2} handleClick={handleClick} />
      <Box shape={board[3]} index={3} handleClick={handleClick} />
      <Box shape={board[4]} index={4} handleClick={handleClick} />
      <Box shape={board[5]} index={5} handleClick={handleClick} />
      <Box shape={board[6]} index={6} handleClick={handleClick} />
      <Box shape={board[7]} index={7} handleClick={handleClick} />
      <Box shape={board[8]} index={8} handleClick={handleClick} />


      </div>
      <div className="grid grid-cols-2 w-full items-center max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <Leaderboard blueWins={BlueWins} redWins={RedWins} />
        {(!win) ? <Turn turn={turn} setTurn={setTurn}/> : <Win handleReset={handleReset} choice={win} />}
      </div>
    </>
  )
}

export default App
