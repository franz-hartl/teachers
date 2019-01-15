import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class NavControls extends React.Component {
  render() {
    return (
      <Router>
        <div className="content-nav-button">
          <Link
            to="/18.01.01.x"
            className="btn prv-btn btn-primary mr-2 px-4 btn-sm"
            role="button"
            aria-disabled="true"
          >
            <i className="fa fa-arrow-left" /> Previous
          </Link>
          <Link
            to="/18.01.01.x"
            className="btn px-4 btn-primary next-btn btn-sm ml-2"
            role="button"
            aria-pressed="true"
          >
            Next <i className="fa fa-arrow-right" />
          </Link>
          <a
            href="#"
            id="backtotop"
            className="btn px-4 btn-primary backtotop btn-sm ml-2"
            role="button"
            aria-pressed="true"
          >
            {' '}
            Back to Top <i className="fa fa-arrow-up" />
          </a>
          <Route path="/18.01.01.x.app" component={Prev} />
          <Route path="/18.01.02.x" component={Next} />
        </div>
      </Router>
    )
  }
}
function Prev() {
  return (
    <div>
      <Link to={'${match.url}/testprevurl'}> Test Prev Button</Link>

      <Route path={`${match.path}/:topicId`} component={Prev} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  )
}
function Next() {
  return (
    <div>
      <Link to={'${match.url}/testnexturl'}> Test Next Button</Link>
    </div>
  )
}

export default NavControls
