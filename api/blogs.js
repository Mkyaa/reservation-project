import axios from 'axios'

//blogs url
const blogsURL = process.env.NEXT_PUBLIC_API_BLOGS_URL

//get all blogs
export const getAllBlogs = async () => {
    const res = await axios.get(blogsURL)
    const blogs = res.data
    return blogs
}

//get filtered blogs
export const getBlog = async (district) => {
    const res = await axios.get(blogsURL)
    const blogs = res.data
    const filteredBlogs = blogs.filter(blog => blog.district === district)
    return filteredBlogs
}

