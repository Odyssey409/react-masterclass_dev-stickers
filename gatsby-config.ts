import type { GatsbyConfig } from "gatsby";
import { title } from "process";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `DevStickers`,
    siteUrl: `https://www.yourdomain.tld`,
    description: "Buy a collection of stickers for developers",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [],
};

export default config;
