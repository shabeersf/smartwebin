import React from 'react'
import HeroPage from '../_components/HeroPage'
import { FaPhoneFlip } from 'react-icons/fa6'
import { AiOutlineCheckCircle } from 'react-icons/ai'
export const metadata = {
  title: 'Internship',
}
const Internship = () => {
  return (
    <>
      <HeroPage title={'Internship in Web Development'} image='/images/internship_banner.png' />
      <section className="fst_serv">

        <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4 py-10">

          <div className="flex flex-wrap justify-center mt-10">

            <div className="h2_cnt">
              <h2 className="main_hd">Job Oriented internship <span>Training in Web Development</span></h2>
            </div>

            <div className="flex flex-wrap justify-center lg:gap-4">

              <div className="lg:w-1/3 md:w-1/2 sm:w-1/2 pr-2 mb-3">

                <div className="plan_bx">
                  <h3>PHP Web Development Training</h3>

                  <ul>
                    <li><AiOutlineCheckCircle style={{ fontSize: "19px", color: "red", marginRight: "7px" }} aria-hidden="true" /> Individual Attention</li>
                    <li><AiOutlineCheckCircle style={{ fontSize: "19px", color: "red", marginRight: "7px" }} aria-hidden="true" /> Placement Assistance</li>
                    <li><AiOutlineCheckCircle style={{ fontSize: "19px", color: "red", marginRight: "7px" }} aria-hidden="true" /> Training Certificate</li>
                    <li><AiOutlineCheckCircle style={{ fontSize: "19px", color: "red", marginRight: "7px" }} aria-hidden="true" /> Daily Assignments </li>
                    <li><AiOutlineCheckCircle style={{ fontSize: "19px", color: "red", marginRight: "7px" }} aria-hidden="true" /> 2 Demo Projects</li>
                    <li><AiOutlineCheckCircle style={{ fontSize: "19px", color: "red", marginRight: "7px" }} aria-hidden="true" /> Duration : 4 months</li>
                    <li><AiOutlineCheckCircle style={{ fontSize: "38px", color: "red", marginRight: "7px" }} aria-hidden="true" /> Modules : HTML, CSS, JavaScript, jQuery, Bootstrap,
                      PHP (Basic &amp; Advanced), MySQL</li>
                    <li><AiOutlineCheckCircle style={{ fontSize: "19px", color: "red", marginRight: "7px" }} aria-hidden="true" /> Frameworks : CodeIgniter &amp; Laravel</li>
                  </ul>

                  <a href="#" className="ylw_btn btn_flx">Fee: <span>INR 15,000/-</span></a>
                </div>

              </div>

              <div className="lg:w-1/3 md:w-1/2 sm:w-1/2 pl-2 mb-3">

                <div className="plan_bx">
                  <h3 className="green_col_hd">PHP Web Development Internship</h3>
                  <ul className="green_col_hd_i">
                    <li><AiOutlineCheckCircle style={{ fontSize: "19px", color: "red", marginRight: "7px" }} aria-hidden="true" /> Individual Attention</li>
                    <li><AiOutlineCheckCircle style={{ fontSize: "19px", color: "red", marginRight: "7px" }} aria-hidden="true" /> Placement Assistance</li>
                    <li className="highlt_txt"><AiOutlineCheckCircle style={{ fontSize: "19px", color: "red", marginRight: "7px" }} aria-hidden="true" /> Interview Preparations</li>
                    <li className="highlt_txt"><AiOutlineCheckCircle style={{ fontSize: "19px", color: "red", marginRight: "7px" }} aria-hidden="true" /> Internship Certificate</li>
                    <li><AiOutlineCheckCircle style={{ fontSize: "19px", color: "red", marginRight: "7px" }} aria-hidden="true" /> Daily Assignments </li>
                    <li><AiOutlineCheckCircle style={{ fontSize: "19px", color: "red", marginRight: "7px" }} aria-hidden="true" /> 2 Demo Projects</li>
                    <li className="highlt_txt"><AiOutlineCheckCircle style={{ fontSize: "19px", color: "red", marginRight: "7px" }} aria-hidden="true" /> 2 Live Projects</li>
                    <li><AiOutlineCheckCircle style={{ fontSize: "19px", color: "red", marginRight: "7px" }} aria-hidden="true" /> Duration : 6 months</li>
                    <li><AiOutlineCheckCircle style={{ fontSize: "38px", color: "red", marginRight: "7px" }} aria-hidden="true" /> Modules : HTML, CSS, JavaScript, jQuery, Bootstrap,
                      PHP (Basic &amp; Advanced), MySQL</li>
                    <li><AiOutlineCheckCircle style={{ fontSize: "19px", color: "red", marginRight: "7px" }} aria-hidden="true" /> Frameworks : CodeIgniter &amp; Laravel</li>
                  </ul>

                  <a href="#" className="ylw_btn btn_flx">Fee: <span>INR 25,000/-</span></a>
                </div>
              </div>


            </div>


          </div>

          <a href="tel:919446717047" className="red_btn flex items-center"><FaPhoneFlip style={{ fontSize: "22px", marginRight: "7px" }} aria-hidden="true" /> Call: +91 9446717047</a>

        </div>

      </section>
    </>
  )
}

export default Internship