import React from 'react'
import { Link } from 'gatsby'
import logo from 'components/images/NHTI-logo.png'

const Logo = () => (
  <div class="site-branding mb-3">
    <Link to="/#">
      <h1 class="offscreen">The Yale-New Haven Teachers Institute</h1>
      <img src={logo} />
    </Link>
  </div>
)

export default Logo
