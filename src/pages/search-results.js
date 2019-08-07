import React from 'react'
import Layout from 'components/layout'

class searchResults extends React.Component {

    componentDidMount(){
        (function() {
          // var cx = '016355800077448512330:zmpjr4mxpm4';
          var cx = '014177378021644155909:u_pjrcixyzi';
          var gcse = document.createElement('script');
          gcse.type = 'text/javascript';
          gcse.async = true;
          gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
              '//cse.google.com/cse.js?cx=' + cx;
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(gcse, s);
        })();
      }

render() {

    return (
    <Layout>
      <main>
      <div className="main_content m-4">
        <h1 className="page-title mb-3">Search Results</h1>
        <script async src="https://cse.google.com/cse.js?cx=014177378021644155909:u_pjrcixyzi"></script>
<div class="gcse-searchresults-only" data-queryParameterName="search"></div> 
      </div>
      </main>
      </Layout>
    )
  }
}

export default searchResults