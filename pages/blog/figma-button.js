import Layout from "/components/layout";
import Head from "next/head";
import { useRouter } from "next/router";

function figmaPos() {
  const actualLocal = useRouter();
  const actualPath = actualLocal.pathname.replace("/figma-button", "");

  return (
    <Layout
      description="Esse vai ser meu primeiro Post"
      path={actualPath}
      activateLink={true}
    >
      <Head>
        <title>Post do Leonardo</title>
      </Head>
    </Layout>
  );
}

export default figmaPos;
