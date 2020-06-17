import React from 'react'
import Layout from 'components/layout'

class searchResults extends React.Component {

render() {

    return (
    <Layout title="Search Results">
      <main>
      <div className="main_content m-4">
        <h1 className="page-title mb-3">Search Results</h1>
        <p>By selecting a tab below you can view the results of your search for the entire site, for curriculum units, for the guide to units, or for both guide entries and units. 
        You then can sort the results by relevance or by the date units were written.
        </p>
        <span dangerouslySetInnerHTML={{
        __html: `<script async src="https://cse.google.com/cse.js?cx=014177378021644155909:u_pjrcixyzi"></script><div class="gcse-searchresults-only" data-queryParameterName="q"></div>`
      }}></span>
      </div>
      </main>
      </Layout>
    )
  }
}

export default searchResults