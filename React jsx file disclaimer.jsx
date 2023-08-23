import './App.css'
import Navbar from './Navbar'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <h1>course</h1>
      <p>The courses are:
        <ul>
          <li>{part1.name}</li>
          <li>{part2.name}</li>
          <li>{part3.name}</li>
        </ul>
      </p>
    </div>
  )
}

// export default App
export default App
