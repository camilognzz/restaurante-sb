import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonios</p>
        <h1 className="primary-heading">Lo Que Dicen Ellos</h1>
        <p className="primary-text">
        Escucha directamente a nuestros clientes satisfechos y descubre por qué les encanta comer con nosotros. Nuestros comensales comparten sus experiencias y destacan lo que hace especial a nuestro restaurante. ¡Explora sus comentarios y descubre cómo hemos hecho que sus visitas sean inolvidables!
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" width={130}/>
        <p>
        "La comida en este restaurante es simplemente excepcional. Cada plato está lleno de sabor auténtico y la atención al cliente es inmejorable. El ambiente es acogedor y te hace sentir como en casa. Definitivamente volveré."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Juan Camilo López</h2>
      </div>
    </div>
  );
};

export default Testimonial;