import React from 'react'
import Layout from 'components/Layout/index'
import { Link } from 'gatsby'

const HomePage = () => (
  <Layout>
    <main>
      <div className="container px-5 region-content">
        <h1 className="page-title">Reports and Evaluation</h1>
        <div className="row mt-4">
          <div className="col-sm-6 left-panel">
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="brochures/studies">
                  Studies <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                Results of evaluations of the Teachers Institute demonstrate
                that such collaborative programs can assist schools in specific
                ways. Studies have shown that the Institute participation has
                increased teachers’ preparation in their disciplines, raised
                their morale, heightened their expectations for their students,
                encouraged them to remain in teaching in New Haven, and has, in
                turn, enhanced student performance. Curriculum units Fellows
                have developed are used extensively in school courses.
              </p>
            </div>
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="brochures/NewHavenProgram">
                  New Haven Program{' '}
                  <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                From its inception, the Institute prepared Annual Reports that
                describe the program’s operation in New Haven by drawing heavily
                on the evaluations written by Fellows and seminar leaders at the
                conclusion of their participation. Many also contain material on
                program evaluation, national dissemination, and financial and
                program development. The reports for 1996-2009 are presently
                available.
              </p>
            </div>
          </div>
          <div className="col-sm-6 right-panel">
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="brochures/nationdemonstrationpj">
                  A National Demonstration Project, 1999{' '}
                  <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                The report describes the establishment and purposes of a
                National Demonstration Project including the site visits that
                resulted in a proposal for a 4-year project that would
                constitute a major step toward the nationwide establishment of
                Teachers Institutes following the approach developed originally
                in New Haven.{' '}
              </p>
            </div>
          </div>
          <div className="row" />
        </div>
      </div>
    </main>
  </Layout>
)
export default HomePage
