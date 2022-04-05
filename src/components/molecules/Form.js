import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme/index';

export default function Form({inputValue, handleSubmit, handleChange}) {
    return (
        <FormStyled action="submit" onSubmit={handleSubmit}>
            <h1 >Bienvenue chez nous</h1>
            <h2>Connectez-vous</h2>
            <hr/>
            <input type="text" placeholder="Entrez un prénom...." value={inputValue} onChange={handleChange}/>
            <button type="submit">Accéder à l'espace</button>
      </FormStyled>
    )
}

const FormStyled = styled.form`
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0px auto;
    padding: 2.5rem 2rem;
    border-radius: 5px;
    font-family: "Amatic SC", cursive;

    hr {
        border: 1.5px solid #f56a2c;
        margin-bottom: 40px;
    }

    h1 {
        color: white;
        font-size: ${theme.fonts.P5};
    }
    h2 {
        color: #8e8b8b;
        margin: 20px 10px 10px;
        color: ${theme.colors.white};
        font-size: ${theme.fonts.P4};
    }

    button {
        width: 100%;
    }

`
