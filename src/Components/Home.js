import React from "react";
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/home-banner-image.png"
import Navbar from "./Navbar"
import { FiArrowRight } from "react-icons/fi"


const Home = () => {
  return ( 
  <div className='home-container'>
    <Navbar/>
    <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
            <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Donde la tradición Sabanera cobra vida
          </h1>
          <p className="primary-text">
          Te invitamos a embarcarte en un viaje culinario por la vibrante región sabanera. Nuestra misión es celebrar y compartir la esencia de la cocina sabanera, fusionando tradición y modernidad en cada plato.
          </p>
          <button className="secondary-button">
            Ordena Ahora <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
    </div>
  </div>
  );
};

export default Home