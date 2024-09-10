import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import React from "react";
import Seo from "../../components/Seo";

interface IBlogPostProps {
  data: Queries.PostDetailsQuery;
  children: any;
}
export default function BlogPost({ data, children }: IBlogPostProps) {
  return (
    <Layout title="">
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetails($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        author
        category
        date
        title
        slug
      }
    }
  }
`;

export const Head = ({ data }: IBlogPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title} />
);
