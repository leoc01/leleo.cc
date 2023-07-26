import { Main } from "next/document";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import { abeezeeN, abeezeeI } from "../styles/fonts";
import Description from "./description";

export default function Layout({ children, description, path, activateLink }) {
  return (
    <div className={`${abeezeeN.className} bg-gray-100 min-h-screen pb-10`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content="Portfólio do Leonardo" />
      </Head>
      <header>
        <Menu path={path} activateLink={activateLink} />
      </header>
      {description ? <Description description={description} /> : ""}
      <main>{children}</main>
    </div>
  );
}
