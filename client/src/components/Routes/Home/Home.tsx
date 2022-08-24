import React from "react";
import styled from "styled-components";

const HomeStyle = styled.div`
  width: 90%;
  min-height: 100vh;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-color: lightgray;
`;

export default function Home() {
  return <HomeStyle></HomeStyle>;
}
