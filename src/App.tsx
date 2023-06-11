import './App.css'
import './extra.css'
import { useState } from 'react'
import { NameForm } from './components/nameForm'
import { Game } from './components/game'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [name, setName]= useState({
    name0: "",
    name1: "",
    name2: "",
    name3: "",
  })
  return(
    <>
      {
      !isSubmitted && 
      <NameForm 
        setIsSubmitted={setIsSubmitted}
        name={name}
        setName = {setName}
      />}
      {isSubmitted && <Game name={name}/>}
    </>
  )
}

export default App
