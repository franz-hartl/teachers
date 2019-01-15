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
    <div
      dangerouslySetInnerHTML={{
        __html:
          '<span className="d-sm-inline-block" id="siteSearch"> <gcse:search defaulttorefinement /></span>',
      }}
    />
  </div>
)

export default Search
