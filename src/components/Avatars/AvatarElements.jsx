import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  h1 {
    font-size: 2rem;
  }
`;

export const AvatarContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;

  img {
    width: 100px;
    height: 100px;
    transition: 0.1s ease-in-out;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }

  .selected {
    border: 0.4rem solid var(--blue);
    padding: 3px;
    border-radius: 50%;
  }
`;
