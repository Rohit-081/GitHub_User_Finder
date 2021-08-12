import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  width: 500px;
  padding: 0.5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  background: rgb(0, 0, 0, 0.5);
  height: fit-content;
  font-family: "Nunito", sans-serif;
`;

export const CardText = styled.span`
  border: none;
  font: 400 1.2rem Poppins;

  color: #ffffff;

  ${(props) => {
    switch (props.font) {
      case "name":
        return css`
          margin: 1rem auto 0;
          font-weight: bold;
          font-size: 26px;
          font-family: "Nunito", sans-serif;
        `;
      case "username":
        return css`
          margin: 0.3rem auto 0;
          font-weight: 700;
          font-size: 20px;
          font-family: "Nunito", sans-serif;
        `;
      case "numbers":
        return css`
          margin-top: 1.2rem;
          font-weight: 700;
          font-size: 18px;
          font-family: "Nunito", sans-serif;
        `;
      case "repos":
        return css`
          margin: 1rem auto 0;
          font-weight: 700;
          font-size: 18px;
          font-family: "Nunito", sans-serif;
        `;
      case "bio":
        return css`
          margin-top: 1.2rem;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.5;
          letter-spacing: 1px;
          font-family: "Nunito", sans-serif;
        `;
      case "link":
        return css`
          font-weight: 700;
          font-size: 16px;
          color: #ffffff;
          font-family: "Nunito", sans-serif;
        `;

      default:
        return css`
          font-weight: 700;
          font-size: 16px;
          color: #ffffff;
          font-family: "Nunito", sans-serif;
        `;
    }
  }}
`;

export const Generic = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-evenly;
  width: 100%;

  color: #ffffff;
`;

export const Link = styled.a`
  text-decoration: none;
  width: 60%;
  height: 2.4rem;
  padding: 0.3rem;
  margin: 1.6rem auto 0.6rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background: rgba(0, 128, 0, 0.3);

  &:hover {
    opacity: 1;
  }
`;

export const Avatar = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 100%;
  margin: 0 auto;
  background: rgba(0, 128, 0, 0.3);
`;
