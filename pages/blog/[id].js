import Layout from "/components/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Container from "../../components/container";
import Description from "../../components/description";
import Date from "../../components/date";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

function Post({ postData }) {
  const actualLocal = useRouter();

  return (
    <Layout path="/blog" activateLink={true}>
      <Head>
        <title>Post do Leonardo</title>
      </Head>
      <Container>
        <h1 className="mt-12 max-w-2xl text-3xl">{postData.title}</h1>
        <Date className="text-gray-400 text-s" dateString={postData.date} />
        <div
          className="mt-24 max-w-2xl text-xl"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </Container>
      <style jsx global>
        {` 
          h2 {
            font-size: 1.5rem;
            font-weight: bold;
            margin-top: 2rem;
          }

          h3 {
            margin
          }

          p {
            margin-top: 1rem;
          }
        `}
      </style>
    </Layout>
  );
}

export default Post;
