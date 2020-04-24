import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import tw from "twin.macro"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import SEO from "../components/common/SEO"
import Section from "../components/common/Section"
import Grid from "../components/common/Grid"

const PrivacyPage = ({ data }) => (
  <Layout pageId="imprint">
    <SEO title="Home" />

    <Grid css={tw`lg:grid-cols-2 lg:h-screen pt-20`}>
      <Section>
        <h1>Datenschutzerklärung</h1>
        <p>
          <b>Allgemeine Hinweise</b>
        </p>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum
          Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </p>
        <p>Datenerfassung auf unserer Website</p>
        <p>
          Wer ist verantwortlich für die Datenerfassung auf dieser Website? Die
          Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
          Website entnehmen.
        </p>
        <p>Wie erfassen wir Ihre Daten?</p>
        <p>
          hre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch beim Besuch der Website durch unsere
          IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
          Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
          Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website
          betreten.
        </p>
        <p>Wofür nutzen wir Ihre Daten?</p>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </p>
        <p>Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
        <p>
          Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung
          oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren
          Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
          Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen
          ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.{" "}
        </p>
      </Section>
      <Section>
        <p>
          <b>Allgemeine Hinweise</b>
        </p>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum
          Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </p>
        <p>Datenerfassung auf unserer Website</p>
        <p>
          Wer ist verantwortlich für die Datenerfassung auf dieser Website? Die
          Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
          Website entnehmen.
        </p>
        <p>Wie erfassen wir Ihre Daten?</p>
        <p>
          hre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch beim Besuch der Website durch unsere
          IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
          Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
          Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website
          betreten.
        </p>
        <p>Wofür nutzen wir Ihre Daten?</p>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </p>
        <p>Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
        <p>
          Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung
          oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren
          Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
          Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen
          ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.{" "}
        </p>
      </Section>
      <Section>
        <Footer css={tw`self-end`} />
      </Section>
    </Grid>
  </Layout>
)

export default PrivacyPage
