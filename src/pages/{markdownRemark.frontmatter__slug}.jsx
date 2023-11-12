import { graphql } from "gatsby";
import * as React from "react";

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <h1>{frontmatter.title}</h1>
      <h6>{frontmatter.date}</h6>
      <hr />
      <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
