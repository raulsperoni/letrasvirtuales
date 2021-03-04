import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section1 from "../components/section1"
import Waves from "../components/waves"
import Waves2 from "../components/waves2"
import Section2 from "../components/section2"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {

    const data = useStaticQuery(graphql`
    query indexquery {
      site {
        siteMetadata {
          title
          description
          social {
            instagram
            youtube
            facebook
            twitter
          }
        }
      }
    }
  `)

 return (
      <Layout>
          <SEO title="Home" />
          <Hero siteTitle={data.site.siteMetadata.title} siteBajada={data.site.siteMetadata.description} social={data.site.siteMetadata.social}/>
          <Waves/>
          <Section1/>
          <Waves2 fill="#000000"/>
          <Section2 social={data.site.siteMetadata.social}/>
      </Layout>
    )
}

export default IndexPage
