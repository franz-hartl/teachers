import React from 'react'
import { graphql } from 'gatsby'
import Breadcrumb from 'components/Breadcrumb/breadcrumb'
import Table_content from 'components/Table-contents'
import Layout from 'components/Layout/index'
import Pdf_icons from 'components/Pdf-icons'
import Survey_feedback from 'components/Feedback'
import NavControls from 'components/Nav-controls'

class UnitTemplate extends React.Component {
  render() {
    const { unitNav, unitPage, unitVol } = this.props.data
    const pageIndex = this.props.pageContext.pageIndex
    const pageHtml = getPageHtml(
      pageIndex,
      unitPage.frontmatter.path,
      unitPage.html
    )
    const navData = getUnitNavItems(unitNav.frontmatter.path, unitNav.html)

    return (
      <Layout>
        <main className="container">
          <div className="region-content">
            <Breadcrumb unitPath={navData[pageIndex].path} />
            <h1 className="volume-title">{unitVol.frontmatter.unitVolume}</h1>
            <aside>
              <div className="row">
                <div className="col-sm-4 mt-3 tc_aside">
                  <Table_content navData={navData} pageIndex={pageIndex} />
                </div>
                <div className="col-sm-8 mt-3 main_content pl-2">
                  <div className="unit-row">
                    <h2 className="unit-title">
                      {unitPage.frontmatter.unitTitle}
                    </h2>
                    <p className="unit-author">
                      {unitPage.frontmatter.unitAuthor}
                    </p>
                    <Pdf_icons />
                    <Survey_feedback />
                    <h2 className="guide-title">{pageHtml.title}</h2>
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

export const PageQuery = graphql`
  query UnitPageQuery($pagePath: String, $navPath: String, $volPath: String) {
    unitPage: markdownRemark(frontmatter: { path: { eq: $pagePath } }) {
      html
      fileAbsolutePath
      frontmatter {
        path
        title
        unitTitle
        unitAuthor
      }
    }
    unitNav: markdownRemark(frontmatter: { path: { eq: $navPath } }) {
      html
      fileAbsolutePath
      frontmatter {
        path
      }
    }
    unitVol: markdownRemark(frontmatter: { path: { eq: $volPath } }) {
      fileAbsolutePath
      frontmatter {
        unitVolume
      }
    }
  }
`


const getUnitNavItems = (path, html) => {
  // eg paths: /curriculum/units/1998/1/98.01.01.x.html/2
  //          /curriculum/guides/1998/1/98.01.01.x.html
  var pathArray = path.split('/')
  // if path has a page then remove it (eg. 98.01.01.x.html/2)
  if (pathArray[pathArray.length - 1].length < 3) {
    pathArray.pop()
  }
  let year = parseInt(pathArray[3])

  // remove the curriculum and units or guides paths from the beginning of the path
  pathArray.shift()
  pathArray.shift()
  pathArray.shift()
  let unitGuidesPath = '/curriculum/guides/' + pathArray.join('/')
  let unitPath = '/curriculum/units/' + pathArray.join('/')
  var unitNavItems = []
  var pageItems = []
  var i
  if (year < 2015) {
    let i = html.indexOf('<ul>')
    let s = html.substring(html.indexOf('<li>', i) + 4, html.indexOf('</ul>'))
    let items = s.split('<li>')
    for (let item of items) {
      pageItems.push(item.split('</li>')[0].trim())
    }
  } else {  // year >= 2015
    let s = html.substring(html.indexOf('<main>'))
    let items = s.split('<h1>')

    // check if page has a narrative/intro section at the top of the page with no <h1> title
    // if so, then add a Narrative page heading to the nav
    if (html.indexOf('<h1>') > html.indexOf('<', 5)) {
      console.log("*** Page has narrative/intro with no <h1> title tag ***  -  ")
      pageItems.push("Narrative")
    }
    
    items.shift()
    for (let item of items) {
      item = item.split('</h1>')[0]
      item = item.replace(/\s*<[/]?strong>\s*/ig, '')
      pageItems.push(item.trim())
    }
  }
  unitNavItems.push({ path: unitGuidesPath, title: 'Unit Guide' })
  unitNavItems.push({ path: unitPath, title: pageItems[0] })
  for (let i = 2; i <= pageItems.length; i++) {
    unitNavItems.push({
      path: unitPath.split('.x.html')[0] + '/' + i,
      title: pageItems[i - 1],
    })
  }
  return unitNavItems
}



const getPageHtml = (pageIndex, pagePath, html) => {
  let year = parseInt(pagePath.split('/')[3])
  var page = {}

  // unit page if index is > 0
  if (pagePath.split('/')[2] == 'units') {
    if (year < 2015) {
      let pages = html.split('<hr/>')
      if (pages.length < 2) {
        return { title: null, html: html.trim() }
      }
      // unit page < 2015
      let p = pages[pageIndex + 1].split('</h3>')
      if (p.length > 1) {
        page = { title: p[0].split('<h3>')[1].trim(), html: p[1].trim() }
      } else {
        let title = pages[1]
          .split('<li>')
          [pageIndex].split('</li>')[0]
          .trim()
        page = { title: title, html: p[0].trim() }
      }
    } else {
      // unit page >= 2015
      let pages = html.split('<h1>')
      
      var title = ''
      // check if there is no <h1> title tag

      // console.log("((((((((((((((((((((( getPageHtml - HERE ))))))))))))))))))))")
      // console.log("index= " + pageIndex + "\n")
      // console.log("page: " + pages[pageIndex].slice(0, 100))

      if (html.indexOf('<h1>') > html.indexOf('<', 5)) {
        console.log("*** Page has narrative/intro with no <h1> title tag *** ")
        pageIndex = pageIndex - 1
      }  
      if (pageIndex == 0) {
          page = { title: "Narrative", html: pages[0].trim() }
      } else {
        try {
          title = pages[pageIndex].split('</h1>')[0].trim()
          // if the title is wrapped in a <strong> tag then remove it
          title = title.replace(/\s*<[/]?strong>\s*/ig, '')
        }
        catch(err) {
          console.log('***ERROR*** finding title on page: ' + err)
        }
        page = { title: title.trim(), html: pages[pageIndex].split('</h1>')[1].trim() }
        // console.log(page)
      }
    }  
  } else {
    // otherwise it is a guide page
    let unitName = pagePath.slice(pagePath.lastIndexOf('/') + 1, -7)
    let title = 'Guide Entry to ' + unitName
    console.log(title)
    if (year < 2015) {
      page = { title: title, html: html.split('</h4>')[1].trim() }
    } else {
      // if it has a <main> section it is a 2015 or newer
      page = {
        title: title,
        html: html
          .split('<main>')[1]
          .split('</main>')[0]
          .trim(),
      }
    }
    // console.log(page)
  }
  return page
}
