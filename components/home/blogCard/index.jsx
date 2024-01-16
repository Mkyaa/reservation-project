'use client'
import React, { useEffect, useState } from 'react'

//styles
import styles from './index.module.css'

//links
import Link from 'next/link'

//api
import { getAllBlogs } from '@/api/blogs'

const BlogCard = () => {

    //state
    const [blogs, setBlogs] = useState({})
    const [loading, setLoading] = useState(true)

    //api
    const getBlogData = async () => {
        setLoading(true)
        try {
            const res = await getAllBlogs()
            setBlogs(res)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    //get blog data
    useEffect(() => {
        getBlogData()
    }, [])


    return (
        <div className={styles.blogCardContainer}>
            <div className={styles.blogCardContent}>
                <div className={styles.blogCardTitle}>
                    <h1>Blog</h1>
                </div>
                <div className={styles.blogCardPostContainer}>
                    {
                        !loading && blogs && blogs.map((blog, index) => (
                            <div className={styles.blogCard} key={index}>
                                <Link href={`/blogs/${blog.district}`} />
                                <div className={styles.blogCardImage}>
                                    <img src={blog.posts[0].img} alt="blog card image" />
                                </div>
                                <div className={styles.blogCardPostTitle}>
                                    <h1>{blog.posts[0].title}</h1>
                                </div>
                                <div className={styles.blogCardPostContent}>
                                    <p>{blog.posts[0].content.slice(0, 210) + '...'}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogCard