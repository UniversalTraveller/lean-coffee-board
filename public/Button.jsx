import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border-radius: 0.6rem;
  border-style: none;
  background-color: rgba(227, 227, 227, 0.8);

  padding: 0.4rem;
  &&:hover {
    box-shadow: 0 0rem 0.4rem rgba(72, 72, 72, 0.8);
  }
`;

export default Button;
