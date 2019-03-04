import React from 'react'
import Layout from 'components/Layout/index'
import { Link } from 'gatsby'

const pubsPage = () => (
  <Layout>
    <main>
      <div className="container px-5 region-content">
        <h1 className="page-title">Publications</h1>
        <div className="row mt-4">
          <div className="col-sm-6 left-panel">
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="pubs/periodical">
                  Periodical <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                <i>On Common Ground </i> is published in print and online. It is
                concerned with the development of teachers and of their
                curricula through school-university partnerships. Its title,
                which derives from that of the first book on the Institute's
                work, <i>Teaching in America: The Common Ground</i>, is intended
                to suggest that university faculty and school teachers have a
                strong mutual interest in the improvement of teaching and
                learning in schools. Since 2005 the periodical has focused on
                the work of the Yale National Initiative to strengthen teaching
                in public schools.
              </p>
            </div>
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="brochures/CenterManual">
                  Centers for Curriculum and Professional Development, 2004{' '}
                  <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                In 1996 the Yale-New Haven Teachers Institute and the New Haven
                Public Schools undertook an initiative designed to broaden and
                deepen their longstanding efforts to strengthen teaching and
                learning in the schools. The Institute offered several
                elementary, middle, and high schools the opportunity to
                establish an Institute Center for Curriculum and Professional
                Development to create in schools a place that would be conducive
                to the kinds of conversations teachers have with each other and
                with their university colleagues and Institute seminars on the
                Yale campus. They are intended to increase the visibility and
                use of Institute resources within the schools and to include
                teachers who had not before been Institute Fellows.
              </p>
            </div>
          </div>
          <div className="col-sm-6 right-panel">
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="pubs/books">
                  Books <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                The first book on the Institute,{' '}
                <i>Teaching In America: The Common Ground,</i> was prepared for
                distribution initially to the Chief State School Officers,
                college and university presidents and chancellors, and
                government and foundation officials who attended the
                unprecedented 1983 Conference at Yale on the role higher
                education can and must play in strengthening teaching in
                American schools. An expanded edition published in 1984 by the
                College Board includes early evaluations of the Institute by
                Ernest L. Boyer, President of the Carnegie Foundation for the
                Advancement of Teaching, and Robert Kellogg, Dean of the College
                at the University of Virginia.{' '}
              </p>
            </div>
          </div>
          <div className="row" />
        </div>
      </div>
    </main>
  </Layout>
)
export default pubsPage
