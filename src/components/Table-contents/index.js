import React from 'react'
import { Link } from 'gatsby'
const path = require('path')

class Table_content extends React.Component {
  render() {
    // const { navData, pageIndex } = this.props
    // const { unitPaths } = navData[0].split("/")
    const unitName = path.basename(this.props.navData[1].path, ".x.html")
    const volumeLink = path.dirname(this.props.navData[1].path)
    return (
      <div>
        <div className="volumes-links"><Link to={volumeLink} className="btn btn-primary btn-sm" role="button" aria-pressed="true">View This Volume</Link><Link to="/curriculum/indexes" className="btn btn-primary btn-sm" role="button" aria-pressed="true">Browse Index</Link></div>
        <h2 className="tc">Contents Of Volume Curriculum unit {unitName}</h2>
        <div className="inner-table-content">
          <NavLinks navData={this.props.navData} activeIndex={this.props.pageIndex} />
        </div>
      </div>
    )
  }
}

export default Table_content


const NavLinks = ({ navData, activeIndex }) => {
  const listItems = navData.map(function (item, i) {
    if (i == 0) {
      return (
        <h3 key={i.toString()} className={`tc_lists_guide ${activeIndex == i ? "tc_active" : ""}`}>
          <Link to={item.path}>{item.title}</Link></h3>
      )
    } else {
      return (
        <li key={i.toString()} className={`tc_lists_guide ${activeIndex == i ? "tc_active" : ""}`}>
          <Link to={item.path}>{item.title}</Link></li>
      )
    }
  })
  return (
    <ol className="table_units">
      {listItems}
    </ol>
  )
}


