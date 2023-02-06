// const queries = require('./src/utils/algolia')
// require('dotenv').config()
const fs = require('fs');
const gracefulFS = require('graceful-fs');
const path = require('path');
gracefulFS.gracefulify(fs);
module.exports = {
  siteMetadata: {
    title: "Yale-New Haven Teachers Institute",
    description: "Yale New Haven Teachers Intitute Site",
    siteUrl: 'http://teachersinstitute.yale.edu/',
    author: '',
    twitter: ''
  },
  pathPrefix: '/',
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-8762042-2",
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    'gatsby-plugin-zopfli',
    // {
    //   resolve: 'gatsby-plugin-algolia',
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     queries,
    //     chunkSize: 10000, // default: 1000
    //   },
    // },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          components: path.resolve(__dirname, 'src/components'),
        },
        extensions: [],
      }
    },
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
        ],
      },

    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',
    // 'gatsby-plugin-meta-redirect',
  ],
}
