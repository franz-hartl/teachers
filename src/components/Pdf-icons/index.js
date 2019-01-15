import React from 'react'

class Pdf_icons extends React.Component {
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
        <p class="my-2 mb-3">
          <div>
            <button
              className="share_btn"
              alt="share email link"
              title="share email link"
              onClick={this.handleClick}
            >
              <i className="fa fa-envelope fa-3x" />
            </button>
            <i className="fa fa-download fa-3x" /> &nbsp;
            <i className="fa fa-print fa-3x" />
          </div>
        </p>
      </div>
    )
  }
}

export default Pdf_icons
