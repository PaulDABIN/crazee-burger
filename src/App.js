import { Router } from "@reach/router"
import { useState } from "react"
import LoginPage from "./components/pages/login/LoginPage"
import OrderPage from "./components/pages/order/OrderPage"

function App() {
  //state (données)
  const title = "Bienvenue chez nous"

  //comportements

  //affichage (render)
  return (
    <Router>
      <LoginPage path='login' />
      <OrderPage path='/' />
    </Router>
  )
}

export default App
