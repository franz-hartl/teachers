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

        <h2 style={{ marginTop: "2rem" }}>Learn to find the meanings and stories behind material objects</h2>

        <p><strong>"Objects, Material Culture, and Empire: Making Russia," led by Molly Brunson, Associate Professor of Slavic Languages and Literatures, History of Art</strong></p>

        <p>SUMMARY: In this seminar, Fellows will practice looking at and analyzing objects. They will explore how narratives and messages are embedded in everyday objects. How do things, and the materials they are made from, contribute to the articulation of local, ethnic, and national identities? How might objects reveal the lives and stories of the people who made, purchased, and used them?</p>

        <p>The content and examples in this seminar will focus on objects from the rise of the Russian empire, but Fellows of all grade levels and in a wide variety of disciplines will be able to create curriculum units that teach their students to analyze objects related to their own subjects and disciplines, from history and social studies to English and the arts. Read the full <Link to="/participate/seminar-descriptions/2025/Molly-Brunson">seminar description</Link>.</p>

        <div>
          <h3>Potential Curriculum Unit Topics</h3>

          <p>Using the analytical tools and experience learned in this seminar, K-12 teachers can create curriculum units on a wide array of topics.</p>

          <ul>
            <li><strong>U.S., Latin American, African American, and World History teachers</strong> can create units exploring the meanings and stories behind objects related to their specific subjects</li>
            <li><strong>English teachers and teachers of other languages</strong> can create units on literature about specific objects as well as units that teach writing through the use of objects</li>
            <li><strong>Arts teachers</strong> can create units that not only teach analysis of objects but also about the creation of objects and about understanding works of art as material objects</li>
          </ul>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem', marginBottom: '2rem' }}>
          <img src={mollyImage} alt="Marta-Figlerowicz" style={{ width: "clamp(15ch, calc(1/6 * 100%), 100%)" }} />

          <p style={{ width: "clamp(20ch, calc(5/6 * 100% - 2rem), 100%)", flexGrow: 1 }}><strong>Molly Brunson</strong> is a scholar of modern Russian Culture.  She specializes in the literature and visual art of the nineteenth and twentieth centuries.  Her book, <em>Russian Realisms: Literature and Painting, 1840-1890</em>, was awarded the Best Book in Cultural Studies by the American Association of Teachers of Slavic and East European Languages in 2017 and the College Art Association's Meiss/Mellon Author's Book Award.</p>
        </div>


        <h2>Learn how scientific ideas about race shape our modern world</h2>

        <p><strong>"History, Science, and Racism: The Long Shadow of Eugenics," led by Daniel HoSang, Professor of American Studies</strong></p>

        <p>SUMMARY: This seminar explores histories of how science and racism have combined to shape the world we live in today in many surprising ways. For example, the history of Kellogg's Corn Flakes, the SAT, marriage counseling, Ellis Island, and Yale University are all intertwined with the American eugenics movement. With a focus on the history and science of the eugenics, Fellows from all grade levels and subject areas, including the humanities, life sciences, social sciences, and mathematics will be able to create a wide variety of curriculum units that introduce their students to the notion of scientific racism and show how eugenics specifically has been used and embedded throughout our society and culture. Read the full <Link to="/participate/seminar-descriptions/2025/Daniel-HoSang">seminar description</Link>.</p>

        <div>
          <h3>Potential Curriculum Unit Topics</h3>

          <ul>
            <li><strong>History and social studies teachers</strong> could develop a wide range of lessons spanning the 20th century and its impact on contemporary social relations</li>
            <li><strong>Biology teachers</strong> might consider how taxonomic frameworks about hierarchy and difference derived from botany and other sciences have framed our understanding of human variation</li>
            <li><strong>Math teachers</strong> might develop units in statistics and probability that engage how Eugenicists developed many of the current statistical instruments used today</li>
            <li><strong>Literature, religion and music teachers</strong> might take on the ways that Eugenics has shaped particular novels, religious ideas, and assessments of musical ability</li>
          </ul>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem', marginBottom: '2rem' }}>
          <img src={danielImage} alt="David-Evans"  style={{ width: "clamp(15ch, calc(1/6 * 100%), 100%)"}} />

          <p style={{ width: "clamp(20ch, calc(5/6 * 100% - 2rem), 100%)", flexGrow: 1 }}><strong>Daniel HoSang</strong> is an interdisciplinary scholar of racial formation and racism in politics, culture, and the law.  His most recent book is <em>A Wider Type of Freedom: How Struggles for Racial Justice Liberate Everyone</em> (University of California Press, 2021).  He has taught Institute seminars for K-12 public school teachers on Anti-racist Curriculum and Pedagogy, and works with teachers and youth organizaing groups in Connecticut on teaching about racism and racial justice in the K-12 curriculum through the Anti-Racist Teaching & Learning Collective.</p>
        </div>
      </div>
    </main>
  </Layout>
)

export default Seminar
