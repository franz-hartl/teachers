import React from 'react'
import Layout from 'components/Layout'
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
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    )
  }
}

export default PageTemplate
