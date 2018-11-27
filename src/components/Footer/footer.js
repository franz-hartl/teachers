import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
    <footer class="mt-3" >
      <div class="footer-region container p-4 mt-2">
       <div class="row">
        <div class="col-sm-5 .footer-menu-block mb-3">
          <label>Resources</label>
          <div class="footer-menu">
            <div class="ft-menu-list"><Link to="/">Curricular Resources</Link></div>
            <div class="ft-menu-list"><Link to="/">Brochures and Reports</Link></div>
            <div class="ft-menu-list"><Link to="/">Publications</Link></div>
            <div class="ft-menu-list"><Link to="/">Event Proceedings</Link></div>
            <div class="ft-menu-list"><Link to="/">About the Institute</Link></div>
            <div class="ft-menu-list"><Link to="/">Centers</Link></div>
            <div class="ft-menu-list"><Link to="/">Site Map</Link></div>
          </div>
        </div>
        <div class="col-sm-5 .footer-menu-block">
          <label>Feedback</label>
          <div class="footer-menu">
            <div class="ft-menu-list"><Link to="/">Join the Institue</Link></div>
            <div class="ft-menu-list"><Link to="/">Feedback Survery</Link></div>
            <div class="ft-menu-list"><Link to="/">Contact Us</Link></div>
          </div>
        </div>
        </div>
        <p class="copyright"><a class="ft-menu-list"  href="https://usability.yale.edu/web-accessibility/accessibility-yale">Accessibility at Yale &middot; Terms of Use</a> &copy; 2018 by the Yale-New Haven Teachers Institute</p>
      </div>
  </footer>
)

export default Footer
