

import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from 'reactstrap';

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen((prevState) => !prevState);

  return (
    <div className="flex w-full z-10">
      <div className="flex-grow sm:justify-center md:justify-center">
        <img src={logo} alt='' className="w-12 h-12" />
      </div>

      <div className="flex justify-end  ">
        <ul className='text-white text-md  gap-5 mt-3 font-semibold hidden md:hidden lg:flex xl:flex'>
          <NavLink
            className='text-decoration-none transition-colors hover:text-yellow-500 font-bold'
            to='/'
            exact
          >
            Accommodation
          </NavLink>
          <NavLink
            className='text-decoration-none transition-colors hover:text-yellow-500 font-bold'
            to='/'
            exact
          >
            Restaurants
          </NavLink>
          <NavLink
            className='text-decoration-none transition-colors hover:text-yellow-500 font-bold'
            to='/'
            exact
          >
            Banquets
          </NavLink>
          <NavLink
            className='text-decoration-none transition-colors hover:text-yellow-500 font-bold'
            to='/'
            exact
          >
            Amenities
          </NavLink>
          <NavLink
            className='text-decoration-none transition-colors hover:text-yellow-500 font-bold'
            to='/'
            exact
          >
            Delivery
          </NavLink>
          <NavLink
            className='text-decoration-none transition-colors hover:text-yellow-500 font-bold'
            to='/'
            exact
          >
            Explore Us
          </NavLink>
          <NavLink
            className='text-decoration-none transition-colors hover:text-yellow-500 font-bold'
            to='/'
            exact
          >
            Contact Us
          </NavLink>

          <Button
            className='text-decoration-none border-2 border-white p-3 text white transition-colors hover:bg-white hover:text-black font-bold'
            to='/'
            exact
          >
            Book Your Stay
          </Button>
        </ul>

        <div className='lg:hidden '>
          <div className='text-white text-3xl' onClick={toggleSidebar}>
            {sidebarOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </div>
        </div>
      </div>

      <div className={`sidebar fixed top-0 left-0 h-full w-1/2 bg-black bg-opacity-80 ${sidebarOpen ? 'block' : 'hidden'}`}>
        <ul className='text-white text-sm text-center pt-20 gap-4'>
          <li className='py-2'><NavLink className='text-decoration-none transition-colors hover:text-yellow-500' to='/' onClick={toggleSidebar} exact>Accommodation</NavLink></li>
          <li className='py-2'><NavLink className='text-decoration-none transition-colors hover:text-yellow-500' to='/discover' onClick={toggleSidebar} exact>Restaurants</NavLink></li>
          <li className='py-2'><NavLink className='text-decoration-none transition-colors hover:text-yellow-500' to='/tour' onClick={toggleSidebar} exact>Banquets</NavLink></li>
          <li className='py-2'><NavLink className='text-decoration-none transition-colors hover:text-yellow-500' to='/trip' onClick={toggleSidebar} exact>Amenities</NavLink></li>
          <li className='py-2'><NavLink className='text-decoration-none transition-colors  hover:text-yellow-500' to='/booking' onClick={toggleSidebar} exact>Delivery</NavLink></li>
          <li className='py-2'><NavLink className='text-decoration-none transition-colors hover:text-yellow-500' to='/aboutus' onClick={toggleSidebar} exact>Explore Us</NavLink></li>
          <li className='py-2'><NavLink className='text-decoration-none transition-colors hover:text-yellow-500' to='/contact' onClick={toggleSidebar} exact>Contact Us</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;



