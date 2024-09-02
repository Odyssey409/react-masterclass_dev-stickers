import * as React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";

export default function IndexPage() {
  return (
    <Layout title="Welcome to DevStickers">
      <div></div>
    </Layout>
  );
}

export const Head = () => <Seo title="Home" />;
