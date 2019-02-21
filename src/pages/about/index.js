import React from 'react'
import Layout from 'components/Layout/index'
import { Link } from 'gatsby'

const aboutPage = () => (
  <Layout>
    <main>
      <div className="container px-5 region-content">
        <h1 className="page-title">About the Institute</h1>
        <div className="row mt-4">
          <div className="col-sm-6 left-panel">
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="/brochures/annual-brochure.html">
                  Annual Brochure <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                The Institute’s annual brochure describes its local program and
                schedule, contains lists of school teachers and faculty members
                in the Institute’s leadership, and provides participating
                teachers, named Institute Fellows, Guidelines for development of
                curriculum units.{' '}
              </p>
            </div>
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="event-proceedings/news-conferences">
                  Video Programs <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                This program depicts the results of the structured, intensive,
                long-term collaboration among Yale university faculty members
                and New Haven Public School teachers that has occurred since
                1978 through the Yale-New Haven Teachers Institute. The
                Institute is an educational partnership between Yale and the
                Public Schools designed to strengthen teaching and learning in
                the schools and, by example, in schools across the country.{' '}
              </p>
            </div>
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="brochures/A9.html">
                  Awards and Recognition{' '}
                  <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                “Principal Recognition Accorded to the Institute” by individuals
                and organizations since 1978.
              </p>{' '}
            </div>
          </div>
          <div className="col-sm-6 right-panel">
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="brochures/A6.html">
                  Policies, Structure, and Procedures{' '}
                  <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                “The Policies, Structure, and Procedures” of the Institute,
                endorsed by the Yale Corporation in September 1994, describe the
                Institute as a permanent unit of the University.{' '}
              </p>
            </div>
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="brochures/25thTranscript.html">
                  Published Essays{' '}
                  <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                Articles written by Founding Director James R. Vivian describe
                the Teachers Institute approach to teacher professional
                development, the history of the Institute’s program in New
                Haven, and its significance to Yale University.
              </p>
            </div>
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="comments.html">
                  Contact Us <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                Articles written by Founding Director James R. Vivian describe
                the Teachers Institute approach to teacher professional
                development, the history of the Institute’s program in New
                Haven, and its significance to Yale University.
              </p>
            </div>
          </div>
          <div className="row" />
        </div>
      </div>
    </main>
  </Layout>
)
export default aboutPage
