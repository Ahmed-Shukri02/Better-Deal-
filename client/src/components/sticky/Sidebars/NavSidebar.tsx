import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import IconComponents from "../../../common/icon-components";

const NavSidebarStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 1em;
  box-sizing: border-box;

  .closeIcon {
    width: 3em;
  }
`;

export default function NavSidebar({ setNavBar }: { setNavBar: Function }) {
  return (
    <NavSidebarStyle
      as={motion.div}
      initial={{ opacity: 0, top: "-100%" }}
      animate={{ opacity: 1, top: 0 }}
      exit={{ opacity: 0, top: "-100%" }}
      transition={{ duration: 0.2 }}
    >
      <div
        style={{ display: "flex", justifyContent: "flex-end" }}
        onClick={() => setNavBar(false)}
      >
        <IconComponents.CloseIcon
          color="lightslategray"
          iconClass="closeIcon"
        />
      </div>
    </NavSidebarStyle>
  );
}
