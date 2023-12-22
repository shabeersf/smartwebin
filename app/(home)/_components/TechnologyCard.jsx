import React from 'react'

const TechnologyCard = ({ item }) => {
    
    return (
        <div className="item">
            <div className="tech_bx">
                <img src={item.img_src} alt={item.text} />
                    <p>{item.text}</p>
            </div>
        </div>
    )
}

export default TechnologyCard