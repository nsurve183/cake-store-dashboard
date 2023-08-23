


import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Sidebar from  './components/Sidebar'
import { useState } from "react"
import './scss/navbar/navbar.css'


function App() {
  const [isOpen, setIsopen] = useState(true)

  const handleOpen = () => {
      setIsopen(true)
  }

  const sidebar_close = () => {
      setIsopen(false)
  }

  return (
    <>
      <Router>
      <Navbar handleOpen={handleOpen}/>
    <div className="row d-flex g-0">
    <div className="col-3">
        <Sidebar sidebar_close={sidebar_close} isOpen={isOpen} />
    </div>
    <div className={isOpen ? "col-9" : "col-12"}>
    <div className="routes">
      <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/about" Component={About}/>
          <Route exact path="/contact" Component={Contact}/>
        </Routes>
    </div>
    </div>
    </div>
      </Router>
    </>
  )
}

export default App
