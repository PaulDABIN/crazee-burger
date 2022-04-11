import React from 'react'
import styled from 'styled-components';


export default function Button({label}) {
    return (
        <ButtonStyled type="submit">{label}</ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    width: 100%;


`



