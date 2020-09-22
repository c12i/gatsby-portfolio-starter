import styled from "styled-components";

export const Button = styled.button`
  color: purple;
  background: oldlace;
  font: ${props => props.big ? "3rem" : "1rem"} sans-serif;
  line-height: normal;
  padding: 0.8rem;
  border-radius: 10px;
  transition: all 0.3s linear;
  text-transform: uppercase;
  border-bottom: solid 8px ${props => props.borderColor};
  border-right: solid 6px ${props => props.borderColor};
  cursor: pointer;
  margin: 1em;

  &:hover {
    background: white;
    border: solid 2px purple;
  }
`;
