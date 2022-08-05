import Head from "next/head";
import Image from "next/image";
import Button from "../public/Button";
import Page from "../public/Page";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lean Coffee App</title>
      </Head>
      <Page>
        <Button>Add card</Button>
      </Page>
    </>
  );
}
