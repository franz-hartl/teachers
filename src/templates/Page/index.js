import React from 'react'
import './style.scss'
import Layout from 'components/Layout'

class PageTemplate extends React.Component {
  render() {
    const { html } = this.props.pageContext.node
    const { title } = this.props.pageContext.node.frontmatter
  return (
      <Layout>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    )
  }
}

export default PageTemplate
