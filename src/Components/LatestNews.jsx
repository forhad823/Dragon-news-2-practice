import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex flex-row items-center bg-base-200 gap-5 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2 font-bold">Latest</p>
      <Marquee pauseOnHover={true} speed={80}>
        <div className="flex gap-10 font-bold">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
            explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
            explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
            explicabo.
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
