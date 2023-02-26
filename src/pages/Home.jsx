import React from "react";
import Header from "../components/Header"
import Banner from "../components/Banner";
import bannerHome from "../assets/images/Banner.png";
import Gallery from "../components/Gallery"

const Home = () => {
  return (
    <div className="Home">
          <Header />
          <Banner image={bannerHome} texte="Chez vous, partout et ailleurs"/>
          <Gallery />
    </div>
  )
}

export default Home;