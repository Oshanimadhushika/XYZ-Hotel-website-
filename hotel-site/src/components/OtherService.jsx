import { IoPersonSharp } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { PiWavesBold } from "react-icons/pi";
import { GiHotMeal } from "react-icons/gi";
import { PiCrosshairSimpleFill } from "react-icons/pi";
import Bridge from "../assets/bridge.png";
import { useState } from "react";

const OtherService = () => {
    const [showAllItems, setShowAllItems] = useState(false);
  return (
    <>
    <div>
      <div className="mt-9 flex p-9">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 items-center">
          <div className="col-span-1 md:hidden sm:hidden p-5 lg:block">
            <img src={Bridge} alt="bridge" className="w-full h-full" />
          </div>

          <div className="col-span-1 md:col-span-full mx-auto my-auto p-3 text-center md:gap-4 sm:col-span-full">
      <h1 className="text-black text-4xl font-serif mb-4">
        All the Essentials for Cozy and
      </h1>
      <h1 className="text-black text-4xl font-serif mb-4">
        Comfortable Stay
      </h1>
      <div className="icons grid grid-cols-2 gap-2 mt-5">
        {/* First row */}
        <div className="flex gap-1 text-black">
          <span>
            <IoPersonSharp />
          </span>
          <h1 className="text-md font-bold">
            Airport Pick-up Service
            <span className="block font-normal">
              Seamlessly transition from your journey to pure relaxation
              with our Airport Pick-up Service
            </span>
          </h1>
        </div>
        <div className="flex gap-1 text-black ">
          <span>
            <FaWifi />
          </span>
          <h1 className="text-md font-bold">
            Wifi & Internet
            <span className="block font-normal">
              Stay seamlessly connected with our high-speed Wifi & Internet services.
            </span>
          </h1>
        </div>
        <div className="flex gap-1 text-black">
          <span>
            <PiWavesBold />
          </span>
          <h1 className="text-md font-bold">
            Out - Door Activities
            <span className="block font-normal">
              Immerse yourself in the beauty of our surroundings with a myriad of Outdoor Activities.
            </span>
          </h1>
        </div>
        <div className="flex gap-1 text-black">
          <span>
            <PiWavesBold />
          </span>
          <h1 className="text-md font-bold">
            Cinema & Entertainment
            <span className="block font-normal ">
              Unwind in style with our Cinema & Entertainment options. Enjoy a cozy night in with a selection of the latest movies or live streaming services.
            </span>
          </h1>
        </div>

        {/* Second row */}
        
        <div className="flex gap-1 text-black">
          <span>
            <GiHotMeal />
          </span>
          <h1 className="text-md font-bold">
          Housekeeper Services
            <span className="block font-normal ">
              Experience the luxury of personalized care with our meticulous Housekeeper Services.
            </span>
          </h1>
        </div>
        <div className="flex gap-1 text-black">
          <span>
            <PiCrosshairSimpleFill />
          </span>
          <h1 className="text-md font-bold">
          Laundry Services
            <span className="block font-normal">
              Travel light and worry-free with our convenient Laundry Services. 
            </span>
          </h1>
        </div>
        <div className="flex gap-1 text-black">
          <span>
            <GiHotMeal />
          </span>
          <h1 className="text-md font-bold">
          Breakfast in Bed
            <span className="block font-normal">
              Start your day in the lap of luxury with our Breakfast in Bed service.
            </span>
          </h1>
        </div>
        <div className="flex gap-1 text-black">
          <span>
            <PiCrosshairSimpleFill />
          </span>
          <h1 className="text-md font-bold">
          Doctor on call
            <span className="block font-normal ">
              Your well-being is our priority, and with our Doctor on Call service, you can rest assured knowing that medical assistance is just a phone call away.
            </span>
          </h1>
        </div>
      </div>

      {/* Conditional rendering for "See More" button */}
      {!showAllItems && (
        <button className="text-black text-md font-bold mt-4" onClick={() => setShowAllItems(true)}>
          See More
        </button>
      )}
    </div>

        </div>
      </div>
      </div>
    </>
  );
};
export default OtherService;
