import React from 'react'
import HeroPage from '../_components/HeroPage'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Link from 'next/link'
export const metadata = {
  title: 'Internship',
}
const Internship = () => {
  
  return (
    <>
      <HeroPage title={'Pick Your Plan'} image='/images/pickplan_banner.png' />
      <section className="fst_serv">

      <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4 py-10">
        <h2 className="h2 text-center mb-4">Pick Your Plan</h2>
        <p className="text-gray-500 text-sm text-center mt-4 mb-6">
          Our pricing is affordable for everyone
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="price_box_small_lft" data-aos="fade-right">
            <div className="price_box_shadow">
              <div className="price_red_sec">
                <p className="price_head_txt_red">Static Website 5 Page</p>
                <p className="army-chevron"></p>
                <p></p>
                <p className="price_details_txt_here">
                  Starting from
                  <span>INR 10000</span>
                </p>
              </div>
              <div className="white_sec_price_cont_red">
                <ul>
                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Modern
                    5 page unique website
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Home,
                    About Us, Services, Products, Contact Us
                  </li>

                  <li>
                  <AiOutlineCheckCircle aria-hidden="true" /> Enquiry Form
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> 1 Year
                    Domain &amp; Hosting Free
                  </li>
                </ul>
                <button>
                  <Link
                    href="/contact-us/?id=1"
                    className="js-target-scroll"
                    style={{color:"white"}}
                    >Select</Link
                  >
                </button>
              </div>
            </div>
          </div>

          <div className="price_box_small_lft" data-aos="fade-right">
            <div className="price_box_shadow">
              <div className="price_blue_sec">
                <p className="price_head_txt">Dynamic Website</p>
                <p className="army-chevron"></p>
                <p></p>
                <p className="price_details_txt_here">
                  Starting from
                  <span>INR 15000</span>
                </p>
              </div>
              <div className="white_sec_price_cont">
                <ul>
                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Modern
                    5 page unique website
                  </li>

                  <li>
                  <AiOutlineCheckCircle aria-hidden="true" /> Product Update Through Admin Panel
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Home,
                    About Us, Services, Products, Contact Us
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> 1 Year
                    Domain &amp; Hosting Free
                  </li>
                </ul>
                <button>
                  <Link
                    href="/contact-us/?id=2"
                    className="js-target-scroll"
                    style={{color:"white"}}
                    >Select</Link
                  >
                </button>
              </div>
            </div>
          </div>

          <div className="price_box_small_lft" data-aos="fade-right">
            <div className="price_box_shadow">
              <div className="price_grn_sec">
                <p className="price_head_txt_grn">Website + Promotion</p>
                <p className="army-chevron"></p>
                <p></p>
                <p className="price_details_txt_here">
                  Starting from
                  <span>INR 22000</span>
                </p>
              </div>
              <div className="white_sec_price_cont_grn">
                <ul>
                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Modern
                    5 page unique website
                  </li>

                  <li>
                  <AiOutlineCheckCircle aria-hidden="true" /> Product Update Through Admin Panel
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Home,
                    About Us, Services, Products, Contact Us
                  </li>

                  <li>
                  <AiOutlineCheckCircle aria-hidden="true" /> Facebook Page Creation
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Google
                    Business Location Marking
                  </li>

                  <li>
                  <AiOutlineCheckCircle aria-hidden="true" /> Promote Website in FB &amp; Google For Month
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> 1 Year
                    Domain &amp; Hosting Free
                  </li>
                </ul>
                <button>
                  <Link
                    href="/contact-us/?id=3"
                    className="js-target-scroll"
                    style={{color:"white"}}
                    >Select</Link
                  >
                </button>
              </div>
            </div>
          </div>

          <div className="price_box_small_lft" data-aos="fade-right">
            <div className="price_box_shadow">
              <div className="price_red_sec">
                <p className="price_head_txt_red">Shopping Website</p>
                <p className="army-chevron"></p>
                <p></p>
                <p className="price_details_txt_here">
                  Starting from
                  <span>INR 45000</span>
                </p>
              </div>
              <div className="white_sec_price_cont_red">
                <ul>
                  <li>
                  <AiOutlineCheckCircle aria-hidden="true" /> Category &amp; Product Creation
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> User
                    Dashboard and Login
                  </li>

                  <li>
                  <AiOutlineCheckCircle aria-hidden="true" /> Product Rating and Reviews
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> One
                    Payment Gateway
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Offer
                    and Discount Managment
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Order
                    History
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> User
                    Mail &amp; SMS
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> 1 Year
                    Domain &amp; Hosting Free
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> SMS
                    Gateway with 10,000 SMS
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" />  Add
                    on : 1 Month Digital marketing with offer price 5000 /-
                  </li>
                </ul>
                <button>
                  <Link
                    href="/contact-us/?id=4"
                    className="js-target-scroll"
                    style={{color:"white"}}
                    >Select</Link
                  >
                </button>
              </div>
            </div>
          </div>

          <div className="price_box_small_lft" data-aos="fade-right">
            <div className="price_box_shadow">
              <div className="price_blue_sec">
                <p className="price_head_txt">
                  SEO &amp; Digital Marketing - 6 Months
                </p>
                <p className="army-chevron"></p>
                <p></p>
                <p className="price_details_txt_here">
                  Starting from
                  <span>INR 15000</span>
                </p>
              </div>
              <div className="white_sec_price_cont">
                <ul>
                  <li>
                  <AiOutlineCheckCircle aria-hidden="true" /> Keyword Optimization of pages
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Tag
                    corrections of pages
                  </li>

                  <li>
                  <AiOutlineCheckCircle aria-hidden="true" /> Content corrections of pages
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Site
                    Map &amp; Robots
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Social
                    Media Page Creations
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Google
                    Business Location Marking
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Google
                    Web Analytics
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Social
                    Media Promotion - Google, FB, Instagram, Linkedin
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Addon
                    : Twitter ( spl price )
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Addon
                    : Adwords ( spl price )
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Addon
                    : Blogs ( spl price )
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Addon
                    : Youtube videos ( spl price )
                  </li>
                </ul>
                <button>
                  <Link
                    href="/contact-us/?id=5"
                    className="js-target-scroll"
                    style={{color:"white"}}
                    >Select</Link
                  >
                </button>
              </div>
            </div>
          </div>

          <div className="price_box_small_lft" data-aos="fade-right">
            <div className="price_box_shadow">
              <div className="price_grn_sec">
                <p className="price_head_txt_grn">Business Package</p>
                <p className="army-chevron"></p>
                <p></p>
                <p className="price_details_txt_here">
                  Starting from
                  <span>INR 30000</span>
                </p>
              </div>
              <div className="white_sec_price_cont_grn">
                <ul>
                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Modern
                    5 page unique website
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Home,
                    About Us, Services, Products, Contact Us
                  </li>

                  <li>
                  <AiOutlineCheckCircle aria-hidden="true" /> Enquiry Form
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Logo
                    Designing
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> 4 Page
                    Broucher Designing
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Letter
                    Head
                  </li>

                  <li>
                  <AiOutlineCheckCircle aria-hidden="true" /> Business Card
                  </li>

                  <li>
                  <AiOutlineCheckCircle aria-hidden="true" /> Facebook Page Creation
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> Google
                    Business Location Marking
                  </li>

                  <li>
                  <AiOutlineCheckCircle aria-hidden="true" /> Promote Website in FB &amp; Google For Month
                  </li>

                  <li>
                    <AiOutlineCheckCircle aria-hidden="true" /> 1 Year
                    Domain &amp; Hosting Free
                  </li>
                </ul>
                <button>
                  <Link
                    href="/contact-us/?id=6"
                    className="js-target-scroll"
                    style={{color:"white"}}
                    >Select</Link
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      </section>
    </>
  )
}

export default Internship