import Layout from "/components/layout";
import Head from "next/head";
import Card from "../../components/card";
import { getSortedPostsData } from "/lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

function Blog({ allPostsData }) {
  return (
    <Layout
      description="Neste blog, você encontra informações sobre ferramentas e técnicas
    utilizadas nos meus projetos de desenvolvimento web."
    >
      <Head>
        <title>Blog do Leonardo</title>
      </Head>
      <ul>
        {allPostsData.map(({ id, date, title, description }) => (
          <li key={id}>
            <Card
              title={title}
              date={date}
              description={description}
              path={id}
            />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Blog;
