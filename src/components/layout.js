/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          subtitle
          social {
            twitter
            instagram
            youtube
            facebook
          }
        }
      }
    }
  `)

  return (
    <div className="leading-normal tracking-normal text-negro font-serif">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} subtitle={data.site.siteMetadata.subtitle} social={data.site.siteMetadata.social} />
      <div>
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata?.title || `Title`}></Footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
