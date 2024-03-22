import { Row } from "reactstrap";
import { IoPersonSharp } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { PiWavesBold } from "react-icons/pi";
import { GiHotMeal } from "react-icons/gi";
import { PiCrosshairSimpleFill } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";

const Feedback = ({ url, name, desc, country,rate,feedback }) => { 

  return (
    <>
      <div className=" bg-gray-300 rounded-lg">
        
        <div className="grid grid-cols-3  gap-3  mt-3">
        <div className="flex justify-center pt-4">
          <img src={url}  className="w-12 h-12"  /> 
        </div>

        <div className="text-start  p-3">
        <h1 className="text-black text-sm  mt-3 font-semibold">{name}</h1>
        <p className="text-xs text-black mt-2">{country}</p>
        <p className="text-sm text-black font-semibold mt-2">{feedback}</p>
       
        </div>

        <div className=" flex justify-end p-3">
            <div className="bg-yellow-600 rounded-lg w-12 h-12"><span className=" flex justify-center text-center text-md p-3 font-semibold">{rate}</span></div>
        </div>

</div>

<div className="p-4">
    <p className="text-xs">{desc}</p>
</div>
       
      </div>
    </>
  );
};

export default Feedback;
