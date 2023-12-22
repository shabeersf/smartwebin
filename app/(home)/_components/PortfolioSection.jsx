"use client";
import {
  fetchPortfolioMobile,
  fetchPortfolioOther,
  fetchPortfolioPrint,
  fetchPortfolioWebsite,
} from "@/lib/actions/other.action";
import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPlus,FaArrowRight } from "react-icons/fa6";
import PrintCard from "./PrintCard";

function PortfolioSection() {
  const [activeMenu, setActiveMenu] = useState(1);
  const [otherData, setOtherData] = useState([]);
  const [print, setPrint] = useState([]);
  const [website, setWebsite] = useState([]);
  const [mobile, setMobile] = useState([]);

  useEffect(() => {
    Aos.init();
    const otherWorks = async () => {
      const other = await fetchPortfolioOther();
      setOtherData(other);
    };
    const printWorks = async () => {
      const print = await fetchPortfolioPrint();
      setPrint(print);
    };
    const websiteWorks = async () => {
      const web = await fetchPortfolioWebsite();
      setWebsite(web);
    };
    const mobileWorks = async () => {
      const mob = await fetchPortfolioMobile();
      setMobile(mob);
    };
    otherWorks();
    printWorks();
    websiteWorks();
    mobileWorks();
  }, []);

  const handleChange = (value) => {
    setActiveMenu(value);
  };
  let viewmore;
  if (activeMenu === 1) {
    viewmore="/works/website"
  }
  if (activeMenu === 2) {
    viewmore="/works/mobile-app-development"
  }
  if (activeMenu === 3) {
    viewmore="/works/print"
  }
  if (activeMenu === 4) {
    viewmore="/works/print"
  }

  return (
    <section className="py-8 portfolio_sec">
      <div className="lg:max-w-screen-xl mx-auto xl:px-0 md:px-6 px-4">
        <div
          className="text-center heading_sec mb-6"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <h2 className="h2 text-center">Our Portfolio</h2>
          <p className="p mt-4 text-black text-center">
            As an online agency we did a lot of budget-friendly work and still
            provided the organic service to our clients.
          </p>
        </div>

        <div
          className="controls"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <button
            className={`filter ${activeMenu === 1 ? "active" : ""}`}
            onClick={() => handleChange(1)}
            data-filter=".category-1"
          >
            Website
          </button>
          <button
            className={`filter ${activeMenu === 2 ? "active" : ""}`}
            onClick={() => handleChange(2)}
            data-filter=".category-2"
          >
            Mobile App
          </button>
          <button
            className={`filter ${activeMenu === 3 ? "active" : ""}`}
            onClick={() => handleChange(3)}
            data-filter=".category-3"
          >
            Print
          </button>
          <button
            className={`filter ${activeMenu === 4 ? "active" : ""}`}
            onClick={() => handleChange(4)}
            data-filter=".category-4"
          >
            Other Works
          </button>
        </div>

        <div id="Container">
          {/* Portfolio items go here */}
          {activeMenu === 1 &&
            website.portfolio &&
            website.portfolio.length > 0 &&
            website.portfolio.map((item, index) => (
            <div data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="100" className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-3">
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
                      <a href={item.linkUrl} className="pls pls_hover" target="_blank">
                        <FaPlus size={20} />
                      </a>
                    </div>
                  </div>
                </div>
            ))}
          {activeMenu === 2 &&
            mobile.mobile &&
            mobile.mobile.length > 0 &&
            mobile.mobile.map((item, index) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-delay="100"
                className="mix category-2"
                data-myorder="8"
              >
                <div className="flex items-center justify-between w-full px-6">
                  <div className="w-3/12">
                    <div className="launch_ic">
                      <img src={`/assets/images/${item?.logo}`} />
                    </div>
                  </div>

                  <div className="w-9/12 mx-auto aps_rit_hd pl-4">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <div className="w-full mt-3 pt-3 px-4 border-t border-t-gray-200 h-255 flex items-center justify-between">
                  <img
                    src={`/assets/images/${item?.images[0]}`}
                    alt=""
                    className="h-full"
                  />
                  <div className="dwn_ap flex-wrap">
                    <div className="dwn_ap_cen">
                      <div className="ap_icns_img">
                        <a
                          href={item.playstore}
                          target="_blank"
                          style={{
                            width: "auto",
                            textDecoration: "none",
                            border: "none",
                          }}
                        >
                          <img src="../images/Google_play_store.png" />
                        </a>
                      </div>
                      <p>Download App</p>
                    </div>

                    <div className="dwn_ap_cen">
                      <div className="ap_icns_img">
                        <a
                          href={item.appstore}
                          style={{
                            width: "auto",
                            textDecoration: "none",
                            border: "none",
                          }}
                        >
                          <img src="../images/ios_store.png" />
                        </a>
                      </div>
                      <p>Download App</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {activeMenu === 3 &&
            print.print &&
            print.print.length > 0 &&
            print.print.map((item, index) =>  {
              return <PrintCard item={item} />;
            })}

          {activeMenu === 4 &&
            otherData.other &&
            otherData.other.length > 0 &&
            otherData.other.map((item, index) => {
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
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-delay="100"
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

        <div
          className="text-center flex justify-center"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <Link
            href={viewmore}
            className="block w-fit red-thm-btn px-10 py-4 rounded-lg text-white text-md font-semibold"
          >
            <span>
              View More <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
