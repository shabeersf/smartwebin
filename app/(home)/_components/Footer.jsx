import Link from "next/link";
import React from "react";
import {
  FaRegEnvelope,
  FaLocationDot,
  FaFilePdf,
  FaPhoneFlip,
  FaSquare,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <section
        className="py-8 req_sec services_sec"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay="100"
      >
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-5 text-sm text-slate-600 st_links">
            <div>
              <div></div>

              <ul>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/web-designing-in-cochin">
                    Web Designing in Cochin
                  </Link>
                </li>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/web-designing-in-ernakulam">
                    Web Designing in Ernakulam
                  </Link>
                </li>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/web-development-in-kochi">
                    Web Development in Kochi
                  </Link>
                </li>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/mobile-app-development">
                    Mobile App Development
                  </Link>
                </li>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/logo-designing">
                    Logo Designing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/digital-marketing-seo">
                    Digital-Marketing-SEO
                  </Link>
                </li>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/software-development">
                    Software-Development
                  </Link>
                </li>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/social-media-promotion">
                    Social-Media-Promotion
                  </Link>
                </li>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/brochure-design">
                    Brochure-Design
                  </Link>
                </li>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/graphic-print-media">
                    Graphic-Print-Media
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/custom-software-development">
                    Custom-Software-Development
                  </Link>
                </li>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/iphone-app-development-in-kochi">
                    iPhone-App-Development-in-Kochi
                  </Link>
                </li>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/ laravel-developer-in-kochi">
                    Laravel-Developer-in-India
                  </Link>
                </li>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/codeigniter-developer-in-kochi">
                    Codeigniter-Developer-In-Kochi
                  </Link>
                </li>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/php-developer-in-cochin">
                    Php-Developer-in-Cochin
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/android-app-development-in-cochin">
                    Android-App-Development-in-Cochin
                  </Link>
                </li>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/e-commerce-website-development">
                    E-Commerce-Website-Development
                  </Link>
                </li>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/mobile-app-development-in-ernakulam">
                    Mobile-App-Development-in-Ernakulam
                  </Link>
                </li>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/mobile-app-development">
                    Mobile-App-Development
                  </Link>
                </li>
                <li class="!flex items-center gap-2">
                  <FaSquare color="#1E99CE" />
                  <Link href="/what-we-do/logo-designing-in-Kochi">
                    Logo-Designing-in-Kochi
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-8 loc_sec border-b border-b-slate-300"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="100"
      >
        <div className="lg:max-w-full md:px-6 px-4">
          <h2 className="text-2xl text-center font-bold mb-4">Locations</h2>
          <ul className="flex flex-wrap justify-left gap-1 text-sm text-slate-700">
            <li>
              <Link href="/locations/web-designing-company-in-alapuzha">
                Alappuzha
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-ernakulam">
                Ernakulam
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-idukki">
                Idukki
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-kannur">
                Kannur
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-kasaragod">
                Kasaragod
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-kollam">
                Kollam
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-kottayam">
                Kottayam
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-kozhikode">
                Kozhikode
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-malappuram">
                Malappuram
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-palakkad">
                Palakkad
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-pathanamthitta">
                Pathanamthitta
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-thiruvananthapuram">
                Thiruvananthapuram
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-thrissur">
                Thrissur
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-wayanad">
                Wayanad
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-qatar">
                Qatar
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-bahrain">
                Bahrain
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-kuwait">
                Kuwait
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-duabi">
                Duabi
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-united-arab-emirates">
                United Arab Emirates
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-oman">Oman</Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-saudi-arabia">
                Saudi Arabia
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-united-states">
                United States
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-united-kingdom">
                United Kingdom
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-landon">
                Landon
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-australia">
                Australia
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-delhi">
                Delhi
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-mumbai">
                Mumbai
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-kolkata">
                Kolkata
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-chennai">
                Chennai
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-bangalore">
                Bangalore
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-hyderabad">
                Hyderabad
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-kochi">
                Kochi
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-noida">
                Noida
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-angola">
                Angola
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-germany">
                Germany
              </Link>
            </li>
            <li>
              <Link href="/mobile-app-development-company-in-vyttila">
                Vyttila
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-aroor">
                Aroor
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-kakkanad">
                Kakkanad
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-ayyappankavu">
                Ayyappankavu
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-bolghatty-island">
                Bolghatty Island
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-csez">CSEZ</Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-chalikkavattom">
                Chalikkavattom
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-chambakkara">
                Chambakkara
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-changampuzha">
                Changampuzha Nagar
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-chembumukku">
                Chembumukku
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-cherai">
                Cherai
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-cheranalloor">
                Cheranalloor
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-chittoor">
                Chittoor
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-chottanikkara">
                Chottanikkara
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-edachira">
                Edachira
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-edakochi">
                Edakochi
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-edapally">
                Edapally
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-elamkulam">
                Elamkulam
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-elamakkara">
                Elamakkara
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-eloor">
                Eloor
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-eroor">
                Eroor
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-fort-kochi">
                Fort Kochi
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-gandhi">
                Gandhi Nagar
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-info-park">
                Info Park
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-irumpanam">
                Irumpanam
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-kacheripady">
                Kacheripady
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-kadavanthra">
                Kadavanthra
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-kalamassery">
                Kalamassery
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-kaloor">
                Kaloor
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-kangarappady">
                Kangarappady
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-kolenchery">
                Kolenchery
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-kumbalangi">
                Kumbalangi
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-mg-road">
                MG Road
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-mamangalam">
                Mamangalam
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-maradu">
                Maradu
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-marine-drive">
                Marine Drive
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-mattancherry">
                Mattancherry
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-mulanthuruthy">
                Mulanthuruthy
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-nedumbassery">
                Nedumbassery
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-nettoor">
                Nettoor
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-padivattom">
                Padivattom
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-palarivattom">
                Palarivattom
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-pallimukku">
                Pallimukku
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-palluruthy">
                Palluruthy
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-panampilly Nagar">
                Panampilly Nagar
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-piravom">
                Piravom
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-ponnurunni">
                Ponnurunni
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-ravipuram">
                Ravipuram
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-shenoys">
                Shenoys
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-thammanam">
                Thammanam
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-thevara">
                Thevara
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-thoppumpady">
                Thoppumpady
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-thrikakkara">
                Thrikakkara
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-thripunithura">
                Thripunithura
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-thuravoor">
                Thuravoor
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-udayamperoor">
                Udayamperoor
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-vaduthala">
                Vaduthala
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-valanjambalam">
                Valanjambalam
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-vennala">
                Vennala
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-vazhakkala">
                Vazhakkala
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-muvattupuzha">
                Muvattupuzha
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-perumbavoor">
                Perumbavoor
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-thodupuzha ">
                Thodupuzha{" "}
              </Link>
            </li>
            <li>
              <Link href="/locations/web-designing-company-in-adimali">
                Adimali
              </Link>
            </li>
            <li>
              <Link href="/best-web-designing-company-in-infopark">
                Infopark Kakkanad
              </Link>
            </li>
            <li>
              <Link href="/best-web-designing-company-in-kerala">Kerala</Link>
            </li>
            <li>
              <Link href="/best-web-designing-company-in-karnataka">
                Karnataka
              </Link>
            </li>
            <li>
              <Link href="/best-web-designing-company-in-tamilnadu">
                Tamilnadu
              </Link>
            </li>
            <li>
              <Link href="/best-web-designing-company-in-us">US</Link>
            </li>
            <li>
              <Link href="/best-web-designing-company-in-uk">UK</Link>
            </li>
          </ul>
        </div>
      </section>

      <footer className="py-8 relative">
        <div className="whatsapp">
          <a
            href="https://api.whatsapp.com/send?phone=919446717047&amp;text=Hi,"
            target="_blank"
          >
            <img src="/images/watsapp.png" alt="whatsapp" title="whatsapp" />
          </a>
        </div>
        <div className="get_quote hidden-mob">
          <a href="#">
            <img src="/images/get-quote.png" alt="" />
          </a>
        </div>

        <div className="mob_bot_btns">
          <button className="get_quote2 hidden-desk-tab">
            <i
              className="fa-solid fa-quote-left"
              style={{ marginRight: "7px" }}
            ></i>
            Get a Quote
          </button>
          <button className="dwd_pdf_now" style={{ display: "none" }}>
            <FaFilePdf color="black" />
            Brochure
          </button>
        </div>

        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4">
          <div className="flex flex-wrap ">
            <div
              className="lg:w-4/12 md:w-7/12 sm:w-6/12 w-full"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="footer-logo">
                <div className="theme-logo">
                  <Link href="/">
                    <img src="/images/logo.png" alt="Smartwebin logo" />
                  </Link>
                </div>

                <div className="footer-logo-contain">
                  <p>
                    We are the top most web designing and development, Mobile
                    App development, Software development company in Cochin,
                    Kerala, India.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="lg:w-2/12 md:w-5/12 w-6/12 md:mt-0 sm:mt-0 mt-4"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="footer-title">
                <h4>Quick Links</h4>
              </div>

              <div className="footer-contain">
                <ul>
                  <li>
                    <Link href="/" className="text-content">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="about" className="text-content">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="services" className="text-content">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="works" className="text-content">
                      Our works
                    </Link>
                  </li>
                  <li>
                    <a href="contact-us" className="text-content">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="lg:w-3/12 md:w-7/12 w-6/12 lg:mt-0 md:mt-0 mt-4"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="footer-title">
                <h4>Our Technologies</h4>
              </div>

              <div className="footer-contain">
                <ul className="ftr_tech">
                  <li>
                    <Link href="/what-we-do/web-designing-in-cochin" className="text-content">
                      React Js
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-we-do/web-designing-in-cochin" className="text-content">
                      Next Js
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-we-do/web-designing-in-cochin" className="text-content">
                      Node Js
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-we-do/web-designing-in-cochin" className="text-content">
                      Python
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-we-do/web-designing-in-cochin" className="text-content">
                      Django
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-we-do/web-designing-in-cochin" className="text-content">
                      GraphQL
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-we-do/web-designing-in-cochin" className="text-content">
                      Express Js
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="lg:w-3/12 md:w-5/12 w-full lg:mt-0 md:mt-0 mt-4"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <div className="footer-title">
                <h4>Get in Touch</h4>
              </div>

              <div className="footer-contain">
                <ul className="ftr_cnt_det">
                  <li>
                    <a>
                      <FaLocationDot color="gray" />
                      Address: Pootharayil Building,
                      <br />
                      Nr. Vyttila Mobility Hub,
                      <br />
                      Ernakulam, Kerala
                      <br />
                      India - 682306
                    </a>
                  </li>

                  <li>
                    <a href="mailto:smartwebin1@gmail.com">
                      <FaRegEnvelope color="gray" />
                      smartwebin1@gmail.com
                    </a>
                  </li>

                  <li>
                    <a href="tel:9446717047">
                      <FaPhoneFlip color="gray" />
                      +91 9446717047{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section className="bg-slate-900 py-3">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4">
          <div className="flex items-center justify-between">
            <p className="text-xs text-white">
              © Copyright 2023, All right reserved by Smartwebin
            </p>
            <ul className="flex gap-4 list-none items-center hidden-desk-990 ftr_scl">
              <li>
                <a
                  href="https://www.facebook.com/smartwebin"
                  className="text-white text-sm"
                  target="_blank"
                >
                  <FaFacebookF color="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/sumeshtg"
                  className="text-white text-sm"
                  target="_blank"
                >
                  <FaXTwitter color="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/smartwebin/"
                  target="_blank"
                  className="text-white text-sm"
                >
                  <FaInstagram color="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEDstHoeo3ERwAAAYpGkQ3QObJGrCyExXPRZT0tTFGNdlzit8zoO_ofzsf3rFo_fvoRUYswkXRkXbsvxhAWOoqcY7Z2OJOgcv9kgVjtR7pellhxyFF8Uu-aW-_ym3_iDP6Vun0=&original_referer=https://www.smartwebin.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsmartwebin-web-mobile-app-development"
                  target="_blank"
                  className="text-white text-sm"
                >
                  <FaLinkedinIn color="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://in.pinterest.com/smartwebinindia/"
                  target="_blank"
                  className="text-white text-sm"
                >
                  <FaPinterestP color="white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
