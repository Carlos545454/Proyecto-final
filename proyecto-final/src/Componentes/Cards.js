import React from "react";
import "./cards.css";

function Cards() {
  return (
    <section className="cards">
      <div className="card">
        <img src="https://libreinnova.com/wp-content/uploads/tiro-primer-apreton-manos-negocio-captura-recortada-dos-personas-trajes-formales-dandose-mano-concepto-apreton-manos-negocios_1262-21017.webp" alt="Card 1" />
        <h2>Título 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#">Ver más</a>
      </div>
      <div className="card">
        <img src="https://stylemixthemes.com/wp/wp-content/uploads/sites/2/2023/07/calculator-how-to-build-700x383.jpg" alt="Card 2" />
        <h2>Título 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#">Ver más</a>
      </div>
      <div className="card">
        <img src="https://club-lectura.uexternado.edu.co/wp-content/uploads/sites/46/2021/07/unnamed-1.jpeg" alt="Card 3" />
        <h1>Contáctenos</h1>
        <p>Teléfono: 77588290</p>
      </div>
    </section>
  );
}

export default Cards;
