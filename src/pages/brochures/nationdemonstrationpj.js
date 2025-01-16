import React from 'react'
import Layout from 'components/layout'
import { Link } from 'gatsby'

const NationalDePage = () => (
  <Layout title="National Demonstration Project">
    <main>
      <div className="container px-5 region-content">
        <h1 className="page-title">National Demonstration Project</h1>
        <p>
          After exploring during 1997 the feasibility and desirability of
          establishing new Teachers Institutes at other locations, the Teachers
          Institute undertook a National Demonstration Project to demonstrate
          the potential for adapting at other sites the approach to teacher
          professional development that had been followed for more than two
          decades by the Yale-New Haven Teachers Institute.
        </p>
        <div className="row mt-4">
          <div className="col-sm-8 left-panel">
            <ul>
              <li>
                <strong>
                  <Link to="/ndp/motivate-my-students.html">
                  To Motivate My Students: An Evaluation of the National Demonstration Project of the Yale-New Haven Teachers Institute, 2004 (Rogers Smith)
                  </Link>
                </strong>
                <br />
                <a target='_blank' href="/pdfs/ndp/to-motivate-my-students.pdf">
                  (pdf version with photos)
                </a>
                <p>
                  A 2004 report on the evaluation of the National Demonstration Project which concludes: "The Institute approach significantly strengthens teachers in all five of the major dimensions of teacher quality." Successful Teachers Institutes have demanding requirements. "But the National Demonstration Project has shown clearly that they can be met, and that everywhere they are met, the quality of teaching in America's schools can be significantly improved."
                </p>
              </li>
              <li>
                <strong>
                  <Link to="/ndp/pittsburgh-teachers-institute.html">
                  Pittsburgh Teachers Institute - Lessons Learned, 2003
                  </Link>
                </strong>
                <br />
                <a target='_blank' href="/pdfs/ndp/pittsburgh-teachers-institute-lessons-learned.pdf">
                  (pdf version with photos)
                </a>
                <p>
                  The Pittsburgh Teachers Institute engaged Cornerstone Evaluation Associates LLC, a client-centered research firm specializing in educational research and program evaluation, to collaborate with all partners--PTI, PPS, Chatham and Carnegie Mellon--to undertake evaluation activities deemed critical to understanding the Institute model and informing future replication. The research and evaluation activities were designed to provide information to serve three purposes--to inform the continuation and expansion of the Yale-New Haven model, to provide information for improving the PTI program, and to offer evidence of program effectiveness in support of fundraising efforts.
                </p>
              </li>
              <li>
                <strong>
                  <Link to="/ndp/NDP.html">
                    A National Demonstration Project: Aims and Current Accomplishments, 2000{' '}
                  </Link>
                </strong>
                <br />
                <a target='_blank' href="/pdfs/ndp/ndp.pdf">
                  (pdf version with photos)
                </a>
                <p>
                  The report describes the establishment of four new Teachers
                  Institutes serving urban school systems that enroll students
                  who are mainly from low-income and minority communities. It
                  sets forth the basic principles that had been developed by the
                  Yale-New Haven Teachers Institute that became the guiding
                  principle for each of the new Teachers Institutes.{' '}
                </p>
              </li>
              <li>
                <strong>
                  <Link to="/ndp/ndp1999.html">
                    A National Demonstration Project, 1999
                  </Link>
                </strong>
                <br />
                <a target='_blank' href="/pdfs/ndp/ndp1999.pdf">
                  (pdf version with photos)
                </a>
                <p>
                  The report describes the establishment and purposes of a
                  National Demonstration Project including the site visits that
                  resulted in a proposal for a 4-year project that would
                  constitute a major step toward the nationwide establishment of
                  Teachers Institutes following the approach developed
                  originally in New Haven.{' '}
                </p>
              </li>
            </ul>
          </div>
          <div className="row" />
        </div>
      </div>
    </main>
  </Layout>
)
export default NationalDePage
