import React from 'react'
import { graphql } from 'gatsby'
import Breadcrumb from 'components/Breadcrumb/breadcrumb'
import Table_content from 'components/Table-contents'
import Layout from 'components/Layout/index'
import React_icons from 'components/react-icons'
import Survey_feedback from 'components/Feedback'
import NavControls from 'components/Nav-controls'

class UnitTemplate extends React.Component {
  render() {
    // const { unitNav, unitPage, unitVol } = this.props.data
    const pageIndex = this.props.pageContext.pageIndex
    const navData = this.props.pageContext.navData
    const pageHtml = this.props.pageContext.pageHtml
    const frontmatter = this.props.pageContext.frontmatter
    const unitVolume = this.props.pageContext.unitVolume
    const isGuide = pageIndex == 0

    return (
      <Layout>
        <main>
          <div className="region-content">
            <Breadcrumb unitPath={navData[pageIndex].path} />
            <h1 className="volume-title">{unitVolume}</h1>
            <aside>
              <div className="row">
                <div className="col-sm-4 mt-3 tc_aside">
                  <Table_content navData={navData} pageIndex={pageIndex} />
                </div>
                <div className="col-sm-8 mt-3 main_content pl-2">
                  <div className="unit-row">
                    <h2 className="unit-title">{frontmatter.unitTitle}</h2>
                    <p className="unit-author">{frontmatter.unitAuthor}</p>
                    <React_icons />
                    {!isGuide && <Survey_feedback />}
                    <h2
                      className="guide-title"
                      dangerouslySetInnerHTML={{ __html: pageHtml.title }}
                    />
                    <div dangerouslySetInnerHTML={{ __html: pageHtml.html }} />
                    <NavControls navData={navData} pageIndex={pageIndex} />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </Layout>
    )
  }
}

export default UnitTemplate
