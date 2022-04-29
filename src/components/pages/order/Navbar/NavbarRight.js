import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "../../../../theme"
import Profile from "./Profile"
import ToggleButton from "./ToggleButton"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function NavbarRight() {
  const [isChecked, setIsChecked] = useState(false)

  const handleToggle = () => {
    if (!isChecked)
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    setIsChecked(!isChecked)
  }

  return (
    <NavBarRightStyled>
      <ToggleButton onToggle={handleToggle} isChecked={isChecked} />
      <ToastContainer className='toaster' bodyClassName='body-toast' />
      <Profile />
    </NavBarRightStyled>
  )
}

const NavBarRightStyled = styled.div`
  /* background: lightgreen; */
  width: auto;
  min-width: 380px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .log-out-icon:visited {
    text-decoration: none;
  }

  .toaster {
    /* border: 1px solid red; */
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_black};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`
