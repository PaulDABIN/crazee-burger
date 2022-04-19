import React from "react"
import styled from "styled-components"
import { theme } from "../../../theme"

export default function Main() {
  return <MainStyled></MainStyled>
}

const MainStyled = styled.div`
  border: 1px solid green;
  /* background: pink; */
  flex: 1;
  display: grid;
  grid-template-columns: 25% 1fr;
  position: relative;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  .sidebar {
    /* background: green; */
    box-shadow: 0 0px 4px 0 rgb(0 0 0 / 20%) inset;
  }
  .menu-and-panel-container {
    position: relative;
    height: calc(95vh - 10vh);
    display: flex;
    box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%) inset;

    // menu
    > div:first-child {
      /* border: 3px solid red; */
    }

    .panel-appear {
      opacity: 0.1;
      transform: translateY(100%);
      &.panel-appear-active {
        opacity: 1;
        transform: translateY(0);
        transition: all 500ms;
      }
    }
  }
`
