import React from 'react'
import { IconContext } from 'react-icons'
import { Link } from 'gatsby'
import { withPrefix } from 'gatsby'
const path = require('path')
// import { Document, Page } from 'react-pdf'

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
              <a href="#"
                className="share_btn"
                alt="share email link"
                title="share email link"
                onClick={this.handleClick}
              >
                <FaEnvelope />
              </a>
              <a href={'/curriculum/' + dlUnitPaths.printUnit + '/files/' + dlUnitPaths.pdfDownload + '.pdf'}
                download
                className="dl_pdf middle-icon share_btn"
                alt="download entire guide pdf"
                title="download pdf"
                id="download-pdf"
                >
              <FaDownload />
              </a>
              <a href={'/curriculum/' + dlUnitPaths.printUnit + '/files/' + dlUnitPaths.pdfDownload + '.pdf'}
               className="share_btn print_pdf"
               alt="print pdf version"
               title="print pdf version"
               id="print-pdf"
               taret="_blank"
               >
              <FaPrint />
              </a>
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
  
  if (pathSplit[1] == "units"){
    var printUnit ='units';
  }
  else{
    var printUnit = 'guides';
  }

  return{
    pdfDownload : pdfDownload,
    printUnit : printUnit
  }
}