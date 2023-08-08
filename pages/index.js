import Laptop from "../components/laptop";
import Layout from "../components/layout";
import Head from "next/head";
import Card from "../components/card";
import Button from "../components/button";
import Details from "../components/details";
import Image from "next/image";
import Link from "next/link";
import mailIcon from "../public/mail.png";
import arrowDown from "../public/down.png";
import Maildiv from "../components/maildiv";

function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Portfólio do Leonardo</title>
        </Head>
        <p className="text-2xl md:text-3xl pt-28 md:text-center">
          Prazer, Léo.
        </p>
        <p className="text-4xl md:text-5xl pt-10 md:max-w-3xl md:text-center md:mx-auto">
          Eu faço websites{" "}
          <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 bg-[length:100%_5px] bg-no-repeat bg-bottom">
            ultra-rápidos
          </span>{" "}
          que{" "}
          <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-600 bg-[length:100%_5px] bg-no-repeat bg-bottom">
            engajam o seu público
          </span>
        </p>
        <Button text="Conheça os meus projetos" href="#projetos" />
        <hr id="projetos" className="my-12" />
        <p className="mb-3 text-lg">Clientes que já estão se destacando:</p>

        <Laptop />
        <p id="ideia" className="text-lg mt-20 px-2 max-w-3xl">
          Se você está pensando em construir uma presença online para você ou
          para o seu negócio...
        </p>
        <div className="max-w-3xl grid justify-center">
          <Link href="#ideia" scroll={false}>
            <Image
              src={arrowDown}
              height={30}
              width={30}
              className="mx-auto my-8"
            />
          </Link>
        </div>
        <p className="text-lg px-2 mb-8 max-w-3xl">
          Venha ver este blog onde explico sobre práticas modernas de
          desenvolvimento web, e os passos que sigo nos meus projetos.
        </p>
        <p className="text-lg px-2 mb-8">
          Eu indico muito a leitura deste post:
        </p>

        <Card
          title="Desenvolvendo um projeto com resultados reais"
          date="2023-08-01"
          description="Não sabe por onde começar o desenvolvimento do seu website? Sempre começe pelo objetivo."
          path="desenvolvendo-projetos-reais"
        />
        <p className="text-2xl mt-24 mb-8">
          <span>O que eu faço?</span>
        </p>
        <Details title="Desenvolvimento de Websites">
          <p className="mb-2 max-w-2xl">
            Desenvolvimento de Websites, Landing Pages, Blogs, com tecnologias
            atuais e sempre considerando as melhores práticas de UX design, SEO
            e acessibilidade.
          </p>
        </Details>

        <Details title="Hospedagem em servidores de alta performance">
          <p className="mb-2 max-w-2xl">
            O seu site será rápido e terá alta disponibilidade. Mantendo a
            qualidade mesmo com uma quantidade muito grande de acessos, a um
            ótimo custo-benefício. Suporte incluso.
          </p>
          <p className="mb-2 max-w-2xl">Suporte incluso.</p>
        </Details>

        <Details title="Elaboração de protótipo interativo">
          <p className="mb-2 max-w-2xl">
            Criação de protótipo interativo no Figma para o seu Website ou
            Aplicativo. O protótipo é desenvolvido Mobile-first, e sempre
            seguindo os manuais de identidade visual desenvolvidos pelo seu
            designer.
          </p>
          <p className="mb-2 max-w-2xl">
            Se você ainda não tem uma identidade visual, eu posso indicar um
            estúdio que faz um trabalho incrível.
          </p>
        </Details>
        <p></p>
        <hr />
        <p className="mt-24 text-2xl pr-10 max-w-xl md:text-4xl md:text-center md:p-0 md:w-full md:mx-auto">
          Me manda um email, vamos explorar melhor as{" "}
          <span className="bg-gradient-to-r from-slate-500 via-lime-500 to-pink-500 bg-[length:100%_3px] bg-no-repeat bg-bottom">
            suas ideias
          </span>
          .
        </p>
        <Maildiv />
      </Layout>
    </>
  );
}

export default Home;
