import React from 'react'
import { Link } from 'gatsby'
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
            <p style={{marginBottom: '2rem'}}>The Institute accepts as Fellows teachers of English, history, languages, arts, science, and mathematics from New Haven's public elementary and secondary schools. Interested teachers discuss their potential eligibility with a School Representative or a Steering Committee member who works closely with those teachers who then submit an online application.</p>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', flexWrap: 'wrap', gap: '2rem'}}>
              <div>
                <ul style={{ marginBottom: '2rem' }}>
                  <li><Link to="/brochures/A1/Brochure-2024.pdf" target="_blank">Annual Brochure</Link></li>
                  <li><Link to="/participate/seminars">Seminars</Link></li>
                  <li><Link to="/participate/program-calendar">Program Calendar</Link></li>
                  <li><Link to="/pdfs/2024-FAQ.pdf" target="_blank">Frequently Asked Questions</Link></li>
                  <li><Link to="/pdfs/2024-Talk-Flyer.pdf" target="_blank">Lecture Series</Link></li>
                  <li><Link to="/participate/teacher-leadership">Teacher Leadership</Link></li>
                </ul>

                <div style={{ color: '#00853e', border: '1px solid black', padding: '.6rem' }}>
                  <p style={{ marginBottom: '.2rem', fontWeight: '700' }}>Would you like to know more?</p>

                  <p style={{ marginBottom: '.2rem' }}>Fill out <Link to="https://yalesurvey.ca1.qualtrics.com/jfe/form/SV_2gXW5Lz8Z5zG9nM" style={{ color: '#00853e' }}>this form</Link> to receive information about applying.</p>
                </div>
              </div>

              <div style={{ flex: '1 1 clamp(20ch, calc(1/2 * 100%), 100%)' }}>
                <iframe width="560" height="300" src="https://www.youtube.com/embed/Yd6g-I2Vgvo?si=zMJbnYumPfJdUMHl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>

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
