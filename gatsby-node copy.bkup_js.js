const each = require('lodash/each')
const Promise = require('bluebird')
const path = require('path')
const PostTemplate = path.resolve('./src/templates/index.js')
const UnitTemplate = path.resolve('./src/templates/Units/index.js')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allFile(filter: { extension: { regex: "/md|js/" } }, limit: 1000) {
              edges {
                node {
                  id
                  name: sourceInstanceName
                  path: absolutePath
                  remark: childMarkdownRemark {
                    id
                    html
                    frontmatter {
                      contentType
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
          console.log(errors)
          reject(errors)
        }

        const items = data.allFile.edges

        // Create unit pages.
        const units = items.filter(({ node }) => /units/.test(node.name))
        each(units, ({ node }) => {
          if (!node.remark) return
          console.log('-----units----- ' + node.remark.frontmatter.contentType)
          const { path } = node.remark.frontmatter
          var pathSplit = path.split('/')
          var basename = pathSplit.pop()
          pathSplit[2] = 'units'
          const navPath = pathSplit.join('/') + '/' + basename
          const volPath =
            pathSplit.join('/') +
            '/' +
            basename.split('.')[0] +
            '.' +
            basename.split('.')[1] +
            '.' +
            'preface.x.html'
          var i = 0
          var pageCount = 1
          if (path.split('/')[2] == 'units') {
            pageCount = getPageCount(path, node.remark.html) + 1
            i = 1
          }
          var pagePath = path
          for (; i < pageCount; i++) {
            if (i > 1) {
              pagePath = path + '/' + i.toString()
            }
            console.log(pagePath)
            console.log(typeof pagePath)
            createPage({
              path: pagePath,
              component: UnitTemplate,
              context: {
                pageIndex: i,
                navPath: navPath, //`/curriculum/units/1998/1/98.01.01.x.html`,   //`${String(unitNavItems[1].path)}`,
                pagePath: path, //`/curriculum/units/1998/1/98.01.01.x.html`,  //`${String(node.frontmatter.path)}`,
                volPath: volPath, //`/curriculum/units/1998/1/98.01.preface.x.html`
              },
            })
          }
        })

        // // Create blog posts.
        // const posts = items.filter(({ node }) => /posts/.test(node.name))
        // each(posts, ({ node }) => {
        //   if (!node.remark) return
        //   const { path } = node.remark.frontmatter
        //   createPage({
        //     path,
        //     component: PostTemplate,
        //   })
        // })

        // Create pages.
        const pages = items.filter(({ node }) => /page/.test(node.name))
        each(pages, ({ node }) => {
          if (!node.remark) return
          const { name } = path.parse(node.path)
          const PageTemplate = path.resolve(node.path)
          createPage({
            path: name,
            component: PageTemplate,
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
      let items = s.split('<h1>')
      if (items.length < 2) {
        return 1
      }
      return items.length
    }
  }
  return 1
}
