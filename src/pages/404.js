import React from 'react'
import Layout from 'components/Layout/index'
const path = require('path')

class error404Page extends React.Component {

render() {
    const errorPages = getErrorPage(this.props.errorPage)

    return (
    <Layout>
      <main>
      <div className="main_content m-4">
        <h1 className="page-not-found">Page not found</h1>
        <p>The requested page "{'/' + errorPages.basePath}" could not be found</p>    
      </div>
      </main>
      </Layout>
    )
  }
}

export default error404Page

function getErrorPage(errorPages){
    var urlPath = window.location.href;
    var basePath = path.basename(urlPath);
  
    return{
      basePath : basePath
    }
  }