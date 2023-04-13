import React from "react";

import Head from "next/head";

import Navigation from "./components/navigation";

type LayoutContent = {
  children: React.ReactNode;
  title: string
};

export default function Layout(props: LayoutContent) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Musecal App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-x-hidden">
        <Navigation></Navigation>
        <main>{props.children}</main>
      </div>
    </>
  );
}
