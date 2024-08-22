import React from 'react'
import Layout from 'components/layout'
import martaImage from 'components/images/Marta-Figlerowicz.jpg'
import davidImage from 'components/images/David-Evans.png'

const Seminar = () => (
  <Layout title="Seminars">
    <main>
      <div className="container px-5 region-content">
        <h1>2024 Seminars</h1>

        <p>2025 seminar descriptions coming soon.</p>

        <p><strong>"Myth, Legend, Fairy Tale," led by Marta Figlerowicz, Associate Professor of Comparative Literature</strong></p>

        <p>Myths, legends, and fairy tales are often the first stories we read to children. They have also inspired many writers of
        popular young adult novels - from the adventures of Percy Jackson to The Lord of the Rings . In this seminar, Fellows will read a
        wide range of myths, legends, and fairy tales from around the world, discovering new texts they could bring into K-12 classrooms.
        We will also become better interpreters of fairy tales, myths, and legends as cultural objects by working through a range of
        scholarly but accessible essays written by historians, anthropologists, and literary critics. Primary readings will include
        Ovid's Metamorphoses, Jain myths, Siberian, Japanese, and Yoruba folktales, the unexpurgated Grimms' fairy tales, and the
        Mesoamerican creation myth, the Popol Vuh. Secondary readings will include essays by Claude LeviStrauss, Andre Jolles, Edgar Garcia,
        Maria Tatar, Vladimir Propp, and Eduardo Viveiros de Castro.</p>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem', marginBottom: '2rem' }}>
          <img src={martaImage} alt="Marta-Figlerowicz" style={{ width: "clamp(15ch, calc(1/6 * 100%), 100%)" }} />

          <p style={{ width: "clamp(20ch, calc(5/6 * 100% - 2rem), 100%)", flexGrow: 1 }}>Marta Figlerowicz is a theorist of literature from the eighteenth century to the present and of contemporary visual media.
          Working in over seven languages, she studies how aesthetic objects depict and mediate interpersonal and transcultural
          communication. She is the author of Flat Protagonists (2016) and Spaces of Feeling (2017) and is currently finishing a third
          book, It Must Be Possible: Modernity and Transcultural Knowledge, She is a member of the Harvard Society of Fellows and a 2024
          Guggenheim Fellow.</p>
        </div>

        <p><strong>"Dynamic Earth, Foundation and Fate of Industrial Society," led by David Evans, Professor of Earth and Planetary Sciences</strong></p>

        <p>The main goal of this seminar is to provide an overview of how the Earth "works," and how modern human society is both constrained by planetary
        processes and how humanity itself is increasingly becoming a significant agent of geological change . Each Fellow will create a geological portfolio of
        their hometown or another place of interest to them. The portfolio project utilizes Google Earth extensively for visualizing multiple layers of
        geospatial data. Training in the intermediate-level functions of Google Earth is an essential component of the seminar, so that - through this
        experience - teachers will be able to employ similar functions in their own teaching. By the end of the seminar, Fellows will have learned to see the
        world - and our place within it - as a geologist does: time-traveling across a mosaic of ancient, modern, and future landscapes; zooming way out to
        view the world from a stratospheric perspective on the tiny human race scuttling about its business like ants over a mountainside; or zooming way in
        to understand Earth materials and processes at microscopic scale.</p>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem', marginBottom: '2rem' }}>
          <img src={davidImage} alt="David-Evans"  style={{ width: "clamp(15ch, calc(1/6 * 100%), 100%)"}} />

          <p style={{ width: "clamp(20ch, calc(5/6 * 100% - 2rem), 100%)", flexGrow: 1 }}>David Evans studies earth and planetary sciences, particularly geology and geophysics from the eighteenth century to the present
          His work has examined the formation of supercontinents and the evolution of geodynamics, tectonics, climate change, and life. His
          has consisted of research done in Angola, Australia, Botswana, Brazil, Canada, China, Finland, Mexico, Mongolia, Morocco,
          Namibia, Russia, South Africa, and the United States.</p>
        </div>
      </div>
    </main>
  </Layout>
)

export default Seminar
