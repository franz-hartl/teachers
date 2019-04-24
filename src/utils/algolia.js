const stripHtml = require("string-strip-html");


const unitQuery = `{
  units: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/units/" },
      frontmatter: {layout: {eq: "unit"}}
    }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          path
          title
          unitTitle
          unitAuthor
        }
        html
      }
    }
  }
}`

const guideQuery = `{
  guides: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/guides/" },
      frontmatter: {layout: {eq: "unit"}}
    }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          path
          title
          unitTitle
          unitAuthor
          keywords
          recommendedFor
        }
        html
      }
    }
  }
}`

const volumeQuery = `{
  volumes: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/units/" },
      frontmatter: {layout: {eq: "volume"}}
    }
    ) {
    edges {
      node {
        objectID: id
        frontmatter {
          path
          title
          unitTitle
          unitAuthor
          unitVolume
        }
        html
      }
    }
  }
}`

const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      frontmatter: {layout: {eq: "page"}}
      }
    ) {
    edges {
      node {
        objectID: id
        frontmatter {
          path
          title
        }
        html
      }
    }
  }
}`
  


function get_unit(n) {
  pages = getPageText(n.node.frontmatter.path, n.node.html, "unit")
  pathSplit = n.node.frontmatter.path.split('/')
  year = pathSplit[3]
  volume = pathSplit[4]  
  unitNum = pathSplit[pathSplit.length - 1].replace(".x.html", "")
  unitNum = parseInt(unitNum.split('.')[2]).toString()
  return {
    ...n.node.frontmatter,
    "year": year,
    "volume": volume,
    "unit": unitNum,
    "pages": pages
  }
} 
  
function get_guide(n) {
  pageText = getPageText(n.node.frontmatter.path, n.node.html, "guide")
  pathSplit = n.node.frontmatter.path.split('/')
  year = pathSplit[3]
  volume = pathSplit[4]  
  unitNum = pathSplit[pathSplit.length - 1].replace(".x.html", "")
  unitNum = parseInt(unitNum.split('.')[2]).toString()
  return {
    ...n.node.frontmatter,
    "year": year,
    "volume": volume,
    "unit": unitNum,
    "pageText": pageText 
  }
}  

function get_volume(n) {
  pageText = getPageText(n.node.frontmatter.path, n.node.html, "volume")
  pathSplit = n.node.frontmatter.path.split('/')
  year = pathSplit[3]
  volume = pathSplit[4]
  return {
    ...n.node.frontmatter,
    "year": year,
    "volume": volume,
    "pageText": pageText
  }    
}

function get_page(n) {
  pageText = getPageText(n.node.frontmatter.path, n.node.html, "page")
  if (pageText != '') {
    return {
      ...n.node.frontmatter,
      "pageText": pageText 
    }
  } else {
    return {}
  }
}
  

function flatten_units(nodes) {
  return nodes.map(get_unit)
}

function flatten_guides(nodes) {
  return nodes.map(get_guide)
}

function flatten_volumes(nodes) {
  return nodes.map(get_volume)
}

function flatten_pages(nodes) {
  return nodes.map(get_page)
}

  const settings = { }
  
  const queries = [
    // {
    //   query: unitQuery,
    //   transformer: ({ data }) => flatten_units(data.units.edges),
    //   indexName: `dev_teachers_units`,
    //   settings,
    // },
    // {
    //   query: guideQuery,
    //   transformer: ({ data }) => flatten_guides(data.guides.edges),
    //   indexName: `dev_teachers_guides`,
    //   settings,
    // },
    // {
    //   query: volumeQuery,
    //   transformer: ({ data }) => flatten_volumes(data.volumes.edges),
    //   indexName: `dev_teachers_volumes`,
    //   settings,
    // },
    // {
    //   query: pageQuery,
    //   transformer: ({ data }) => flatten_pages(data.pages.edges),
    //   indexName: `dev_teachers_pages`,
    //   settings,
    // },
  
  ]
  
  module.exports = queries



  const getPageText = (path, html, pageType) => {
    var unitPath = path
    // pageType is either unit, guide, volume or page

    let year = parseInt(unitPath.split('/')[3])
    var pages
    
    switch (pageType) {
      case 'unit':
        var pageTextSize = 0
        if (year < 2015) {
            pages = html.split('<hr/>')
        } else {
            pages = html.split('<h2>')
        }
        var a_pages = []
        var pagePath = unitPath.replace(".x.html", '')
        for (let i = 1; i < pages.length; i++) {
            // if this is not the 1st page of the unit then remove .x.html from filename and add /pageNumber
            if (i == 1) {
              pagePathExt = ".x.html"
            } else {
              pagePathExt = "/" + i.toString()
            }
            pageText = stripHtml(pages[i])
            pageTextSize += pageText.length
            a_pages.push({"pagePath": pagePath + pagePathExt, "pageText": pageText})
        }
        if (pageTextSize > 80000) {
          console.log('page size over max for:' + path)
        }
        return a_pages
        break;

      case 'guide':
        // otherwise it is a guide or volume page
        if (year < 2015) {
          return stripHtml(html.split('</h4>')[1].trim())
        } else {
          // if it has a <main> section it is a 2015 or newer
          return stripHtml(html
              .split('<main>')[1]
              .split('</main>')[0]
              .trim())
        }
        break;

      case 'volume':
      case 'page':
        text = stripHtml(html)
        if (text.length > 118000) {
          console.log(path + ' filesize over 120k max - file not sent to Algolia index')
          return ''
        } else {
          return text
        }
    }
  }
