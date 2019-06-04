const queries = require('./src/utils/algolia')

require('dotenv').config()


module.exports = {
  siteMetadata: {
    title: "Teacher's Institute",
    description: "Yale New Haven Teacher's Intitute Site",
    siteUrl: 'https://teachersinstitute.yale.edu',
    author: '',
    twitter: '',
    adsense: '',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-plugin-zopfli'
    },
    // {
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     queries,
    //     chunkSize: 10000, // default: 1000
    //   },
    // },  
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/curriculum/`,
        name: 'units',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/`,
        name: 'content',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap2.xml`,
        sitemapSize:1000,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [`\/curriculum\/units\/*`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
          // CommonMark mode (default: true)
          commonmark: false,
          // Footnotes mode (default: true)
          footnotes: false,
          // Pedantic mode (default: true)
          pedantic: false,
          // GitHub Flavored Markdown mode (default: true)
          gfm: false,
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 1.0725rem;',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatstrap',
        short_name: 'Gatstrap',
        description: 'Gatsby starter for bootstrap a blog',
        homepage_url: '/',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#673ab7',
        display: 'standalone',
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    `gatsby-plugin-meta-redirect`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'test-teachers-institute',
          acl: ''
      },
    },
  ],
}
