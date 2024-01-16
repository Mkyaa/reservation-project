import React from 'react'

//components
import BlogContainer from '@/container/blogs'

const Blog = ({params}) => {
  return (
    <BlogContainer params={params.place} />
  )
}

export default Blog