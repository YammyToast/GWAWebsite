import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";

import Navigation from './components/navigation'

const Home: NextPage = () => {
  //const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Musecal - Browsing</title>
        <meta name="description" content="Musecal App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <main>
        <h1>
          Content
        </h1>
      </main>
    </>
  );
};

export default Home;

