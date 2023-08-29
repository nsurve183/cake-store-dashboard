


import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Sidebar from './components/Sidebar'
import './scss/navbar/navbar.css'
import { useContext } from "react"
import CategoriesContext from "./Context/context"
import AllUsers from  './pages/AllUsers'
import UsersViews from  './pages/UsersViews'
import CommonForm from  './pages/CommonForm'


function App() {
  const context = useContext(CategoriesContext);
  const {isOpen} = context

  return (
    <>
      <Router>
        <Navbar/>
        <div className="row g-0">
          <div className="col-3">
            <Sidebar/>
          </div>
          <div className={isOpen ? 'col-9' : "col-12"}>
            <div className="routes">
              <Routes>
                <Route exact path="/" Component={Home}/>
                <Route exact path="/users" Component={AllUsers}/>
                <Route exact path="/userviews" Component={UsersViews}/>
                <Route exact path="/addbirthdaycakes" Component={CommonForm}/>
                <Route exact path="/addweddingcakes" Component={CommonForm}/>
                <Route exact path="/addpartycakes" Component={CommonForm}/>
                <Route exact path="/addcupcakes" Component={CommonForm}/>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
