import styled from "styled-components";
import { Form } from "formik";

export const FormF = styled(Form)`
  width: 400px;
  padding: 2rem;
  margin: auto;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  border-radius: 1rem;
  -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.69);
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.69);

  h1 {
    text-transform: uppercase;
    text-align: center;
  }

  span {
    font-size: 0.9rem;
    text-align: center;
    a {
      color: var(--blue);
    }
  }
`;

export const Label = styled.label`
  display: block;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 0.4rem;
  background-color: transparent;
  border: ${({ borderColor }) =>
    borderColor ? "1px solid var(--red)" : "1px solid var(--blue)"};
  outline: none;

  &:focus {
    border: 0.1rem solid var(--purple);
    outline: none;
  }

  &::placeholder {
    font-style: italic;
  }
`;

export const ErrorP = styled.p`
  text-align: center;
  font-size: small;
  color: var(--red);

  &::before {
    display: inline;
    content: "⚠ ";
  }
`;

export const Button = styled.button`
  padding: 1rem;
  border-radius: 0.4rem;
  border: none;
  background-color: var(--${({ bgColor }) => bgColor});
  color: var(--white);
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: var(--purple);
  }
`;
