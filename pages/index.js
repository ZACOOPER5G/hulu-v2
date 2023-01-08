import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hulu V2</title>
      </Head>
      <Header />
      <Nav />
    </>
  )
};