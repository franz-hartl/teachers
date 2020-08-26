import React from 'react'
import Layout from 'components/layout'
import React_icons from 'components/react-icons'
import { Link } from 'gatsby';

class yearguideTemplate extends React.Component {
  render() {
    const { html } = this.props.pageContext.node
    const { title } = this.props.pageContext.node.frontmatter
    const fullTitle = "Guide to Curriculum Units by Fellows of the Yale-New Haven Teachers Institute " + title
    //const {volumeItems} = this.props.pageContext
    const {volumeItems, unitItems} = this.props.pageContext
    const romanNumbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX']
    const unitPath = "/curriculum/guides/" + title + "/"
    //console.log(volumeItems)
    //console.log(unitItems)

    return (
      <Layout title={fullTitle}>
        <main>
          <div className="container region-content">
            <h1 className="page-title">Synopses of the Curriculum Units <br/>by Fellows of the Yale-New Haven Teachers Institute <br/>{title}</h1>
            <React_icons unitPath={unitPath} />
            <br />
            <h2>Contents</h2>
            <ul style={{listStyleType: "none"}}>
              <li><a href="#preface">Preface</a></li>
              {volumeItems.map((vol, index) => (
                <li key={index}>
                  <a href={"#" + romanNumbers[index]}>{romanNumbers[index]}. {vol.node.frontmatter.unitVolume}</a>
                  <ul>
                    <li><a href={"#" + romanNumbers[index] + "-introduction"}>Introduction by {vol.node.frontmatter.unitAuthor}</a></li>
                    <li><a href={"#" + romanNumbers[index] + "-curriculum-units"}>Synopses of the Curriculum Units</a></li>
                  </ul>
                </li>
              ))}
            </ul>
            <br />
            <h2 id="preface">Preface</h2>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            {volumeItems.map((vol, index) => (
              <div key={index}>
                <br/><h2 id={romanNumbers[index]}><Link to={vol.node.frontmatter.path}>{romanNumbers[index]}. {vol.node.frontmatter.unitVolume}</Link></h2>
                <h3 id={romanNumbers[index] + "-introduction"}>Introduction by {vol.node.frontmatter.unitAuthor}</h3>
                <div dangerouslySetInnerHTML={{ __html: vol.node.html }} />
                  {/* <p>{vol.node.frontmatter.unitAuthor}</p> */}
                <br/><h3 id={romanNumbers[index] + "-curriculum-units"}>Synopses of the Curriculum Units</h3>
                <UnitItemsDisplay units={unitItems} volumeNumber={index} title={title}/>
              </div>
            ))}
          </div>
        </main>
      </Layout>
    )
  }
}

export default yearguideTemplate

const UnitItemsDisplay = ({units, volumeNumber, title}) => {
  //console.log(units)
  //console.log(volumeNumber)
  const volumeUnit = new RegExp("^\/curriculum\/guides\/"+ title + "\/" + (volumeNumber + 1) + "\/")
  //console.log("^\/curriculum\/guides\/"+ title + "\/" + (volumeNumber + 1) + "\/");
  const currentVolumeUnits = units.filter(unit => volumeUnit.test(unit.node.frontmatter.path))
  //console.log(currentVolumeUnits)
  return (
    <div>
      {currentVolumeUnits.map((unit, index) => (
        <div key={index}>
          <p><strong><Link to={unit.node.frontmatter.path}>{unit.node.frontmatter.title.replace(/[^0-9.]/g,"")}</Link></strong></p>
          <p><strong><Link to={unit.node.frontmatter.path}>{unit.node.frontmatter.unitTitle}</Link></strong></p>
          <p>by {unit.node.frontmatter.unitAuthor}</p>
          <div dangerouslySetInnerHTML={{ __html: unit.node.html }} />
        </div>
      ))}
    </div>
  )
}
