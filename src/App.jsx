


import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/about" Component={About}/>
          <Route exact path="/contact" Component={Contact}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
