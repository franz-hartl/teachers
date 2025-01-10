import React from 'react'
import Layout from 'components/layout'
import danielIcon from 'components/images/seminars/2025/hosang-icon.png'

const SeminarDescription = () => (
  <Layout title="Seminars">
    <main>
      <div className="container px-5 region-content">
        <h1>History, Science, and Racism: The Long Shadow of Eugenics</h1>

        <p><strong>Daniel HoSang, Professor of American Studies</strong></p>

        <div style={{ display: "flex", margin: "2.5rem 0 1rem", gap: "2rem", flexWrap: "wrap" }}>
          <a href="/pdfs/seminars/2025-seminar-flyer-hosang.pdf" id="print-pdf" className="share_btn print_pdf" alt="Download Flyer" title="Download Daniel HoSang Flyer" target="_blank" style={{ display: "grid", width: "max-content", height: "max-content", textDecoration: "none" }}>
            <img src={danielIcon} alt="Download Daniel HoSang Flyer" style={{ width: "10rem", boxShadow: "1px 5px 10px rgba(0, 0, 0, .5)", gridArea: "1 / 1 / 2 / 2" }} />
            <p style={{ display: "flex", height: "100%", backgroundColor: "rgba(0, 0, 0, .2)", margin: "0", gridArea: "1 / 1 / 2 / 2", alignItems:"center", justifyContent: "center", color: "#f2f2f2", fontSize: "1.1rem", fontWeight: "700", letterSpacing: "1px", textAlign: "center", textShadow: "1px 2px 5px rgba(0, 0, 0, .7)" }}><em>Download <br/> Flyer</em></p>
          </a>

          <div style={{ flex: "1 1 calc(2/3 * 100%)", margin: "0" }}>
            <p style={{ marginTop: "0" }}><em>Consider this list:</em> Kellogg's Corn Flakes. The SAT. Marriage counseling. The American Museum of Natural History. The Pill. Save the Redwoods League. The p-test in statistics. The <em>Los Angeles Times</em>. The Kansas State Fair. The Emory National Primate Research Center. Well baby visits. Student mental health offices. Ellis Island. Yale University.</p>

            <p>What do they all have in common?</p>

            <p style={{ marginBottom: "0" }}>Follow their stories back in time. You will find accounts of great inventors and generous philanthropists. Educators and doctors committed to solving humanity’s most pressing problems. Champions of scientific expertise and enlightened public policy. Stories of people who today might well be called futurists.</p>
          </div>
        </div>

        <p>And also, in every case, stories tied directly to the American eugenics movement.</p>

        <p>But these are not the stories we hear in the dominant historical narrative about eugenics.</p>

        <p>That dominant narrative goes something like this: Eugenics was the absurd "pseudoscience' of attempting to breed better humans, championed only by a handful of racist zealots a long time ago. While it seduced a few well-meaning progressive reformers in the US, eugenics mostly took root in Nazi Germany. Thankfully, when the horrors of the Holocaust were revealed to the world, it faced the thundering condemnation of the scientific community. Today it has been cast aside like many other discredited scientific fads, resurrected only in fantasies of designer babies or in the reveries of white supremacists.</p>

        <p>Parts of this story are true. A century ago, a leading eugenicist named Charles Davenport insisted that seafaring ability was a biologically inherited trait. That's now a funny story to tell at a cocktail party. More menacingly, in 1936 the Governor of Connecticut commissioned a study of the "Human Resources" of the state in an effort to rid the population of "social degeneracy." Their final report recommended segregation, sterilization, and euthanasia for the thousands of people determined to be unfit. Such a proposal today would justifiably be met by widespread condemnation.</p>

        <p>And yet as the opening list reveals, the history of eugenics continues to hide in plain sight. Its afterlives are everywhere. And even if we don't know the stories of specific eugenic figures or organizations, nearly all of us know eugenic logics and arguments. Eugenics is not only fantastical and grotesque. It is ordinary.</p>

        <p>Eugenic ideas lurk in the algorithms of dating apps and the information collected in sperm and egg donor registries. They fill thousands of the pages in academic journals each year in a wide range of disciplines and titles--from <em>Sociological Theory to Molecular Psychiatry</em>. Eugenic principles organize the testing and assessment practices of almost all K-12 private and public schools. Their ghosts haunt immigration law and special education policy and lurk in the collections of natural history museums. Methods developed by Eugenicists are taught in nearly all introductory statistics courses. Parenting advice books? Criminal justice trials? Your ancestry results from 23andMe? Yes, there too.</p>

        <p>This seminar explores histories of Eugenics and scientific racism for Fellows from all grade levels and subject areas, including the life sciences, social sciences, law, and the humanities. For example, math educators might develop lessons for classes in statistics and probability that engage how Eugenicists developed many of the current statistical instruments used today. Biology teachers might explore historically grounded lessons to teach about how theories of genetic inheritance have been developed and often distorted by racism, or consider how taxonomic frameworks about hierarchy and difference derived from botonny and other sciences have framed our understanding of human variation. Teachers in psychology might offer lessons about the fraught history of IQ tests and other measures of individual ability, as well as methods (such as twin studies) that have sought to explain hereditarian differences in ability and outcomes. For courses in the law and criminal justice, teachers can consider how Eugenics has shaped the way those fields conceptualize issues of culpability, recidivism, and social worth. Literature, religion and music teachers might take on the ways that Eugenics has shaped particular novels (e.g. The Great Gatsby), theological traditions, and assessments of musical ability. Special education teachers can engage a wide range of materials related to assessment, diagnosis, and ability that originated in the Eugenics era and are still at work today. And history and social studies (civics, law, government, etc) could develop a wide range of lessons spanning the 20th century and its impact on contemporary social relations.</p>

        <p>A highlight of the seminar will be trips to view archival collections on campus including those at the Medical Historical Library, Sterling Memorial Library, the Yale Peabody Museum as well as a trip to the Connecticut Valley Hospital cemetery in Middletown, CT.</p>

        <p>While these archives pay particular attention to the role of Yale and other elite universities in promoting Eugenics to many audiences in the early 20th century, Eugenics itself was a national in its reach, and had particular impact on many states. For example, the state of California sterilized more than 20,000 people without their consent in the 20th century, and the state was home to several prominent Eugenic organizations. Tribal nations were another target of Eugenic sterilization, as the Bureau of Indian Affairs oversaw thousands of such procedures on Native women in the 1970s. Oklahoma was the site of landmark Supreme Court case related to Eugenics and criminal offenders. North Carolina, Delaware, Pennsylvania, and Virginia also had long and troubled histories of such work.</p>

        <p style={{ marginBottom: "3rem"}}>Fellows will have the opportunity to conduct original research in Yale University archives on a topic of their choice with support of the seminar leader and archivists with the Manuscripts & Archives division. There are also many archives of histories of Eugenics at other repositories that have been digitized and can be accessed remotely.</p>

        <iframe width="560" height="500" src="https://www.youtube.com/embed/2MegSsJBaLw?si=dSKT8ki6N5M0b4Zl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </main>
  </Layout>
)

export default SeminarDescription
