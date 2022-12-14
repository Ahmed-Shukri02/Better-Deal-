import React, { useContext, useState } from "react";
import styled from "styled-components";
import { mediaContext } from "../../../common/Contexts/mediaContext";
import { IMediaContext } from "../../../common/Interfaces/Interfaces";
import Buttons from "../../Inputs/Buttons/Buttons";
import { FaBars } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import NavSidebar from "../Sidebars/NavSidebar";

const HeaderStyle = styled.div`
  //border-bottom: 1px solid rgb(230, 230, 230);
  position: sticky;
  top: 0;
  z-index: 1000;

  .header-container {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-container > * {
    flex-basis: 100%;
  }

  .header-logo {
    padding: 2em;
    text-align: center;
  }

  nav ul {
    list-style: none;
    display: flex;
    gap: 5em;
  }

  @media (max-width: 950px) {
  }
`;

export default function Header() {
  const { isTablet } = useContext<IMediaContext>(mediaContext);
  const [navSidebarOpen, setNavSidebarOpen] = useState<boolean>(false);

  return (
    <HeaderStyle>
      <AnimatePresence>
        {navSidebarOpen && isTablet && (
          <NavSidebar setNavBar={setNavSidebarOpen} />
        )}
      </AnimatePresence>

      <div className="header-container">
        <div className="header-logo">{isTablet ? "BD!" : "Better Deal!"}</div>
        {!isTablet ? (
          <nav>
            <ul>
              <li>
                <Buttons.DefaultButton
                  testid="home-button"
                  styleOverride="transparent"
                >
                  Home
                </Buttons.DefaultButton>
              </li>
              <li>
                <Buttons.DefaultButton styleOverride="transparent">
                  Find
                </Buttons.DefaultButton>
              </li>
              <li>
                <Buttons.DefaultButton styleOverride="transparent">
                  Help
                </Buttons.DefaultButton>
              </li>
            </ul>
          </nav>
        ) : (
          <Buttons.DefaultButton
            handleClick={() => setNavSidebarOpen((oldVal) => !oldVal)}
            styleOverride="transparent"
          >
            <FaBars />
          </Buttons.DefaultButton>
        )}

        <div
          style={{
            padding: "0px 2em",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Buttons.DefaultButton fontColor="white" theme="green">
            Sign Up
          </Buttons.DefaultButton>
        </div>
      </div>
    </HeaderStyle>
  );
}
