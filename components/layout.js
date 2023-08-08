import { Main } from "next/document";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import { abeezeeN, abeezeeI } from "../styles/fonts";
import Description from "./description";
import Container from "./container";

export default function Layout({ children, description, path, activateLink }) {
  return (
    <div
      className={`${abeezeeN.className} scroll-smooth bg-gray-100 min-h-screen px-4 pb-10`}
    >
      <Head>
        <link rel="icon" href="./website-design.svg" />
        <meta
          name="description"
          content="Desenvolvimento de websites ultra-rápidos que engajam o seu público."
        />
        <meta name="og:title" content="Portfólio do Leonardo" />
      </Head>
      <Container>
        <header>
          <Menu path={path} activateLink={activateLink} />
        </header>
        {description ? <Description description={description} /> : ""}
        <main>{children}</main>
      </Container>
    </div>
  );
}
