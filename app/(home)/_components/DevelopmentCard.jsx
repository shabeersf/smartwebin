import Link from 'next/link'
import React from 'react'
import {FaArrowRightLong} from 'react-icons/fa6'

const DevelopmentCard = ({ item }) => {
    return (
        <div className={`shdow_bx ${item.bg_theme_blue && "bg-theme-blue"}`} data-aos={item.dataaos} data-aos-duration={item.dataaosduration} data-aos-delay={item.dataaosdelay}>
            <div className="ser_ico"> <img src={item.img_src} alt={item.p} /></div>
            <h3 className={`${item.text_white && "text-white"}`}>{item.h3}</h3>
            <p className={`${item.text_white && "text-white"}`} style={item.text_white ? { color: "#fff" } : {}}
            >{item.p}</p>
            <div className="flex justify-end"><Link href="/services" className={`${item.text_white ? "text-white" : "text-[#FD473E]"}`}><FaArrowRightLong size={20} /></Link></div>
        </div>
    )
}

export default DevelopmentCard