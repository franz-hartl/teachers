import React from 'react'
import Layout from 'components/Layout/index'
import { Link } from 'gatsby'

const HomePage = () => (
  <Layout>
    <main>
      <div className="container region-content">
        <div className="row">
          <div className="col-sm-8 mt-3">
            <div className="cr_row my-3 pr-3">
              <h2>Reference lists of curriculum units, 1994 and 2004</h2>
              <p>
                These annotated lists were compiled by New Haven teachers, for
                New Haven teachers. They correlate Institute-developed
                curriculum units with subjects and curriculum standards for
                various grade levels in New Haven’s public schools.{' '}
              </p>
              <ul>
                <li>
                  <strong>
                    <Link to="curriculum/referencelists/elementary">
                      Teaching in the Elementary School Classroom
                    </Link>
                  </strong>
                  <p>
                    Teaching in the Elementary School Classroom identifies six
                    hundred curriculum units developed in the Institute from
                    1978 through 1999 that teachers believe are suitable for use
                    in an elementary classroom and for adaptation to
                    middle-school classrooms.
                  </p>{' '}
                </li>
                <li>
                  <strong>
                    <Link to="curriculum/referencelists/high">
                      Teaching Connecticut Academic Performance Test Skills in
                      High School
                    </Link>
                  </strong>
                  <p>
                    Teaching Connecticut Academic Performance Test (CAPT) Skills
                    in High School Classrooms identifies 407 curriculum units in
                    seven subjects developed in the Institute from 1978 through
                    1999 that can assist in teaching literacy skills and in
                    preparing students for the CAPT.{' '}
                  </p>
                </li>
                <li>
                  <strong>
                    <Link to="curriculum/referencelists/diversity">
                      Teaching about Diversity and Community
                    </Link>
                  </strong>
                  <p>
                    Teaching about Diversity and Community identifies 578
                    curriculum units developed in the Institute from 1978
                    through 2004 that correlate with academic standards
                    concerning diversity in disciplines including English,
                    history, foreign languages, and arts.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <aside className="mb-2" />
            <div className="p-3 mt-4 block-block">
              <p>
                <a
                  target="_blank"
                  href="http://teachers.yale.edu/curriculum/sort/index.php?page=sort_by_seminar_leader&skin=h"
                  targets="_blank"
                >
                  Find
                </a>{' '}
                curriculum units written in seminars led by each participating
                Yale faculty member.
              </p>
              <p>
                <a
                  target="_blank"
                  href="http://teachers.yale.edu/curriculum/index.php?skin=h"
                >
                  View
                </a>{' '}
                curriculum units prepared in national seminars at Yale by
                teachers from existing Teachers Institutes and school districts
                that are planning or considering the establishment of a Teachers
                Institute.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
)
export default HomePage
