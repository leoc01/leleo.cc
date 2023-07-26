import Layout from "/components/layout";
import Head from "next/head";
import Card from "../../components/card";

function Blog() {
  return (
    <Layout
      description="Neste blog, você encontra informações sobre ferramentas e técnicas
    utilizadas nos meus projetos de desenvolvimento web."
    >
      <Head>
        <title>Blog do Leonardo</title>
      </Head>
      <Card />
    </Layout>
  );
}

export default Blog;
