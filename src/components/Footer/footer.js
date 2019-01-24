import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer className="mt-3">
    <div className="footer-region container p-4 mt-2">
      <div className="row">
        <div className="col-sm-5 .footer-menu-block mb-3">
          <label>Resources</label>
          <div className="footer-menu resources-menu">
            <div className="ft-menu-list">
              <Link to="curriculum">Curricular Resources</Link>
            </div>
            <div className="ft-menu-list">
              <Link to="/">Timeline</Link>
            </div>
            <div className="ft-menu-list">
              <Link to="brochures">Reports and Evaluation</Link>
            </div>
            <div className="ft-menu-list">
              <Link to="/">About the Institute</Link>
            </div>
            <div className="ft-menu-list">
              <Link to="/">Publications</Link>
            </div>
            <div className="ft-menu-list">
              <Link to="/">Site Map</Link>
            </div>
            <div className="ft-menu-list">
              <Link to="/">Event Proceedings</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-5 .footer-menu-block">
          <label>Feedback</label>
          <div className="footer-menu">
            <div className="ft-menu-list">
              <Link to="/">Guestbook</Link>
            </div>
            <div className="ft-menu-list">
              <Link to="brochures/A1/2019-YNHTI-Annual-Brochure.pdf">
                Participate
              </Link>
            </div>
            <div className="ft-menu-list">
              <Link to="/">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">
        <a
          target="_blank"
          href="https:/usability.yale.edu/web-accessibility/accessibility-yale"
        >
          {' '}
          Accessibility at Yale
        </a>{' '}
        &middot; <Link to="terms">Terms of Use</Link> &copy;{' '}
        {new Date().getFullYear()} by the Yale-New Haven Teachers Institute
      </p>
    </div>
  </footer>
)

export default Footer
