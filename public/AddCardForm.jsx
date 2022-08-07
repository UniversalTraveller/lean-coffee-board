import Button from "../public/Button";
import { Form, Input, Label, InputRow } from "../public/Form";

import { useState } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

export default function AddCardForm() {
  //variables for topic and author with the useState hook
  const [topic, setTopic] = useState("");
  const [author, setAuthor] = useState("");
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(topic, author);
    router.push("/");
  }

  return (
    <Form onSubmit={handleSubmit}>
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
        <Button type="button" onClick={(event) => (window.location.href = "/")}>
          Cancel
        </Button>
      </Link>
    </Form>
  );
}
