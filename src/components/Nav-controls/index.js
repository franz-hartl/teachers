import React from 'react'
import { Link } from 'gatsby'
import { IconContext } from 'react-icons'
import {
  FaArrowRight,
  FaArrowLeft,
  FaArrowUp,
  FaAngleLeft,
  FaAngleRight,
  FaDownload,
  FaFilePdf,
  FaPrint,
  FaEnvelope,
} from 'react-icons/fa'

class NavControls extends React.Component {
  render() {
    const { pageIndex, navData } = this.props
    const prevPath = pageIndex ? navData[pageIndex - 1].path : null
    const nextPath =
      pageIndex + 1 < navData.length ? navData[pageIndex + 1].path : null

    return (
      <navbar-collapse isOpen={!this.state.collapsed} navbar>
        <div className="container main-menu">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              onClick={this.toggleNavbar}
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className={
                this.state.collapsed
                  ? 'collapse navbar-collapse'
                  : ' navbar-collapse'
              }
              id="navbarNav"
            >
              <ul className="navbar-nav ynhti-nav mr-auto">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    aria-haspopup="true"
                    to="curriculum"
                    role="button"
                  >
                    Curricular Resources
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="curriculum/indexes">
                      View index of topics
                    </Link>
                    <Link className="dropdown-item" to="curriculum/units">
                      View resources by volume
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="curriculum/referencelists"
                    >
                      Reference lists
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="brochures"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Reports and Evaluation
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="brochures/studies">
                      Studies
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="brochures/NewHavenProgram"
                    >
                      New Haven Program
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="brochures/nationdemonstrationpj"
                    >
                      National Demonstration Project
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="pubs"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Publications
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="pubs/periodical">
                      Periodical
                    </Link>
                    <Link className="dropdown-item" to="pubs/books">
                      Books
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="brochures/CenterManual/index"
                    >
                      Institute Centers
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="event-proceedings"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Event Proceedings
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="event-proceedings">
                      Conferences
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="event-proceedings/endowment"
                    >
                      Endowment
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="event-proceedings/news-conferences"
                    >
                      News Conferences
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="brochures/25thTranscript.html "
                    >
                      25th Anniversary
                    </Link>
                    <Link className="dropdown-item" to="congressional.html">
                      Congressional Hearings
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="timeline/">
                    Timeline
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/brochures/annual-brochure.html"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    About the Institute
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                      className="dropdown-item"
                      to="/brochures/annual-brochure.html"
                    >
                      Annual Brochure
                    </Link>
                    <Link className="dropdown-item" to="brochures/A6.html">
                      Policies, Structure, and Procedures
                    </Link>
                    <Link className="dropdown-item" to="brochures/A9.html">
                      Awards and Recognition
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="brochures/video-programs.html"
                    >
                      Video Programs
                    </Link>
                    <Link className="dropdown-item" to="articles/index.html">
                      Published Essays
                    </Link>
                    <Link className="dropdown-item" to="/comments.html">
                      Contact Us
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </navbar-collapse>
    )
  }
}

export default NavControls
