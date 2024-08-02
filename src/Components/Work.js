import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMeals from "../Assets/delivery-image.png"

const Work = () => {
    const workInfoData = [
      {
        image: PickMeals,
        title: "Variedad de Platos",
        text: "Te ofrecemos una variedad de platos tradicionales que capturan la esencia de la cocina sabanera.",
      },
      {
        image: ChooseMeals,
        title: "Recomendaciones",
        text: "Nuestro chef ha seleccionado cuidadosamente una lista de platos recomendados que capturan la esencia de la cocina sabanera.",
      },
      {
        image: DeliveryMeals,
        title: "Servicio a Domicilio",
        text: "Queremos que saborees nuestros deliciosos platos sin tener que salir de casa. Ofrecemos un eficiente servicio a domicilio para que puedas disfrutar de nuestras especialidades",
      },
    ];
    return (
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <p className="primary-subheading">Experimenta</p>
          <h1 className="primary-heading">Explora y Disfruta</h1>
          <p className="primary-text">
          Desde una variedad de platos tradicionales que reflejan la rica herencia culinaria de la región, hasta recomendaciones especiales del chef para una experiencia gastronómica inolvidable. Y si prefieres disfrutar de nuestros sabores en casa, nuestro servicio a domicilio te lleva la autenticidad de la cocina sabanera directamente a tu puerta. ¡Haz tu elección y deja que la tradición y el sabor te sorprendan!
          </p>
        </div>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Work;