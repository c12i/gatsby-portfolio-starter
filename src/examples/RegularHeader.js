import React from "react";
import { StaticQuery, graphql } from "gatsby";

const getSiteData = graphql`
  {
    site {
      siteMetadata {
        author
        title
      }
    }
  }
`;

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={({ site }) => {
        const {
          siteMetadata: { author, title },
        } = site;
        return (
          <div>
            <h1>{author}</h1>
            <h1>{title}</h1>
          </div>
        );
      }}
    />
  );
};

export default RegularHeader;
