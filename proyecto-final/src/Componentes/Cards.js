import React from "react";

const Cards = () => {
  return (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="/img/Card1.jpg" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">Título 1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea.
              </p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="/img/Card2.jpg" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">Título 2</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea.
              </p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/img/Card3.webp" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">Contáctenos</h5>
              <p className="card-text">Teléfono: 77588290</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
