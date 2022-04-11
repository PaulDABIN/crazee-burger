import React from "react"
import styled from "styled-components"
import { BsPersonCircle } from "react-icons/bs"
import { theme } from "../../theme"

export default function TextInput({ inputValue, handleChange }) {
  return (
    <TextInputStyled>
      <BsPersonCircle className='icon' />
      <input type='text' placeholder='Entrez un prénom....' value={inputValue} onChange={handleChange} />
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0; // should be there or in parent style?
  /* height: 17px; // add this if you want pixel perfect with Button Height */
  white-space: nowrap;
  .icon {
    font-size: ${theme.fonts.P0};
    margin-right: ${theme.gridUnit * 1.6}px;
    color: ${theme.colors.greySemiDark};
    min-width: 1em; // that way, the icon size is NOT affected by width of the entire component.
    /* border: 1px solid red; */
  }

  input {
    border: none;
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.black};
    width: 100%;
    display: flex;

    &::placeholder {
      background: ${theme.colors.white};
      color: lightgrey;
    }

    &:focus {
      /* outline: 0; */
    }
  }
`
