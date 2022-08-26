import React, { useContext, useState } from "react";
import styled from "styled-components";
import { mediaContext } from "../../../common/Contexts/mediaContext";
import { IMediaContext } from "../../../common/Interfaces/Interfaces";
import Buttons from "../../Inputs/Buttons/Buttons";
import { FaBars } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import NavSidebar from "../Sidebars/NavSidebar";

const HeaderStyle = styled.div`
  border-bottom: 1px solid rgb(230, 230, 230);
  position: sticky;
  top: 0;

  .header-container {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-logo {
    padding: 2em;
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
        {navSidebarOpen && isTablet && <NavSidebar />}
      </AnimatePresence>

      <div className="header-container">
        <div className="header-logo">Better Deal!</div>
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
        <div className="header-logo">Sign up</div>
      </div>
    </HeaderStyle>
  );
}
