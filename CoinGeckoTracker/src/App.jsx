// import { useState } from "react"
import Routing from "./Components/Routing/Routing"

import Home from "./Pages/Home"
// import { CurrencyContext } from './Context/CurrencyContext';

function App() {
//  const [currency,setcurrency] = useState('usd')

  return (
    <>
    
 
 {/* <CurrencyContext.Provider value={{currency,setcurrency}}> */}
      <Routing/>
 {/* </CurrencyContext.Provider> */}
    </>
  )
}

export default App
