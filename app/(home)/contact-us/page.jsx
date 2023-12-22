"use client";
import React, { useEffect, useState } from "react";
import HeroPage from "../_components/HeroPage";
import { sendMailed } from "@/lib/actions/contact.action";
import toast from "react-hot-toast";
import {
  LoadCanvasTemplate,
  validateCaptcha,
  loadCaptchaEnginge,
} from "react-simple-captcha";
import {FaLocationDot, FaPhone, FaRegEnvelope, FaWhatsapp,FaArrowRight } from 'react-icons/fa6'
import { useSearchParams } from "next/navigation";


const Page = () => {
  const [captchaValue, setCaptchaValue] = useState("");
  const searchParams = useSearchParams()
 
  const search = searchParams.get('id')
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    phone: "",
    address: "",
    datamessage: "",
    website: "",
    plan: search ? search : "",
    category: "",
  });
 
    useEffect(() => {
      document.title = "Contact Us"
    }, [])

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const sendMailtoUser = async () => {
    await sendMailed(formData);
    toast.success(
      "Thank you! Your message has been received.We will contact you soon."
    );
  };
  // Call this when the component mounts to load the captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      "name",
      "email",
      "location",
      "phone",
      "address",
      "datamessage",
      "website",
      "plan",
      "category",
    ];
    const isMissingField = requiredFields.some(
      (field) => !formData[field] || formData[field] === ""
    );

    if (isMissingField) {
      toast.error("Please fill in all required fields!");
      return;
    }

  
    // Assuming your captcha input field has a name 'captcha'
    const userEnteredCaptcha = e.target.elements.captcha.value;

    if (validateCaptcha(userEnteredCaptcha)) {
      // Captcha is valid, proceed with form submission logic
      // Your code for form submission goes here
       sendMailtoUser();
      // Reset captcha after successful submission
      loadCaptchaEnginge(6);
      setCaptchaValue("");
      setFormData({ location: "", email: "", plan: "", category: "", website: "",name:"",phone:"",address:"",datamessage:"" }); // Reset form
    } else {
      // Captcha validation failed, handle this as needed (show an error message, etc.)
      toast.error("Captcha validation failed");
    }
  };

  return (
    <>
      <HeroPage title={"Contact Us"} image={"/images/cnt_banner.png"} />
      <section className="fst_serv">
        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4 pt-10">
          <p className="text-sm text-slate-500 text-center">
            Website design plays the similar role as that of advertising.
            Elegance and appearance used to show your products and services
            impresses customers. This in turn obliges them to discover the
            website further. Good content, easy-to-use features and beneficial
            offers help to keep clients involved and increase sales.
          </p>

          <div className="flex flex-wrap mt-10">
            <div className="lg:w-4/12 lg:pr-7 w-full lg:order-1 order-2 lg:mt-0 mt-5">
              <div className="cont_bar">
                <ul>
                  <li>
                    <FaLocationDot size={17}  />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <span className="text-sm">
                        <b>SMARTWEBIN</b>
                        <br />
                        Door 1st, 2nd floor,
                        <br />
                        Pootharayil Building
                        <br />
                        Vyttila-Kaniyampuzha Rd,
                        <br />
                        Eroor P.O, Tripunithura,
                        <br />
                        Ernakulam, Kerala 682306
                      </span>
                    </div>
                  </li>

                  <li>
                  <FaRegEnvelope size={16}  />
                    <div>
                      <h3 className="font-semibold">Inquiries</h3>
                      <span className="text-sm block w-full">
                        <a href="mailto:info@smartwebin.com">
                          info@smartwebin.com
                        </a>
                      </span>
                      <span className="text-sm block w-full">
                        <a href="mailto:smartwebin1@gmail.com">
                          smartwebin1@gmail.com
                        </a>
                      </span>
                    </div>
                  </li>

                  <li>
                  <FaWhatsapp size={17}  />
                    <div>
                      <h3 className="font-semibold">Whatsapp</h3>
                      <span className="text-sm">
                        <a
                          href="https://api.whatsapp.com/send?phone=919446717047&text=Hi"
                          target="_blank"
                        >
                          +91 9446717047
                        </a>
                      </span>
                    </div>
                  </li>

                  <li>
                  <FaPhone size={17}  />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <span className="text-sm">
                        <a href="tel:7907874895">+91 7907874895</a>
                      </span>
                      ,
                      <span className="text-sm">
                        <a href="tel:9446717047">+91 9446717047</a>
                      </span>
                    </div>
                  </li>
                </ul>
                <a
                  href="https://g.page/smartwebin?we"
                  target="_blank"
                  className="vgp"
                >
                  View Google Profile
                </a>
              </div>
            </div>
            <form
              className="lg:w-8/12 w-full md:mt-0 mt-5 lg:order-2 order-1"
              onSubmit={handleFormSubmit}
            >
              <a id="quote" className="anchr"></a>
              <h2 className="h2 mb-3">Get a Quote</h2>
              <p className="text-sm text-slate-500 mb-6">
                Please send your requirement and we will come up with right
                solution. An online executive will respond to your query and one
                of our customer care executives may call you if anything
                required to be clear on our part.{" "}
              </p>


              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 m-0 mt-2">
                <div className="p-0">
                  <div className="form-group">
                   <select value={formData.category}
                      onChange={handleChange} name="category" class="form-control" r>
                                   <option value="">Select</option>
                                     <option value="Training">Training</option>
                                     <option value="Web Development">Web Development</option>
                                     <option value="Mobile App Development">Mobile App Development</option>
                                     <option value="Other">Other</option>
                                </select>
                  </div>
                </div>
                <div className="p-0">
                  <div className="form-group">
                  <select value={formData.plan}
                      onChange={handleChange} name="plan" class="form-control">
                      <option value="">Choose Your Plan</option>
								      <option value="1">Static Website 5 Page</option>
                      <option value="2">Dynamic Website</option>
                      <option value="3">Website + Promotion</option>
                      <option value="4">Shopping Website</option>
                      <option value="5">SEO &amp; Digital Marketing - 6 Months</option>
                      <option value="6">Business Package</option>
                      </select>
                  </div>
                </div>
              </div>


              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 m-0 mt-2">
                <div className="p-0">
                  <div className="form-group">
                    <input
                      required={true}
                      value={formData.name}
                      onChange={handleChange}
                      name="name"
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="p-0">
                  <div className="form-group">
                  <input
                      required={true}
                      value={formData.email}
                      onChange={handleChange}
                      name="email"
                      type="text"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 m-0 mt-2">
                <div className="p-0 pe-md-2">
                  <div className="form-group">
                  <input
                      required={true}
                      value={formData.phone}
                      onChange={handleChange}
                      name="phone"
                      type="text"
                      placeholder="Your Phone"
                    />
                  </div>
                </div>
                <div className="p-0">
                  <div className="form-group">
                    <input
                      required={true}
                      value={formData.address}
                      onChange={handleChange}
                      name="address"
                      type="text"
                      placeholder="Your Address"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 m-0 mt-2">
                <div className="p-0 pe-md-2">
                  <div className="form-group">
                  <input
                      required={true}
                      value={formData.location}
                      onChange={handleChange}
                      name="location"
                      type="text"
                      placeholder="Your Location"
                    />
                  </div>
                </div>
                <div className="p-0">
                  <div className="form-group">
                    <input
                      required={true}
                      value={formData.website}
                      onChange={handleChange}
                      name="website"
                      type="text"
                      placeholder="You Website or Domain Name"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap m-0 mt-2">
                <div className="w-full p-0">
                  <div className="form-group">
                    <textarea
                      required={true}
                      value={formData.datamessage}
                      onChange={handleChange}
                      name="datamessage"
                      cols=""
                      rows=""
                      placeholder="Project Description"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap m-0 mt-2">
                <div className="md:w-3/12 w-5/12 pr-4">
                  <LoadCanvasTemplate />
                </div>
                <div className="md:w-4/12 w-7/12 cap_txt">
                  <input
                    type="text"
                    placeholder="Enter Captcha Code*"
                    name="captcha"
                    value={captchaValue}
                    onChange={(e) => setCaptchaValue(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full mt-1"></div>
              </div>

              <button className="block w-fit red-thm-btn px-10 py-3 rounded-lg text-white text-md font-semibold mt-3 snt_sbmt">
                <span>
                  Submit<FaArrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
