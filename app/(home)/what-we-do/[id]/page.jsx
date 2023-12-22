import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const page = ({ params }) => {
    const parts = params.id.split("-");
    const capitalizedSentence = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
    
  return (
    <>
    <div className="inner-banner inner-banner02 mx-auto md:px-6 xl:px-0 relative -z-10">
  <img src="/images/abt_banner.png" alt="banner" />
  
  <div className="inner_caption inner_caption02" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100">
    <h1>{capitalizedSentence} </h1>
<p>We are a team of experienced, skilled, creative and passionate people working together to deliver supreme solutions for your web site design and development needs. We provide reliable and long lasting business solutions. We relate the domain knowledge with technical skills to create a highly professional, unique and goal oriented website design to keep yourself top in the relevant web pages in a cost-effective manner</p>
    </div>

</div>

<section className="fst_serv">
<div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4 py-10 cont_page">
<div className="flex flex-wrap items-center m-0">

    <div className="lg:w-full p-0 abt_cont" data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">
    <h2 className="h2 mb-3"><span className="text-[#FD473E]">Why</span> Smartwebin?</h2>
    
    <ul  style={{paddingLeft:"0px",lineHeight:"30px",color:"#2f2e31"}}>
        <li className='flex items-center'><AiOutlineCheckCircle aria-hidden="true" />Large and beautiful images, dominant and dynamic headlines, short and crisp texts used.</li>
        <li className='flex items-center'><AiOutlineCheckCircle aria-hidden="true" />Search engine specific website codes.</li>
        <li className='flex items-center'><AiOutlineCheckCircle aria-hidden="true" />Customized and Mobile friendly designs.</li>
        <li className='flex items-center'><AiOutlineCheckCircle aria-hidden="true" />Tools for content updates as and when required(WordPress).</li>
        <li className='flex items-center'><AiOutlineCheckCircle aria-hidden="true" />Ensures the website from being not hacked.</li>
        <li className='flex items-center'><AiOutlineCheckCircle aria-hidden="true" />Flexible pricing based on clients business needs.</li>
        <li className='flex items-center'><AiOutlineCheckCircle aria-hidden="true" />noneAvailability of enterprise solutions</li>
        <li className='flex items-center'><AiOutlineCheckCircle aria-hidden="true" />Specify the number of clients.</li>
</ul>

<p style={{margin:"30px 0"}}>             
    <h3>Infrastructure</h3>
    We have a high tech infrastructural facilities empowered by advanced technology.
    <h3>Location</h3>
    We have a widespread presence throughout Kerala in Alappuzha, Ernakulam, Idukki, Kannur, Kasaragod, Kollam, Kottayam, Kozhikode, Malappuram, Palakkad, Pathanamthitta, Trivandrum, Thrissur, and Wayanad. We have word wide branches in Qatar, Bahrain, Kuwait, Duabi, United Arab Emirates, Oman, Saudi Arabia, USA, UK, Landon, Australia</p>

    <div>
        <h3>Our Services</h3>
         <p>We are the one stop solution for all our services with our hard-core domain expertise and customized working methods right from the scratch.</p>
        
              <h3>Web Design &amp; Development</h3>
              <p> We get you a unique web design which makes your website outshine the crowd. We develop websites with responsive designs and provides the visitor a rich experience. We can do wonders in redesigning as well. We offer world class PHP web development services and solutions. We make use of info graphic design to educate and engage the targeted audience.</p>
              <h3>Digital Marketing</h3>
              <p> We help you to grab a significant presence in cyberspace, which accelerates your business to remarkable heights using Search Engine Optimisation techniques. Opportunities for marketing in social media is also utilized to make a web traffic and create increased awareness about the particular website. Persistent and organized actions are also taken to make the best out of PPC options.</p>
              <h3>SEO, SMO, PPC</h3>
              <p> We help you to grab a significant presence in cyberspace, which accelerates your business to remarkable heights using Search Engine Optimisation techniques. Opportunities for marketing in social media is also utilized to make a web traffic and create increased awareness about the particular website. Persistent and organized actions are also taken to make the best out of PPC options.</p>
              <h3>Ecommerce Development</h3>
              <p> We are the leading eCommerce solution provider in Kerala. We make use of the latest technology for the client to perform various commercial operations like add, edit or delete products, create new product categories or sub categories, sell online, track and place orders and so on without any software or advanced computer skills.</p>
              <h3>Travel Websites</h3>
              <p>We provide you with the best, cost effective and updated information available. Main services include Plan your travel, Explore destinations, Travel reviews, Get air fares, Hotel reviews, Things to do &amp; Share your plans
</p>
              <h3>Graphic Design</h3>
              <p>Graphic designing is a powerful tool to market your business around the globe. It is a visual communication process, which makes use of one or more of photography, typography, and illustration. We offer a wide range of creative graphic design services at reasonable price. Our services include Advertising, Logo Design, Print Design, Editorial Design and Web Design. We have an expert marketing team which helps to increase online traffic and improves your online visibility with an ambition to transform the local business to a great brand.
</p>
              <h3>Mobile Application</h3>
              <p>Kerala Web Design Company stands out among other mobile app development companies for setting up a large number of apps which are currently used by a large number of customers globally. Some of them are android application development, hybrid application development, game development, etc.</p>
              <h3>Content Writing</h3>
              <p>We provide end to end solutions for services like article writing, blogging, copywriting, e book, content marketing and so on with 100% unique content.</p>
              <h3>Custom Software Development</h3>
              <p>We have proven our expertise in custom software development for several companies whose primary business depends on their software quality. We understand your business requirement, design and develop a user-friendly, secure, expandable and easily sustainable software with the help of advanced technology and manual expertise.</p>
              <h3>Ready to Use Software</h3>
              <p>We provide ready to use web based software for your website which can be installed, customized and used easily. </p>
              <h3>Domain Registration</h3>
              <p>It is easy for the customer to memorize and find your business when needed with a unique domain name. Stay top of mind with an industry related domain name which gives credibility to your business. Our automated set up ensures an easy domain registration.</p>
              <h3>Web Hosting</h3>
              <p>Website development and design are successfully completed, the critical task of web hosting is made easier here. We offer fast and reliable plans to make your site visible on the World Wide Web. Our web hosting solutions include web hosting, business hosting and managed WordPress.</p>
    </div>

    
    </div>

    </div>
</div>
</section>

    </>
  )
}

export default page