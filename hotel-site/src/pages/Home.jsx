import Header from "../components/Header";
import logo from "../assets/logo.png";
import Slide from "../components/Slide";
import Accommodation from "../components/Accommodation";
import Aco1 from "../assets/aco1.png";
import Aco2 from "../assets/aco2.png";
import Aco3 from "../assets/aco3.png";
import Aco4 from "../assets/aco4.png";
import AliceCarousel from "react-alice-carousel";
import { Row, Col } from "reactstrap";
import Service from "../components/Service";
import OtherService from "../components/OtherService";
import Events from "../components/Events";

import Event1 from "../assets/event1.png";
import Event2 from "../assets/event2.png";
import Event3 from "../assets/event3.png";
import Event4 from "../assets/event4.png";
import Event5 from "../assets/event5.png";
import Contact from "../components/Contact";

import Pro1 from "../assets/pro1.png";
import Pro2 from "../assets/pro2.png";
import Pro3 from "../assets/pro3.png";
import Feedback from "../components/Feedback";
import FeedbackNavBar from "../components/FeedbackNavBar";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useEffect } from "react";

const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const [maxItems, setMaxItems] = useState(1);
  const maxItemsSm = 3;
  const maxItemsMd = 4;
  const maxItemsLg = 6;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setMaxItems(maxItemsSm);
      } else if (window.innerWidth == 768 || window.innerWidth > 767 ) {
        setMaxItems(maxItemsMd);
      } else {
        setMaxItems(maxItemsLg);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const events = [
    {
      url: Event1,
      date: "March 15, 2024",

      title: "Sunset Serenade by the Pool",
      desc: "Join us for an enchanting evening by the poolside as the sun sets. Enjoy live acoustic music, refreshing cocktails, and a relaxed atmosphere. A perfect way to unwind and embrace the beauty of twilight",
    },

    {
      url: Event2,
      date: "April 5-8, 2024",
      title: "Culinary Delights Festival",
      desc: " Indulge your taste buds in a gastronomic journey with our Culinary Delights Festival. Experience a diverse range of international cuisines crafted by our talented chefs. Special tasting menus and culinary workshops will be available throughout the event",
    },

    {
      url: Event3,
      date: "May 18-20, 2024",
      title: "Wellness Retreat Weekend",
      desc: " Treat yourself to a rejuvenating weekend with our Wellness Retreat. Participate in yoga sessions, meditation workshops, and spa treatments to restore your mind and body. Embrace tranquility in the serene surroundings of our hotel",
    },

    {
      url: Event4,
      date: "June 10, 2024",

      title: "Artisan Craft Fair",
      desc: "  Explore a curated collection of local crafts and handmade goods at our Artisanal Craft Fair. Support local artisans and find unique souvenirs to take home. A vibrant showcase of creativity and craftsmanship",
    },
    {
      url: Event5,
      date: "July 7, 2024",

      title: "Movie Under the Stars",
      desc: " Experience the magic of cinema outdoors! Join us for Movie Under the Stars, featuring classic films and family favorites. Complimentary popcorn and blankets provided for a cozy evening under the open sky",
    },
  ];

  const feedback = [
    {
      url: Pro1,
      name: "Sarah Johnson",
      country: " United States",
      feedback: "Very Good",
      rate: 4,
      desc: "I recently stayed at this hotel during a business trip, and I was thoroughly impressed! The staff was incredibly attentive, the rooms were spotless, and the amenities were top-notch. The location was convenient, making it easy for me to explore the city during my downtime. I highly recommend this hotel to anyone visiting the area ",
    },

    {
      url: Pro2,
      name: "Carlos Rodriguez",
      country: " Spain",
      feedback: "Fantastic ",
      rate: 5,
      desc: " My wife and I had a wonderful stay at this hotel. The customer service was exceptional, the room was spacious and comfortable, and the food in the restaurant was delicious. The location was also perfect, close to many attractions. We will definitely be back",
    },

    {
      url: Pro3,
      name: "Emily Chang",
      country: "Canada",
      feedback: "Very Good",
      rate: 4,
      desc: "I chose this hotel for a weekend getaway, and it exceeded my expectations. The room had a breathtaking view, and the staff went above and beyond to make our stay special. The spa services were a great addition, providing the relaxation we needed. A truly memorable experience ",
    },

    {
      url: Pro1,
      name: "Ahmed Al-Farsi",
      country: " Oman",
      feedback: "Very Good",
      rate: 3,
      desc: " I stayed at this hotel for a business trip, and the experience was fantastic! The rooms were very clean, and the customer service was excellent. The location is convenient and close to major facilities. I will definitely come back",
    },

    {
      url: Pro3,
      name: "Lucia Martinez",
      country: " Argentina",
      feedback: "Fantastic ",
      rate: 5,
      desc: "Our stay at this hotel was amazing. The decor of the place is elegant and cozy, and the staff is friendly and helpful. We especially enjoyed the variety of options in the breakfast buffet. We will definitely be back on our next trip ",
    },

    {
      url: Pro2,
      name: "Raj Patel",
      country: " India",
      feedback: "Fantastic ",
      rate: 5,
      desc: "I had a fantastic stay at this hotel during my vacation. The cultural influence in the decor and the attentive service made me feel right at home. The proximity to local attractions made exploring the city convenient. I highly recommend this hotel for anyone looking for a memorable and comfortable stay ",
    },
  ];

  return (
    <div className=" ">
      <section>
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
                Established in 1948,our journey began with a vision to create a
                sanctuary where luxury harmonizes
              </span>
              <span className="block mt-2">with the surrounding beauty.</span>
            </p>
          </div>

          <div className="text-center mt-4 ">
            <button className="hover:bg-white hover:text-black border-2 border-white text-white p-3">
              Learn More About Us
            </button>
          </div>
        </div>

        {/* silde image */}
        <div className="bg-black mt-3">
          <Slide />
        </div>
      </section>

      <section className="p-5 bg-black">
        <div className="">
          <h1 className="text-4xl text-white font-serif ">
            Our Accommodations
          </h1>
          <p className="text-white text-md mt-3">
            Where luxury embraces nature. Immerse yourself in our exclusive
            underwater rooms, where marine wonders meet modern comfort.
            Experience the enchantment of drifting off to sleep surrounded by
            the mesmerizing dance of marine life. Alternatively, find solace in
            our nature-inspired accommodations, hidden within lush landscapes,
            offering a serene escape from the everyday.
          </p>
        </div>

        <div className="p-3 mt-5 gap-2">
          <AliceCarousel
            items={accommodations.map((accommodation, index) => (
              <div key={index} className="flex flex-col h-full  p-3">
                <Accommodation
                  url={accommodation.url}
                  title={accommodation.title}
                  desc={accommodation.desc}
                  price={accommodation.price}
                />
              </div>
            ))}
            responsive={{
              0: { items: 1 },
              768: { items: 2 },
              1024: { items: 3 },
            }}
            dotsDisabled={true}
            buttonsDisabled={true}
            autoPlay={false}
            autoPlayInterval={3000}
          />
        </div>
      </section>

      <section className="">
        <div className="">
          <Service />
        </div>
      </section>

      <section className="bg-white mt-8">
        <div>
          <OtherService />
        </div>
      </section>

      <section>
        <div className="bg-amber-50 pt-5">
          <div className="ml-4 mt-5">
            <h1 className="text-4xl text-black font-serif ml-4 ">
              Events & Promotions
            </h1>
            <p className="text-black text-md mt-3 ml-4">
              Keep an eye on our Events & Promotions section to stay informed
              about upcoming gatherings, limited-time offers, and exclusive
              packages. Whether you're a frequent guest or a first-time visitor,
              we believe
              <span>
                in making every stay with us an experience to remember.
              </span>{" "}
            </p>
          </div>

          <div className="p-5 mt-5">
            <AliceCarousel
              items={events.map((event, index) => (
                <div key={index} className="flex flex-col h-full gap-3 p-5">
                  <Events
                    url={event.url}
                    date={event.date}
                    title={event.title}
                    desc={event.desc}
                  />
                </div>
              ))}
              responsive={{
                0: { items: 1 },
                768: { items: 3 },
                1024: { items: 4 },
              }}
              dotsDisabled={true}
              buttonsDisabled={true}
              autoPlay={false}
              autoPlayInterval={3000}
            />
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="ml-4 mt-5">
            <h1 className="text-4xl text-black font-serif ml-4 ">
              What People Say
            </h1>
            <p className="text-black text-md mt-3 ml-4">
              Embark on a journey through the genuine experiences of our
              cherished guests with our Testimonials section. Here, we proudly
              showcase the heartfelt stories and glowing feedback
              <span>
                from those who have embraced the exceptional hospitality at XYZ
                Hotel. Immerse yourself in the narratives of delight, and let
                the voices of our guests guide you to a world of unparalleled
                comfort and satisfaction.
              </span>{" "}
            </p>
          </div>

          <div className="mt-3">
            <div>
              <FeedbackNavBar />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 p-7">
            {feedback
              .slice(0, showAll ? feedback.length : maxItems)
              .map((feed, index) => (
                <Feedback
                  key={index}
                  url={feed.url}
                  name={feed.name}
                  country={feed.country}
                  feedback={feed.feedback}
                  desc={feed.desc}
                  rate={feed.rate}
                />
              ))}
          </div>

          <div className="flex justify-end">
            <h1
              className="text-sm text-yellow-600 flex"
              onClick={toggleShowAll}
            >
              View All Reviews{" "}
              <span className="p-2">
                <FaArrowRightLong />
              </span>
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-black">
          <Contact />
        </div>
      </section>
    </div>
  );
};
export default Home;
