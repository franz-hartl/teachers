import React from 'react'

class Breadcrumb extends React.Component {
  render() {
    return (
      <div className="tr_breadcrumb mt-2">
        <span>
          <a href="/curriculum/index.html">Curricular</a>
        </span>{' '}
        >
        <span>
          <a href=""> 2018 Volume I</a>
        </span>{' '}
        >
        <span>
          <a href=""> Unit 1 (18.01.01)</a>
        </span>{' '}
        ><span> Section 1</span>
      </div>
    )
  }
}

export default Breadcrumb
