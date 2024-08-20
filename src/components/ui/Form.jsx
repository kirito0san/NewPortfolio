import React, { useState, useRef } from "react";
import styled from "styled-components";

const Forms = () => {
  const [subject, setSubject] = useState(``);
  const [massege, setMassege] = useState(``);

  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      buttonRef.current.style.setProperty("--x", `${x}px`);
      buttonRef.current.style.setProperty("--y", `${y}px`);
    }
  };

  return (
    <StyledWrapper>
      <div className="rounded-2xl w-[300px] sm:w-auto shadow">
        <div
          className="form-container mouse-cursor-gradient-tracking"
          onMouseMove={handleMouseMove}
          ref={buttonRef}
        >
          <form className="z-20 form">
            <div className="form-group">
              <label htmlFor="Subject">Subject</label>
              <input
                required
                name="Subject"
                id="Subject"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="textarea">How Can i Help You?</label>
              <textarea
                required
                cols={50}
                onChange={(e) => setMassege(e.target.value)}
                rows={10}
                id="textarea"
                value={massege}
                name="textarea"
              >
                {" "}
              </textarea>
            </div>
            <a
              className="z-20 form-submit-btn"
              href={`mailto:jodat.ahmedsyed@gmail.com?subject=${subject}&body=${massege}`}
            >
              Send Email
            </a>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form-container {
    background: linear-gradient(#212121, #212121) padding-box,
      linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
    background-size: 200% 100%;
    animation: gradient 5s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #414141;
  }

  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    resize: none;
    color: #fff;
    height: 96px;
    border: 1px solid #414141;
    background-color: transparent;
    font-family: inherit;
  }

  .form-container .form-group input::placeholder {
    opacity: 0.5;
  }

  .form-container .form-group input:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-group textarea:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: #717171;
    font-weight: 600;
    width: 40%;
    background: #313131;
    border: 1px solid #414141;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
  }

  .form-container .form-submit-btn:hover {
    background-color: #fff;
    border-color: #fff;
  }
`;

export default Forms;
