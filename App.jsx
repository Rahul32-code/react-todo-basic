import React from 'react'
import './App.css'
import Todos from './components/Todos'

const App = () => {
  return (
    <div className='main-container'>
      <div className="center-container">
        <Todos />
      </div>
    </div>
  )
}

export default App
