import styled from "styled-components";

export const NavButtonContainer = styled.button`
  text-transform: uppercase;
  font-awesome: 1.4rem;
  background: ${props =>
    props.forNav ? "var(--mainYellow)" : "var(--mainWhite)"} !important;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${props =>
    props.forNav ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${props =>
    props.forNav ? "var(--mainDark)" : "var(--mainDark)"} !important;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props =>
      props.forNav ? "var(--mainWhite)" : "var(--lightBlue)"} !important;
    border-color: ${props =>
      props.forNav ? "var(--mainDark)" : "var(--lightBlue)"};
    color: ${props =>
      props.forNav ? "var(--mainDark)" : "var(--mainDark)"} !important;
  }
  &:focus {
    outline: none;
  }
`;
