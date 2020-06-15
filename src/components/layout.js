import React from 'react'

import Navi from 'components/Navi/nav'
import Footer from 'components/Footer/footer'
import Logo from 'components/Logo'
import Index from 'components/react-icons/backtoTop.js'
import Search from 'components/Search/index.js'
import Favicon from 'react-favicon';
import {Helmet} from 'react-helmet'

// const searchIndices = [
//   { name: `dev_teachers_units`, title: `Units`, hitComp: `PageHit` }
// ] 

class Layout extends React.Component {
  render() {
    const { children, title, path } = this.props

    return (
      <div>
        <HelmetComponent title={title} path={path} />

        <Favicon url="../images/NHTI-logo-icon.png" />
        <div className="container"><a className="sr-only sr-only-focusable" href="#content">Skip to main content</a></div>
        <header className="container">
          <div className="row">
          <Logo />
          {/* <Search className="search-zone" collapse indices={searchIndices} /> */}
          <Search />
          </div>
        </header>
        <div className="zone-menu-wrapper"><Navi /></div>
        <div tabIndex="-1" className="container py-3" id="content">{children}</div>
        <Footer />
        <Index />
      </div>
    )
  }
}

export default Layout

const HelmetComponent = ({ title, path }) => {
  if (path && title) {
    var pathArry = path.replace(/^\/|\/$/g, '').split('/')
    if (pathArry.length > 4 && pathArry[0] == 'curriculum') {
      const year = pathArry[2]
      const formattedDate = year + "-09"
      return (
        <Helmet>
          <title>{title ? title : "Yale-New Haven Teachers Institute"}</title>
          <meta itemprop="datePublished" content={formattedDate} />
        </Helmet>
      )
    }
  }
  return (
    <Helmet>
      <title>{title ? title : "Yale-New Haven Teachers Institute"}</title>
    </Helmet>
  )
}