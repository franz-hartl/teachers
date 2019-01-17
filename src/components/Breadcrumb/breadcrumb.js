import React from 'react'
import { Link } from 'gatsby'
// import path from 'path'; const { parse } = path;
const path = require('path')

class Breadcrumb extends React.Component {
  render() {
    const unitPath = this.props.unitPath
    const unitPaths = getUnitPaths(this.props.unitPath)
      //"/curriculum/units/1998/1/98.01.01.x.html/4")

    return (
      <div className="tr_breadcrumb mt-2">
        <span>
          <Link to="/curriculum/index.html">Curricular</Link>
        </span>{' '}
        >
        <span>
          <Link to=""> {unitPaths.year} Volume {unitPaths.volume}</Link>
        </span>{' '}
        >
        <span>
          <Link to=""> Unit {unitPaths.unitNum} ({unitPaths.unitName})</Link>
        </span>{' '}
        ><span> Section {unitPaths.pageNum}</span>
      </div>
    )
  }
}

export default Breadcrumb


function getUnitPaths( unitPath ) {
  var p = path.basename(unitPath)
  var pathSplit = unitPath.split("/")
  var pageNum = 0
  var unitName

  if (p.match(/^[0-9]+$/) != null) {
    pageNum = parseInt(p)
    p = unitPath.substring(0, unitPath.lastIndexOf("/"))
    unitName = path.basename(p, ".x.html")
  } else {
    if (pathSplit[2] != "guides") {
      pageNum = 1
    }  
  }

  return {
    pageNum: pageNum,
    year: pathSplit[3],
    volume: pathSplit[4],
    unitNum: parseInt(unitName.split(".")[2]),
    unitName: unitName
  }
  // return {
  //   unitName: path.basename(unitPath, ".x.html"),
  //   year: paths[3],
  //   volume: paths[4],
  // }
}
