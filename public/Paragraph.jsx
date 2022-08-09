import styled from "styled-components";

const Paragraph = styled.p`
  margin: 0.4rem 0 0.6rem 0;
`;

const Author = styled(Paragraph)`
  color: ${(props) => props.theme.colors.secondaryDark};
`;

export { Paragraph, Author };
