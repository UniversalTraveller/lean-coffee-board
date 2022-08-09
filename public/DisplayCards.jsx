import { useStore } from "../src/useStore";
import TopicCard from "../public/TopicCard";

import { Paragraph, Author } from "./Paragraph";

export default function DisplayCards() {
  const topics = useStore((state) => state.topics);
  return topics.map((topic) => (
    <TopicCard key={topic.id}>
      <Paragraph>{topic.topic}</Paragraph>
      <Author>- {topic.author}</Author>
    </TopicCard>
  ));
}
