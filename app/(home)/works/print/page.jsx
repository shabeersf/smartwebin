import React from "react";
import HeroPage from "../../_components/HeroPage";
import { fetchPrintList } from "@/lib/actions/print.action";
import Image from "next/image";
import Link from "next/link";
import PrintCard from "../../_components/PrintCard";

export const metadata = {
  title: "Print",
};

const Page = async ({ searchParams }) => {
  const print = await fetchPrintList({
    searchString: searchParams.q,
    pageNumber: searchParams?.page ? searchParams.page : 1,
    pageSize: 10,
  });

  return (
    <>
      <HeroPage title={"Print"} image={"/images/works_banner.png"} />
      <section className="fst_serv">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4 py-10">
          <h2 className="h2 text-center mb-4">Print</h2>

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
                <span className="active">Print</span>
              </Link>
            </li>
            <li>
              <Link href="/works/other">
                <span>Other Works</span>
              </Link>
            </li>
          </ul>

          <div className="flex flex-wrap">
            {print.print &&
              print.print.length > 0 &&
              print.print.map((item, index) => {
                return <PrintCard item={item} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
