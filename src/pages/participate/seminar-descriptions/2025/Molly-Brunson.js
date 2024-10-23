import React from 'react'
import Layout from 'components/layout'
import mollyIcon from 'components/images/seminars/2025/brunson-icon.png'

const SeminarDescription = () => (
  <Layout title="Seminars">
    <main>
      <div className="container px-5 region-content">
        <h1>Objects, Material Culture, and Empire: Making Russia</h1>

        <p><strong>Molly Brunson, Associate Professor of Slavic Languages and Literatures, History of Art</strong></p>

        <div style={{ display: "flex", margin: "2.5rem 0 1rem", gap: "2rem" }}>
          <a href="/pdfs/seminars/2025-seminar-flyer-brunson.pdf" id="print-pdf" className="share_btn print_pdf" alt="Download Flyer" title="Download Molly Brunson Flyer" target="_blank" style={{ display: "grid", width: "max-content", height: "max-content", textDecoration: "none" }}>
            <img src={mollyIcon} alt="Download Molly Brunson Flyer" style={{ width: "10rem", boxShadow: "1px 5px 10px rgba(0, 0, 0, .5)", gridArea: "1 / 1 / 2 / 2" }} />
            <p style={{ display: "flex", height: "100%", backgroundColor: "rgba(0, 0, 0, .2)", margin: "0", gridArea: "1 / 1 / 2 / 2", alignItems:"center", justifyContent: "center", color: "#f2f2f2", fontSize: "1.1rem", fontWeight: "700", letterSpacing: "1px", textAlign: "center", textShadow: "1px 2px 5px rgba(0, 0, 0, .7)" }}><em>Download <br/> Flyer</em></p>
          </a>

          <p style={{ flex: "1 1 calc(2/3 * 100%)", margin: "0" }}>When we think of Russia, we often imagine whimsical nesting dolls or gem-encrusted Faberge eggs. These objects—with their charming bright colors and over-the-top luxury—have become synonymous with the paradoxes of Russian culture, at once modest in its peasant origins and exuberant in its expressions of imperial power. This seminar will trace the rise of the Russian empire through a series of objects. How do things, and the materials they are made from, contribute to the articulation of a Russian national identity in the nineteenth century? How might a stone vase, wooden toy, silver pistol, or article of clothing reveal stories about the people who made, purchased, and used them? How might they unlock narratives about the environment, modern industry, and an ever more global state actor? In this seminar, we will practice looking at and analyzing objects, supplementing these encounters with relevant works of literature, history, and theory.</p>
        </div>

        <p style={{ marginTop: "0" }}>Fellows will not only learn about imperial Russian culture and history through a selection of everyday things and art objects, they will also explore the advantages and disadvantages of taking an object-centered approach to academic study. What can things tell us? What can they not tell us? And why does this all matter? These are the big questions we will explore in <em>Making Russia</em>. When possible, we will supplement in-person discussion with the study of objects from varied Yale collections (as scheduling allows: at the Yale University Art Gallery, the Peabody Museum of Natural History, and the Beinecke Rare Book and Manuscript Library).</p>
      </div>
    </main>
  </Layout>
)

export default SeminarDescription
