import Header from "../components/Header";
import logo from "../assets/logo.png";
import Slide from "../components/Slide";

const Home = () => {
  return (
    <div className="p-5 bg-black">
      <section>
        <Header />
      </section>

      <section>

        
        <div className="bg-black p-6 h-2/3">
          <div className="flex justify-center ">
            <img src={logo} alt="" className="w-15 h-15 mt-2" />
          </div>

          <div>
         
            <h1 className="text-center text-lg text-white mt-3">
              WELCOME TO Paradise
            </h1>
            <h1 className="text-4xl text-white font-semibold text-center mt-3">
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
        <div className="bg-black">
          <Slide/>
        </div>
      </section>


      <section>
        <div>
          
        </div>
      </section>
    </div>
  );
};
export default Home;
