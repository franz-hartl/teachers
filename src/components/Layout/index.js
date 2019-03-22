import React from 'react'

import Navi from 'components/Navi/nav'
import Footer from 'components/Footer/footer'
import Logo from 'components/Logo'
import Search from 'components/Search'
import { siteMetadata } from '../../../gatsby-config'

import 'prismjs/themes/prism.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './newStyle.css'
import { Link } from 'gatsby'
import Index from 'components/react-icons/backtoTop.js'

class Layout extends React.Component {
  // componentDidMount() {
  //   emergence.init()
  // }

  // componentDidUpdate() {
  //   emergence.init()
  // }

  render() {
    const { children } = this.props
    return (
      <div>
        <div className="container"><a className="sr-only sr-only-focusable" href="#content">Skip to main content</a></div>
        <header>
          <Logo />
          {/* <Search /> */}
          <Navi />
        </header>
        <div className="container py-3" id="content">{children}</div>
        <Footer />
        <Index />
      </div>
    )
  }
}

export default Layout
