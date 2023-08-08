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
        <article className="mt-12 bg-white px-5 py-8 md:px-12 md:py-10 max-w-3xl rounded-2xl drop-shadow-md border">
          <h1 className="text-3xl">
            <strong>{postData.title}</strong>
          </h1>
          <Date className="text-gray-400 text-s" dateString={postData.date} />
          <div
            className="mt-12"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
          <style jsx global>
            {`
              h1,
              h2,
              h3,
              h4,
              p,
              li {
                color: #121827;
              }
              h2 {
                font-size: 1.5rem;
                margin-top: 2.5rem;
                margin-bottom: 1rem;
                border-bottom: solid 1px;
              }

              h3 {
                font-size: 1.25rem;
                margin-top: 1.25rem;
                margin-bottom: 0.75rem;
              }

              p,
              li {
                font-size: 1.125rem;
                margin-bottom: 0.6rem;
              }

              ul {
                list-style: square;
                list-style-position: inside;
              }
            `}
          </style>
        </article>
      </Container>
    </Layout>
  );
}

export default Post;
