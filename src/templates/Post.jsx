import React from 'react';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
import Post from '~/components/Post';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const PostTemplate = props => (

  <Layout { ...props }>
    <Post { ...props } />


 
    <Disqus />

  </Layout>
);

export default PostTemplate;

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
        homepage
      }
    }
    post: markdownRemark (
      frontmatter: { path: { eq: $path } }
    ) {
      id
      html
      frontmatter {
        title
        path
        images
        category
        tags
        date
        components {
          rootId
          fileName
        }
        tweets {
          rootId
          userId
          tweetId
        } summary
      }
    }
  }
`;
