import styled from "styled-components";

const Page = styled.div`
  padding: 2rem 2rem;
  font-family: ${(props) => props.theme.font.primary};
  background-color: ${(props) => props.theme.colors.secondaryLight};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default Page;
