import React from "react";
import HeroPage from "../../_components/HeroPage";
import { fetchPortfolioList } from "@/lib/actions/portfolio.action";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";

export const metadata = {
    title: 'Works',
  }

const Page = async ({ searchParams }) => {
  const portfolio = await fetchPortfolioList({
    searchString: searchParams.q,
    pageNumber: searchParams?.page ? searchParams.page : 1,
    pageSize: 10,
  });

  return (
    <>
      <HeroPage title={"Website"} image={"/images/works_banner.png"} />
      <section className="fst_serv">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4 py-10">
          <h2 className="h2 text-center mb-4">Our Portfolio</h2>

          <ul className="flex items-center justify-center gap-2 mt-5 mb-10 port_mnu">
            <li>
              <Link href="/works/website">
                <span className="active">Website</span>
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
                <span>Other Works</span>
              </Link>
            </li>
          </ul>

          <div className="flex flex-wrap">
            {portfolio.portfolio &&
              portfolio.portfolio.length > 0 &&
              portfolio.portfolio.map((item, index) => (
                <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-3">
                  <div className="mix2 category-1">
                    <a href={item.linkUrl} className="pls" target="_blank">
                      {" "}
                      <Image
                        src={`/assets/images/${item?.image}`}
                        alt={item.title}
                        width={852}
                        height={852}
                      />
                    </a>
                    <div className="hover_port">
                      <div>
                        <h2>{item.category.title}</h2>
                        <p>
                          <a href={item.linkUrl}>{item.title}</a>
                        </p>
                      </div>
                      <a href={item.linkUrl} className="pls" target="_blank">
                        <FaPlus size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
