import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section1 from "../components/section1"
import Waves from "../components/waves"
import Waves2 from "../components/waves2"
import Section2 from "../components/section2"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero siteTitle="El Templo del Futuro" siteBajada="Lalal las kjhdsdkhsk kjhsd jhkjhkj kjhkj hkj hkjhk jkjhkj khlhljhjhkh."/>
    <Waves fill="#000000"/>
    <Section1/>
    <Waves2 fill="#000000"/>
    <Section2/>
  </Layout>
)

export default IndexPage
