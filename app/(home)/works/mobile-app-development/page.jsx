"use client";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import React, { useEffect, useState } from "react";
import HeroPage from "../../_components/HeroPage";
import Image from "next/image";
import Link from "next/link";
import { fetchMobileList } from "@/lib/actions/mobile.action";
import { Swiper, SwiperSlide } from "swiper/react";

const Page = ({ searchParams }) => {
  const [mobile, setMobile] = useState(null);

  useEffect(() => {
    document.title = "Mobile App Development";
  }, []);

  useEffect(() => {
    const dataSearch = async () => {
      try {
        const mobileData = await fetchMobileList({
          searchString: searchParams.q,
          pageNumber: searchParams?.page ? searchParams.page : 1,
          pageSize: 10,
        });

        // Assuming fetchMobileList returns an object with a "mobile" property
        setMobile(mobileData);
      } catch (error) {
        console.error("Error fetching mobile data:", error);
      }
    };

    dataSearch();
  }, [searchParams]);

  return (
    <>
      <HeroPage
        title={"Mobile App Development"}
        image={"/images/works_banner.png"}
      />
      <section className="fst_serv">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4 py-10">
          <h2 className="h2 text-center mb-4">Our Portfolio</h2>

          <ul className="flex items-center justify-center gap-2 mt-5 mb-10 port_mnu">
            <li>
              <Link href="/works/website">
                <span>Website</span>
              </Link>
            </li>
            <li>
              <Link href="/works/mobile-app-development">
                <span className="active">Mobile App</span>
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

          <div className="filter_frm w-full flex md:justify-end gap-3 mb-4">
            <label>Filter</label>
            <form>
              <select>
                <option value="">Select</option>
                <option value="Both">Both</option>
                <option value="Android">Android</option>
                <option value="iOS">iOS</option>
              </select>
            </form>
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-8">
            {mobile?.mobile &&
              mobile.mobile.length > 0 &&
              mobile.mobile.map((item, index) => (
                <div className="shadow_box">
                  <div className="flex items-center justify-between w-full px-6">
                    <div className="w-3/12">
                      <div className="launch_ic">
                        <Image
                          src={`/assets/images/${item?.logo}`}
                          alt={item.title}
                          width={480}
                          height={480}
                        />
                      </div>
                    </div>

                    <div className="w-9/12 mx-auto aps_rit_hd pl-4">
                      <h3>{item.title}</h3>
                    </div>
                  </div>

                  <div className="w-full mt-4 md:px-16 px-4">
                    <div id="app_works02">
                      {/* <div Responsive className="owl-carousel owl-theme"> */}
                      <Swiper
                        spaceBetween={20}
                        breakpoints={{
                          992: {
                            slidesPerView: 3,
                          },
                          767: {
                            slidesPerView: 3,
                          },
                          600: {
                            slidesPerView: 2,
                          },
                          0: {
                            slidesPerView: 2,
                          },
                        }}
                        loop
                        autoplay={{
                          delay: 250,
                          disableOnInteraction: false,
                        }}
                        className="owl-carousel owl-theme"
                      >
                        {item.images.map((image, index) => (
                          <SwiperSlide key={item.title} className="item">
                            <a
                              data-fancybox="images"
                              href={`/assets/images/${image}`}
                              data-caption="Freshdaykart - Online Grocery Shopping App"
                            >
                              <Image
                                src={`/assets/images/${image}`}
                                width={178}
                                height={387}
                                alt={item.title}
                              />
                            </a>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      {/* </div> */}
                    </div>

                    <p className="text-sm text-gray-500 text-center mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="dwn_ap dwn_ap_mob_app flex items-center justify-center">
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
                          <img src="/images/Google_play_store.png" />
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
                          <img src="/images/ios_store.png" />
                        </a>
                      </div>
                      <p>Download App</p>
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
