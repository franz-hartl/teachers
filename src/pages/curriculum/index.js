import React from 'react'
import Layout from 'components/Layout/index'
import { Link } from 'gatsby'

const HomePage = () => (
  <Layout>
    <main>
      <div className="container region-content">
        <div className="row">
          <div className="col-sm-8">
            <div className="cr_row my-3 pr-3">
              <h2>Curricular Resources</h2>
              <p>
                Each curriculum unit is the product of the Fellow’s seminar
                experience and designed to teach their own students about the
                seminar subject. Each contains content objectives. – a clear
                statement of the subject matter the unit seeks to cover;
                teaching strategies – a unified, coherent teaching plan for
                those objectives; classroom activities; resources for teachers
                and students; and an appendix on how the unit implements
                academic standards of the school district.{' '}
              </p>
            </div>
            <div className="cr_row my-3 pr-3">
              <h2>View index of topics</h2>
              <p>
                A topical index of all the units written since 1978 lists them
                according to the three or four main topics each unit addresses.
              </p>
              <Link to="curriculum/indexes" className="btn-def">
                Browse Index
              </Link>
            </div>
            <div className="cr_row my-3 pr-3">
              <h2>View resources by volume</h2>
              <p>
                Hundreds of curriculum units written since 1978 are a treasure
                trove of ideas and procedures for teaching subjects in the
                humanities and in STEM fields in grades K-12. Each teaching unit
                is designated by three two-digit numbers. The Index does not
                indicate whether the units are primarily for elementary or
                secondary school grades because a great many of the units,
                whatever their original audience, are readily adaptable for use
                across a wide range of grades.{' '}
              </p>{' '}
              <Link to="curriculum/units" className="btn-def">
                View Volumes
              </Link>
            </div>
          </div>
          <div className="col-sm-4">
            <aside className="mb-2" />
          </div>
          <div className="row" />
        </div>
      </div>
    </main>
  </Layout>
)
export default HomePage
