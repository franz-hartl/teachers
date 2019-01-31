import React from 'react'
import './style.scss'
import Layout from 'components/Layout'

class PageTemplate extends React.Component {
  render() {
    const { html } = this.props.pageContext.node
    const { title } = this.props.pageContext.node.frontmatter
  return (
    <div className="container">
      <Layout>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    </div>
    )
  }
}

export default PageTemplate
