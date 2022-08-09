import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { LinkButton } from "../public/Button";
import Page from "../public/Page";
import { theme } from "../styles/theme";
import Link from "next/link";
import { useStore } from "../src/useStore";

import DisplayCards from "../public/DisplayCards";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lean Coffee App</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Page>
          <Link href="/add-card">
            <LinkButton>Add card</LinkButton>
          </Link>
          <DisplayCards />
        </Page>
      </ThemeProvider>
    </>
  );
}
