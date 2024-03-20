
import { LineChart } from 'recharts'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'

function App() {
// <li className="mr-10" key={routes.id}><a href={route.path}>{route.name}</a></li>

  return (
    <>
      <NavBar></NavBar>
      <DaisyNav></DaisyNav>
      <h1 className='text-7xl'>Vite + React</h1>

      <LineChart></LineChart>
      

    </>
  )
}

export default App
