import React from 'react'
import HeroPage from '../_components/HeroPage'
import BlogCard from '../_components/BlogCard'
import { fetchBlogListWithoutPagination } from '@/lib/actions/blog.action'

export const metadata = {
    title: 'Blog',
  }
const page = async() => {
    const blogs = await fetchBlogListWithoutPagination()
    return (
        <>
            <HeroPage title={'Blog'} image={'/images/blog_banner.png'} />
            <section className="fst_serv">

                <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4 py-10">
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">

                        {
                            blogs.blog?.map((blog) => (
                                <BlogCard key={blog.title} blog={blog} />
                            ))
                        }





                    </div>

                </div>

            </section>
        </>
    )
}

export default page