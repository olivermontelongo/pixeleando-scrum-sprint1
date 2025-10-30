import React from "react";

export default function Contenido() {
  return (
    <div>
      <h3>📝 Gestión de Contenido</h3>
      <p>Visualiza los anuncios en desarrollo:</p>
      <div style={{ border: "1px solid #ccc", padding: "10px", width: "60%" }}>
        <h4>Título: Campaña de prueba</h4>
        <p>Descripción: Anuncio promocional para redes sociales.</p>
        <img
          src="https://via.placeholder.com/300x150"
          alt="placeholder"
          style={{ marginTop: "10px" }}
        />
      </div>
    </div>
  );
}
