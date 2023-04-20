import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";

import Navigation from './components/navigation'
import IndexHero from './components/indexHero'
import IndexScroller from './components/indexScroller'

import Layout from "./layout";

export type PostConfig = {
  title: string | undefined,
  thumbnailLink: string,
  id: number,
  createdAt: Date,
}

export type ScrollerData = {
  content: PostConfig[],
  length: number
}


const Home: NextPage = () => {
  //const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { data } = api.posts.getPost.useQuery()

  let ScrollerData: ScrollerData = {
    content: [{
      title: data?.title,
      thumbnailLink: "none",
      id: (typeof (data?.id) == 'number') ? data.id : -1,
      createdAt: data?.createdAt || new Date()
    }],
    length: 1
  }

  return (
    <Layout title="Musecal - Browsing">
      <div className="flex md:h-fit md:w-full items-center justify-center z-0">
        <div className="flex md:w-9/12 md:h-fit flex-col">
          <IndexHero></IndexHero>
          <IndexScroller content={ScrollerData.content} length={ScrollerData.length}></IndexScroller>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

