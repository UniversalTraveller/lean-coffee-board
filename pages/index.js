import Head from "next/head";
import Image from "next/image";
import { ThemeProvider } from "styled-components";
import Button from "../public/Button";
import Page from "../public/Page";
import { theme } from "../styles/theme";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lean Coffee App</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Page>
          <Button>Add card</Button>
        </Page>
      </ThemeProvider>
    </>
  );
}
