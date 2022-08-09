import { Button, LinkButton } from "../public/Button";
import Link from "next/link";
import { Form, Input, Label, InputRow } from "../public/Form";
import { useState } from "react";
import { useRouter } from "next/router";
import { useStore } from "../src/useStore";

export default function AddCardForm() {
  //variables for topic and author with the useState hook
  const [topic, setTopic] = useState("");
  const [author, setAuthor] = useState("");
  const addTopic = useStore((state) => state.addTopic);

  const router = useRouter();

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        addTopic(topic, author);
        router.push("/");
      }}
    >
      <InputRow>
        <Label htmlFor="topic">Topic</Label>
        <Input
          type="text"
          id="topic"
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
        />
      </InputRow>

      <InputRow>
        <Label htmlFor="author">Author</Label>
        <Input
          type="text"
          id="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </InputRow>

      <Button type="submit">Submit</Button>

      <Link href="/">
        <LinkButton type="button">Cancel</LinkButton>
      </Link>
    </Form>
  );
}
