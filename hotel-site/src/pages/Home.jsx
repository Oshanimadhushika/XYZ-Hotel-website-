import Header from "../components/Header";
import logo from "../assets/logo.png";
import Slide from "../components/Slide";
import Accommodation from "../components/Accommodation";
import Aco1 from "../assets/aco1.png";
import Aco2 from "../assets/aco2.png";
import Aco3 from "../assets/aco3.png";
import Aco4 from "../assets/aco4.png";
import AliceCarousel from 'react-alice-carousel';
import { Row, Col } from 'reactstrap';
import Service from "../components/Service";
import OtherService from "../components/OtherService";




const Home = () => {

  const responsive = {
    0: { items: 1 },
    768: { items: 2},
    1024: { items: 4, itemsFit: 'contain' },
  };

  const accommodations = [
    {
      url: Aco1,
      title: "Double Deluxe",
      desc: "Indulge in spacious comfort with our Double Deluxe rooms. Perfect for couples, these elegantly appointed spaces offer a tranquil retreat with modern amenities and a touch of luxury",
      price: "LKR 35,800",
    },

    {
        url: Aco2,
        title: "Family Deluxe",
        desc: "Create lasting memories with our Family Deluxe rooms. Designed for comfort and convenience, these accommodations provide a harmonious space for your family to unwind and connect, ensuring a memorable stay for all.",
        price: "LKR 55,100",
      },

      {
        url: Aco3,
        title: "Premier Double",
        desc: "Enjoy exclusive amenities, stunning views, and a heightened sense of sophistication for a truly premier stay.",
        price: "LKR 81,300",
      },

      {
        url: Aco4,
        title: "President Suite",
        desc: "Experience the magic of the ocean from the comfort of your room, where luxury meets the mesmerizing beauty of marine life.",
        price: "LKR 345,500",
      },
  ];





  return (
    <div className=" ">
      <section >
        <Header />
      </section>

      <section className=" bg-black">

        
        <div className="bg-black p-6 h-2/3">
          <div className="flex justify-center ">
            <img src={logo} alt="" className="w-15 h-15 mt-2" />
          </div>

          <div>
         
            <h1 className="text-center text-lg text-white mt-3">
              WELCOME TO Paradise
            </h1>
            <h1 className="text-4xl text-white font-semibold text-center mt-3 font-serif">
              In the Heart of the Natural
              <span className="block mt-2">Outstanding Views</span>{" "}
            </h1>
            <p className="text-sm text-gray-300 text-center mt-6">
              Nestled in the heart of nature, our hotel's rich history unfolds
              like a tale of timeless elegance.
              <span className="block mt-2">
              Established in 1948,our journey began with a vision to create a sanctuary where
                luxury harmonizes
              </span>
              <span className="block mt-2">with the surrounding beauty.</span>
            </p>
          </div>

          <div className="text-center mt-4 ">
            <button className="hover:bg-white hover:text-black border-2 border-white text-white p-3">Learn More About Us</button>
            </div>
        </div>

{/* silde image */}
        <div className="bg-black mt-3">
          <Slide/>
        </div>
      </section>


      <section className="p-5 bg-black">
        <div className="">
          <h1 className="text-4xl text-white font-serif ">Our Accommodations</h1>
          <p className="text-white text-md mt-3">Where luxury embraces nature. Immerse yourself in our exclusive underwater rooms, where marine wonders meet modern comfort. Experience the enchantment of drifting off to sleep surrounded by the mesmerizing dance of marine life. Alternatively, find solace in our nature-inspired accommodations, hidden within lush landscapes, offering a serene escape from the everyday.</p>
        </div>



        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-3 mt-5">
          
        {accommodations.map((accommodation, index) => (
        <Accommodation
          key={index}
          url={accommodation.url}
          title={accommodation.title}
          desc={accommodation.desc}
          price={accommodation.price}
        />
      ))}
        </div>

{/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-3 mt-3  lg:block xl:block">
  <div className="hidden lg:block xl:block ">
    {accommodations.map((accommodation, index) => (
      <Accommodation
        key={index}
        url={accommodation.url}
        title={accommodation.title}
        desc={accommodation.desc}
        price={accommodation.price}
      />
    ))}
  </div>
  </div> */}

{/* 
  <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3 mt-3 ">
    <AliceCarousel
      mouseTracking
      responsive={responsive}
      autoPlay={false}
      buttonsDisabled={true}
      disableAutoPlayOnAction={true}
     
    >
      {accommodations.map((accommodation, index) => (
        <Accommodation
          key={index}
          url={accommodation.url}
          title={accommodation.title}
          desc={accommodation.desc}
          price={accommodation.price}
        />
      ))}
    </AliceCarousel>
  </div> */}


{/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-3 mt-3">
      <div className="hidden lg:block xl:block">
        {accommodations.map((accommodation, index) => (
          <Accommodation
            key={index}
            url={accommodation.url}
            title={accommodation.title}
            desc={accommodation.desc}
            price={accommodation.price}
          />
        ))}
      </div>

      <div className="lg:hidden xl:hidden">
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          autoPlay={false}
          buttonsDisabled={true}
          disableAutoPlayOnAction={true}
        >
          {accommodations.map((accommodation, index) => (
            <Accommodation
              key={index}
              url={accommodation.url}
              title={accommodation.title}
              desc={accommodation.desc}
              price={accommodation.price}
            />
          ))}
        </AliceCarousel>
      </div>
    </div> */}



      </section>

      <section className="">
       <div className="">
         <Service/>
       </div>
      </section>

      <section className="bg-white mt-8">
         <div>
          <OtherService/>
         </div>
</section>

    </div>
  );
};
export default Home;
