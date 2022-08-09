import styled from "styled-components";

const TopicCard = styled.article`
  background-color: ${(props) => props.theme.colors.primaryLight};
  margin-top: 1rem;
  padding: 0.4rem;
  border-radius: 0.4rem;
  color: ${(props) => props.theme.colors.primaryDark};
`;

export default TopicCard;
