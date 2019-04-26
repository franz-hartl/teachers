import React from 'react'

class Search extends React.Component{

  componentDidMount(){
    (function() {
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

  render(){
    return (
  <div className="search-block d-inline-flex col-md-5 ml-lg-3">
    <span
      className="d-sm-inline-block"
      id="siteSearch"
      dangerouslySetInnerHTML={{
        __html: `<gcse:search defaultToRefinement=""></gcse:search>`,
      }}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `$(document).ready(function(){
        $('#siteSearchOptions option').click(function() {
          $('#siteSearch *').remove();
          $('.gssb_c').remove();
          var refinement = $(this).attr('data-refinement');
          $('.selectedSiteSearchOption').removeClass('selectedSiteSearchOption');
          $(this).addClass('selectedSiteSearchOption');
          $('#siteSearch').append('<gcse:search defaultToRefinement="' + refinement + '"></gcse:search>');
          newSiteSearch();
        });
        $('#defaultRefinement').trigger('click');
        $('#defaultRefinement').trigger('click');`,
      }}
    />
  </div>
)}
    }

export default Search
