import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import Layout from '../../components/Layout'
import Img from "gatsby-image"
import * as styles from '../../styles/projects.module.css'

const Projects = ({data}) => {
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                {/* <Img fluid={project.frontmatter?.thumb?.childImageSharp?.fluid} /> */}
                <GatsbyImage image={getImage(project.frontmatter?.thumb?.childImageSharp)} alt='alt' />
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at {contact}</p>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          date
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;

export default Projects