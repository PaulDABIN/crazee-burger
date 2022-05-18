import { useState } from "react"
import styled from "styled-components"
import { fakeBurgers1 } from "./fakeData"

export default function App() {
  // state
  const [fruits, setFruits] = useState([
    { id: 1, name: "abricot" },
    { id: 2, name: "banane" },
    { id: 3, name: "cerise" },
  ])

  console.log(fakeBurgers1)
  // comportements

  // affichage
  return (
    <AppStyled>
      {fakeBurgers1.map((burger) => (
        <div className='fruit-style' key={burger.id}>
          <img className='imgburger' src={burger.imageSource} />
          <p>{burger.title}</p>
          <div>
            <span className='price'>{burger.price}</span>
            <button>Ajouter</button>
          </div>
        </div>
      ))}
    </AppStyled>
  )
}

const AppStyled = styled.div`
  border: 1px solid red;
  display: flex;
  padding-top: 50px;
  justify-content: space-evenly;

  .fruit-style {
    border: 1px solid black;
    width: 150px;
    text-align: center;
    padding-bottom: 10px;
  }

  .price {
    margin-right: 10px;
  }

  .imgburger {
    width: 150px;
  }
`
