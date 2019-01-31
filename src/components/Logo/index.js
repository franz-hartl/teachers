import React from 'react'
import { Link } from 'gatsby'
import logo from 'components/images/YNHTI-logo---web2.jpg'

const Logo = () => (
  <div className="site-branding mb-3 container">
    <Link to="/#">
      <h1 className="offscreen">The Yale-New Haven Teachers Institute</h1>
      <img src={logo} />
    </Link>
  </div>
)

export default Logo
