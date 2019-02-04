import React from 'react'
import { IconContext } from 'react-icons'
import {
  FaArrowRight,
  FaArrowLeft,
  FaDrupal,
  FaAngleLeft,
  FaAngleRight,
  FaDownload,
  FaFilePdf,
  FaPrint,
  FaEnvelope,
} from 'react-icons/fa'

class React_icons extends React.Component {
  // Click and share current page link
  handleClick() {
    window.location.href =
      'mailto:?subject=' +
      'Yale-New Haven Teacher Institute :' +
      ' ' +
      window.location.href
  }

  render() {
    return (
      <div className="main_content">
        <span>Tools for this unit:</span>
        <IconContext.Provider value={{ color: '#2B50A3', size: '3em' }}>
          <p class="my-2 mb-3">
            <div>
              <button
                className="share_btn"
                alt="share email link"
                title="share email link"
                onClick={this.handleClick}
              >
                <FaEnvelope />
              </button>
              <FaDownload /> &nbsp;
              <FaPrint />
            </div>
          </p>
        </IconContext.Provider>
      </div>
    )
  }
}

export default React_icons
