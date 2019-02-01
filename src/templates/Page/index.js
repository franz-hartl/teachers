import React from 'react'
import Layout from 'components/Layout'

class PageTemplate extends React.Component {
  render() {
    const { html } = this.props.pageContext.node
    const { title } = this.props.pageContext.node.frontmatter
    return (
      <Layout>
          <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    )
  }
}

export default PageTemplate
