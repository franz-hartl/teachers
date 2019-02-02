const each = require('lodash/each')
const Promise = require('bluebird')
const path = require('path')
const VolumeTemplate = path.resolve('./src/templates/Volume/index.js')
const UnitTemplate = path.resolve('./src/templates/Units/index.js')
const PageTemplate = path.resolve('./src/templates/Page/index.js')

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            unitPages: allMarkdownRemark(
              filter: { frontmatter: { layout: { eq: "unit" } } }
            ) {
              edges {
                node {
                  html
                  fileAbsolutePath
                  frontmatter {
                    path
                    layout
                  }
                }
              }
            }

            nonUnitPages: allMarkdownRemark(
              filter: { frontmatter: { layout: { ne: "unit" } } }
            ) {
              edges {
                node {
                  fileAbsolutePath
                  html
                  frontmatter {
                    title
                    path
                    layout
                  }
                }
              }
            }

            allJsFile: allFile(
              filter: { extension: { regex: "/js/" } }
              limit: 1000
            ) {
              edges {
                node {
                  id
                  name: sourceInstanceName
                  path: absolutePath
                  remark: childMarkdownRemark {
                    id
                    frontmatter {
                      layout
                      path
                    }
                  }
                }
              }
            }
          }
        `
      ).then(({ errors, data }) => {
        if (errors) {
          // console.log(errors)
          reject(errors)
        }

        //        const items = data.allJsFile.edges
        const unitItems = data.unitPages.edges
        const nonUnitItems = data.nonUnitPages.edges

        //=======================
        // Create unit pages.
        //=======================
        //        const units = unitItems.filter(({ node }) => /units/.test(node.name))
        each(unitItems, ({ node }) => {
          //          if (!node.remark) return
          // get path  eg: /curriculum/units/1998/1/98.01.01.x.html
          //          const { path } = node.frontmatter
          var pathSplit = node.frontmatter.path.split('/')
          var basename = pathSplit.pop()
          // console.log('basename: ' + basename)

          if (pathSplit[2] == 'guides') {
            isGuidesPage = true
            pathSplit[2] = 'units'
          } else {
            isGuidesPage = false
          }
          const navPathDir = pathSplit.join('/') + '/'
          const navPath = navPathDir + basename
          const volPath =
            navPathDir +
            basename.split('.')[0] +
            '.' +
            basename.split('.')[1] +
            '.preface.x.html'

          var i = 0
          var pageCount = 1
          // if it is a units page (not a guide page)
          //   then get determine the number of pages to create
          if (!isGuidesPage) {
            pageCount = getPageCount(node.frontmatter.path, node.html) + 1
            i = 1
          }

          var pagePath = ''
          for (; i < pageCount; i++) {
            if (i > 1) {
              pagePath = node.frontmatter.path.split('.x.html')[0]
            } else {
              pagePath = node.frontmatter.path
            }
            createPage({
              path: path.resolve(pagePath, i < 2 ? '' : i.toString()),
              component: UnitTemplate,
              context: {
                pageIndex: i,
                navPath: navPath,
                pagePath: path.resolve(`${String(node.frontmatter.path)}`),
                volPath: volPath,
              },
            })
          }
        })

        //=======================
        // Create Volume pages.
        //=======================
        const volumeItems = nonUnitItems.filter(({ node }) =>
          /volume/.test(node.frontmatter.layout)
        )
        each(volumeItems, ({ node }) => {
          // if (!node.remark) return
          const pagePath = node.frontmatter.path
          const navPath = path.dirname(pagePath) + '/'
          // console.log(navPath)
          createPage({
            path: pagePath, //.resolve(`${String(node.frontmatter.path)}`),
            component: VolumeTemplate,
            context: {
              navPath: navPath, //`/curriculum/units/1998/1/98.01.preface.x.html`,
            },
          })
          if (/preface.x.html$/.test(pagePath)) {
            createRedirect({ fromPath: navPath, toPath: pagePath })
          }
        })

        //=======================
        // Create default pages.
        //=======================
        const pages = nonUnitItems.filter(({ node }) =>
          /page/.test(node.frontmatter.layout)
        )
        each(pages, ({ node }) => {
          // if (!node.remark) return
          const pagePath = path.resolve(node.frontmatter.path)
          // const PageTemplate = path.resolve(node.frontmatter.path)
          createPage({
            path: pagePath,
            component: PageTemplate,
            context: {
              node: node,
            },
          })
        })
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  })
}

const getPageCount = (pagePath, html) => {
  let year = parseInt(pagePath.split('/')[3])

  // unit page if index is > 0
  if (pagePath.split('/')[2] == 'units') {
    if (year < 2015) {
      let i = html.indexOf('<ul>')
      let s = html.substring(html.indexOf('<li>', i) + 4, html.indexOf('</ul>'))
      let items = s.split('<li>')
      if (items.length < 2) {
        return 1
      }
      // unit page < 2015
      return items.length
    } else {
      // unit page >= 2015
      let s = html.substring(html.indexOf('<main>'))
      // check if page has a narrative/intro section at the top of the page with no <h1> title
      var narrativePage = 0
      if (html.indexOf('<h1>') > html.indexOf('<', 5)) {
        // console.log(
        //   '*** Page has narrative/intro with no <h1> title tag ***  -  ' +
        //     pagePath
        // )
        narrativePage = 1
      }
      let items = s.split('<h1>')
      let pageCount = 0
      if (items.length < 2) {
        return 1 + narrativePage
      }
      return items.length - 1 + narrativePage
    }
  }
  return 1
}
