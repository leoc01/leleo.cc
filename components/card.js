import Image from "next/image";
import post1img from "../public/post1-button.png";
import Container from "./container";
import Link from "next/link";

export default function Card() {
  return (
    <Container>
      <Link href="/blog/figma-button">
        <div className="flex bg-white h-48 mt-5 rounded-2xl max-w-3xl drop-shadow-xl border">
          <div className="relative h-full aspect-square">
            <Image src={post1img} fill className="rounded-2xl"></Image>
          </div>

          <div className="py-4 px-8">
            <h3 className="text-2xl">
              Como criar um botão interativo no Figma
            </h3>
            <p className="text-gray-400 text-s">25 de Julho de 2023</p>
            <p>
              Tutorial de como criar um componente de botão interativo no Figma
              utilizando o Autolayout e as propriedades do componenete.
            </p>
          </div>
        </div>
      </Link>
    </Container>
  );
}
