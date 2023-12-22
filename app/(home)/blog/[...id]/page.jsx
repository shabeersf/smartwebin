
import React from "react";
import HeroPage from "@/app/(home)/_components/HeroPage";
import Image from "next/image";
import Link from "next/link";
import {
  fetchBlog,
  fetchBlogListWithoutPagination,
} from "@/lib/actions/blog.action";
import parse from "html-react-parser";
import Head from "next/head";

const Page = async ({ params }) => {
  const id = params.id[1];

  const result = await fetchBlog(id);

  const blogsData = await fetchBlogListWithoutPagination(id);

  return (
    <>
      <Head>
        <title>Apple</title>
      </Head>
      <HeroPage title={"Blog Details"} image={"/images/blog_banner.png"} />
      <section className="fst_serv blog_details ">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4 py-10">

          <div className="flex flex-wrap cus_crm">
            <div className="lg:w-9/12 md:w-8/12 md:pr-8">
              <h1>{result.title}</h1>
              <p className="per">
                {new Date(result.date).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <div className="det_image">
                <Image
                  width={922}
                  height={528}
                  src={`/assets/images/${result.image}`}
                  alt="detailimage"
                  title="detailimage"
                />
              </div>
              <p></p>

              <div>{parse(result.description)}</div>
            </div>
            <div className="lg:w-3/12 md:w-4/12 md:pr-4">
              <div className="sidebar-recent-news">
                <h4>Popular Posts</h4>
                <ul>
                  {blogsData.blog?.map((blog) => {
                    let slug = blog.title.toLowerCase();

                    // Replace spaces with dashes
                    slug = slug.replace(/\s+/g, "-");

                    // Remove special characters using regular expression
                    slug = slug.replace(/[^\w\-]+/g, "");

                    // Truncate the slug to a maximum of 60 characters
                    slug = slug.substring(0, 60);

                    // Remove trailing dashes, if any
                    slug = slug.replace(/-+$/, "");
                    return (
                      <li className="clearfix border-b border-b-slate-200 mb-2 pb-2">
                        <Link
                          href={`/blog/${slug}/${blog._id}`}
                          className="tran3s"
                        >
                          <Image
                            width={100}
                            height={70}
                            className="max-h-[80px] object-contain"
                            src={`/assets/images/${blog.image}`}
                            alt="blog"
                          />
                        </Link>
                        <div className="post">
                          <h6 className="text-sm font-semibold">
                            <Link href={`/blog/${slug}/${blog._id}`} className="tran3s">
                              {blog.title}
                            </Link>
                          </h6>
                          <span className="text-xs text-gray-500">
                            {new Date(blog.date).toLocaleDateString("en-GB", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
export async function generateMetadata({ params }) {
  const id = params.id[1];

  const result = await fetchBlog(id);
  return {
    title: result.title,
  }
}