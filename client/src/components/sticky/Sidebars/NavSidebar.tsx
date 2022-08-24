import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavSidebarStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export default function NavSidebar() {
  return (
    <NavSidebarStyle
      as={motion.div}
      initial={{ opacity: 0, top: "-100%" }}
      animate={{ opacity: 1, top: 0 }}
      exit={{ opacity: 0, top: "-100%" }}
      transition={{ duration: 0.2 }}
    >
      This is a sidebar
    </NavSidebarStyle>
  );
}
