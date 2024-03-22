


import { Row, Col } from "reactstrap";
import { IoPersonSharp } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { PiWavesBold } from "react-icons/pi";
import { GiHotMeal } from "react-icons/gi";
import { PiCrosshairSimpleFill } from "react-icons/pi";
import Bridge from "../assets/bridge.png";
import { useState,useEffect } from "react";
import { FaCarAlt,FaSwimmingPool,FaHandHoldingHeart } from "react-icons/fa";
import { FaComputer,FaUserDoctor } from "react-icons/fa6";
import { GiWashingMachine } from "react-icons/gi";
import { IoMdArrowDropdown,IoMdArrowDropup } from "react-icons/io";
import { MdOutlineArrowDropUp } from "react-icons/md";

const OtherService = () => {
    const [showAllItems, setShowAllItems] = useState(false);
    useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth > 767) {
              setShowAllItems(true);
          } else {
              setShowAllItems(false);
          }
      };

      window.addEventListener("resize", handleResize);

      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);

    return (
      
        <div className="pb-5 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-3 mt-5">
            <div className="hidden md:hidden lg:block mx-auto">
                <img src={Bridge} alt="bridge" className="w-full h-[600px]" />
            </div>

            <div className="w-full">
                        <h1 className="text-black lg:text-4xl md:text-4xl xl:text-4xl text-2xl font-serif mb-4 md:text-center lg:text-start ">All the Essentials for Cozy and</h1>
                    <h1 className="text-black lg:text-4xl md:text-4xl xl:text-4xl text-2xl font-serif mb-4 md:text-center lg:text-start">Comfortable Stay</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-3 mt-5 p-2">
                    {/* First four items */}
                    <div className="flex gap-1 text-black">
                        <span className="text-yellow-600 text-xl p-2"><FaCarAlt /></span>
                        <div>
                            <h1 className="text-md font-bold">Airport Pick-up Service</h1>
                            <span className="block font-normal">Seamlessly transition from your journey to pure relaxation with our Airport Pick-up Service</span>
                        </div>
                    </div>
                    <div className="flex gap-1 text-black">
                        <span className="text-yellow-600 text-xl p-2"><FaWifi /></span>
                        <div>
                            <h1 className="text-md font-bold">Wifi & Internet</h1>
                            <span className="block font-normal">Stay seamlessly connected with our high-speed Wifi & Internet services.</span>
                        </div>
                    </div>
                    <div className="flex gap-1 text-black">
                        <span className="text-yellow-600 text-xl p-2"><FaSwimmingPool /></span>
                        <div>
                            <h1 className="text-md font-bold">Outdoor Activities</h1>
                            <span className="block font-normal">Immerse yourself in the beauty of our surroundings with a myriad of Outdoor Activities.</span>
                        </div>
                    </div>
                    <div className="flex gap-1 text-black">
                        <span className="text-yellow-600 text-xl p-2"><FaComputer /></span>
                        <div>
                            <h1 className="text-md font-bold">Cinema & Entertainment</h1>
                            <span className="block font-normal">Unwind in style with our Cinema & Entertainment options. Enjoy a cozy night in with a selection of the latest movies or live streaming services.</span>
                        </div>
                    </div>

                    {/* Last four items  */}
                    {(showAllItems || window.innerWidth > 768) && (
                        <>
                            <div className="flex gap-1 text-black">
                                <span className="text-yellow-600 text-xl p-2"><FaHandHoldingHeart /></span>
                                <div>
                                    <h1 className="text-md font-bold">Housekeeper Services</h1>
                                    <span className="block font-normal">Experience the luxury of personalized care with our meticulous Housekeeper Services.</span>
                                </div>
                            </div>
                            <div className="flex gap-1 text-black">
                                <span className="text-yellow-600 text-xl p-2"><GiWashingMachine /></span>
                                <div>
                                    <h1 className="text-md font-bold">Laundry Services</h1>
                                    <span className="block font-normal">Travel light and worry-free with our convenient Laundry Services.</span>
                                </div>
                            </div>
                            <div className="flex gap-1 text-black">
                                <span className="text-yellow-600 text-xl p-2"><GiHotMeal /></span>
                                <div>
                                    <h1 className="text-md font-bold">Breakfast in Bed</h1>
                                    <span className="block font-normal">Start your day in the lap of luxury with our Breakfast in Bed service.</span>
                                </div>
                            </div>
                            <div className="flex gap-1 text-black">
                                <span className="text-yellow-600 text-xl p-2"><FaUserDoctor /></span>
                                <div>
                                    <h1 className="text-md font-bold">Doctor on Call</h1>
                                    <span className="block font-normal">Your well-being is our priority, and with our Doctor on Call service, you can rest assured knowing that medical assistance is just a phone call away.</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {showAllItems ? (
                        <button className="text-black text-md bg-yellow-600 rounded-lg font-bold mt-4 p-3 flex justify-center mx-auto sm:block lg:hidden md:hidden" onClick={() => setShowAllItems(false)}>
                            See Less <span className="pl-2 pt-1"><IoMdArrowDropup /></span>
                        </button>
                    ) : (
                        <button className="text-black text-md bg-yellow-600 rounded-lg font-bold mt-4 p-3 flex justify-center mx-auto sm:block lg:hidden md:hidden" onClick={() => setShowAllItems(true)}>
                            See More <span className="pl-2 pt-1"><IoMdArrowDropdown /></span>
                        </button>
                    )}
            </div>
        </div>
    </div>
    );
};

export default OtherService;
