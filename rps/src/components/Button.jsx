import { styled } from "styled-components";

const ButtonStyle = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  background-color: #722378;
  color: white;
  font-family: "Playpen Sans", cursive;

  &:hover {
    background-color: #962e9e;
  }
`;

export default function Button({ children }) {
  return <ButtonStyle>{children}</ButtonStyle>;
}
