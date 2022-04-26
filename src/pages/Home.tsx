import AboutMyself from "../components/AboutMyself";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";
import { useLocation } from 'react-router-dom';

// import HomeIcon from "../image/Home.svg"

function Home() {
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/'){
      document.title= "Julio Filizzola";

      // document.getElementById("favicon").href = HomeIcon;
    }
  });

  return (
    <div>
      <Header />
      <AboutMyself />
      <Footer />
    </div>
  );
}

export default Home;
