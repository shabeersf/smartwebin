import React from "react";
import HeroPage from "../../_components/HeroPage";


const About = ({ params }) => {
  const parts = params.name.split("-in-");

  // Capitalizing the first letter of each word in the first part
  const firstPartMode = parts[0]
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Capitalizing the first letter of the second part
  const secondPart = params.name.split("-in-")[1].toUpperCase();
  const firstPart = firstPartMode.replace(secondPart, "");

  return (
    <>
      <HeroPage title={firstPart+" In "+ secondPart} image={"/images/abt_banner.png"} />
      <section className="fst_serv cont_page">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4 py-10">
          <div className="flex flex-wrap items-center m-0">
            <div
              className="lg:w-6/12 md:w-6/12 p-0 relative abt_img"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <img src="/images/about_img_2.png" alt='About' className="abt_img_2" />
              <img src="/images/about_img.png" alt='About' />
            </div>

            <div
              className="lg:w-6/12 md:w-6/12 p-0 abt_cont"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <h2 className="h2 mb-4 md:mt-0 mt-4">
                {firstPart} In{" "}
                <span className="text-[#FD473E]">{secondPart}</span>
              </h2>
              <p className="p mb-4">Short note about our services.</p>
              <h3>Web Designing & Development</h3>
              <p className="p">
                Branding and identity are assumed for your product through the
                responsible website development. Social Media Promotions
              </p>
              <p className="p">
                We promote and advertise your business through all popular
                social media thus stimulating the visitors to transform to
                leads.
              </p>
              <h3>Opportunity to Grow</h3>
              <p className="p">
                Small and medium scale business can now compete with large
                corporates with minimum investment and attract a share of the
                target audience.
              </p>
              <h3>Cost effective</h3>
              <p className="p">
                Digital marketing provides a cost effective means for business
                houses to maximize their potential based on research and
                quantifiable data.
              </p>
              <p className="p">
                Traditional marketing methods are become absolete as it is a
                shot in the dark hoping for best results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="industry_exp">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4 py-10">
          <div className="flex flex-wrap items-center m-0">
            <div
              className="lg:w-6/12 md:w-6/12 main_serv"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <img src="/images/what_we_do.png" alt='What We Do' />
            </div>

            <div
              className="lg:w-6/12 md:w-6/12 main_serv"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <h2 className="mb-3 h2 md:mt-0 mt-6">What We Do</h2>
              <p className="p">
                Making a attractive and user friendly website is the simplest
                way to showcase your product or business online. Smart Web In
                offer highly professional web designing services tailored
                specifically to our valued client's needs. We work closely with
                our clients throughout the website development process to ensure
                that they are completely satisfied with the end result.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white portfolio_sec">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4 py-10">
          <div className="flex flex-wrap items-center m-0">
            <div
              className="lg:w-4/12 md:w-4/12 main_serv md:order-2"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <img src="/images/skills.png" alt='Skills' />
            </div>

            <div
              className="lg:w-8/12 md:w-8/12 main_serv md:order-1"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <h2 className="mb-3 h2 md:mt-0 mt-6">Our Skills</h2>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <ul className="think">
                  <li>
                    <a href="/flash-and-animation">
                      <i className="fa-regular fa-circle-check"></i>Flash,
                      Animation
                    </a>
                  </li>
                  <li>
                    <a href="/html-and-css">
                      <i className="fa-regular fa-circle-check"></i>HTML5 &amp;
                      CSS3
                    </a>
                  </li>
                  <li>
                    <a href="/brochure-designing">
                      <i className="fa-regular fa-circle-check"></i>Brochure
                      Designing
                    </a>
                  </li>
                </ul>

                <ul className="think">
                  <li>
                    <a href="/javascript-jquery">
                      <i className="fa-regular fa-circle-check"></i>JavaScript
                      &amp; jQuery
                    </a>
                  </li>
                  <li>
                    <a href="/php-codeigniter">
                      <i className="fa-regular fa-circle-check"></i>PHP &amp;
                      Codeigniter
                    </a>
                  </li>
                  <li>
                    <a href="/psd-to-boostrap">
                      <i className="fa-regular fa-circle-check"></i>PSD to
                      Bootstrap
                    </a>
                  </li>
                </ul>

                <ul className="think">
                  <li>
                    <a href="/psd-to-responsive-html">
                      <i className="fa-regular fa-circle-check"></i>PSD to
                      Responsive HTML
                    </a>
                  </li>
                  <li>
                    <a href="/laravel-drupal-opencart">
                      <i className="fa-regular fa-circle-check"></i>Laravel,
                      Drupal &amp; Open Cart
                    </a>
                  </li>
                  <li>
                    <a href="/wordpress-themes">
                      <i className="fa-regular fa-circle-check"></i>PSD to
                      Wordpress, Responsive themes
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="industry_exp">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4 py-10">
          <div className="flex flex-wrap items-center m-0">
            <div
              className="lg:w-4/12 md:w-4/12 main_serv"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <img src="/images/expert_teams.png" alt='Expert teams' />
            </div>

            <div
              className="lg:w-8/12 md:w-8/12 main_serv lg:pl-4 md:pl-4"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <h2 className="mb-3 h2 md:mt-0 mt-6">Expert Teams</h2>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <ul className="think">
                  <li>
                    <a href="/web-designing">
                      <i className="fa-regular fa-circle-check"></i>Web
                      Designing
                    </a>
                  </li>
                  <li>
                    <a href="/web-development">
                      <i className="fa-regular fa-circle-check"></i>Web
                      Development
                    </a>
                  </li>
                  <li>
                    <a href="/android-iphone-apps">
                      <i className="fa-regular fa-circle-check"></i>Android and
                      iPhone Apps
                    </a>
                  </li>
                </ul>

                <ul className="think">
                  <li>
                    <a href="/logo-designing">
                      <i className="fa-regular fa-circle-check"></i>Logo
                      Designing
                    </a>
                  </li>
                  <li>
                    <a href="/seo-digital-marketing">
                      <i className="fa-regular fa-circle-check"></i>SEO, Digital
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a href="/cms-websites">
                      <i className="fa-regular fa-circle-check"></i>CMS Websites
                    </a>
                  </li>
                </ul>

                <ul className="think">
                  <li>
                    <a href="/data-entry-works">
                      <i className="fa-regular fa-circle-check"></i>Data Entry
                      Works
                    </a>
                  </li>
                  <li>
                    <a href="/web-application-developments">
                      <i className="fa-regular fa-circle-check"></i>Web
                      Application Development
                    </a>
                  </li>
                  <li>
                    <a href="/web-maintenance-services">
                      <i className="fa-regular fa-circle-check"></i>Website
                      maintenance services
                    </a>
                  </li>
                </ul>
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
                src="/images//abt_smartwebin.png"
                className="max-w-full"
                alt=""
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
    </>
  );
};

export default About;
export async function generateMetadata({ params }) {
  const parts = params.name.split("-in-");

  // Capitalizing the first letter of each word in the first part
  const firstPartMode = parts[0]
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Capitalizing the first letter of the second part
  const secondPart = params.name.split("-in-")[1].toUpperCase();
  const firstPart = firstPartMode.replace(secondPart, "");
  return {
    title: firstPart+" "+secondPart,
  }
}