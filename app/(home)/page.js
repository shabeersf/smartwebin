"use client";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Slider from "./_components/Slider";
import {
  developmentList,
  serviceData,
  sliderList,
  technologyList,
} from "@/constants/data";
import TechnologyCard from "./_components/TechnologyCard";
import DevelopmentCard from "./_components/DevelopmentCard";
import ServiceCard from "./_components/ServiceCard";
import PortfolioSection from "./_components/PortfolioSection";
import { FaArrowRight } from "react-icons/fa6";
import BlogFront from "./_components/BlogFront";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div className="banner lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4">
        <div id="home">
          <Swiper
            loop
            style={{
              "--swiper-pagination-color": "#E8322E",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "14px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
            pagination={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Pagination]}
            className="mySwiper OneClass"
          >
            {sliderList?.map((item) => (
              <SwiperSlide key={item.img_alt}>
                <Slider item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="technologys md:py-10 py-4 lg:w-full mx-auto md:px-6 px-4">
        <div className="text-center heading_sec mb-6">
          <h2 className="h2 text-center">Our Technologies</h2>
        </div>

        <div
          id="technology"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <Swiper
            spaceBetween={20}
            breakpoints={{
              992: {
                slidesPerView: 10,
              },
              767: {
                slidesPerView: 6,
              },
              480: {
                slidesPerView: 5,
              },
              0: {
                slidesPerView: 3,
              },
            }}
            loop
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {technologyList?.map((item) => (
              <SwiperSlide key={item.img_alt}>
                <TechnologyCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4 py-6">
        <div className="md:flex items-center">
          <div
            className="md:w-5/12 md:pr-6"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <img
              src="/images/about.png"
              className="max-w-full md:mx-0 mx-auto"
              alt="Welcome To Smartwebin"
            />
          </div>
          <div
            className="md:w-7/12"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <h2 className="h2 mb-4 md:mt-0 mt-4">Welcome To Smartwebin</h2>
            <p className="p mb-4 font-medium">
              SMARTWEBIN was established in 2016 June in Cochin, Kerala, India,
              with a vision to provide best quality services. We have a highly
              professional expertise in all the Web Designing and Development,
              Mobile App technologies to make sure that we create visually
              appealing and fully functional website for our esteemed clients.
              Our services : Web Designing and Development, Mobile App
              Development, SEO & SMO, Graphical Logo & Brochure Designing,
              Branding & Marketing. We have successfully delivered custom
              software solutions for CRM, Hotel Booking Management,
              School/Institute Management, Healthcare Management, Hospital
              Management, etc. We are the best web designing, best mobile app
              development company in India.
            </p>
            <a
              href="contact-us"
              className="block w-fit red-thm-btn px-10 py-4 rounded-lg text-white text-md font-semibold"
            >
              <span>
                Contact Us <FaArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>
      <section className="fst_serv py-6">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4">
          <div
            className="text-center heading_sec mb-6"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <span className="text-center small_head">Services we deliver</span>
            <h2 className="h2 text-center">Latest Technology Development</h2>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-7 ltd">
            {developmentList?.map((item) => (
              <DevelopmentCard item={item} key={item.img_alt} />
            ))}
          </div>
        </div>
      </section>

      <section className="industry_exp py-6 mt-5">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4">
          <div className="flex flex-wrap md:justify-start justify-center items-center">
            <div className="md:w-4/12 w-full">
              <div
                className="exp_hd"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                <h2>20 YEARS*</h2>
                <span>Industry Experience</span>
              </div>
            </div>
            <div
              className="md:w-8/12"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                <div className="ie_ico">
                  <span>
                    <img src="/images/ie_1.png" alt="Grocery" />
                  </span>
                  <p>Grocery</p>
                </div>
                <div className="ie_ico">
                  <span>
                    <img src="/images/ie_2.png" alt="Real estate" />
                  </span>
                  <p>Real estate</p>
                </div>
                <div className="ie_ico">
                  <span>
                    <img src="/images/ie_3.png" alt="Tour & Travels" />
                  </span>
                  <p>Tour & Travels</p>
                </div>
                <div className="ie_ico">
                  <span>
                    <img src="/images/ie_4.png" alt="Education" />
                  </span>
                  <p>Education</p>
                </div>
                <div className="ie_ico">
                  <span>
                    <img src="/images/ie_5.png" alt="Transport" />
                  </span>
                  <p>Transport</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 abt_smartwebin">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4">
          <div className="flex flex-wrap items-center">
            <div
              className="md:w-5/12 w-full md:order-2"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <img
                src="/images/abt_smartwebin.png"
                className="max-w-full"
                alt="Smartwebin"
              />
            </div>
            <div
              className="md:w-7/12 w-full md:order-1 md:pr-6"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <h2 className="h2 mb-4 md:mt-0 mt-4">Smartwebin</h2>
              <p className="p mb-4">
                We offer Quality Websites, Responsive Web Designing, SEO based
                Web Development and Android and iPhone App Development.
                Technology Expert in HTML, Jquery, PHP, Codeigniter, Laravel,
                Drupal, Wordpress, Android Framework, iOs Framework. We are the
                top most web designing and development, Mobile App development,
                Software development company in Cochin, Kerala, India. We offer
                quality websites with responsive theme, modern design and highly
                top ranking pages in search engine for an affordable rate. We
                are developing dynamic website with open source technology PHP.
                We have developed matrimony, real estate, hotels, blog, job
                portals, e-commerce and other web applications. We provide
                websites in affordable rate depends on your budget. We have
                experts for Digtal Marketing, Social Media Promotions, SEO, Data
                Entry Works. SMARTWEBIN establishment on 14 th June 2016. We
                have highly skilled Website Design and Development Team in
                Cochin, India. Contact - Email : info@smartwebin.com, Mo : +91
                9446717047
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 services_sec">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4">
          <div
            className="text-center heading_sec mb-6"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <h2 className="h2 text-center">Our Services</h2>
            <p className="p mt-4 text-black text-center">
              SMARTWEBIN is a professional web design company in Cochin (Kochi),
              Kerala, India.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
            {serviceData?.map((item) => (
              <ServiceCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>
      <PortfolioSection />
      <section className="py-8 ylw_txt_sec">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4">
          <div
            id="ylw_txt"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <Swiper
              loop
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
              style={{
                "--swiper-pagination-color": "#E8322E",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "14px",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
              }}
            >
              <SwiperSlide>
                <div className="item">
                  <p className="text-center text-md">
                    We make use of the best and the latest strategies in keyword
                    building, SEO, and digital marketing.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item">
                  <p className="text-center text-md">
                    We make use of the best and the latest strategies in keyword
                    building, SEO, and digital marketing.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <BlogFront />
    </>
  );
}
