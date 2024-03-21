import NavBar from "./NavBar";
import { useState, useEffect, useMemo } from "react";
import Hotel1 from "../assets/hotel1.png";
import Hotel2 from "../assets/hotel2.png";
import Hotel3 from "../assets/hotel3.png";
import Hotel4 from "../assets/hotel4.png";
import Hotel5 from "../assets/hotel5.png";
import { MdOutlineArrowCircleRight } from "react-icons/md";

const Header = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const imageUrls = useMemo(() => [Hotel1, Hotel2, Hotel3, Hotel4, Hotel5], []);

  useEffect(() => {
    const nextImage = () => {
      setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };

    const intervalId = setInterval(nextImage, 5000);

    return () => clearInterval(intervalId);
  }, [imageUrls]);

  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrls[imageIndex]})`,
    backgroundSize: "cover",
  };

  return (
    <div className="h-75 dark-overlay" style={backgroundImageStyle}>
      <div className="p-4 w-full h-full bg-opacity-40 bg-black">
        
        <div className="flex justify-between">
          <NavBar />
        </div>

        <div className="flex justify-center mt-5">
          {imageUrls.map((_, idx) => (
            <div
              key={idx}
              className={`rounded-full  w-3 mx-1 bg-gray-400 ${
                imageIndex === idx ? "bg-white" : ""
              }`}
              onClick={() => {
                setImageIndex(idx);
              }}
            ></div>
          ))}
        </div>

        <div className="flex flex-col justify-start mt-5 lg:w-8/12 md:w-full">
          <span className="text-white text-4xl font-bold mb-1">
            Enchanting Wilderness Retreat:
          </span>
          <h1 className="text-4xl text-white font-bold mb-3">
            Unveiling Splendor
          </h1>
          <p className="text-base text-white font-medium">
            Discover a symphony of luxury and nature. Our hotel invites you to
            indulge in a picturesque escape,
          </p>
          <span className="mt-1 text-base text-white font-medium">
            where sophistication meets the untamed beauty of the outdoors
          </span>

          <div className="flex items-center">
            <button className="bg-white text-black p-2 font-bold hover:text-white hover:bg-black mt-4 mr-4">
              Discover Our Rooms
            </button>
            <div className="flex items-center mt-4">
              <div className="mr-2 text-white">
                <MdOutlineArrowCircleRight />
              </div>
              <h1 className="text-white font-bold">Hotel video Tour</h1>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-5">
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
