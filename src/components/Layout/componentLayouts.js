import React from 'react'
import emergence from 'emergence.js'

import Navi from 'components/Navi/nav0'
import Footer from 'components/Footer/footer'
import Logo from 'components/Logo'
import Search from 'components/Search'
import { siteMetadata } from '../../../gatsby-config'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import './newStyle.css'
// import NavControls from 'components/Nav-controls/index'
import Pdf_icons from 'components/Pdf-icons'
import Table_content from 'components/Table-contents/Table-content'
import Table_content_author from 'components/Table-contents/Table-content-author'
import Breadcrumb from 'components/Breadcrumb/breadcrumb'
import 'font-awesome/css/font-awesome.css'

class Layout extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { children } = this.props
    return (
      <div class="container">
        <Logo />
        <Search />
        <Navi title={siteMetadata.title} {...this.props} />
        {/* <Breadcrumb /> */}
        <br />
        <h2>Nav Controls</h2>
        {/* <NavControls /> */}
        <h2>Pdf Icons</h2>
        <Pdf_icons />
        <h2>Table of Contents</h2>
        <Table_content />
        <h2>Author table of Contents</h2>
        <Table_content_author />
        {children}
        <Footer title={siteMetadata.title} author={siteMetadata.author} />
      </div>
    )
  }
}

export default Layout
