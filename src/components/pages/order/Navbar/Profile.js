import { Link } from "@reach/router"
import React from "react"
import styled from "styled-components"
import { theme } from "../../../../theme"
import { BsPersonCircle } from "react-icons/bs"

export default function Profile() {
  return (
    <ProfileStyled>
      <div className='info'>
        <p>
          Hey, <b>Paul</b>
        </p>
        <Link to='/'>
          <small>Se déconnecter</small>
        </Link>
      </div>
      <div className='picture'>
        <BsPersonCircle />
      </div>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`
  /* border: 1px solid blue; */

  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;

  .info {
    text-align: right;
    margin-right: 10px;
    p {
      margin: 0;
      color: ${theme.colors.greyBlue};
      b {
        color: ${theme.colors.primary};
      }
    }
    a {
      text-decoration: none;
      .description {
        &:hover {
          text-decoration: underline;
        }
        small {
          font-size: ${theme.fonts.XXS};
          color: ${theme.colors.greyBlue};
          font-weight: ${theme.weights.medium};
          text-decoration: none;
          position: relative;
          bottom: 2px;
        }
      }
    }
  }

  .picture {
    /* border: 1px solid red; */
    height: auto;
    display: flex;
    height: 100%;
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
  }
`
