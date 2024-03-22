import { Row } from "reactstrap";
import { IoPersonSharp } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { PiWavesBold } from "react-icons/pi";
import { GiHotMeal } from "react-icons/gi";
import { PiCrosshairSimpleFill } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";

const Events = ({ url, title, desc, date }) => { 

  return (
    <>
      <div className="  ">
        
        <div className="">
          <img src={url} alt={title} className="w-full"  /> 
        </div>


        <div className=" bg-orange-950 p-4">
        <p className="flex text-white text-xs gap-2"><span className=""><FaRegCalendarAlt/></span>{date}</p>
        <h1 className="text-white text-xl font-serif mt-3 font-semibold">{title}</h1>
        <p className="text-xs text-white mt-3">{desc}</p>
        <p className="text-sm text-white font-semibold mt-6">View Details</p>
       
        </div>
      </div>
    </>
  );
};

export default Events;
