import React from 'react'
import { Link } from 'gatsby'

class NavControls extends React.Component {
  render() {
    return (
      <div className="content-nav-button">
        <Link
          to="/curriculum/guides/2018/1/18.01.01.x.html"
          class="btn prv-btn btn-primary mr-2 px-4 btn-sm"
          role="button"
          aria-disabled="true"
        >
          <i className="fas fa fa-arrow-left" /> Previous
        </Link>
        <Link
          to="#"
          class="btn px-4 btn-primary next-btn btn-sm ml-2"
          role="button"
          aria-pressed="true"
        >
          Next
          <i className="fas fa fa-arrow-right" />
        </Link>
        <a
          target="_blank"
          href="#"
          id="backtotop"
          class="btn px-4 btn-primary backtotop btn-sm ml-2"
          role="button"
          aria-pressed="true"
        >
          Back to Top
          <i className="fas fa fa-arrow-up" />
        </a>
      </div>
    )
  }
}

export default NavControls
