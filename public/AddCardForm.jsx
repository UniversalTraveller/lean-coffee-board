import Button from "../public/Button";
import { Form, Input, Label, InputRow } from "../public/Form";

import Link from "next/link";

export default function AddCardForm() {
  return (
    <Form>
      <InputRow>
        <Label htmlFor="topic">Topic</Label>
        <Input type="text" id="topic" />
      </InputRow>
      <InputRow>
        <Label htmlFor="author">Author</Label>
        <Input type="text" id="author" />
      </InputRow>

      <Button>Submit</Button>
      <Link href="/">
        <Button>Cancel</Button>
      </Link>
    </Form>
  );
}
