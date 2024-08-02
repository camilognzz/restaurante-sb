import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Inicio</span>
          <span>Sobre nosotros</span>
          <span>Testimonios</span>
          <span>Contacto</span>
          <span>Trabaja con nosotros</span>
        </div>
        <div className="footer-section-columns">
          <span>33331337070</span>
          <span>ssabanero@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Proyecto informativo</span>
          <span>No corresponde a ningún restaurante</span>
          <span>en específico.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;