import { BrowserRouter as Router } from 'react-router-dom'

// Compopnents
import { NavBar } from './components/NavBar'
import { AnimatedRoutes } from './routes/AnimatedRoutes'

// Root Style
import "./App.css"

function App() {

  return (
    <Router>
      <div className="background-image"></div>
      <NavBar />
      <AnimatedRoutes />
    </Router>
  )
}

export default App
