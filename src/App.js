import { Router } from "@reach/router";
import { useState } from "react"
import LoginPage from "./components/pages/LoginPage"
import OrderPage from "./components/pages/OrderPage";


function App() {
  //state (données)
  const title = "Bienvenue chez nous";

  //comportements
  

  //affichage (render)
  return (
    <Router>
       <LoginPage path="/" />
       <OrderPage path="order"/>
    </Router>
  )
  

}

export default App