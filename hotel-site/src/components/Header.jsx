import NavBar from "./NavBar";
import { useState, useEffect, useMemo } from "react";
import Hotel1 from "../assets/hotel1.png";
import Hotel2 from "../assets/hotel2.png";
import Hotel3 from "../assets/hotel3.png";
import Hotel4 from "../assets/hotel4.png";
import Hotel5 from "../assets/hotel5.png";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { Col, Row } from "reactstrap";

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
    <div className="h-auto dark-overlay" style={backgroundImageStyle}>
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

        

        <div className=" justify-start mt-9 lg:w-8/12 md:w-full pl-3 ">
          <span className="text-white text-4xl font-bold mb-1">
            Enchanting Wilderness Retreat:
          </span>
          <h1 className="text-4xl text-white font-bold mb-3">
            Unveiling Splendor
          </h1>
          <p className="text-base text-white font-medium mt-2">
            Discover a symphony of luxury and nature. Our hotel invites you to
            indulge in a picturesque escape,
          </p>
          <span className="mt-1 text-base text-white font-medium">
            where sophistication meets the untamed beauty of the outdoors
          </span>

          <div className="flex items-center mt-4">
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


{/* box white */}
        <div className="flex lg:justify-end xl:justify-end sm:justify-center md:justify-center ">
          <div className="bg-white rounded-md p-5 lg:w-1/3 xl:w-1/3 md:w-2/5 grid grid-cols-1 gap-y-3 md:mt-3">
            <div>
              <label htmlFor="checkIn" className="text-black font-bold">
                Check In:
              </label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                className="w-full mt-2 border-2 border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label htmlFor="checkOut" className="text-black font-bold">
                Check Out:
              </label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                className="w-full mt-2 border-2 border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="grid grid-cols-2 gap-x-3">
              <div>
                <label htmlFor="adults" className="text-black font-bold">
                  Adults
                </label>
                <select
                  id="adults"
                  name="adults"
                  className="w-full mt-2 border-2 border-gray-300 rounded-md p-2"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">1</option>
                  <option value="5">2</option>
                  <option value="6">3</option>
                </select>
              </div>

              <div>
                <label htmlFor="children" className="text-black font-bold">
                  Children
                </label>
                <select
                  id="children"
                  name="children"
                  className="w-full mt-2 border-2 border-gray-300 rounded-md p-2"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">1</option>
                  <option value="5">2</option>
                  <option value="6">3</option>
                </select>
              </div>
            </div>

            <div>
              <button className="bg-black text-white w-full mt-3 p-2">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
