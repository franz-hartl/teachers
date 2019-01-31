import React from 'react'
import Layout from 'src/components'

const Page = ({ data }) => (
  <div dangerouslySetInnerHTML={{ __html: data.post.html }} />
)
export default Page
