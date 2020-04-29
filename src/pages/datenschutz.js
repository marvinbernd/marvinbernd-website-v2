import React from "react"
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
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum
          Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </p>
        <h3>Datenerfassung auf unserer Website</h3>
        <p>
          Wer ist verantwortlich für die Datenerfassung auf dieser Website? Die
          Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
          Website entnehmen.
          <br />
        </p>
        <h3>Wie erfassen wir Ihre Daten?</h3>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben.
          <br />
          <br /> Andere Daten werden automatisch beim Besuch der Website durch
          unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
          Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
          Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website
          betreten.
          <br />
        </p>
        <h3>Wofür nutzen wir Ihre Daten?</h3>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
          <br />
        </p>
        <h3>Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
        <p>
          Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung
          oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren
          Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
          Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen
          ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>
      </Section>
      <Section>
        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
          <br />
          <br /> Wenn Sie diese Website benutzen, werden verschiedene
          personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit
          denen Sie persönlich identifiziert werden können. Die vorliegende
          Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
          sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
          geschieht.
          <br />
          <br /> Wir weisen darauf hin, dass die Datenübertragung im Internet
          (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
          kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte
          ist nicht möglich.
        </p>
        <h3>Verantwortliche Stelle</h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website ist:
          <br />
          <br /> Marvin Bernd
          <br /> Web Designer &amp; Developer
          <br /> Zwingenberger Weg 2
          <br /> 65428 Rüsselsheim am Main
          <br />
          <br /> Telefon: +49 1520 6049110
          <br /> Email: hello@marvinbernd.de
          <br />
          <br /> Verantwortliche Stelle ist die natürliche oder juristische
          Person, die allein oder gemeinsam mit anderen über die Zwecke und
          Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen,
          E-MailAdressen o. Ä.) entscheidet.
        </p>
        <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail
          an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
          Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>
        <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
        <p>
          Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige
          Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der
          Landesdatenschutzbeauftragte des Bundeslandes, in dem unser
          Unternehmen seinen Sitz hat. Eine Liste der Datenschutzbeauftragten
          sowie deren Kontaktdaten können folgendem Link entnommen werden:
          <a
            href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
          </a>
          .
        </p>
        <h3>Recht auf Datenübertragbarkeit</h3>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
          oder an einen Dritten in einem gängigen, maschinenlesbaren Format
          aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an
          einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
          technisch machbar ist.
        </p>
        <h3>SSL- bzw. TLS-Verschlüsselung</h3>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder
          Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw.
          TLSVerschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
          dass die Adresszeile des Browsers von “http://” auf “https://”
          wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die
          SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie
          an uns übermitteln, nicht von Dritten mitgelesen werden.
        </p>
        <h3>Auskunft, Sperrung, Löschung</h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
          der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung
          oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten können Sie sich jederzeit unter der im
          Impressum angegebenen Adresse an uns wenden.
        </p>
        <h3>Widerspruch gegen Werbe-Mails</h3>
        <p>
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
          Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
          Werbung und Informationsmaterialien wird hiermit widersprochen. Die
          Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
          Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
          Spam-E-Mails, vor.
        </p>
        <h3>Server-Log-Dateien</h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen
          in so genannten Server-LogDateien, die Ihr Browser automatisch an uns
          übermittelt. Dies sind:
          <br />
          <br />
          Browsertyp und Browserversion
          <br />
          verwendetes Betriebssystem
          <br />
          Referrer URL
          <br />
          Hostname des zugreifenden Rechners
          <br />
          Uhrzeit der Serveranfrage
          <br />
          IP-Adresse
          <br />
          <br />
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
          vorgenommen. Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1
          lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines
          Vertrags oder vorvertraglicher Maßnahmen gestattet.
        </p>
      </Section>
      <Section>
        <Footer css={tw`self-end`} />
      </Section>
    </Grid>
  </Layout>
)

export default PrivacyPage
