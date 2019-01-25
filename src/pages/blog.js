import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'


const BlogPage = ({ data }) => (

  <Layout>
    <SEO title="Blog Page" />
    <h1>My Blog</h1>
    <p>Dats de Blog.</p>

  <div>
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Posted by {post.node.frontmatter.author}
        </small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            author
          }
        }
      }
    }
  }
`

export default BlogPage