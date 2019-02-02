import React from 'react'
import Layout from 'components/Layout'
import { IconContext } from 'react-icons'
import {
  FaArrowRight,
  FaArrowLeft,
  FaDrupal,
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
        <IconContext.Provider value={{ color: '#2B50A3', size: '3em' }}>
          <div>
            <FaArrowRight />
            <FaArrowLeft />
            <FaAngleLeft />
            <FaAngleRight />
            <FaEnvelope />
            <FaDownload />
            <FaFilePdf />
            <FaPrint />
          </div>
        </IconContext.Provider>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    )
  }
}

export default PageTemplate
