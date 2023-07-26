import Layout from "../components/layout";
import Head from "next/head";

function Home() {
  return (
    <Layout
      description="Oi, eu sou o Leonardo. Trabalho com desenvolvimento web. O meu foco é
    em criar páginas que levam o internauta a encontrar o conteúdo
    procurado da forma mais breve possível."
    >
      <Head>
        <title>Portfólio do Leonardo</title>
      </Head>
    </Layout>
  );
}

export default Home;
