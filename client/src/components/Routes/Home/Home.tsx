import React, { useContext } from "react";
import styled from "styled-components";
import headphoneImage from "../../../Images/headphones2.png";
import { IMediaContext } from "../../../common/Interfaces/Interfaces";
import { mediaContext } from "../../../common/Contexts/mediaContext";

const HomeStyle = styled.div`
  width: 90%;
  min-height: 100vh;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  //background-color: lightsalmon;

  .title-flex {
    display: flex;
  }
  .title-flex > * {
    flex-basis: 100%;
  }

  .title {
    font-size: 8rem;
    font-weight: 600;
  }
  .title svg {
    fill: lightslategray;
  }

  .title tspan {
    fill: #118c4f;
  }
  .title-right {
    flex: 0 0 500px;
  }
  .title-right img {
    height: 520px;
    width: 100%;
  }
  .title-left {
    flex: 0 0 900px;
    min-width: 450px;
  }

  .subtitle {
    font-size: 4rem;
  }
`;

export default function Home() {
  const { isTablet } = useContext<IMediaContext>(mediaContext);

  // COMPONENT
  function titleText() {
    return (
      <svg viewBox="0 0 1020 620">
        <text x="0" y="1em">
          SAVE <tspan>$$</tspan> ON
        </text>
        <text x="0" y="2.5em">
          EVERY
        </text>
        <text x="0" y="4em">
          PURCHASE
        </text>
        <text className="subtitle" x="0" y="590px">
          When you use Better Deal
        </text>
      </svg>
    );
  }

  return (
    <HomeStyle>
      <div className="title-flex">
        <div className="title-left">
          <div className="title">{titleText()}</div>
        </div>
        {!isTablet && (
          <div className="title-right">
            <img src={headphoneImage} alt="headphones" />
          </div>
        )}
      </div>
    </HomeStyle>
  );
}
