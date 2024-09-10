import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import React from "react";
import Seo from "../../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IBlogPostProps {
  data: Queries.PostDetailsQuery;
  children: any;
}
export default function BlogPost({ data, children }: IBlogPostProps) {
  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
  );
  return (
    <Layout title="">
      <GatsbyImage image={image as any} alt="Header Image" />
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
        headerImage {
          childImageSharp {
            gatsbyImageData(height: 600, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: IBlogPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
