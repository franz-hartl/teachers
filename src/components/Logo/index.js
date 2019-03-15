import React from 'react'
import { Link } from 'gatsby'
import logo from 'components/images/NHTI-logo.png'

const Logo = () => (
  <div className="site-branding mb-3 container">
    <Link className="logolink" to="/">
      <h1 className="offscreen">The Yale-New Haven Teachers Institute</h1>
      <img src={logo} alt="Yale New Haven Teacher Institute Logo" />
    </Link>
  </div>
)

export default Logo
