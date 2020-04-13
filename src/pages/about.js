import React from "react"
import { Link } from "gatsby"

import tw from "twin.macro"

import Layout from "../components/Layout"
import Footer from "../components/Footer"
import Image from "../components/common/Image"
import SEO from "../components/common/SEO"
import Section from "../components/common/Section"
import Container from "../components/common/Container"
import Grid from "../components/common/Grid"
import ImageCarousel from "../components/common/ImageCarousel"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />

    <Grid css={tw`lg:grid-cols-2 lg:h-screen`}>
      <Section css={tw`bg-primary flex flex-col justify-center p-8`}>
        <Image />
      </Section>
      <Section css={tw`flex flex-col justify-between pt-24 lg:pt-12`}>
        <div></div>
        <div>
          <h1>
            Ich bin selbstständiger Web Designer &amp; Entwickler aus Frankfurt,
            Deutschland.
          </h1>
          <p>
            Design, Entwicklung und Beratung. Mit diesen drei Themen unterstütze
            ich seit mehreren Jahren Firmen und Agenturen bei der Umsetzung von
            Web-Projekten. Von Newsletter-Kampagnen bis hin zu mehrsprachigen
            Online-Shops. Egal welcher Projektumfang, mir ist dabei immer
            wichtig ein einzigartiges Produkt mit einer hohen Qualität und
            langfristiger Skalierbarkeit zu entwickeln.
          </p>
          <Link to="/page-2/">Mehr erfahren</Link>
        </div>
        <Footer css={tw`self-end`} />
      </Section>
    </Grid>
  </Layout>
)

export default AboutPage
