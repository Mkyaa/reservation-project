'use client'
import React, { useEffect, useState } from 'react'

//styles
import styles from './index.module.css'

//get data
import { getBlog } from '@/api/blogs'

const BlogContainer = ({ params }) => {

    //state
    const [blog, setBlog] = useState({})
    const [loading, setLoading] = useState(true)

    //api
    const getBlogData = async () => {
        setLoading(true)
        try {
            const res = await getBlog(params)
            setBlog(res)
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
        <div className={styles.blogContainer}>
            {
                loading
                    ? <p>loading...</p>
                    : (
                        <div className={styles.blogContent}>
                            <div className={styles.blogPath}>
                                <p>
                                    {
                                        blog?.place
                                    }
                                </p>
                            </div>

                            <div className={styles.blogBody}>
                                {
                                    blog && 
                                    blog[0].posts.map((post, index) => (
                                        index === 0 ? (
                                            <div className={styles.blogPost} key={index}>
                                                <div className={styles.blogPostHeadImage}>
                                                    <img src={post.img} alt="blog post image" />
                                                    <div className={styles.blogHeadTitle}>
                                                        <h1>{post.title}</h1>
                                                    </div>
                                                </div>
                                                <div className={styles.blogHeadPostContent}>
                                                    <p>{post.content}</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className={styles.blogPost} key={index}>
                                                <div className={styles.blogPostImage}>
                                                    <img src={post.img} alt="blog post image" />
                                                </div>
                                                <div className={styles.blogHead}>
                                                    <h1>{post.title}</h1>
                                                </div>
                                                <div className={styles.blogPostContent}>
                                                    <p>{post.content}</p>
                                                </div>
                                            </div>
                                        )
                                    ))
                                }
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default BlogContainer