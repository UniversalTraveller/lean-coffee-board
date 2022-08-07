import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Input = styled.input`
  margin-bottom: 0.5rem;
`;

const Label = styled.label`
  width: 5rem;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export { Form, Input, Label, InputRow };
