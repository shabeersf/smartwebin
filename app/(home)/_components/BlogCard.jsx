import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendarDays, FaUser } from "react-icons/fa6";
const BlogCard = ({ blog }) => {
  
        // Convert title to lowercase
        let slug = blog.title.toLowerCase();
      
        // Replace spaces with dashes
        slug = slug.replace(/\s+/g, '-');
      
        // Remove special characters using regular expression
        slug = slug.replace(/[^\w\-]+/g, '');
      
        // Truncate the slug to a maximum of 60 characters
        slug = slug.substring(0, 60);
      
        // Remove trailing dashes, if any
        slug = slug.replace(/-+$/, '');
    
  return (
    <div
      className="blog_col aos-init aos-animate"
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-delay="100"
    >
      <div className="blog_img">
        <Link href={`/blog/${slug}/${blog._id}`}>
          <Image
            width={500}
            height={250}
            src={`/assets/images/${blog.image}`}
            alt={blog.title}
          />
        </Link>
      </div>
      <div className="blog_title">
        <h2>
          <Link href={`/blog/${slug}/${blog._id}`}>{blog.title}</Link>
        </h2>
        <p className="pl_15">{blog.title}</p>
        <div className="flex justify-between pl_15">
          <span className="flex items-center gap-1">
            <FaCalendarDays />
            {new Date(blog.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <FaUser />
            Admin
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
