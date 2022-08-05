import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border-radius: 0.2rem;
  border-style: none;
  color: ${(props) => props.theme.colors.primaryLight};
  background-color: ${(props) => props.theme.colors.secondaryDark};

  padding: 0.4rem;
  &&:hover {
    box-shadow: 0 0rem 0.4rem ${(props) => props.theme.colors.primaryDark};
  }
`;

export default Button;
