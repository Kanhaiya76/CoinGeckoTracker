import { useState } from "react"
import './App.css'

import Home from "./Pages/Home"
import { CurrencyContext } from './Context/CurrencyContext';

function App() {
 const [currency,setcurrency] = useState('usd')

  return (
    <>
    
 
 <CurrencyContext.Provider value={{currency,setcurrency}}>
      <Home/>
 </CurrencyContext.Provider>
    </>
  )
}

export default App
