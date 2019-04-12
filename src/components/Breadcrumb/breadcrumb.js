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
          <Link to="/curriculum/">Curricular Resources</Link>
        </span>
        {' > '}
        <span>
          <Link
            to={`/curriculum/units/${String(unitPaths.year)}/${String(unitPaths.unitNum)}`}
          >
            {unitPaths.year} Volume {unitPaths.volume} {unitPaths.pageNum}
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
  var pattern = /\d\d\.\d\d$/g


  if (!pattern.test(unitPaths.unitName)) { //if is not a unit will return intro or preface
    return (
      <span>
        {`${/(intro)/.test(unitPaths.unitName) ? 'Intro' : 'Preface'}`}
      </span>
    )
  } else { // will print section number or unit guide
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

// UnitPath =  curriculum/guides/2018/2/18.02.01.x.html

function getUnitPaths(unitPath) {

  var dirname = path.dirname(unitPath) // dirname = /curriculum/guides/2018/2
  var basename = path.basename(unitPath) // basename = 18.02.01.x.html
  var pageNum = 0
  var pathSplit


  // unitPath = /curriculum/units/1998/1/98.01.01/3/
  if (basename.match(/^[0-9]+$/) != null) {
    pageNum = parseInt(basename)
    basename = path.basename(dirname)
    dirname = path.dirname(dirname)
    pathSplit = (dirname + '/' + basename).split('/')
  } 
  else {
    // unitPath = /curriculum/guides/1998/1/98.01.01.x.html
    // unitPath = /curriculum/units/1998/1/98.01.01.x.html
    pathSplit = (dirname + '/' + basename).split('/')
    if (pathSplit[2] == 'units') {
      pageNum = 1
    }
  }

  // pathSplit[2] = 'guides'
  var unitGuidePath = pathSplit.join('/')
  return {
    pageNum: pageNum,
    year: pathSplit[3],
    volume: pathSplit[4],
    unitNum: parseInt(basename.split('.')[2]),
    unitName: basename.split('.x.html')[0],
    unitGuidePath: unitGuidePath,
  }
}
