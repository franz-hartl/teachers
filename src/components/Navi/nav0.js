import React from 'react'
import { Link } from 'gatsby'

class Navi extends React.Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    const { location, title } = this.props
    return (
      <navbar-collapse isOpen={!this.state.collapsed} navbar>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            onClick={this.toggleNavbar}
            data-toggle="collapsed"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div
            class={
              this.state.collapsed
                ? 'collapse navbar-collapse'
                : ' navbar-collapse'
            }
            id="navbarNav"
          >
            <ul className="navbar-nav ynhti-nav">
              <li className="nav-item dropdown">
                <Link className="nav-link" to="curriculum">
                  Curricular Resources
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="curriculum/indexes">
                    View index of topics
                  </Link>
                  <div className="dropdown-divider" />
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
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="brochures/studies">
                    Studies
                  </Link>
                  <div className="dropdown-divider" />
                  <Link
                    className="dropdown-item"
                    to="brochures/newhavenprogram#"
                  >
                    New Haven Program
                  </Link>
                  <div className="dropdown-divider" />
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
                  to="brochures"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Publications
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="#">
                    Periodical
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Books
                  </Link>
                  <div className="dropdown-divider" />
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
                  to="brochures"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Event Proceedings
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="#">
                    Conferences
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Endowment
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    News Conferences
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="brochures/25th.html ">
                    25th Anniversary
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Congressional Hearings
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Timeline
                </Link>
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
                  About the Institute
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="#">
                    Annual Brochure
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Policies, Structure, and Procedures
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Awards and Recognition
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Video Programs
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Published Essays
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Contact Us
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </navbar-collapse>
    )
  }
}

export default Navi
