import React from "react";
import styled from "styled-components";
import Linkedin from "../../assets/Linkedin";
import GitHub from "../../assets/GitHub";
import WhatsApp from "../../assets/WhatsApp";

const Tooltip = () => {
  return (
    <StyledWrapper>
      <ul className="example-2">
        <li className="icon-content">
          <a
            href="https://www.linkedin.com/in/ahmed-fathy-05114a257/"
            target="_blank"
            aria-label="Linkedin"
            data-social="Linkedin"
            rel="noreferrer"
          >
            <div className="filled" />
            <Linkedin />
          </a>
          <div className="tooltip">LinkedIn</div>
        </li>
        <li className="icon-content">
          <a
            href="https://github.com/kirito0san"
            aria-label="GitHub"
            data-social="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <div className="filled" />
            <GitHub />
          </a>
          <div className="tooltip">GitHub</div>
        </li>
        <li className="icon-content">
          <a
            href="https://wa.me/201119089816"
            aria-label="WhatsApp"
            data-social="WhatsApp"
            target="_blank"
            rel="noreferrer"
          >
            <div className="filled" />
            <WhatsApp />
          </a>
          <div className="tooltip">WhatsApp</div>
        </li>
        <li className="icon-content">
          <a
            href="https://www.frontendmentor.io/profile/kirito0san"
            aria-label="Telegram"
            data-social="telegram"
            target="_blank"
            rel="noreferrer"
          >
            <div className="filled" />
            <img
              className="z-10 rounded-full border grayscale"
              src={require("../../assets/favicon-32x32.png")}
              alt=""
            />
          </a>
          <div className="tooltip">Frontend Mentor</div>
        </li>
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  ul {
    list-style: none;
  }
  .example-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
  .example-2 .icon-content {
    margin: 0 10px;
    position: relative;
  }
  .example-2 .icon-content .tooltip {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(50%);
    color: #fff;
    padding: 6px 10px;
    border-radius: 15px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  .example-2 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: 6px;
  }
  .example-2 .icon-content a {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 8px;
    color: #4d4d4d;
    background-color: #ffff;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 50%);
  }
  .example-2 .icon-content a svg {
    position: relative;
    z-index: 1;
    width: 30px;
    height: 30px;
  }
  .example-2 .icon-content a:hover {
    color: white;
  }
  .example-2 .icon-content a .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover .filled {
    height: 100%;
  }
  .example-2 .icon-content a[data-social="Linkedin"] .filled,
  .example-2 .icon-content a[data-social="Linkedin"] ~ .tooltip {
    background-color: blue;
  }
  .example-2 .icon-content a[data-social="GitHub"] .filled,
  .example-2 .icon-content a[data-social="GitHub"] ~ .tooltip {
    background-color: black;
  }
  .example-2 .icon-content a[data-social="WhatsApp"] .filled,
  .example-2 .icon-content a[data-social="WhatsApp"] ~ .tooltip {
    background-color: green;
  }
  .example-2 .icon-content a[data-social="telegram"] .filled,
  .example-2 .icon-content a[data-social="telegram"] ~ .tooltip {
    background-color: #0088cc;
  }
`;

export default Tooltip;
