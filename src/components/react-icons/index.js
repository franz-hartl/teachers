import React from 'react'
import { IconContext } from 'react-icons'
import { Link } from 'gatsby'
const path = require('path')

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
import { basename } from 'path';

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
    const dlUnitPaths = getdlUnitPaths(this.props.unitPath)

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
              <a href={'/curriculum/units/files/18.02.06.pdf'}
                download
                className="dl_pdf share_btn"
                alt="download entire guide pdf"
                title="download pdf"
                id="download-pdf"
                >
              <FaDownload />
              </a>
              <FaPrint />
            </div>
          </p>
        </IconContext.Provider>
      </div>
    )
  }
}

export default React_icons

function getdlUnitPaths(dlUnitPath){
  var urlPath = window.location.href;
  var pathSplit = urlPath.split("/curriculum");
  var basePath = path.basename(urlPath);
  let reg = new RegExp(/.([h-t]|x)|l/g);
  
  var pathSplit = pathSplit[1].split("/");

  var str = pathSplit[4];
  var pdfDownload = str.replace(reg,'');  // Remove .x.html
  var pdfdownloadlink ='/curriculum/units/files/' + pdfDownload + '.pdf';

  //alert(pdfDownload);

  return{
    pdfdownloadlink : pdfdownloadlink,
    pdfDownload : pdfDownload,
    str : str
  }
}