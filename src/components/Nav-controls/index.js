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
      <div className="content-nav-button">
        <Link
          to={`${prevPath ? prevPath : '/'}`}
          className={`btn prv-btn btn-primary mr-2 px-4 btn-sm ${
            prevPath ? '' : 'disabled'
          }`}
          role="button"
          aria-disabled="true"
        >
          <FaArrowLeft /> Previous{' '}
        </Link>
        <Link
          to={`${nextPath ? nextPath : '/'}`}
          className={`btn px-4 btn-primary next-btn btn-sm ml-2  ${
            nextPath ? '' : 'disabled'
          }`}
          role="button"
          aria-pressed="true"
        >
          Next <FaArrowRight />
        </Link>
        <a
          href="#"
          id="backtotop"
          className="btn px-4 btn-primary backtotop btn-sm ml-2"
          role="button"
          aria-pressed="true"
        >
          Back to Top <FaArrowUp />
        </a>
      </div>
    )
  }
}

export default NavControls
