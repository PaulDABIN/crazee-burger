import { useState } from "react"
import styled from "styled-components"
import { fakeBurgers1 } from "../../fakeData/fakeData"

export default function Card({ id, imageSource, price, title }) {
  // state

  // comportements

  // affichage
  return (
    <AppStyled>
      <div className='fruit-style' key={id}>
        <img className='imgburger' src={imageSource} />
        <p>{title}</p>
        <div>
          <span className='price'>{price} €</span>
          <button className='addButton'>Ajouter</button>
        </div>
      </div>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  .fruit-style {
    border: 1px solid black;
    width: 150px;
    text-align: center;
    padding-bottom: 10px;
    border-radius: 5px;
  }

  .price {
    margin-right: 10px;
  }

  .imgburger {
    width: 150px;
  }

  button {
    background-color: lightgreen;
  }
`
