import styled from "styled-components";

export const LogoutButton = styled.button`
  display: flex;
  font-size: 1.1rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--purple);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--white);
  }
`;
