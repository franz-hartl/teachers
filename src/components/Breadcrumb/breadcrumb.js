import React from 'react'
import { Link } from 'gatsby'
// import path from 'path'; const { parse } = path;
const path = require('path')

class Breadcrumb extends React.Component {
  render() {
    const unitPaths = getUnitPaths(this.props.unitPath)

    return (
      <div className="tr_breadcrumb mt-2">
        <span>
          <Link to="/curriculum/units/">Curricular</Link>
        </span>
        {' > '}
        <span>
          <Link
            to={`/curriculum/units/${String(unitPaths.year)}/${String(
              unitPaths.volume
            )}`}
          >
            {unitPaths.year} Volume {unitPaths.volume}
          </Link>
        </span>
        {' > '}
        <VolumeUnitBreadcrumbs unitPaths={unitPaths} />
      </div>
    )
  }
}

export default Breadcrumb

const VolumeUnitBreadcrumbs = ({ unitPaths }) => {
  // return(
  //   <h1>here {unitPaths.unitName}</h1>
  // )
  if (/(preface|intro)/.test(unitPaths.unitName)) {
    return (
      <span>
        {`${/(preface)/.test(unitPaths.unitName) ? 'Preface' : 'Intro'}`}
      </span>
    )
  } else {
    return (
      <span>
        <span>
          <Link to={`${String(unitPaths.unitGuidePath)}`}>
            Unit {unitPaths.unitNum} ({unitPaths.unitName})
          </Link>
        </span>
        {' > '}
        <span>
          {`Section ${unitPaths.pageNum ? unitPaths.pageNum : 'Unit Guide'}`}
        </span>
      </span>
    )
  }
}

function getUnitPaths(unitPath) {
  var dirname = path.dirname(unitPath)
  var basename = path.basename(unitPath)
  var pageNum = 0
  var unitGuidePath
  var pathSplit

  // unitPath = /curriculum/units/1998/1/98.01.01/3/
  if (basename.match(/^[0-9]+$/) != null) {
    pageNum = parseInt(basename)
    basename = path.basename(dirname) + '.x.html'
    dirname = path.dirname(dirname)
    pathSplit = (dirname + '/' + basename).split('/')
  } else {
    // unitPath = /curriculum/guides/1998/1/98.01.01.x.html
    // unitPath = /curriculum/units/1998/1/98.01.01.x.html
    pathSplit = (dirname + '/' + basename).split('/')
    if (pathSplit[2] == 'units') {
      pageNum = 1
    }
  }

  pathSplit[2] = 'guides'
  unitGuidePath = pathSplit.join('/')

  return {
    pageNum: pageNum,
    year: pathSplit[3],
    volume: pathSplit[4],
    unitNum: parseInt(basename.split('.')[2]),
    unitName: basename.split('.x.html')[0],
    unitGuidePath: unitGuidePath,
  }
}
