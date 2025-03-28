import React from 'react'
import { Link } from 'gatsby'
import Layout from 'components/layout'

const Archives = () => (
  <Layout title="Archives">
    <main>
      <div className="container px-5 region-content">
        <h1 className="page-title">Archives</h1>

        <div className="row mt-4">
          <div className="col-sm-6 left-panel">
            <div className="br-cell py-2">
              <Link to="/pubs"><h2 className="br-title">Publications</h2></Link>
            </div>

            <div className="br-cell py-2">
              <Link to="/brochures/video-programs.html"><h2 className="br-title">Video Programs</h2></Link>
              <p>Video programs depict the annual seminar process and results of the Yale-New Haven Teachers Institute.</p>
            </div>

            <div className="br-cell py-2">
              <Link to="/brochures/nationdemonstrationpj"><h2 className="br-title">National Demonstration Project</h2></Link>
              <p>After exploring during 1997 the feasibility and desirability of establishing new Teachers Institutes at other locations, the Teachers Institute undertook a National Demonstration Project to demonstrate the potential for adapting at other sites the approach to teacher professional development that had been followed for more than two decades by the Yale-New Haven Teachers Institute.</p>
            </div>
          </div>
          <div className="col-sm-6 right-panel">
            <div className="br-cell py-2">
              <Link to="/brochures/NewHavenProgram"><h2 className="br-title">Annual New Haven Program</h2></Link>
              <p>From its inception, the Institute has prepared Annual Reports that describe the program’s operation in New Haven by drawing heavily on the evaluations written by Fellows and seminar leaders at the conclusion of their participation. Many reports also contain material on program evaluation, national dissemination, and financial and program development. The reports for 1996-2009 are presently available.</p>
            </div>

            <div className="br-cell py-2">
              <Link to="/event-proceedings"><h2 className="br-title">Event Proceedings</h2></Link>
            </div>
          </div>
          <div className="row" />
        </div>
       </div>
    </main>
  </Layout>
)
export default Archives
