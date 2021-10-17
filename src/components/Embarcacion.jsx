import React, { Fragment } from "react";

import imagenes from  "../images/208.jpg";

const Embarcacion = ({
  embarcacion,
  embarcaciones,
  carroDeCompras,
  setCarro,
  setEmbarcacion,
  cantidadItems,
  setCantidadItems
}) => {
  const { id, marca, modelo, precio, nombreImagen, descripcion } = embarcacion;
  const url = "../images/";
  function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === obj) {
        return true;
      }
    }

    return false;
  }

  const registrarCompra = (id) => {
    const embarcacion = embarcaciones.filter(
      (embarcacion) => embarcacion.id === id
    )[0];

    if (!containsObject(embarcacion, carroDeCompras)) {
      setCarro([...carroDeCompras, embarcacion]);
      setCantidadItems(cantidadItems+1);
    }
  };

  const deshacerCompra = (id) => {
    const arrayActualizado = carroDeCompras.filter(
      (embarcacion) => embarcacion.id !== id
    );

    setCarro(arrayActualizado);
    setCantidadItems(cantidadItems - 1);
  };

  return (
    <Fragment>
      <br />
      <div className="card">
        <img
          className="card-img-top"
          src={url + nombreImagen + ".jpg"}
          alt="Card cap"
        ></img>
        <div className="card-body">
          <h5 className="card-title">Modelo : {modelo}</h5>

          {
            embarcaciones ? 
              <p className="card-text">{descripcion}</p>
              :
              null
          }

          <p className="card-text">
            <strong>Precio </strong>${precio}
          </p>
          {embarcaciones ? (
            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={() => registrarCompra(id)}
            >
              Comprar
            </button>
          ) : (
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => deshacerCompra(id)}
            >
              Deshacer
            </button>
          )}
        </div>
      </div>

      <br />
    </Fragment>
  );
};

export default Embarcacion;
