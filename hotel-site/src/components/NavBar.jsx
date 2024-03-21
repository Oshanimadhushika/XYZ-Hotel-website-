// import { useState } from 'react';
// import logo from '../assets/logo.png';
// import { RxHamburgerMenu } from 'react-icons/rx';
// import { AiOutlineClose } from 'react-icons/ai';
// import { NavLink } from 'react-router-dom';

// const NavBar = (props) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const toggleSidebar = () => setSidebarOpen((prevState) => !prevState);

// //   const activeLinkStyle = {
// //     color: 'yellow',
// //     fontWeight: 'bold',
// //   };

// //   const inactiveLinkStyle = {
// //     color: 'white',
// //   };

//   return (
//     <div className='w-full'>
//       <div className='flex mb-3  '>

//         <div className='flex justify-start items-center '>
//           <img src={logo} alt='' style={{ width: '50px', height: '50px' }} />
//         </div>

//         {/* Nav bar */}
//         <div className='flex justify-end items-end bg-red-600 p-3'>
//           <ul className='text-white text-md flex gap-4 mt-3 text-semibold'>
//             <NavLink
//               className='text-decoration-none transition-colors hover:text-yellow-500 '
//               to='/'
//               exact
           
//             >
//               Accommodation
//             </NavLink>
//             <NavLink
//               className='text-decoration-none  transition-colors hover:text-yellow-500 text-bold'
//               to='/'
//               exact
              
//             >
//               Restaurants
//             </NavLink>
//             <NavLink
//               className='text-decoration-none  transition-colors hover:text-yellow-500 text-bold'
//               to='/'
//               exact
              
//             >
//               Banquets
//             </NavLink>
//             <NavLink
//               className='text-decoration-none  transition-colors hover:text-yellow-500 text-bold'
//               to='/'
//               exact
              
//             >
//               Amenities
//             </NavLink>
//             <NavLink
//               className='text-decoration-none  transition-colors hover:text-yellow-500 text-bold'
//               to='/'
//               exact
            
//             >
//               Delivery
//             </NavLink>
//             <NavLink
//               className='text-decoration-none  transition-colors hover:text-yellow-500 text-bold'
//               to='/'
//               exact
              
//             >
//               Explore Us
//             </NavLink>
//             <NavLink
//               className='text-decoration-none  transition-colors hover:text-yellow-500 text-bold'
//               to='/'
//               exact
             
//             >
//               Contact Us
//             </NavLink>
//           </ul>
//         </div>

//         {/* <div className='lg:hidden'>
//           <div className='text-white text-3xl' onClick={toggleSidebar}>
//             {sidebarOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
//           </div>
//         </div> */}
//       </div>

//       {/* <div className={`sidebar fixed top-0 left-0 h-full w-full bg-black bg-opacity-80 ${sidebarOpen ? 'block' : 'hidden'}`}>
//         <ul className='text-white text-sm text-center pt-20'>
//           <li className='py-2'><NavLink className='text-decoration-none' to='/' onClick={toggleSidebar} exact>Accommodation</NavLink></li>
//           <li className='py-2'><NavLink className='text-decoration-none' to='/discover' onClick={toggleSidebar} exact>Restaurants</NavLink></li>
//           <li className='py-2'><NavLink className='text-decoration-none' to='/tour' onClick={toggleSidebar} exact>Banquets</NavLink></li>
//           <li className='py-2'><NavLink className='text-decoration-none' to='/trip' onClick={toggleSidebar} exact>Amenities</NavLink></li>
//           <li className='py-2'><NavLink className='text-decoration-none' to='/booking' onClick={toggleSidebar} exact>Delivery</NavLink></li>
//           <li className='py-2'><NavLink className='text-decoration-none' to='/aboutus' onClick={toggleSidebar} exact>Explore Us</NavLink></li>
//           <li className='py-2'><NavLink className='text-decoration-none' to='/contact' onClick={toggleSidebar} exact>Contact Us</NavLink></li>
//         </ul>
//       </div> */}
//     </div>
//   );
// };

// export default NavBar;



//  import { NavLink } from 'react-router-dom';
//  import logo from '../assets/logo.png';
//  import { useState } from 'react';
// import { RxHamburgerMenu } from 'react-icons/rx';
// import { AiOutlineClose } from 'react-icons/ai';


// const NavBar=()=>{
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const toggleSidebar = () => setSidebarOpen((prevState) => !prevState);



//   return(
//     <>
//     <div className="flex w-full">
//       <div className=" flex-grow">
//                  <img src={logo} alt='' style={{ width: '50px', height: '50px' }} />

//       </div>


//       <div className=" flex justify-end">
//       <ul className='text-white text-md flex gap-5 mt-3 font-semibold'>
//             <NavLink
//               className='text-decoration-none transition-colors hover:text-yellow-500 '
//               to='/'
//               exact
           
//             >
//               Accommodation
//             </NavLink>
//             <NavLink
//               className='text-decoration-none  transition-colors hover:text-yellow-500 text-bold'
//               to='/'
//               exact
              
//             >
//               Restaurants
//             </NavLink>
//             <NavLink
//               className='text-decoration-none  transition-colors hover:text-yellow-500 text-bold'
//               to='/'
//               exact
              
//             >
//               Banquets
//             </NavLink>
//             <NavLink
//               className='text-decoration-none  transition-colors hover:text-yellow-500 text-bold'
//               to='/'
//               exact
              
//             >
//               Amenities
//             </NavLink>
//             <NavLink
//               className='text-decoration-none  transition-colors hover:text-yellow-500 text-bold'
//               to='/'
//               exact
            
//             >
//               Delivery
//             </NavLink>
//             <NavLink
//               className='text-decoration-none  transition-colors hover:text-yellow-500 text-bold'
//               to='/'
//               exact
              
//             >
//               Explore Us
//             </NavLink>
//             <NavLink
//               className='text-decoration-none  transition-colors hover:text-yellow-500 text-bold'
//               to='/'
//               exact
             
//             >
//               Contact Us
//             </NavLink>
//           </ul>

//       <div>
//          <div className='lg:hidden'>
//           <div className='text-white text-3xl' onClick={toggleSidebar}>
//             {sidebarOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
//           </div>
//          </div></div>


         
//       </div>

    

//          <div className={`sidebar fixed top-0 left-0 h-full w-full bg-black bg-opacity-80 ${sidebarOpen ? 'block' : 'hidden'}`}>
//          <ul className='text-white text-sm text-center pt-20'>
//            <li className='py-2'><NavLink className='text-decoration-none' to='/' onClick={toggleSidebar} exact>Accommodation</NavLink></li>
//           <li className='py-2'><NavLink className='text-decoration-none' to='/discover' onClick={toggleSidebar} exact>Restaurants</NavLink></li>
//           <li className='py-2'><NavLink className='text-decoration-none' to='/tour' onClick={toggleSidebar} exact>Banquets</NavLink></li>
//            <li className='py-2'><NavLink className='text-decoration-none' to='/trip' onClick={toggleSidebar} exact>Amenities</NavLink></li>
//            <li className='py-2'><NavLink className='text-decoration-none' to='/booking' onClick={toggleSidebar} exact>Delivery</NavLink></li>
//            <li className='py-2'><NavLink className='text-decoration-none' to='/aboutus' onClick={toggleSidebar} exact>Explore Us</NavLink></li>
//           <li className='py-2'><NavLink className='text-decoration-none' to='/contact' onClick={toggleSidebar} exact>Contact Us</NavLink></li>
//          </ul>
//       </div>

      
//     </div>
//     </>
//   )
// }
// export default NavBar;





import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen((prevState) => !prevState);

  return (
    <div className="flex w-full">
      <div className="flex-grow">
        <img src={logo} alt='' className="w-12 h-12" />
      </div>

      <div className="flex justify-end ">
        <ul className='text-white text-md flex gap-5 mt-3 font-semibold md:hidden lg:flex xl:flex'>
          <NavLink
            className='text-decoration-none transition-colors hover:text-yellow-500'
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
        </ul>

        <div className='lg:hidden'>
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



