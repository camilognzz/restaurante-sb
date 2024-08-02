import React from "react"
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png"
import { BsFillPlayCircleFill } from "react-icons/bs"

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre Nosotros</p>
        <h1 className="primary-heading">
          Líderes en la región
        </h1>
        <p className="primary-text">
         Nos dedicamos a llevarte los auténticos sabores de la región sabanera.
         Nuestro compromiso es ofrecerte una experiencia culinaria única, destacando 
         platos tradicionales preparados con ingredientes frescos y locales.
        </p>
        <p className="primary-text">
         Con un ambiente acogedor y un servicio excepcional, queremos que te sientas 
         como en casa mientras disfrutas de la riqueza gastronómica de nuestra tierra. 
         ¡Ven y descubre por qué El Sabor Sabanero es el lugar perfecto para saborear la auténtica cocina sabanera!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Leer más</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Ver Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;