"use client";
import {
  FaArrowRight,
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaRegEnvelope,
  FaWhatsapp,
  FaXTwitter,
  FaXmark,
} from "react-icons/fa6";
import AOS from "aos";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchOtherListWithoutPagination } from "@/lib/actions/other.action";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [otherData, setOtherData] = useState([]);

  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      once: false,
    });

    const otherWorks = async () => {
      const other = await fetchOtherListWithoutPagination();
      setOtherData(other);
    };
    otherWorks();
  }, []);
  const [isOpen, setIsOpen] = useState("hidden-desktop");
  const handleOpen = () => {
    isOpen == "hidden-desktop"
      ? setIsOpen("show")
      : setIsOpen("hidden-desktop");
  };
  return (
    <header className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4">
      <img src="/images/hdr_lft.png" className="left_hdr_img" alt="" />
      <img src="/images/hdr_rit.png" className="rit_hdr_img" alt="" />

      <div className="top_bar flex flex-wrap items-center md:justify-between justify-center md:gap-0 gap-3 w-full">
        <div
          className="md:w-7/12"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <ul className="flex items-center md:gap-6 gap-3 text-xs top_cnt_det">
            <li>
              <a
                href="mailto:info@smartwebin.com"
                className="flex items-center gap-1"
              >
                <FaRegEnvelope color="#1E80E8" />
                info@smartwebin.com
              </a>
            </li>
            <li className="hidden-mob">
              <a href="#" className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                +91 9446717047
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+919446717047"
                className="flex items-center gap-1"
              >
                <FaWhatsapp color="#4DAE3F" />
                +91 9446717047
              </a>
            </li>
          </ul>
        </div>

        <div
          className="md:w-5/12 flex flex-wrap items-center justify-end md:gap-6 gap-1"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <ul className="flex gap-4 list-none items-center md:justify-start justify-center top_social md:w-auto w-full">
            <li>
              <a
                href="https://www.facebook.com/smartwebin"
                className="text-slate-700 text-sm"
                target="_blank"
              >
                <FaFacebookF />{" "}
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/sumeshtg"
                className="text-slate-700 text-sm"
                target="_blank"
              >
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/smartwebin/"
                target="_blank"
                className="text-slate-700 text-sm"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEDstHoeo3ERwAAAYpGkQ3QObJGrCyExXPRZT0tTFGNdlzit8zoO_ofzsf3rFo_fvoRUYswkXRkXbsvxhAWOoqcY7Z2OJOgcv9kgVjtR7pellhxyFF8Uu-aW-_ym3_iDP6Vun0=&original_referer=https://www.smartwebin.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsmartwebin-web-mobile-app-development"
                target="_blank"
                className="text-slate-700 text-sm"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://in.pinterest.com/smartwebinindia/"
                target="_blank"
                className="text-slate-700 text-sm"
              >
                <FaPinterest />
              </a>
            </li>
          </ul>
          <div className="flex flex-wrap items-center gap-2 br_pick_btns md:w-auto w-full justify-center md:justify-end">
            <Link target="_blank" href="https://smartwebin.com/brochure/"   className="red-thm-btn-brdr px-6 py-2 rounded-lg text-sm">
              <span>
                Brochure <FaArrowRight />
              </span>
            </Link>
            <Link href="/pick-your-plan" className="red-thm-btn px-6 py-2 rounded-lg text-white text-sm">
              <span>
                Pick your plan <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between py-2">
        <div
          className="logo md:w-3/12 sm:w-6/12 w-6/12"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <Link href="/">
            <img
              src="/images/logo.png"
              className="max-w-full"
              alt="smartwebin logo"
            />
          </Link>
        </div>

        <div className="md:w-9/12 sm:w-6/12 w-6/12">
          {/* <!--mob menu button--> */}
          <div className="btn_brd" onClick={handleOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              />
            </svg>
          </div>
          {/* <!---mob menu button--> */}

          {/* <!--mob menu--> */}
          <nav className={`sidebar ${isOpen}`}>
            <div className={`text ${isOpen}`}>
              <p className="text-lg  py-3">Menu</p>
              <div className="text-xl cursor-pointer btn_brd py-3">
                <span onClick={handleOpen}>
                  <FaXmark />
                </span>
              </div>
            </div>

            <ul className="accordion">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link className="toggle" href="/services/web-designing">
                  Services <i className="fa-solid fa-angle-down"></i>
                </Link>
                <ul className="inner">
                  <li>
                    <Link href="/services/web-designing/#serv_1">
                      Web Designing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/web-evelopment/#serv_1">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/mobile-apps/#serv_2">
                      Mobile Apps
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/social-media/#serv_2">
                      Social Media
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/graphic-and-print/#serv_3">
                      Graphic and print
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/seo/#serv_3">SEO</Link>
                  </li>
                  <li>
                    <Link href="/services/php-training/#serv_4">
                      PHP Training
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a className="toggle" href="/works/website">
                  Works <i className="fa-solid fa-angle-down"></i>
                </a>
                <ul className="inner">
                  <li>
                    <Link href="/works/website">Website Development</Link>
                  </li>
                  <li>
                    <Link href="/works/mobile-app-development">
                      Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/works/mobile-app-development">Print</Link>
                  </li>
                  {otherData.other &&
                    otherData.other.length > 0 &&
                    otherData.other.map((item, index) => {
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
                        <li key={index}>
                          <Link href={`/works/other/${slug}/${item._id}`}>
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </li>
              <li>
                <Link href="/seo-packages">SEO Packages</Link>
              </li>
              <li>
                <Link href="/internship">Internship</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>
          {/* <!--mob-menu--> */}

          <nav className="menu hidden-mob hidden-tab">
            <ul className="dsk_menu lg:flex items-center justify-end text-sm lg:gap-6 md:gap-3 text-black font-medium">
              <li className={pathname === "/" ? "active_menu" : ""}>
                <Link href="/">Home</Link>
              </li>
              <li className={pathname === "/about" ? "active_menu" : ""}>
                <Link href="/about">About us</Link>
              </li>
              <li
                className={
                  pathname === "/services"
                    ? "sub-menu-parent active_menu"
                    : "sub-menu-parent"
                }
              >
                <Link
                  href="/services/web-designing"
                  className="!flex items-center gap-2"
                >
                  Services <FaChevronDown size={10} />
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/services/web-designing/#serv_1">
                      Web Designing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/web-evelopment/#serv_1">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/mobile-apps/#serv_2">
                      Mobile Apps
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/social-media/#serv_2">
                      Social Media
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/graphic-and-print/#serv_3">
                      Graphic and print
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/seo/#serv_3">SEO</Link>
                  </li>
                  <li>
                    <Link href="/services/php-training/#serv_4">
                      PHP Training
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  pathname === "/works/website"
                    ? "sub-menu-parent active_menu"
                    : "sub-menu-parent"
                }
              >
                <Link
                  href="/works/website"
                  className="!flex items-center gap-2"
                >
                  Works <FaChevronDown size={10} />
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/works/website">Website Development</Link>
                  </li>
                  <li>
                    <Link href="/works/mobile-app-development">
                      Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/works/print">Print</Link>
                  </li>
                  {otherData.other &&
                    otherData.other.length > 0 &&
                    otherData.other.map((item, index) => {
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
                        <li key={index}>
                          <Link href={`/works/other/${slug}/${item._id}`}>
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </li>
              <li className={pathname === "/seo-packages" ? "active_menu" : ""}>
                <Link href="/seo-packages">SEO Packages</Link>
              </li>
              <li className={pathname === "/internship" ? "active_menu" : ""}>
                <Link href="/internship">Internship</Link>
              </li>
              <li className={pathname === "/blog" ? "active_menu" : ""}>
                <Link href="/blog">Blog</Link>
              </li>
              <li className={pathname === "/contact-us" ? "active_menu" : ""}>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
