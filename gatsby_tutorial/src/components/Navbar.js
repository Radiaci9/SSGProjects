import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site{
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <nav>
      <h1>{data?.site?.siteMetadata?.title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
