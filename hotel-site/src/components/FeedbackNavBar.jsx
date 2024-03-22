import { NavLink } from "react-router-dom";


const FeedbackNavBar=()=>{
    return(
        <>
        <div className="flex justify-between items-center py-4 px-8  text-black ">
  <div className="flex justify-start items-start space-x-6 ">
  <NavLink
      to="/booking"
      activeClassName="text-black underline "
      className="hover:text-black hover:underline text-semibold"
    >
      XYZ Hotel
    </NavLink>
    <NavLink
      to="/booking"
      activeClassName="text-black underline"
      className="hover:text-black hover:underline"
    >
      Booking.com
    </NavLink>
    <NavLink
      to="/tripadvisor"
      activeClassName="text-black underline"
      className="hover:text-black hover:underline "
    >
      Tripadvisor
    </NavLink>
    <NavLink
      to="/google"
      activeClassName="text-black underline"
      className="hover:text-black hover:underline hidden sm:inline"
    >
      Google
    </NavLink>
    <NavLink
      to="/agoda"
      activeClassName="text-black underline"
      className="hover:text-black hover:underline hidden sm:inline"
    >
      Agoda
    </NavLink>
    <NavLink
      to="/trip.com"
      activeClassName="text-black underline"
      className="hover:text-black hover:underline hidden sm:inline"
    >
      Trip.com
    </NavLink>
  </div>
</div>

        </>
    )
}
export default FeedbackNavBar;