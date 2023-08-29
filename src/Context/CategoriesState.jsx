

import CategoriesContext from "./context";
import { useState } from "react";

const CategoriesState = (props) => {
    const [isOpen, setIsopen] = useState(false)

    const [heading, setheading] = useState('Add Birth Day Cakes')

    const handleOpen = () => {
      setIsopen(true)
    }
  
    const sidebar_close = () => {
      setIsopen(false)
    }
  return (
    <div>
      <CategoriesContext.Provider value={{isOpen, sidebar_close, handleOpen, heading, setheading}}>
      {props.children}
      </CategoriesContext.Provider>
    </div>
  )
}

export default CategoriesState
