import { Row } from "reactstrap";
import { IoPersonSharp } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { PiWavesBold } from "react-icons/pi";
import { GiHotMeal } from "react-icons/gi";
import { PiCrosshairSimpleFill } from "react-icons/pi";

const Accommodation = ({ url, title, desc, price }) => { 

  return (
    <>
      <div className=" pb-5 w-full">
        
        <div>
          <img src={url} alt={title} /> 
        </div>


        <div className=" bg-gray-800 p-5 w-full">
        <h1 className="text-white text-xl font-sana mt-3 font-semibold">{title}</h1>
        <p className="text-sm text-white mt-3">{desc}</p>

        <div className="icons grid grid-cols-3 gap-2 mt-5">
          {/* First row */}
          <div className="flex gap-1 text-white">
            <span className=""><IoPersonSharp/></span>
            <span className="text-xs">Adults: 2</span>
          </div>
          <div className="flex gap-1 text-white ">
            <span><FaWifi /></span>
            <span className="text-xs">Wifi</span>
          </div>
          <div className="flex gap-1 text-white">
            <span><PiWavesBold /></span>
            <span className="text-xs">Private Beach</span>
          </div>
          {/* Second row */}
          <div className="flex gap-1 text-white">
            <span><GiHotMeal /></span>
            <span className="text-xs">Room Service</span>
          </div>
          <div className="flex gap-1 text-white">
            <span><PiCrosshairSimpleFill /></span>
            <span className="text-xs">Air Condition</span>
          </div>
        </div>

        {/* price */}
        <div className="grid grid-cols-2 mt-6 gap-4 p-2">
  <div className="text-start">
    <h1 className="text-yellow-600 font-bold text-lg">{price}</h1>
    <p className="text-white text-xs">per night</p>
  </div>
  <div className="flex justify-end p-3 w-full">
    <button className="bg-yellow-600 text-white p-2 ">Reserve</button>
  </div>
</div>


        </div>
      </div>
    </>
  );
};

export default Accommodation;
