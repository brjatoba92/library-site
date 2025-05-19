import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import BestBooks from "./components/BestBooks/BestBooks";
import Banner from "./components/Banner/Banner";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import AllBooks from "./components/AllBooks/AllBooks";
import Testemonial from "./components/Testemonial/Testemonial";
import Footer from "./components/Footer/Footer";

//AOS import
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    AOS.init(
      {
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      },
    );
    AOS.refresh();
  },[]);

  return <>
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <BestBooks />
      <Banner />
      <AppStoreBanner />
      <AllBooks />
      <Testemonial />
      <Footer />
    </div>
  </>;
};

export default App;