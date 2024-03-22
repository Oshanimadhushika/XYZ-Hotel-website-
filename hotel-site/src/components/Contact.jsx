import { IoLocationOutline } from "react-icons/io5";
import { BsTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
import {
  IoLogoWhatsapp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoSkype,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoTwitter
} from "react-icons/io";
import { MdEmail } from "react-icons/md";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="mt-5 pt-5 flex flex-col justify-center items-center h-auto bg-cover">
      <section className="px-5">

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8">
          <div className="flex items-center">
            <div className="p-3">
              <div className="flex justify-center">
                
                <img src={logo} alt="Logo" className="w-10 h-10 " />
              </div>
              <p className="text-white text-xs mt-3 block">
                Nestled in the heart of nature, our hotel's rich history unfolds
                like a tale of timeless elegance.
              </p>
            </div>
          </div>

<div>
    <p className="text-sm text-yellow-500 font-bold">Product</p>
          <ul className="text-white text-sm md:text-base mt-3">
            <li>
              <NavLink to="/" className="text-white hover:font-semibold">
              Accommodation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/discover"
                className="text-white hover:font-semibold"
              >
                Banquets
              </NavLink>
            </li>
            <li>
              <NavLink to="/tour" className="text-white hover:font-semibold">
              Amenities
              </NavLink>
            </li>
            <li>
              <NavLink to="/trip" className="text-white hover:font-semibold">
              Delivery
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" className="text-white hover:font-semibold">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-white hover:font-semibold">
              Explore Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="text-white hover:font-semibold">
              Contact Us
              </NavLink>
            </li>
          </ul>
          </div>

{/* 2nd col */}

          <div>
    <p className="text-sm text-yellow-500 font-bold">Locations</p>
          <ul className="text-white text-sm md:text-base mt-3">
            <li>
              <NavLink  className="text-white hover:font-semibold">
              Kandy
              </NavLink>
            </li>
            <li>
              <NavLink
                
                className="text-white hover:font-semibold"
              >
                Colombo
              </NavLink>
            </li>
            <li>
              <NavLink  className="text-white hover:font-semibold">
              Negambo
              </NavLink>
            </li>
            <li>
              <NavLink  className="text-white hover:font-semibold">
              Badulla
              </NavLink>
            </li>
            <li>
              <NavLink  className="text-white hover:font-semibold">
              Ella
              </NavLink>
            </li>
            <li>
              <NavLink  className="text-white hover:font-semibold">
              Sigiriya
              </NavLink>
            </li>

            
          </ul>
          </div>


{/* 3rd col */}

          <div>
    <p className="text-sm text-yellow-500 font-bold">Resources</p>
          <ul className="text-white text-sm md:text-base mt-3">
            <li>
              <NavLink  className="text-white hover:font-semibold">
              Blog
              </NavLink>
            </li>
            <li>
              <NavLink
               
                className="text-white hover:font-semibold"
              >
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white hover:font-semibold">
              Events
              </NavLink>
            </li>
            <li>
              <NavLink  className="text-white hover:font-semibold">
              Testimonial
              </NavLink>
            </li>
            <li>
              <NavLink  className="text-white hover:font-semibold">
              Help Center
              </NavLink>
            </li>
            
          </ul>
          </div>

{/* 4th col */}
          <div>
    <p className="text-sm text-yellow-500 font-bold">Social</p>
          <ul className="text-white text-sm md:text-base mt-3">
            <li>
              <NavLink to="/" className="text-white hover:font-semibold">
              Twitter
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="text-white hover:font-semibold"
              >
                LinkedIn
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-white hover:font-semibold">
              Facebook
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-white hover:font-semibold">
              YouTube
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-white hover:font-semibold">
              Instagram
              </NavLink>
            </li>
           
          </ul>
          </div>
        </div>





        <div className="flex justify-between w-full mt-6 mb-4">

        <div className="text-white text-sm text-start mt-4">
            &copy;  2024 XYZ Hotel. All rights reserved by Naveen Dissanayaka
          </div>

          <div className="flex  items-end ">
            <IoLogoFacebook className="text-white text-lg mx-2" />
            <IoLogoInstagram className="text-white text-lg mx-2" />
            <IoLogoLinkedin className="text-white text-lg mx-2" />
            <IoLogoYoutube className="text-white text-lg mx-2" />
            <IoLogoTwitter className="text-white text-lg mx-2" />
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Contact;
