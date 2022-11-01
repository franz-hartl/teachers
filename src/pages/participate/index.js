import React from 'react'
import Layout from 'components/layout'

const part = () => (
  <Layout title="Participate">
    <main>
      <div className="container px-5 region-content">
        <h1 className="page-title">Participate</h1>
            <p>The Institute accepts as Fellows teachers of English, history, languages, arts, science, and mathematics from New Haven's public elementary and secondary schools. Interested teachers discuss their potential eligibility with a School Representative or a Steering Committee member who works closely with those teachers who then submit an online application. To learn more about participating in the Institute, see our <a href="/brochures/A1/Brochure-2023.pdf">2023 Annual Brochure</a> and <a href="/brochures/A1/seminar-descriptions-2023.pdf">Seminar Descriptions.</a></p>
            {/*<p>New Haven Public Schools teachers and administrators were invited to register to attend our Virtual Open House at 4:15 p.m. on Tuesday, January 5, 2021, when seminar leaders described and answered questions about the seminars they will lead in 2021:<br/>*/}
            <ul>
                <li>
                    “Latinx Histories, Cultures, and Communities,” led by Albert Laguna, Associate Professor of American Studies and of Ethnicity, Race and Migration<br/>
                    <ul>
                        <li><a href="/seminars/2023/albert_laguna_seminar_description.pdf" target="_blank">Description</a></li>
                      {/*<li><a href="https://youtu.be/QIPKsOy6FpM" target="_blank">Video</a></li>*/}
                    </ul>
                </li>
                <li>
                    “Poetry as Sound and Object,” led by Feisal G. Mohamed, Professor of English<br/>
                    <ul>
                        <li><a href="/seminars/2023/feisal_mohamed_seminar_description.pdf" target="_blank">Description</a></li>
                      {/*<li><a href="https://youtu.be/QDzxB3KtENQ" target="_blank">Video</a></li>*/}
                    </ul>
                </li>
                <li>
                    “Writing Queer and Trans Lives,” led by Juno Jill Richards, Associate Professor of English<br/>
                    <ul>
                        <li><a href="/seminars/2023/juno_richards_seminar_description.pdf" target="_blank">Description</a></li>
                        {/*<li><a href="https://youtu.be/7BMnWpkFdxY" target="_blank">Video</a></li>*/}
                    </ul>
                </li>
                <li>
                    “Energy and Environmental History of New Haven and the American City,” led by Paul Sabin, Randolph W. Townsend, Jr. Professor of History and Professor of American Studies<br/>
                    <ul>
                        <li><a href="/seminars/2023/paul_sabin_seminar_description.pdf" target="_blank">Description</a></li>
                        {/*<li><a href="https://youtu.be/7BMnWpkFdxY" target="_blank">Video</a></li>*/}
                    </ul>
                </li>
            </ul>
       </div>
          <div className="row" />
    </main>
  </Layout>
)
export default part
