import React from 'react'
import Layout from 'components/layout'
import fellowBanner from 'components/images/2024_ynhti_fellows_banner.jpg'

const part = () => (
  <Layout title="Participate">
    <main>
      <div className="container px-5 region-content">
        <figure style={{ marginBottom: '3rem' }}>
          <img src={fellowBanner} alt="ynhti fellows 2024"/>
          <figCaption><small>Yale-New Haven Teachers Institute Fellows on campus, April 2024</small></figCaption>
        </figure>

        <h1 className="page-title">Participate</h1>
            <p style={{marginBottom: '2rem'}}>The Institute accepts as Fellows teachers of English, history, languages, arts, science, and mathematics from New Haven's public elementary and secondary schools. Interested teachers discuss their potential eligibility with a School Representative or a Steering Committee member who works closely with those teachers who then submit an online application. To learn more about participating in the Institute, see our <a href="/brochures/A1/Brochure-2024.pdf">2024 Annual Brochure</a> with seminar descriptions.</p>

            <iframe width="560" height="500" src="https://www.youtube.com/embed/3Db85TQQyak?si=PfNeyQPIttewxu84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            {/*<p>New Haven Public Schools teachers and administrators were invited to register to attend our Virtual Open House at 4:15 p.m. on Tuesday, January 5, 2021, when seminar leaders described and answered questions about the seminars they will lead in 2021:<br/>*/}
            {/*<ul>
                <li>
                    “Latinx Histories, Cultures, and Communities,” led by Albert Laguna, Associate Professor of American Studies and of Ethnicity, Race and Migration<br/>
                    <ul>
                        <li><a href="/seminars/2023/albert_laguna_seminar_description.pdf" target="_blank">Description</a></li>
                      <li><a href="https://youtu.be/QIPKsOy6FpM" target="_blank">Video</a></li>
                    </ul>
                </li>
                <li>
                    “Poetry as Sound and Object,” led by Feisal G. Mohamed, Professor of English<br/>
                    <ul>
                        <li><a href="/seminars/2023/feisal_mohamed_seminar_description.pdf" target="_blank">Description</a></li>
                      <li><a href="https://youtu.be/QDzxB3KtENQ" target="_blank">Video</a></li>
                    </ul>
                </li>
                <li>
                    “Writing Queer and Trans Lives,” led by Juno Jill Richards, Associate Professor of English<br/>
                    <ul>
                        <li><a href="/seminars/2023/juno_richards_seminar_description.pdf" target="_blank">Description</a></li>
                        <li><a href="https://youtu.be/7BMnWpkFdxY" target="_blank">Video</a></li>
                    </ul>
                </li>
                <li>
                    “Energy and Environmental History of New Haven and the American City,” led by Paul Sabin, Randolph W. Townsend, Jr. Professor of History and Professor of American Studies<br/>
                    <ul>
                        <li><a href="/seminars/2023/paul_sabin_seminar_description.pdf" target="_blank">Description</a></li>
                        <li><a href="https://youtu.be/7BMnWpkFdxY" target="_blank">Video</a></li>
                    </ul>
                </li>
            </ul>*/}
       </div>
          <div className="row" />
    </main>
  </Layout>
)
export default part
