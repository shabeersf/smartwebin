import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Slider = ({item}) => {
    return (
        <div className="item pb-20">
            <div className="captn" data-aos="fade-right" data-aos-duration="500" data-aos-delay="100">
                {item.text ? <span className="d-none-481">{item.text}</span> : ""}
                <h2>{item.h2}</h2>
                <p className='font-medium'>{item.p}</p>
                <div className="flex items-center gap-2">
                    <Link href="/works/website" className="red-thm-btn lg:px-10 px-5 py-4 rounded-lg text-white text-md font-semibold hidden-mb"><span>View Works <FaArrowRight /></span></Link>
                    <Link href="/contact-us" className="red-thm-btn-brdr lg:px-10 px-5 py-4 rounded-lg text-md font-semibold"><span>Contact Us <FaArrowRight /></span></Link>
                </div>
            </div>
            <img src={item.img_src} alt={item.text} data-aos="fade-left" data-aos-duration="500" data-aos-delay="100" />
        </div>
    )
}

export default Slider