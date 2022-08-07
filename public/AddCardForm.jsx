import Button from "../public/Button";
import { Form, Input, Label, InputRow } from "../public/Form";

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
      <Button>Cancel</Button>
    </Form>
  );
}
