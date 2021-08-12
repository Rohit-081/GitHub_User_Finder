import styled, { css } from "styled-components";

export const RepoContainer = styled.div`
  width: 750px;
  padding: 1.2rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(0, 0, 0, 0.5);
  height: fit-content;
  font-family: "Nunito", sans-serif;
`;

export const Generic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const GenericStats = styled(Generic)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const GenericInfo = styled(Generic)`
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerStats = styled(Generic)`
  width: 50%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ReposText = styled.span`
  border: none;
  font: 400 1.2rem Poppins;
  color: #ffffff;

  ${(props) => {
    switch (props.font) {
      case "name":
        return css`
          font-family: "Nunito", sans-serif;
          font-weight: bold;
          font-size: 20px;
        `;
      case "language":
        return css`
          font-family: "Nunito", sans-serif;
          margin-top: 0.3rem;
          font-weight: 400;
          font-size: 16px;
        `;
      case "stars":
        return css`
          font-family: "Nunito", sans-serif;
          font-weight: 400;
          font-size: 16px;
        `;
      case "link":
        return css`
          font-family: "Nunito", sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #ffffff;
        `;
      default:
        return css`
          font-family: "Nunito", sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #ffffff;
        `;
    }
  }}
`;

export const Link = styled.a`
  text-decoration: none;
  width: 12rem;
  height: 2.4rem;
  padding: 0.3rem;
  margin: 0 0.6rem 0 0;
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
