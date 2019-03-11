import React from 'react'
// import emergence from 'emergence.js'

import Navi from 'components/Navi/nav'
import Footer from 'components/Footer/footer'
import Logo from 'components/Logo'
import Search from 'components/Search'
import { siteMetadata } from '../../../gatsby-config'

import 'prismjs/themes/prism.css'
// import 'scss/gatstrap.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import './newStyle.css'

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
        <header>
          <Logo />
          {/* <Search /> */}
          <Navi />
        </header>
        <div className="container py-3">{children}</div>
        <Footer />
      </div>
    )
  }
}

export default Layout
