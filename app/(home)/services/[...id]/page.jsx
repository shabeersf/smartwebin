import React from 'react'
import HeroPage from '../../_components/HeroPage'
import { FaArrowRight } from 'react-icons/fa6'

export const metadata = {
    title: 'Services',
  }

const Services = () => {
  return (
    <>
      <HeroPage title={'Services'} image={'/images/servces_banner.png'} />
      <section className="fst_serv">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4 py-10">
          <div className="flex flex-wrap items-center m-0">
            <div className="lg:w-6/12 md:w-6/12 p-0 relative abt_img" data-aos="fade-right" data-aos-duration="500" data-aos-delay="100">
              <img src="/images/about_img.png" />
            </div>

            <div className="lg:w-6/12 md:w-6/12 p-0 abt_cont" data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">
              <h2 className="h2 mb-3">Website design plays the similar role as that of advertising.</h2>

              <p className="p mb-4">
                Website designing plays the similar role as that of advertising. Elegance and appearance used to show your products and services impresses customers. This in turn obliges them to discover the website further. Good content, easy-to-use features and beneficial offers help to keep clients involved and increase sales.
              </p>

              <a href="#" className="block w-fit red-thm-btn px-10 py-4 rounded-lg text-white text-md font-semibold"><span>Contact Us <FaArrowRight /></span></a>
            </div>

          </div>
        </div>
      </section>
      <section className="industry_exp">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4 mt-4">

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10" id="serv_1">

                <div className="flex flex-wrap items-center m-0">

                    <div className="lg:w-9/12 p-10" data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">
                        <h2 className="mb-3 text-xl font-semibold md:mt-0 mt-6">Web Designing</h2>
                        <ul className="serv_tags">
                            <li>PDS to Responsive HTML</li>
                            <li>Creative Web Designing Team</li>
                            <li>Mobile App UI Designing</li>
                            <li>Web UI Designing</li>
                            <li>Jquery and Javascript</li>
                            <li>Angual JS</li>
                            <li>Front End Developments</li>
                        </ul>
                    </div>
                    <div className="lg:w-3/12 main_serv" data-aos="fade-right" data-aos-duration="500" data-aos-delay="100">
                        <img src="/images/webdesign.png" alt='Web Designing'  />
                    </div>


                </div>

                <div className="flex flex-wrap items-center m-0 serv_after relative">
                    <div className="lg:w-9/12 main_serv z-10 p-10" data-aos="fade-left" data-aos-duration="500"
                        data-aos-delay="100">
                        <h2 className="mb-3 text-xl font-semibold md:mt-0 mt-6">Web Development</h2>
                        <ul className="serv_tags">
                            <li><a href="/core-php-development">Core php development</a></li>
                            <li><a href="/codeigniter-development">Codeigniter development</a></li>
                            <li><a href="/wordpress-development">WordPress development</a></li>
                            <li><a href="/drupal-development">Drupal development</a></li>
                            <li><a href="/joomla-development">Joomla development</a></li>
                            <li><a href="/laravel-development">Laravel development</a></li>
                            <li><a href="/magento-development">Magento development</a></li>
                            <li><a href="/opencart-development">Opencart development</a></li>
                            <li><a href="/web-applications">Web applications</a></li>
                        </ul>
                    </div>

                    <div className="lg:w-3/12 main_serv z-10" data-aos="fade-right" data-aos-duration="500"
                        data-aos-delay="100">
                        <img src="/images/web_dev.png" alt='Web Development' />
                    </div>

                </div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10" id="serv_2">

                <div className="flex flex-wrap items-center m-0 serv_after2 relative">

                    <div className="lg:w-9/12 p-10 z-10" data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">
                        <h2 className="mb-3 text-xl font-semibold md:mt-0 mt-6">Mobile App</h2>
                        <ul className="serv_tags">
                            <li>Android app development - Kotlin/Java</li>
                            <li>iOs app development - Kotlin/Java</li>
                            <li>iOs app development - Kotlin/Java</li>
                            <li>Hybrid app development</li>
                        </ul>
                    </div>
                    <div className="lg:w-3/12 main_serv z-10" data-aos="fade-right" data-aos-duration="500"
                        data-aos-delay="100">
                        <img src="/images/mobile_app.png" alt='Mobile App' />
                    </div>


                </div>

                <div className="flex flex-wrap items-center m-0">
                    <div className="lg:w-9/12 main_serv z-10 p-10" data-aos="fade-left" data-aos-duration="500"
                        data-aos-delay="100">
                        <h2 className="mb-3 text-xl font-semibold md:mt-0 mt-6">Social Media</h2>
                        <ul className="serv_tags">
                            <li><a href="/">Facebook promotions</a></li>
                            <li><a href="/">Web analytics and reporting</a></li>
                            <li><a href="/">Social networks</a></li>
                            <li><a href="/">Google promotion</a></li>
                            <li><a href="/">Youtube promotion</a></li>
                            <li><a href="/">Blog marketing</a></li>
                            <li><a href="/">Forum writing</a></li>
                            <li><a href="/">Instagram promotion</a></li>
                            <li><a href="/">Linkedin promotion</a></li>
                            <li><a href="/">Twitter promotion</a></li>
                        </ul>
                    </div>

                    <div className="lg:w-3/12 main_serv z-10" data-aos="fade-right" data-aos-duration="500"
                        data-aos-delay="100">
                        <img src="/images/social_media.png"  alt='Social Media'/>
                    </div>

                </div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10" id="serv_3">

                <div className="flex flex-wrap items-center m-0">

                    <div className="lg:w-9/12 p-10 z-10" data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">
                        <h2 className="mb-3 text-xl font-semibold md:mt-0 mt-6">Graphic and Print</h2>
                        <ul className="serv_tags">
                            <li><a href="/">Logo designing</a></li>
                            <li><a href="/">Brochure designing</a></li>
                            <li><a href="/">Leaflet designing</a></li>
                            <li><a href="/">All print related solutions</a></li>
                            <li><a href="/">Branding &amp; Marketing</a></li>
                            <li><a href="/">Power point presentations</a></li>
                            <li><a href="/">Business cards</a></li>
                            <li><a href="/">Email &amp; Whatsapp brouchers</a></li>
                        </ul>
                    </div>
                    <div className="lg:w-3/12 main_serv z-10" data-aos="fade-right" data-aos-duration="500"
                        data-aos-delay="100">
                        <img src="/images/graphic_print.png" alt='Graphic and Print' />
                    </div>


                </div>

                <div className="flex flex-wrap items-center m-0 serv_after relative">
                    <div className="lg:w-9/12 main_serv z-10 p-10" data-aos="fade-left" data-aos-duration="500"
                        data-aos-delay="100">
                        <h2 className="mb-3 text-xl font-semibold md:mt-0 mt-6">Search Engine Optimisation</h2>

                        <ul className="serv_tags">
                            <li><a href="/">SEO (Search engine optimisation)</a></li>
                            <li><a href="/">SEM (Search engine Marketing)</a></li>
                            <li><a href="/">Google - Ad Words</a></li>
                            <li><a href="/">Digital Marketing</a></li>
                            <li><a href="/">Youtube Marketing</a></li>
                        </ul>

                    </div>

                    <div className="lg:w-3/12 main_serv z-10" data-aos="fade-right" data-aos-duration="500"
                        data-aos-delay="100">
                        <img src="/images/seo.png"  alt='Search Engine Optimisation' />
                    </div>

                </div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10" id="serv_4">

                <div className="flex flex-wrap items-center m-0 serv_after2 relative">

                    <div className="lg:w-9/12 p-10 z-10" data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">
                        <h2 className="mb-3 text-xl font-semibold md:mt-0 mt-6">PHP Training and Academic Projects ( 4
                            Months Duration)</h2>

                        <ul className="serv_tags">
                            <li><a href="/">Training on Advanced PHP</a></li>
                            <li><a href="/">Training on Mysql</a></li>
                            <li><a href="/">Training on OOP</a></li>
                            <li><a href="/">Training on Css</a></li>
                            <li><a href="/">Training on Html</a></li>
                            <li><a href="/">Training on Codeigniter</a></li>
                            <li><a href="/">Training on Javascript</a></li>
                            <li><a href="/">Training on Jquery</a></li>
                            <li><a href="/">Training on Boostrap</a></li>
                            <li><a href="/">Training on Codeigniter</a></li>
                            <li><a href="/">Training on Academic Projects</a></li>
                            <li><a href="/">Training on Wordpress</a></li>
                        </ul>

                    </div>
                    <div className="lg:w-3/12 main_serv z-10" data-aos="fade-right" data-aos-duration="500"
                        data-aos-delay="100">
                        <img src="/images/php_training.png"  alt='PHP Training and Academic Projects ' />
                    </div>


                </div>

                <div className="flex flex-wrap items-center justify-center m-0 relative idea_sec">
                    <div className="z-10 py-4">
                        <img src="/images/lightbulb.png" alt="HAVE YOU GOT ANY IDEA" className="w-28 mx-auto mb-4" />
                        <h2>HAVE YOU GOT ANY IDEA </h2>
                        <p>Need To Discuss More </p>
                        <a href="contact-us" data-aos="fade-left">
                            Contact Now!!
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <section className="py-8 abt_smartwebin">
    <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4">
        <div className="flex flex-wrap items-center">

                <div className="md:w-4/12 left-shape">
                  <div className="feature-box2">
                    <h4>Creative Concept
                    </h4>
                    <p>Boutique service, and BIG ideas! Our designs ensure that your brand's integrity is preserved and shines bright in every medium.</p>
                  </div>
                  <div className="feature-box2">
                    <h4>Content Collection
                    </h4>
                    <p>Designing a good website that accommodates a lot of content is a tricky balancing act to pull off.</p>
                  </div>
                  <div className="feature-box2">
                    <h4>Review Results
                    </h4>
                    <p>Prior to the final launch our team developing test cases thereby you get the best outcome.</p>
                  </div>
                </div>
                <div className="md:w-4/12 center-shape"> 
                  <img src="/images/img-9.png" />
                </div>
                <div className="md:w-4/12 right-shape">
                  <div className="feature-box2">
                    <h4>Build Design
                    </h4>
                    <p>We do it by re-imagining your content and design through a groundbreaking approach that is unique to us.</p>
                  </div>
                  <div className="feature-box2">
                    <h4>Tweak Details
                    </h4>
                    <p>We eagerly work with meaningful brands in order to help them connect with great minds.</p>
                  </div>
                  <div className="feature-box2">
                    <h4>Publish
                    </h4>
                    <p>Quality is all about details. To make sure nothing is missed, We finalize everything with utmost care and beauty.</p>
                  </div>
                </div>
         

        </div>
        </div>
</section> 

    </>
  )
}

export default Services