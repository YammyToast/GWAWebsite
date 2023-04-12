import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";

import Navigation from './components/navigation'
import IndexContent from "./components/indexContent";

import Layout from "./layout";

const Home: NextPage = () => {
  //const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <Layout>
      <IndexContent></IndexContent>
    </Layout>
  );
};

export default Home;

