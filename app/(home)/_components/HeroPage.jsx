import React from 'react'

const HeroPage = ({title,image}) => {
  return (
    <div className="inner-banner mx-auto md:px-6 xl:px-0 relative -z-10">
            <img src={image} alt={title} />

                <div className="inner_caption" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100">
                    <h1>{title}</h1>
                    <ul className="breadcrumb">
                        <li><a href="/">Home</a> <span></span></li>
                        <li> {title}</li>
                    </ul>
                </div>

        </div>
  )
}

export default HeroPage