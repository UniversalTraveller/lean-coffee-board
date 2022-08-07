import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Page from "../public/Page";
import { theme } from "../styles/theme";
import AddCardForm from "../public/AddCardForm";

export default function AddCard() {
  return (
    <>
      <Head>
        <title>Lean Coffee App</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Page>
          <AddCardForm />
        </Page>
      </ThemeProvider>
    </>
  );
}
