import Background from "../assets/background.png";
import logoFish from "../assets/logoFish.png";
import Pool from "../assets/pool.png";
import Gym from "../assets/gym.png";
import Spa from "../assets/spa.png";
import "../style/Style.css";

const Service = () => {
  return (
    <>
    <div className="mb-5 " style={{height:"900px"}}>
      <div className=" service-background " style={{height:"550px"}}>
        
        <div className="text-center text-white  mb-7 lg:mb-1 md:mb-1">
          <div className="flex justify-center">
            <img src={logoFish} alt="" className=" w-12 h-12" />
          </div>
          <h1 className="text-md font-sana mt-4 ">Unforgettable Experience</h1>
          <h1 className="text-4xl text-white font-serif mt-4 ">
            One of the World’s Most
            <span className="block text-4xl font-serif mt-3 text-white ">
              Desirable Locations
            </span>
          </h1>
          <p className="text-sm text-white  mt-4 ">
            Experience opulence in harmony with nature. Our eco-friendly haven
            redefines luxury,
            <span className="block text-sm  mt-2 text-white ">
              {" "}
              offering a sustainable escape where scenic vistas and indulgence
              seamlessly intertwine.
            </span>
          </p>
        </div>

        {/* other 3 image */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 lg:gap-4 md:gap-4 gap-2  mt-8 lg:mt-3 md:mt-3 mb-3">

          <div className="lg:w-2/3 lg:h-2/3 md:w-2/3 md:h-2/3 w-2/3 h-2/3 mx-auto my-auto ">
            <img src={Pool} alt="pool" className="" />
            <div className="mt-7 ">
              <h1 className="text-center text-black font-serif text-xl ">
              Swimming Pool
              </h1>
              <p className="text-center text-black font-sana text-md mt-2 ">
                Dive into a world of tranquility and refreshment at our
                sparkling swimming pool
              </p>
            </div>
          </div>
          <div className="lg:w-2/3 lg:h-2/3 md:w-2/3 md:h-2/3 w-2/3 h-2/3 mx-auto my-auto  " style={{marginTop:"200px"}}>
            <img src={Spa} alt="pool" className="" />
            <div className="mt-7 ">
              <h1 className="text-center text-black font-serif text-xl">
                Spa & Wellness
              </h1>
              <p className="text-center text-black font-sana text-md mt-2">
                Indulge in the epitome of relaxation at our exclusive Spa &
                Wellness center.{" "}
              </p>
            </div>
          </div>
          <div className="lg:w-2/3 lg:h-2/3 md:w-2/3 md:h-2/3 w-2/3 h-2/3 mx-auto my-auto">
            <img src={Gym} alt="pool" className="" />
            <div className="mt-7 ">
              <h1 className="text-center text-black font-serif text-xl">
                Fitness Center
              </h1>
              <p className="text-center text-black font-sana text-md mt-2">
                Elevate your fitness journey in our state-of-the-art Fitness
                Center, where cutting-edge equipment meets a motivating
                atmosphere.{" "}
              </p>
            </div>
          </div>{" "}
        </div>
        </div>
      </div>
    </>
  );
};
export default Service;
