import React from 'react'

const ServiceCard = ({item}) => {
    return (
        <div className="serv_bx" data-aos={item.animation} data-aos-duration="500" data-aos-delay="100">
            <div className="serv_ico"><img src={item.imageSrc} alt={item.title} /></div>
            <div className="serv_txt">
                <h6>{item.title}</h6>
                <p style={{fontWeight:"600 !important"}}>{item.description}</p>
            </div>
        </div>
    )
}

export default ServiceCard