import React from "react";

const Header = () => {
  return (
    <header className="bg-light">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/img/Diapositiva.jpeg" // Ruta de la imagen
              className="d-block w-100"
              alt="Diapositiva 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Queremos ser su aliado estratégico</h5>
              <p>Tenemos el equipo humano más calificado para trabajar con su marca y proyectos.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/img/Diapositiva2.jpg" // Ruta de la imagen
              className="d-block w-100"
              alt="Diapositiva 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Trabajamos con profesionalismo</h5>
              <p>Nos comprometemos con los resultados y el éxito de nuestros clientes.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/img/Diapositiva3.png" // Ruta de la imagen
              className="d-block w-100"
              alt="Diapositiva 3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Innovación y excelencia</h5>
              <p>Ofrecemos soluciones adaptadas a las necesidades de su empresa.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
