"use client"
import Image from "next/image";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const PrintCard = ({ item }) => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-3">
      <div className="mix2 category-1">
        <div className="hover_print">
          <a
            className="pos_a"
            onClick={() => setToggler(!toggler)}
            data-caption=""
          ></a>
          <FsLightbox
				toggler={toggler}
				sources={[
					`/assets/images/${item?.image}`
				]}
			/>
          <div className="div">
            <a
              className="w3-button-plus"
              onClick={() => setToggler(!toggler)}
              data-caption=""
            >
              +
            </a>
          </div>
        </div>

        <Image
          src={`/assets/images/${item?.image}`}
          alt={item.title}
          width={720}
          height={900}
        />
        <div className="hover_port">
          <div>
            <h2>{item?.title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintCard;
