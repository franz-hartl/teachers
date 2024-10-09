import React from 'react'
import Layout from 'components/layout'
import { Link } from 'gatsby'
import mollyImage from 'components/images/seminars/2025/Molly-Brunson.png'
import danielImage from 'components/images/seminars/2025/Daniel-HoSang.png'

const Seminar = () => (
  <Layout title="Seminars">
    <main>
      <div className="container px-5 region-content">
        <h1>2025 Seminars</h1>

        <p>(Additional description coming soon)</p>

        <p><strong>"Making Russia: Objects and Empire," led by Molly Brunson, Associate Professor of Slavic Languages and Literatures, History of Art</strong></p>

        <p>SUMMARY: This seminar explores how narratives and messages are embedded in everyday objects and how they can reveal the lives and stories of ordinary people through the study of the rise of the Russian empire. Fellows will learn how to examine and analyze objects and material culture. When possible, we will supplement in-person discussion with the study of objects from varied Yale collections. Though the content will focus on Russia, this seminar is appropriate for all K-12 teachers of history, arts, English, and languages, who will be able to create curriculum units that teach their students to analyze objects related to their own subjects. Read the full <Link to="/participate/seminar-descriptions/2025/Molly-Brunson">seminar description</Link>.</p>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem', marginBottom: '2rem' }}>
          <img src={mollyImage} alt="Marta-Figlerowicz" style={{ width: "clamp(15ch, calc(1/6 * 100%), 100%)" }} />

          <p style={{ width: "clamp(20ch, calc(5/6 * 100% - 2rem), 100%)", flexGrow: 1 }}><strong>Molly Brunson</strong> is a scholar of modern Russian Culture.  She specializes in the literature and visual art of the nineteenth and twentieth centuries.  Her book, <em>Russian Realisms: Literature and Painting, 1840-1890</em>, was awarded the Best Book in Cultural Studies by the American Association of Teachers of Slavic and East European Languages in 2017 and the College Art Association's Meiss/Mellon Author's Book Award.</p>
        </div>

        <p><strong>"The Long Shadow of Eugenics," led by Daniel HoSang, Professor of American Studies</strong></p>

        <p>SUMMARY: What do Corn Flakes, the SAT, birth control, and Yale University have in common? They all have stories tied directly to the history of the American eugenics movement. This seminar explores histories of Eugenics and scientific racism, and how those histories continue to shape many facets of modern life. This interdisciplinary seminar is appropriate for Fellows from all grade levels and subject areas, including the life sciences, social sciences, law, and the humanities. Read the full <Link to="/participate/seminar-descriptions/2025/Daniel-HoSang">seminar description</Link>.</p>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem', marginBottom: '2rem' }}>
          <img src={danielImage} alt="David-Evans"  style={{ width: "clamp(15ch, calc(1/6 * 100%), 100%)"}} />

          <p style={{ width: "clamp(20ch, calc(5/6 * 100% - 2rem), 100%)", flexGrow: 1 }}><strong>Daniel HoSang</strong> is an interdisciplinary scholar of racial formation and racism in politics, culture, and the law.  His most recent book is <em>A Wider Type of Freedom: How Struggles for Racial Justice Liberate Everyone</em> (University of California Press, 2021).  He has taught Institute seminars for K-12 public school teachers on Anti-racist Curriculum and Pedagogy, and works with teachers and youth organizaing groups in Connecticut on teaching about racism and racial justice in the K-12 curriculum through the Anti-Racist Teaching & Learning Collective.</p>
        </div>
      </div>
    </main>
  </Layout>
)

export default Seminar
