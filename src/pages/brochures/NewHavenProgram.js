import React from 'react'
import Layout from 'components/Layout/index'
import { Link } from 'gatsby'

const NewHavenPage = () => (
  <Layout>
    <main>
      <div className="container px-5 region-content">
        <h1 className="page-title">Annual New Haven Program</h1>
        <p>
          From its inception, the Institute prepared Annual Reports that
          describe the program’s operation in New Haven by drawing heavily on
          the evaluations written by Fellows and seminar leaders at the
          conclusion of their participation. Many also contain material on
          program evaluation, national dissemination, and financial and program
          development. The reports for 1996-2009 are presently available.{' '}
        </p>
        <div className="row mt-4">
          <div className="col-sm-6 left-panel">
            <ul>
              <li>
                <a
                  target="_blank"
                  target="_blank"
                  href="http://teachers.yale.edu/pdfs/ar/ar2009-full.pdf"
                >
                  2009 Annual Report
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  target="_blank"
                  href="http://teachers.yale.edu/pdfs/ar/ar2008-full.pdf"
                >
                  2008 Annual Report
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  target="_blank"
                  href="http://teachers.yale.edu/pdfs/ar/ar2007-full.pdf "
                >
                  2007 Annual Report
                </a>
              </li>
              <li>
                <Link target="_blank" to="brochures/A3/2006/">
                  2006 Annual Report
                </Link>
              </li>
              <li>
                <a
                  target="_blank"
                  target="_blank"
                  href="http://teachers.yale.edu/pdfs/ar/ar2004-full.pdf"
                >
                  2004 Annual Report
                </a>
              </li>
              <li>
                <Link target="_blank" to="brochures/A3/2003/">
                  2003 Annual Report
                </Link>
              </li>
              <li>
                <Link target="_blank" to="brochures/A3/2002/">
                  2002 Annual Report
                </Link>
              </li>
              <li>
                <Link target="_blank" to="brochures/A3/2001/">
                  2001 Annual Report
                </Link>
              </li>
              <li>
                <Link target="_blank" to="brochures/A3/2000/">
                  2000 Annual Report
                </Link>
              </li>
              <li>
                <Link target="_blank" to="brochures/A3/1999/">
                  1999 Annual Report
                </Link>
              </li>
              <li>
                <Link target="_blank" to="brochures/A3/1998/">
                  1998 Annual Report
                </Link>
              </li>
              <li>
                <a
                  target="_blank"
                  target="_blank"
                  href="http://teachers.yale.edu/pdfs/ar/ar1997.pdf"
                >
                  1997 Annual Report
                </a>
              </li>
              <li>
                <Link target="_blank" to="brochures/A3/1996/">
                  1996 Annual Report
                </Link>
              </li>
            </ul>
          </div>
          <div className="row" />
        </div>
      </div>
    </main>
  </Layout>
)
export default NewHavenPage
