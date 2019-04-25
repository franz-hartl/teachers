import React from 'react'

const Search = () => (
  <div className="search-block d-inline-flex col-md-5 ml-lg-3">
    <select
      title="search filter"
      className="selectpicker"
      id="siteSearchOptions"
    >
      <option value="Entire Site" data-refinement id="defaultRefinement">
        Entire Site
      </option>
      <option
        value="Curriculum Units and Guides to Units"
        data-refinement="curriculum_units_and_guides_to_units"
      >
        Curricular Resources
      </option>
      <option
        value="Curricular Units Only"
        data-refinement="curriculum_units_only"
      >
        Curricular Units Only
      </option>
      <option value="Guides to Units Only" data-refinement="guides">
        Guides to Units Only
      </option>
    </select>
    <script
      dangerouslySetInnerHTML={{
        __html: ` var newSiteSearch = function() {
    var cx = '014177378021644155909:u_pjrcixyzi';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  };`,
      }}
    />
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
)

export default Search
