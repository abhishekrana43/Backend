import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { response } from 'express'

function App() {
  const [jokes, setjokes] = useState([])

  useEffect(() =>{
    axios.get('http://localhost:3000/api/jokes')
    .then((response) => {
      setjokes(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })
  })

  return (
    <>
      <h1> Chai aur fullStack</h1>
      <p1>JOKES: {jokes.length} </p1>

      {
        jokes.map((jokes, index) => {
          <div key={jokes.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        })
      }
    </>
  )
}

export default App
