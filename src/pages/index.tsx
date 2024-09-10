import * as React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { graphql, Link, Page, PageProps } from "gatsby";

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <Layout title="Welcome to DevStickers">
      {data.allContentfulStickerPack.nodes.map((sticker) => (
        <article>
          <GatsbyImage
            image={getImage(sticker.preview?.gatsbyImageData!)!}
            alt={sticker.name!}
          />
          <Link to={`/products/${sticker.id}`}>
            <h2>{sticker.name}</h2>
            <h4>${sticker.price}</h4>
          </Link>
        </article>
      ))}
    </Layout>
  );
}
export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 250)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;
