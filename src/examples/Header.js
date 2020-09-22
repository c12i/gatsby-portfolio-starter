import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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

const Header = () => {
  const data = useStaticQuery(getSiteData);
  const { title, author } = data.site.siteMetadata;

  return (
    <div>
      <h1>title: {title}</h1>
      <h1>author: {author}</h1>
    </div>
  );
};

export default Header;
