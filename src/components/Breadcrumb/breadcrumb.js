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
            to={`/curriculum/units/${String(unitPaths.year)}/${String(unitPaths.volume)}`}
          > {unitPaths.year} Volume {`${isNaN(unitPaths.volume) ? unitPaths.volume : romanNumber(parseInt(unitPaths.volume))}`}
          </Link>
        </span>
        {' > '}
        <VolumeUnitBreadcrumbs unitPaths={unitPaths} />
      </div>
    )
  }
}
export default Breadcrumb


function romanNumber(i) {
  
  var volumeRom= [" ", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", 
  "X", "XI", "XII"];

  return volumeRom[i];
}



const VolumeUnitBreadcrumbs = ({ unitPaths }) => {
  // var pattern = /\d\d\.\d\d$/g
  var pattern = /intro|preface/g
  var patternUnit = /(ch|\d\d).\d\d$/g

  if (pattern.test(unitPaths.unitName)) { // check if it is an intro or preface
    return (
      <span>
        {`${/(intro)/.test(unitPaths.unitName) ? 'Introduction' : 'Preface'}`}
      </span>
    )
  } else if (patternUnit.test(unitPaths.unitName)) { // will print section number or unit guide
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
  } else {
    return (
      <span>Preface</span>
    )
  }
}

// UnitPath =  curriculum/guides/2018/2/18.02.01.x.html

function getUnitPaths(unitPath) {

  var dirname = path.dirname(unitPath) // dirname = /curriculum/guides/2018/2
  var basename = path.basename(unitPath) // basename = 18.02.01.x.html
  var pageNum = 0
  var pathSplit = (dirname + '/' + basename).split('/')

  // unitPath = /curriculum/units/1998/1/98.01.01/3/     (unit 98.01.01 page 3)
  // if this is a page then save the number in pageNum and then remove page number from url
  if (pathSplit.length > 5 && basename.match(/^[0-9]+$/) != null) {
    pageNum = parseInt(basename)
    basename = path.basename(dirname)
    dirname = path.dirname(dirname)
    pathSplit = (dirname + '/' + basename).split('/')
  } 
  else {   // otherwise if it is a unit (not a guide) then it is the 1st page (section)
    // unitPath = /curriculum/guides/1998/1/98.01.01.x.html
    // unitPath = /curriculum/units/1998/1/98.01.01.x.html
    if (pathSplit[2] === 'units') {
      pageNum = 1
    }
  }

  var sectionNum = unitPath.split('/')[6];

  // section is the page number or if it is a guide, preface or intro page
  // print section to the url if there is a section otherwise print null
  if(sectionNum === "" || sectionNum === undefined){
    var sectionNum = ""
  }
  else {
    var sectionNum = "/" + sectionNum;
  }

  pathSplit[2] = 'units'
  var unitGuidePath = pathSplit.join('/')
  // if unitGuidePath ends with .x.html then remove it
  unitGuidePath = unitGuidePath.split('.x.html')[0]

  return {
    pageNum: pageNum,
    sectionNum : sectionNum,
    year: pathSplit[3],
    volume: pathSplit[4],
    unitNum: parseInt(basename.split('.')[2]),
    unitName: basename.split('.x.html')[0],
    unitGuidePath: unitGuidePath + '.x.html',
  }

}
