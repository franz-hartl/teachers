import React from 'react'
import Layout from 'components/Layout/index'
import { Link } from 'gatsby'

const timePage = () => (
  <Layout>
    <main>
      <div className="container px-5 region-content">
        <h1 className="page-title">
          Timeline of the Yale-New Haven Teachers Institute® and Yale National
          Initiative®
        </h1>
        <p>
          This timeline traces the history of the Teachers Institute from its
          beginnings in New Haven to the recognition it received as an early
          leader in the movement for university-school collaboration, and its
          success in building on that recognition to disseminate knowledge of
          the Teachers Institute approach as a model of both professional
          development for teachers and of school-college collaboration to
          improve teaching in public schools. The timeline includes documents,
          photographs, and video programs from throughout the Teachers
          Institute’s history.
        </p>
        <div className="row mt-4">
          <div className="col-sm-11 left-panel">
            <iframe
              src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1by…"
              width="100%"
              height="900"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
              frameborder="0"
            />
          </div>
          <div className="row" />
        </div>
      </div>
    </main>
  </Layout>
)
export default timePage
