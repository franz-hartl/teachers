import React from 'react'
import Layout from 'components/layout'
import { IconContext } from 'react-icons'
import {
  FaArrowRight,
  FaArrowLeft,
  FaAngleLeft,
  FaAngleRight,
  FaDownload,
  FaFilePdf,
  FaPrint,
  FaEnvelope,
} from 'react-icons/fa'

class PageTemplate extends React.Component {
  render() {
    const { html } = this.props.pageContext.node
    const { title } = this.props.pageContext.node.frontmatter

    return (
      <Layout>
        <main><div className="container px-5 region-content" dangerouslySetInnerHTML={{ __html: html }} />
</main>
      </Layout>
    )
  }
}

export default PageTemplate
