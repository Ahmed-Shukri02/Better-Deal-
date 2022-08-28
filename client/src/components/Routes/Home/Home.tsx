import React, {
  EffectCallback,
  useCallback,
  useContext,
  useEffect,
} from "react";
import styled from "styled-components";
import headphoneImage from "../../../Images/headphones2.png";
import { IMediaContext } from "../../../common/Interfaces/Interfaces";
import { mediaContext } from "../../../common/Contexts/mediaContext";
import { useMediaQuery } from "react-responsive";
import IconComponents from "../../../common/icon-components";

const HomeStyle = styled.div`
  min-height: 100vh;
  height: 100%;
  //background-color: lightsalmon;

  .full-container {
    position: sticky;
    top: 86px;
  }

  .md-container {
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
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

  .title-left {
    max-width: 1000px;
    margin: 0 auto;
  }

  .subtitle {
    font-size: 3rem;
  }

  .main-md-container {
    min-height: 100vh;
  }

  .wrapper {
    height: 200vh;
  }

  .more-prompt {
    margin-top: 2em;
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .double-chevron {
    width: 50px;
    height: 50px;
  }
`;

export default function Home() {
  const hideImage = useMediaQuery({ query: "(max-width: 750px)" });

  // COMPONENT
  function titleTextMobile() {
    return (
      <svg viewBox="0 0 670 900">
        <text x="0" y="1.5em">
          SAVE <tspan>$$</tspan>
        </text>
        <text x="0" y="2.5em">
          <tspan>ON</tspan>
        </text>
        <text x="0" y="3.5em">
          <tspan>EVERY</tspan>
        </text>
        <image
          style={{ position: "absolute" }}
          href={headphoneImage}
          x="200px"
          y="150px"
          height="700"
          width="760"
        />
        <text x="0" y="4.5em">
          PURCH-
        </text>
        <text x="0" y="5.5em">
          ASE
        </text>
        <text className="subtitle" x="0" y="770px">
          When you use
        </text>
        <text className="subtitle" x="0" y="820px">
          <tspan>Better Deal</tspan>
        </text>
      </svg>
    );
  }

  function titleText() {
    return (
      <svg viewBox="0 0 860 620">
        <text x="0" y="1.5em">
          SAVE <tspan>$$</tspan> ON
        </text>
        <text x="0" y="2.5em">
          <tspan>EVERY</tspan>
        </text>

        <image href={headphoneImage} x="49%" height="500" width="560" />

        <text x="0" y="3.5em">
          PURCHASE
        </text>
        <text className="subtitle" x="10" y="500px">
          When you use Better Deal
        </text>
      </svg>
    );
  }

  return (
    <HomeStyle>
      <div className="wrapper">
        <div className="full-container">
          <div className="md-container">
            <div className="title-left">
              <div className="title">
                {hideImage ? titleTextMobile() : titleText()}
              </div>
            </div>

            <div className="more-prompt">
              {!hideImage && <div>Scroll down to find out more</div>}
              <IconComponents.ChevronDoubleIcon
                color="lightslategray"
                iconClass="double-chevron"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "rgb(223, 223, 223)",
          marginTop: "-100vh",
          position: "relative",
        }}
      >
        <div className="main-md-container"></div>
      </div>
    </HomeStyle>
  );
}
