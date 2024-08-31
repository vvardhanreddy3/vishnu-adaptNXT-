import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import ContentSection from './components/ContentSection'

function App() {
  const [selectedOption, setSelectedOption] = useState('Dashboard')

  const changeSelectedOption = (opt) => {
    setSelectedOption(opt)
  }

  return (
    <div className='landingPage'>
      <Sidebar selectedOption={selectedOption} changeSelectedOption={changeSelectedOption}/>
      <ContentSection  selectedOption={selectedOption}/>
    </div>
  )
}

export default App
