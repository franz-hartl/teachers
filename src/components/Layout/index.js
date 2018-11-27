import React from 'react'
//import emergence from 'emergence.js'

import Navi from 'components/Navi/nav0'
import Footer from 'components/Footer/footer'
import Logo from 'components/Logo'
import Search from 'components/Search'
import { siteMetadata } from '../../../gatsby-config'

//import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
//import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'
//import '../fonts/YaleNew/'
//import '../fonts/TheSans/'
//import './yale-fonts.css'
import './newStyle.css'
import banner from "components/images/u23.png"


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
      <div class='container'>
        <Logo />
        <Search />
        <Navi title={siteMetadata.title} {...this.props} />

        {location.pathname === '/' ? 
        <div class="banner mb-3"><img src={banner} class="img-fluid" alt="" /></div>
        :
        ''
        }
        {children}
        <Footer title={siteMetadata.title} author={siteMetadata.author} />
      </div>
    )
  }
}

export default Layout
