"use client";
import { fetchPortfolioBlog } from "@/lib/actions/other.action";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogFront = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const blogWorks = async () => {
      const mob = await fetchPortfolioBlog();
      setBlog(mob);
    };
    blogWorks();
  }, []);
  return (
    <>
      <section className="py-8 blog_sec">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4">
          <div
            className="text-center heading_sec mb-6"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <h2 className="h2 text-center">Our Blog</h2>
            <p className="p mt-4 text-black text-center">
              Some of Our Latest Blogs{" "}
            </p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
            {blog.blog?.map((blog) => (
              <BlogCard key={blog.title} blog={blog} />
            ))}
          </div>
          <div
            className="text-center flex justify-center"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <Link
              href="/blog"
              className="block w-fit red-thm-btn px-10 py-4 rounded-lg text-white text-md font-semibold mt-10"
            >
              <span>
                View More <i className="fas fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-2 req_sec red-thm-btn">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4">
          <div
            className="flex flex-wrap md:justify-between justify-center items-center gap-4"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <h3 className="text-white text-md font-semibold">
              Please send your requirement and we will come up with right
              solution.{" "}
            </h3>
            <Link
              href="/contact-us"
              className="block md:w-auto sm:w-36 w-fit bg-white lg:px-10 px-4 py-2.5 rounded-lg text-black text-md font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogFront;
