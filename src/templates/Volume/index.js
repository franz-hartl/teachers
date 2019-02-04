import React from 'react'
import { graphql } from 'gatsby'
import Breadcrumb from 'components/Breadcrumb/breadcrumb'
import Table_content from 'components/Table-contents/volumeNav'
import Layout from 'components/Layout/index'
import React_icons from 'components/react-icons'
import NavControls from 'components/Nav-controls'

class VolumeTemplate extends React.Component {
  render() {
    const { page } = this.props.data
    const nav = this.props.data.nav.edges
    const navData = getVolNavData(nav)
    const pageIndex = page.frontmatter.unitTitle == 'Preface' ? 0 : 1
    const x = navData[1].path
    return (
      <Layout>
        <main>
          <div className="region-content">
            <Breadcrumb unitPath={navData[pageIndex].path} />
            <h1 className="volume-title">{page.frontmatter.unitVolume}</h1>
            <aside>
              <div className="row">
                <div className="col-sm-4 mt-3 tc_aside">
                  <Table_content navData={navData} pageIndex={pageIndex} />
                </div>
                <div className="col-sm-7 mt-3 main_content pt-2">
                  <div className="unit-row">
                    <h2 className="unit-title">{page.frontmatter.unitTitle}</h2>
                    <p className="unit-author">{page.frontmatter.unitAuthor}</p>
                    <React_icons />
                    <div dangerouslySetInnerHTML={{ __html: page.html }} />
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

export default VolumeTemplate

export const VolumeQuery = graphql`
  query UnitVolumeQuery($path: String, $navPath: String) {
    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        unitVolume
        unitTitle
        unitAuthor
      }
    }
    nav: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: $navPath } } }
      sort: { fields: [frontmatter___path], order: ASC }
    ) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            path
            unitTitle
            unitAuthor
          }
        }
      }
    }
  }
`

const getVolNavData = nav => {
  const itemsCount = nav.length
  var volNavItems = []
  volNavItems.push({
    path: nav[itemsCount - 1].node.frontmatter.path,
    title: nav[itemsCount - 1].node.frontmatter.unitTitle,
    author: nav[itemsCount - 1].node.frontmatter.unitAuthor,
  })
  volNavItems.push({
    path: nav[itemsCount - 2].node.frontmatter.path,
    title: nav[itemsCount - 2].node.frontmatter.unitTitle,
    author: nav[itemsCount - 2].node.frontmatter.unitAuthor,
  })

  for (let i = 0; i <= nav.length - 2; i++) {
    volNavItems.push({
      path: nav[i].node.frontmatter.path,
      title: nav[i].node.frontmatter.unitTitle,
      author: nav[i].node.frontmatter.unitAuthor,
    })
  }
  return volNavItems
}
