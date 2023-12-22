import React from "react";
import HeroPage from "../../_components/HeroPage";
import { fetchOtherList } from "@/lib/actions/other.action";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";

export const metadata = {
    title: 'Other Works',
  }

const Page = async ({ searchParams }) => {
  const other = await fetchOtherList({
    searchString: searchParams.q,
    pageNumber: searchParams?.page ? searchParams.page : 1,
    pageSize: 10,
  });

  return (
    <>
      <HeroPage title={"Other Works"} image={"../images/works_banner.png"} />
      <section className="fst_serv">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4 py-10">
          <h2 className="h2 text-center mb-4">Other</h2>

          <ul className="flex items-center justify-center gap-2 mt-5 mb-10 port_mnu">
            <li>
              <Link href="/works/website">
                <span>Website</span>
              </Link>
            </li>
            <li>
              <Link href="/works/mobile-app-development">
                <span>Mobile App</span>
              </Link>
            </li>
            <li>
              <Link href="/works/print">
                <span>Print</span>
              </Link>
            </li>
            <li>
              <Link href="/works/other">
                <span className="active">Other Works</span>
              </Link>
            </li>
          </ul>

          <div className="flex flex-wrap">
            {other.other &&
              other.other.length > 0 &&
              other.other.map((item, index) => {
                // Convert title to lowercase
                let slug = item.title.toLowerCase();

                // Replace spaces with dashes
                slug = slug.replace(/\s+/g, "-");

                // Remove special characters using regular expression
                slug = slug.replace(/[^\w\-]+/g, "");

                // Truncate the slug to a maximum of 60 characters
                slug = slug.substring(0, 60);

                // Remove trailing dashes, if any
                slug = slug.replace(/-+$/, "");

                return (
                  <Link
                    href={`/works/other/${slug}/${item._id}`}
                    className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-3"
                  >
                    <div className="mix2 category-1">
                      <Image
                        src={`/assets/images/${item?.cover_img}`}
                        alt={item.title}
                        width={522}
                        height={766}
                      />
                      <div className="hover_port">
                        <div>
                          <h2>{item.title}</h2>
                        </div>
                        <Link
                          href={`/works/other/${slug}/${item._id}`}
                          className="pls2"
                        >
                          <FaPlus size={16} />
                        </Link>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
